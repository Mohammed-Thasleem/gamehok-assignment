import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { TournamentCard } from "@/components/cards/TournamentCard";
import { BattleCard } from "@/components/cards/BattleCard";
import { LobbyCard } from "@/components/cards/LobbyCard";
import { GameCard } from "@/components/cards/GameCard";
import { HighlightCard } from "@/components/cards/HighlightCard";
import {
  completedTournament,
  fullTournament,
  makeBattle,
  makeGame,
  makeHighlight,
  makeLobby,
  makeTournament,
} from "..";
import { renderWithProviders } from "../renderWithProviders";

// ─── TournamentCard ───────────────────────────────────────────────────────────

describe("TournamentCard", () => {
  const defaultTournament = makeTournament({
    id: "test-tournament",
    title: "Crown Conquest",
    status: "Registration Open",
    registered: 670,
    capacity: 800,
    prizePool: 1000,
    game: "BGMI",
    mode: "Solo",
    entry: "Entry-Free",
  });

  it("renders the tournament title", () => {
    renderWithProviders(<TournamentCard {...defaultTournament} />);
    expect(screen.getByText("Crown Conquest")).toBeInTheDocument();
  });

  it("renders the status badge", () => {
    renderWithProviders(<TournamentCard {...defaultTournament} />);
    expect(screen.getByText("Registration Open")).toBeInTheDocument();
  });

  it("renders registered/capacity slot count", () => {
    renderWithProviders(<TournamentCard {...defaultTournament} />);
    expect(screen.getByText(/670\/800/)).toBeInTheDocument();
  });

  it("renders the prize pool", () => {
    renderWithProviders(<TournamentCard {...defaultTournament} />);
    expect(screen.getByText(/Prize Pool -\s*1000/i)).toBeInTheDocument();
  });

  it("renders game, mode, and entry pills", () => {
    renderWithProviders(<TournamentCard {...defaultTournament} />);
    expect(screen.getByText("BGMI")).toBeInTheDocument();
    expect(screen.getByText("Solo")).toBeInTheDocument();
    expect(screen.getByText("Entry-Free")).toBeInTheDocument();
  });

  it("links to the correct tournament detail route", () => {
    renderWithProviders(<TournamentCard {...defaultTournament} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/tournament/test-tournament");
  });

  it("shows banner image with alt text equal to title", () => {
    renderWithProviders(<TournamentCard {...defaultTournament} />);
    const img = screen.getByRole("img", { name: "Crown Conquest" });
    expect(img).toBeInTheDocument();
  });

  it("renders a full tournament correctly", () => {
    const full = fullTournament({
      id: "full-t",
      title: "Full Tournament",
    });
    renderWithProviders(<TournamentCard {...full} />);
    expect(screen.getByText("Full")).toBeInTheDocument();
    expect(screen.getByText(/800\/800/)).toBeInTheDocument();
  });

  it("renders a completed tournament correctly", () => {
    const completed = completedTournament({
      id: "done-t",
      title: "Past Tournament",
    });
    renderWithProviders(<TournamentCard {...completed} />);
    expect(screen.getByText("Completed")).toBeInTheDocument();
  });

  it("renders a tournament with zero prize pool", () => {
    const free = makeTournament({ id: "free-t", prizePool: 0 });
    renderWithProviders(<TournamentCard {...free} />);
    expect(screen.getByText(/Prize Pool -\s*0/i)).toBeInTheDocument();
  });

  it("renders a tournament with very long title without crashing", () => {
    const long = makeTournament({
      id: "long-t",
      title: "A".repeat(120),
    });
    renderWithProviders(<TournamentCard {...long} />);
    expect(screen.getByText("A".repeat(120))).toBeInTheDocument();
  });
});

// ─── BattleCard ──────────────────────────────────────────────────────────────

describe("BattleCard", () => {
  it("renders the battle name and organiser", () => {
    const battle = makeBattle({
      name: "GS Daily Scrims",
      by: "By GS Esports",
    });
    renderWithProviders(<BattleCard {...battle} />);
    expect(screen.getByText("GS Daily Scrims")).toBeInTheDocument();
    expect(screen.getByText("By GS Esports")).toBeInTheDocument();
  });

  it("renders the description", () => {
    const battle = makeBattle({
      description: "Play and sharpen your skills",
    });
    renderWithProviders(<BattleCard {...battle} />);
    expect(
      screen.getByText("Play and sharpen your skills"),
    ).toBeInTheDocument();
  });

  it("renders the badge image", () => {
    const battle = makeBattle();
    renderWithProviders(<BattleCard {...battle} />);
    const badge = screen.getByRole("img", { name: /gs daily scrims/i });
    expect(badge).toBeInTheDocument();
  });

  it("renders Explore scrims button", () => {
    const battle = makeBattle();
    renderWithProviders(<BattleCard {...battle} />);
    expect(
      screen.getByRole("button", { name: /explore scrims/i }),
    ).toBeInTheDocument();
  });
});

// ─── LobbyCard ───────────────────────────────────────────────────────────────

describe("LobbyCard", () => {
  it("renders lobby name and status", () => {
    const lobby = makeLobby({
      name: "Lobby 1",
      status: "Yet to be scheduled",
    });
    renderWithProviders(<LobbyCard {...lobby} />);
    expect(screen.getByText("Lobby 1")).toBeInTheDocument();
    expect(screen.getByText("Yet to be scheduled")).toBeInTheDocument();
  });

  it("renders View Participants button", () => {
    const lobby = makeLobby();
    renderWithProviders(<LobbyCard {...lobby} />);
    expect(
      screen.getByRole("button", { name: /view participants/i }),
    ).toBeInTheDocument();
  });

  it("renders a live lobby status", () => {
    const lobby = makeLobby({ status: "Live" });
    renderWithProviders(<LobbyCard {...lobby} />);
    expect(screen.getByText("Live")).toBeInTheDocument();
  });

  it("renders a completed lobby status", () => {
    const lobby = makeLobby({ status: "Completed" });
    renderWithProviders(<LobbyCard {...lobby} />);
    expect(screen.getByText("Completed")).toBeInTheDocument();
  });
});

// ─── GameCard ─────────────────────────────────────────────────────────────────

describe("GameCard", () => {
  it("renders the game name", () => {
    const game = makeGame({ name: "BGMI" });
    renderWithProviders(<GameCard {...game} />);
    expect(screen.getByText("BGMI")).toBeInTheDocument();
  });

  it("renders the game image with correct alt text", () => {
    const game = makeGame({
      name: "Free Fire",
      image: "game-freefire.png",
    });
    renderWithProviders(<GameCard {...game} />);
    const img = screen.getByRole("img", { name: /free fire/i });
    expect(img).toHaveAttribute("src", "game-freefire.png");
  });
});

// ─── HighlightCard ────────────────────────────────────────────────────────────

describe("HighlightCard", () => {
  it("renders the highlight title", () => {
    const highlight = makeHighlight({ title: "Call of Duty" });
    renderWithProviders(<HighlightCard {...highlight} />);
    expect(screen.getByText("Call of Duty")).toBeInTheDocument();
  });

  it("renders play button overlay when video=true", () => {
    const highlight = makeHighlight({ video: true });
    renderWithProviders(<HighlightCard {...highlight} />);
    const imgs = screen.getAllByRole("img");
    expect(imgs.length).toBeGreaterThan(0);
  });

  it("does not render play button when video=false", () => {
    const highlight = makeHighlight({
      title: "No Video",
      video: false,
    });
    renderWithProviders(<HighlightCard {...highlight} />);
    expect(screen.getByText("No Video")).toBeInTheDocument();
  });
});
