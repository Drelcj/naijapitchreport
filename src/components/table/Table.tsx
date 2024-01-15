import React from 'react';

interface TeamData {
  position: number;
  teamName: string;
  played: number;
  win: number;
  draw: number;
  loss: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

const NPFLTable: React.FC = () => {
  const leagueData: TeamData[] = [
    // Add the actual data for each team in the league
    {
      position: 1,
      teamName: 'Plateau United',
      played: 25,
      win: 14,
      draw: 7,
      loss: 4,
      goalsFor: 36,
      goalsAgainst: 15,
      goalDifference: 21,
      points: 49,
    },
    {
      position: 2,
      teamName: 'Rivers United',
      played: 25,
      win: 13,
      draw: 6,
      loss: 6,
      goalsFor: 28,
      goalsAgainst: 15,
      goalDifference: 13,
      points: 45,
    },
    // ... Add the rest of the teams
  ];

  return (
    <div className="overflow-x-auto my-4 sm:my-6 md:my-12">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Pos</th>
            <th>Team</th>
            <th>GP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>F</th>
            <th>A</th>
            <th>GD</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {leagueData.map((team) => (
            <tr key={team.position}>
              <th>{team.position}</th>
              <td>{team.teamName}</td>
              <td>{team.played}</td>
              <td>{team.win}</td>
              <td>{team.draw}</td>
              <td>{team.loss}</td>
              <td>{team.goalsFor}</td>
              <td>{team.goalsAgainst}</td>
              <td>{team.goalDifference}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NPFLTable;
