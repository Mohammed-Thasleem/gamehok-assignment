/**
 * factories/index.ts
 *
 * EXTENSIBILITY STRATEGY
 * ──────────────────────
 * Every factory function accepts a partial override object (Partial<T>).
 * This means:
 *   1. Tests only declare what they care about.
 *   2. When the API shape changes, you update ONE default here — all tests
 *      that don't override that field keep working automatically.
 *   3. Edge-case tests (empty arrays, null values, long strings) are built
 *      by composing factories, not by duplicating entire objects.
 *
 * ADDING A NEW API FIELD
 * ──────────────────────
 *   1. Add it to the relevant type in src/types/tournament.ts.
 *   2. Add a sensible default in the matching factory below.
 *   3. Done — all existing tests continue to pass.
 *
 * USAGE
 * ─────
 *   import { makeTournament, makeLobby } from '@/tests/factories';
 *   const t = makeTournament({ status: 'Completed', prizePool: 0 });
 */

import type {
  Tournament,
  TournamentRound,
  TournamentPrize,
  TournamentTeam,
  TournamentLobby,
  TournamentLeaderboard,
  TournamentParticipant,
  Battle,
  Game,
  Highlight,
  User,
} from "@/types/tournament";

// ─── Primitive builders ──────────────────────────────────────────────────────

let _seq = 0;
/** Auto-incrementing sequence so generated IDs are always unique per test run */
const seq = () => String(++_seq);

// ─── Sub-entity factories ────────────────────────────────────────────────────

export const makeRound = (overrides: Partial<TournamentRound> = {}): TournamentRound => ({
  name: "Qualifiers",
  round: `Round ${seq()}`,
  format: "Single Elimination",
  advance: "Top 4 to next round",
  date: "3rd Aug, 10:00 pm",
  ...overrides,
});

export const makePrize = (overrides: Partial<TournamentPrize> = {}): TournamentPrize => ({
  place: "1st Prize",
  amount: 1000,
  ...overrides,
});

export const makeTeam = (overrides: Partial<TournamentTeam> = {}): TournamentTeam => ({
  id: `team-${seq()}`,
  name: `Squad ${seq()}`,
  members: 4,
  ...overrides,
});

export const makeLobby = (overrides: Partial<TournamentLobby> = {}): TournamentLobby => ({
  id: `lobby-${seq()}`,
  name: `Lobby ${seq()}`,
  status: "Yet to be scheduled",
  round: 1,
  ...overrides,
});

export const makeLeaderboard = (
  overrides: Partial<TournamentLeaderboard> = {}
): TournamentLeaderboard => ({
  rank: 1,
  name: "Player One",
  points: 500,
  ...overrides,
});

export const makeParticipant = (
  overrides: Partial<TournamentParticipant> = {}
): TournamentParticipant => ({
  id: `participant-${seq()}`,
  name: "Test Player",
  tag: "TP#123",
  ...overrides,
});

// ─── Primary entity factories ────────────────────────────────────────────────

export const makeTournament = (overrides: Partial<Tournament> = {}): Tournament => ({
  id: `tournament-${seq()}`,
  title: "Test Tournament",
  organiser: "Test Org",
  game: "BGMI",
  mode: "Solo",
  entry: "Entry-Free",
  prizePool: 1000,
  registered: 100,
  capacity: 200,
  status: "Registration Open",
  banner: "tournament-bg-main.png",
  startsAt: "Tue 24th Jan 2024, 01:00 PM",
  teamSize: "Solo",
  format: "Single Elimination",
  checkIn: "10 mins before the match starts",
  prizes: [
    makePrize({ place: "1st Prize", amount: 1000 }),
    makePrize({ place: "2nd Prize", amount: 500 }),
    makePrize({ place: "3rd Prize", amount: 200 }),
  ],
  rounds: [
    makeRound({ name: "Qualifiers", round: "Round 1" }),
    makeRound({ name: "Semi-Finals", round: "Round 2" }),
  ],
  howToJoin: [
    "Have your game open already and on the latest version",
    "Once configured you will receive an in-game invite",
  ],
  rules: [
    "No teaming with players from other squads.",
    "Use of unauthorised software results in instant ban.",
  ],
  teams: [makeTeam(), makeTeam()],
  lobbies: [
    makeLobby({ round: 1 }),
    makeLobby({ round: 2 }),
    makeLobby({ round: 3 }),
  ],
  ...overrides,
});

export const makeGame = (overrides: Partial<Game> = {}): Game => ({
  id: `game-${seq()}`,
  name: "BGMI",
  image: "game-bgmi.png",
  ...overrides,
});

export const makeBattle = (overrides: Partial<Battle> = {}): Battle => ({
  id: `battle-${seq()}`,
  badge: "GS",
  name: "GS Daily Scrims",
  by: "By GS Esports",
  description: "Play daily scrims and sharpen your skills",
  color: "purple",
  ...overrides,
});

export const makeHighlight = (overrides: Partial<Highlight> = {}): Highlight => ({
  id: `highlight-${seq()}`,
  title: "Test Highlight",
  image: "highlight-cod.png",
  video: false,
  ...overrides,
});

export const makeUser = (overrides: Partial<User> = {}): User => ({
  name: "TestUser",
  coins: 1000,
  tickets: 10,
  ...overrides,
});

// ─── Scenario helpers — named presets for common test situations ──────────────

/** A tournament that is fully booked */
export const fullTournament = (overrides: Partial<Tournament> = {}) =>
  makeTournament({ registered: 800, capacity: 800, status: "Full", ...overrides });

/** A tournament that has ended */
export const completedTournament = (overrides: Partial<Tournament> = {}) =>
  makeTournament({ status: "Completed", ...overrides });

/** A tournament with no prizes configured */
export const noPrizeTournament = (overrides: Partial<Tournament> = {}) =>
  makeTournament({ prizes: [], prizePool: 0, ...overrides });

/** A tournament with no teams yet */
export const emptyTeamsTournament = (overrides: Partial<Tournament> = {}) =>
  makeTournament({ teams: [], ...overrides });

/** A tournament with no lobbies yet */
export const noLobbiesTournament = (overrides: Partial<Tournament> = {}) =>
  makeTournament({ lobbies: [], ...overrides });

/** Multiple lobbies across 3 rounds */
export const multiRoundLobbies = () =>
  Array.from({ length: 9 }, (_, i) =>
    makeLobby({ round: (i % 3) + 1, name: `Lobby ${i + 1}` })
  );
