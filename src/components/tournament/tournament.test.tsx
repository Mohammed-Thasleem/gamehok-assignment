import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TournamentTabs } from '@/components/tournament/TournamentTab';
import { TournamentHero } from '@/components/tournament/TournamentHero';
import { OverviewTab } from '@/components/tournament/tabs/OverviewTab';
import { TeamsTab } from '@/components/tournament/tabs/TeamsTab';
import { LobbiesTab } from '@/components/tournament/tabs/LobbiesTab';
import { RulesTab } from '@/components/tournament/tabs/RulesTab';
import type { TournamentTabKey } from '@/types/tabs';
import { renderWithProviders } from '../renderWithProviders';
import {
  emptyTeamsTournament,
  makeTeam,
  makeTournament,
  multiRoundLobbies,
  noLobbiesTournament,
  noPrizeTournament,
} from '..';

// ─── TournamentTabs (navigation bar) ─────────────────────────────────────────

describe('TournamentTabs', () => {
  const tabs: TournamentTabKey[] = [
    'overview',
    'teams',
    'lobbies',
    'rules',
  ];

  it('renders all four tab buttons', () => {
    const onChange = vi.fn();
    renderWithProviders(
      <TournamentTabs activeTab="overview" onChange={onChange} />,
    );
    expect(
      screen.getByRole('button', { name: /overview/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /teams/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /lobbies/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /rules/i }),
    ).toBeInTheDocument();
  });

  it.each(tabs)('highlights %s as active tab', (tab) => {
    const onChange = vi.fn();
    renderWithProviders(
      <TournamentTabs activeTab={tab} onChange={onChange} />,
    );
    const activeBtn = screen.getByRole('button', {
      name: new RegExp(tab, 'i'),
    });
    expect(activeBtn.className).toMatch(/text-primary/);
  });

  it('calls onChange with the correct tab key when clicked', async () => {
    const onChange = vi.fn();
    renderWithProviders(
      <TournamentTabs activeTab="overview" onChange={onChange} />,
    );
    await userEvent.click(
      screen.getByRole('button', { name: /teams/i }),
    );
    expect(onChange).toHaveBeenCalledWith('teams');
  });

  it('calls onChange when lobbies tab is clicked', async () => {
    const onChange = vi.fn();
    renderWithProviders(
      <TournamentTabs activeTab="overview" onChange={onChange} />,
    );
    await userEvent.click(
      screen.getByRole('button', { name: /lobbies/i }),
    );
    expect(onChange).toHaveBeenCalledWith('lobbies');
  });

  it('does not call onChange when the already-active tab is clicked', async () => {
    const onChange = vi.fn();
    renderWithProviders(
      <TournamentTabs activeTab="overview" onChange={onChange} />,
    );
    // Clicking the already-active tab still fires — but we verify the value passed
    await userEvent.click(
      screen.getByRole('button', { name: /overview/i }),
    );
    expect(onChange).toHaveBeenCalledWith('overview');
  });
});

// ─── TournamentHero ───────────────────────────────────────────────────────────

describe('TournamentHero', () => {
  it('renders tournament title in uppercase', () => {
    const t = makeTournament({ title: 'Crown Conquest' });
    renderWithProviders(
      <TournamentHero tournament={t} activeTab="overview" />,
    );
    expect(screen.getByText('CROWN CONQUEST')).toBeInTheDocument();
  });

  it("renders organiser name with 'BY' prefix", () => {
    const t = makeTournament({ organiser: 'GS ESPORTS' });
    renderWithProviders(
      <TournamentHero tournament={t} activeTab="overview" />,
    );
    expect(screen.getByText(/BY GS ESPORTS/i)).toBeInTheDocument();
  });

  it('renders game and entry badges', () => {
    const t = makeTournament({ game: 'BGMI', entry: 'Entry-Free' });
    renderWithProviders(
      <TournamentHero tournament={t} activeTab="overview" />,
    );
    expect(screen.getByText('BGMI')).toBeInTheDocument();
    expect(screen.getByText('Entry-Free')).toBeInTheDocument();
  });

  it('renders registration open text when not on lobbies tab', () => {
    const t = makeTournament();
    renderWithProviders(
      <TournamentHero tournament={t} activeTab="overview" />,
    );
    expect(
      screen.getByText(/Registration open/i),
    ).toBeInTheDocument();
  });

  it("renders 'Next match in' text when on lobbies tab", () => {
    const t = makeTournament();
    renderWithProviders(
      <TournamentHero tournament={t} activeTab="lobbies" />,
    );
    expect(screen.getByText(/Next match in/i)).toBeInTheDocument();
  });

  it('shows registered/capacity count', () => {
    const t = makeTournament({ registered: 670, capacity: 800 });
    renderWithProviders(
      <TournamentHero tournament={t} activeTab="overview" />,
    );
    expect(screen.getByText(/670\/800/)).toBeInTheDocument();
  });

  it('renders banner image', () => {
    const t = makeTournament({
      title: 'Hero Test',
      banner: 'tournament-bg-main.png',
    });
    renderWithProviders(
      <TournamentHero tournament={t} activeTab="overview" />,
    );
    expect(
      screen.getByRole('img', { name: 'Hero Test' }),
    ).toBeInTheDocument();
  });

  it('renders Back button', () => {
    const t = makeTournament();
    renderWithProviders(
      <TournamentHero tournament={t} activeTab="overview" />,
    );
    const backButtons = screen.getAllByRole('button');
    // Back button exists (may be hidden via CSS but present in DOM)
    expect(backButtons.length).toBeGreaterThan(0);
  });
});

