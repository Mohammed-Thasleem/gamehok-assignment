export interface TournamentRound {
  name: string;
  round: string;
  format: string;
  advance: string;
  date: string;
}

export interface TournamentPrize {
  place: string;
  amount: number;
}

export interface TournamentTeam {
  id: string;
  name: string;
  members: number;
}

export interface TournamentParticipant {
  id: string;
  name: string;
  tag: string;
}

export interface TournamentLobby {
  id: string;
  name: string;
  status: string;
  round: number;
}

export interface TournamentLeaderboard {
  rank: number;
  name: string;
  points: number;
}

export interface Tournament {
  id: string;
  title: string;
  organiser: string;
  game: string;
  mode: string;
  entry: string;
  prizePool: number;
  registered: number;
  capacity: number;
  status: string;
  banner: string;
  startsAt: string;
  teamSize: string;
  format: string;
  checkIn: string;
  prizes: TournamentPrize[];
  rounds: TournamentRound[];
  howToJoin: string[];
  rules: string[];
  teams: TournamentTeam[];
  lobbies: TournamentLobby[];
}

export interface Battle {
  id: string;
  badge: string;
  name: string;
  by: string;
  description: string;
}

export interface Game {
  id: string;
  name: string;
  image: string;
}

export interface Highlight {
  id: string;
  title: string;
  image: string;
  video?: boolean;
}

export interface User {
  name: string;
  coins: number;
  tickets: number;
}
