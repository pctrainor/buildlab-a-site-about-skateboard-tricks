import React from 'react';
import { Trophy, CheckCircle, Award } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  points: number;
  achieved: boolean;
}

const mockAchievements: Achievement[] = [
  {
    id: 1,
    title: 'First Ollie',
    description: 'Successfully perform your first Ollie.',
    points: 50,
    achieved: true,
  },
  {
    id: 2,
    title: 'Kickflip Master',
    description: 'Perform 100 Kickflips.',
    points: 100,
    achieved: false,
  },
  {
    id: 3,
    title: 'Community Contributor',
    description: 'Post 10 times in the community.',
    points: 30,
    achieved: true,
  }
];

const Gamification: React.FC = () => {
  return (
    <div className="bg-slate-900 text-zinc-200 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Achievements</h2>
      <div className="space-y-4">
        {mockAchievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`p-4 rounded-lg shadow-md flex items-center ${
              achievement.achieved ? 'bg-gradient-to-r from-green-500 to-green-700' : 'bg-gradient-to-r from-zinc-800 to-zinc-900'
            }`}
          >
            <div className="flex-shrink-0">
              {achievement.achieved ? (
                <CheckCircle className="w-6 h-6 text-white" />
              ) : (
                <Trophy className="w-6 h-6 text-yellow-400" />
              )}
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">{achievement.title}</h3>
              <p className="text-sm">{achievement.description}</p>
              <div className="flex items-center mt-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="ml-2 text-sm">{achievement.points} Points</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gamification;