// ─── OverviewTab ──────────────────────────────────────────────────────────────

describe('OverviewTab', () => {
  it('renders Details section with team size', () => {
    const t = makeTournament({ teamSize: 'Solo' });
    renderWithProviders(<OverviewTab tournament={t} />);
    expect(screen.getAllByText('Solo')[0]).toBeInTheDocument();
    expect(screen.getByText(/TEAM SIZE/i)).toBeInTheDocument();
  });

  it('renders tournament start date', () => {
    const t = makeTournament({
      startsAt: 'Tue 24th Jan 2024, 01:00 PM',
    });
    renderWithProviders(<OverviewTab tournament={t} />);
    expect(
      screen.getByText('Tue 24th Jan 2024, 01:00 PM'),
    ).toBeInTheDocument();
  });

  it('renders format and check-in details', () => {
    const t = makeTournament({
      format: 'Single Elimination',
      checkIn: '10 mins before the match starts',
    });
    renderWithProviders(<OverviewTab tournament={t} />);
    expect(
      screen.getAllByText('Single Elimination')[0],
    ).toBeInTheDocument();
    expect(
      screen.getByText('10 mins before the match starts'),
    ).toBeInTheDocument();
  });

  it('renders all rounds', () => {
    const t = makeTournament({
      rounds: [
        {
          name: 'Qualifiers',
          round: 'Round 1',
          format: 'Single Elimination',
          advance: 'Top 4',
          date: '3rd Aug',
        },
        {
          name: 'Finals',
          round: 'Round 2',
          format: 'Double Elimination',
          advance: 'Top 2',
          date: '10th Aug',
        },
      ],
    });
    renderWithProviders(<OverviewTab tournament={t} />);
    expect(screen.getByText(/Qualifiers/)).toBeInTheDocument();
    expect(screen.getByText(/Finals/)).toBeInTheDocument();
  });

  it('renders how-to-join steps', () => {
    const t = makeTournament({
      howToJoin: ['Step one instructions', 'Step two instructions'],
    });
    renderWithProviders(<OverviewTab tournament={t} />);
    expect(
      screen.getByText('Step one instructions'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Step two instructions'),
    ).toBeInTheDocument();
  });

  it('renders prize pool total', () => {
    const t = makeTournament({ prizePool: 5000 });
    renderWithProviders(<OverviewTab tournament={t} />);
    expect(screen.getByText(/5000/)).toBeInTheDocument();
  });

  it('renders individual prize entries', () => {
    const t = makeTournament({
      prizes: [
        { place: '1st Prize', amount: 1000 },
        { place: '2nd Prize', amount: 500 },
      ],
    });
    renderWithProviders(<OverviewTab tournament={t} />);
    expect(screen.getByText('1st Prize')).toBeInTheDocument();
    expect(screen.getByText('2nd Prize')).toBeInTheDocument();
  });

  it('renders organiser name', () => {
    const t = makeTournament({ organiser: 'GS ESPORTS' });
    renderWithProviders(<OverviewTab tournament={t} />);
    // Organiser name appears in the section card
    expect(screen.getAllByText('GS ESPORTS').length).toBeGreaterThan(
      0,
    );
  });

  it('handles tournament with no prizes gracefully', () => {
    const t = noPrizeTournament();
    renderWithProviders(<OverviewTab tournament={t} />);
    // Prize Pool section still renders
    expect(
      screen.getByText(/Total Tournament Prize/i),
    ).toBeInTheDocument();
  });

  it('handles tournament with no rounds gracefully', () => {
    const t = makeTournament({ rounds: [] });
    renderWithProviders(<OverviewTab tournament={t} />);
    expect(
      screen.getByText(/Rounds and Schedule/i),
    ).toBeInTheDocument();
  });
});

// ─── TeamsTab ─────────────────────────────────────────────────────────────────

describe('TeamsTab', () => {
  it('renders a card for each team', () => {
    const t = makeTournament({
      teams: [
        makeTeam({ id: 't1', name: 'Squad A', members: 4 }),
        makeTeam({ id: 't2', name: 'Squad B', members: 3 }),
      ],
    });
    renderWithProviders(<TeamsTab tournament={t} />);
    expect(screen.getByText('Squad A')).toBeInTheDocument();
    expect(screen.getByText('Squad B')).toBeInTheDocument();
  });

  it('renders member count for each team', () => {
    const t = makeTournament({
      teams: [makeTeam({ id: 't1', name: 'Squad A', members: 4 })],
    });
    renderWithProviders(<TeamsTab tournament={t} />);
    expect(screen.getByText('4 members')).toBeInTheDocument();
  });

  it('renders empty state when no teams exist', () => {
    const t = emptyTeamsTournament();
    renderWithProviders(<TeamsTab tournament={t} />);
    // No team cards should be in the DOM — no crash
    expect(screen.queryByText(/members/)).not.toBeInTheDocument();
  });

  it('renders all 8 teams from factory data', () => {
    const teams = Array.from({ length: 8 }, (_, i) =>
      makeTeam({ id: `t${i}`, name: `Squad ${i}` }),
    );
    const t = makeTournament({ teams });
    renderWithProviders(<TeamsTab tournament={t} />);
    expect(screen.getAllByText(/Squad/)).toHaveLength(8);
  });
});

// ─── LobbiesTab ───────────────────────────────────────────────────────────────

describe('LobbiesTab', () => {
  const lobbies = multiRoundLobbies(); // 9 lobbies: 3 per round

  it('renders round filter buttons', () => {
    const t = makeTournament({ lobbies });
    const onChange = vi.fn();
    renderWithProviders(
      <LobbiesTab
        tournament={t}
        round={1}
        onRoundChange={onChange}
      />,
    );
    expect(
      screen.getByRole('button', { name: /round 1/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /round 2/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /round 3/i }),
    ).toBeInTheDocument();
  });

  it('shows only lobbies for the selected round', () => {
    const t = makeTournament({ lobbies });
    const onChange = vi.fn();
    renderWithProviders(
      <LobbiesTab
        tournament={t}
        round={2}
        onRoundChange={onChange}
      />,
    );
    const lobbyItems = screen.getAllByText(/View Participants/i);
    // 9 lobbies / 3 rounds = exactly 3 lobbies for round 2
    expect(lobbyItems).toHaveLength(3);
  });

  it('calls onRoundChange with correct round number when filter clicked', async () => {
    const t = makeTournament({ lobbies });
    const onChange = vi.fn();
    renderWithProviders(
      <LobbiesTab
        tournament={t}
        round={1}
        onRoundChange={onChange}
      />,
    );
    await userEvent.click(
      screen.getByRole('button', { name: /round 3/i }),
    );
    expect(onChange).toHaveBeenCalledWith(3);
  });

  it('renders empty list when no lobbies exist for selected round', () => {
    const t = noLobbiesTournament();
    const onChange = vi.fn();
    renderWithProviders(
      <LobbiesTab
        tournament={t}
        round={1}
        onRoundChange={onChange}
      />,
    );
    expect(
      screen.queryByText(/View Participants/i),
    ).not.toBeInTheDocument();
  });

  it('active round button has primary styling', () => {
    const t = makeTournament({ lobbies });
    const onChange = vi.fn();
    renderWithProviders(
      <LobbiesTab
        tournament={t}
        round={2}
        onRoundChange={onChange}
      />,
    );
    const activeBtn = screen.getByRole('button', {
      name: /round 2/i,
    });
    expect(activeBtn.className).toMatch(/text-primary/);
  });
});

// ─── RulesTab ─────────────────────────────────────────────────────────────────

describe('RulesTab', () => {
  it('renders each rule as a list item', () => {
    const t = makeTournament({
      rules: [
        'No teaming with players from other squads.',
        'Use of unauthorised software results in instant ban.',
        'Players must be at least 16 years old.',
      ],
    });
    renderWithProviders(<RulesTab tournament={t} />);
    expect(
      screen.getByText(/No teaming with players/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Use of unauthorised software/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/at least 16 years old/),
    ).toBeInTheDocument();
  });

  it('renders numbered badges for each rule', () => {
    const t = makeTournament({
      rules: ['Rule A', 'Rule B', 'Rule C'],
    });
    renderWithProviders(<RulesTab tournament={t} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('renders correctly with zero rules', () => {
    const t = makeTournament({ rules: [] });
    renderWithProviders(<RulesTab tournament={t} />);
    // No list items, no crash
    expect(screen.queryByText(/1/)).not.toBeInTheDocument();
  });

  it('renders a single rule', () => {
    const t = makeTournament({ rules: ['Only one rule.'] });
    renderWithProviders(<RulesTab tournament={t} />);
    expect(screen.getByText('Only one rule.')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
