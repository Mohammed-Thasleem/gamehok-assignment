// Static mock data
import gameBgmi from "@/assets/game-bgmi.png";
import gameFreefire from "@/assets/game-freefire.png";
import gameCod from "@/assets/game-cod.png";
import gameBgmiMobile from "@/assets/bgmi-mobile.png";
import gameFreefireMobile from "@/assets/free-fire-mobile.png";
import gameCodMobile from "@/assets/cod-mobile.png";
import highlightCod from "@/assets/highlight-cod.png";
import highlightBgmi from "@/assets/highlight-bgmi.png";
import tournamentHero from "@/assets/tournament-bg-main.png";
import tournamentHeroSmall from "@/assets/tournament-bg.png";
import gsBadge from "@/assets/gs.png";
import tmrBadge from "@/assets/tmr.png";

import type {
  Tournament,
  Battle,
  Game,
  Highlight,
  User,
} from "@/components/tournament/tournament.types";

export const games: Game[] = [
  { id: "bgmi", name: "BGMI", image: gameBgmi },
  { id: "freefire", name: "FREE FIRE", image: gameFreefire },
  { id: "cod", name: "CALL OF DUTY", image: gameCod },
  { id: "bgmi2", name: "BGMI", image: gameBgmi },
  { id: "freefire2", name: "FREE FIRE", image: gameFreefire },
  { id: "cod-1", name: "CALL OF DUTY", image: gameCod },
];

export const gamesMobile: Game[] = [
  { id: "bgmi", name: "BGMI", image: gameBgmiMobile },
  { id: "freefire", name: "FREE FIRE", image: gameFreefireMobile },
  { id: "cod", name: "COD MOBILE", image: gameCodMobile },
  { id: "bgmi2", name: "BGMI", image: gameBgmiMobile },
  { id: "freefire2", name: "FREE FIRE", image: gameFreefireMobile },
  { id: "cod-1", name: "COD MOBILE", image: gameCodMobile },
];

export const battles: Battle[] = [
  {
    id: "gs-daily",
    name: "GS Daily Scrims",
    by: "By GS Esports",
    description:
      "Play GS daily scrims and sharpen your skills for the bigger events",
    badge: gsBadge,
  },
  {
    id: "tmr-daily",
    name: "TMR Daily Scrims",
    by: "By TMR Esports",
    description:
      "Play TMR daily scrims and sharpen your skills for the bigger events",
    badge: tmrBadge,
  },
];

export const highlights: Highlight[] = [
  { id: "h1", title: "Call of Duty", image: highlightCod, video: true },
  { id: "h2", title: "BGMI Tournaments", image: highlightBgmi, video: false },
  { id: "h3", title: "Call of Duty", image: highlightCod, video: false },
  { id: "h4", title: "BGMI Tournaments", image: highlightBgmi, video: false },
  { id: "h5", title: "Call of Duty", image: highlightCod, video: false },
  { id: "h6", title: "BGMI Tournaments", image: highlightBgmi, video: false },
];

const baseTournament: Omit<Tournament, "id" | "title"> = {
  organiser: "GS ESPORTS",
  game: "BGMI",
  mode: "Solo",
  entry: "Entry-10",
  prizePool: 1000,
  registered: 670,
  capacity: 800,
  status: "Registration Open",
  banner: tournamentHero,
  startsAt: "Tue 24th Jan 2024, 01:00 PM",
  teamSize: "Solo",
  format: "Single Elimination",
  checkIn: "10 mins before the match starts",
  prizes: [
    { place: "1st Prize", amount: 1000 },
    { place: "2nd Prize", amount: 500 },
    { place: "3rd Prize", amount: 200 },
  ],
  rounds: [
    {
      name: "Qualifiers",
      round: "Round 1",
      format: "Single Elimination",
      advance: "Top 4 to next round",
      date: "3rd Aug, 10:00 pm",
    },
    {
      name: "Qualifiers",
      round: "Round 2",
      format: "Single Elimination",
      advance: "Top 4 to next round",
      date: "5th Aug, 10:00 pm",
    },
    {
      name: "Semi-Finals",
      round: "Round 3",
      format: "Single Elimination",
      advance: "Top 2 to finals",
      date: "7th Aug, 10:00 pm",
    },
  ],
  howToJoin: [
    "Have your game open already and on the latest version",
    "Once the match is configured you will receive an invite in-game to join the lobby",
    "Join the match and wait for the game to start",
    "When eliminated return to the match room page to be ready to join the next map in",
  ],
  rules: [
    "No teaming with players from other squads.",
    "Use of unauthorised software or hacks results in instant ban.",
    "Players must be at least 16 years old to compete.",
    "Match results will be verified by organisers; their decision is final.",
    "Disconnections will not be replayed except in case of server outage.",
  ],

  teams: Array.from({ length: 8 }).map((_, i) => ({
    id: `t${i + 1}`,
    name: `Squad ${String.fromCharCode(65 + i)}`,
    members: 4,
  })),
  lobbies: Array.from({ length: 12 }).map((_, i) => ({
    id: `l${i + 1}`,
    name: `Lobby ${i + 1}`,
    round: (i % 3) + 1,
    status: "Yet to be scheduled",
  })),
};

export const tournaments: Tournament[] = [
  {
    id: "crown-conquest",
    title: "Crown Conquest",
    ...baseTournament,
    banner: tournamentHeroSmall,
  },
  {
    id: "gs-monthly",
    title: "GS Monthly Showdown",
    ...baseTournament,
    organiser: "GS ESPORTS",
    banner: tournamentHeroSmall,
  },
  {
    id: "pubg-1",
    title: "PUBG Tournament",
    ...baseTournament,
    game: "BGMI",
    organiser: "GS ESPORTS",
    banner: tournamentHeroSmall,
  },
  {
    id: "pubg-2",
    title: "PUBG Tournament",
    ...baseTournament,
    game: "BGMI",
    organiser: "Red Bull",
    banner: tournamentHeroSmall,
  },
];

export const user: User = {
  name: "Thasleem",
  coins: 2456,
  tickets: 245,
};
