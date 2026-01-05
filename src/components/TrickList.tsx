import React from 'react';
import { FlipVertical, Star, Edit3 } from 'lucide-react';

interface Trick {
  id: number;
  name: string;
  difficulty: string;
  description: string;
}

const mockTricks: Trick[] = [
  {
    id: 1,
    name: 'Ollie',
    difficulty: 'Easy',
    description: 'The basic jump without grabbing the skateboard.',
  },
  {
    id: 2,
    name: 'Kickflip',
    difficulty: 'Intermediate',
    description: 'A flip trick where the skateboard flips 360 degrees along the axis that extends from the nose to the tail of the deck.',
  },
  {
    id: 3,
    name: 'Heelflip',
    difficulty: 'Intermediate',
    description: 'Similar to a kickflip, but the skateboard flips in the opposite direction, using the heel to flip the board.',
  },
  {
    id: 4,
    name: '360 Flip',
    difficulty: 'Advanced',
    description: 'A combination of a kickflip and a 360-degree board spin, also known as a tre flip.',
  },
];

const TrickList: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Skateboard Tricks</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gradient-to-b p-4 rounded-lg shadow-lg">
        {mockTricks.map((trick) => (
          <div key={trick.id} className="card">
            <h3 className="card-title flex items-center">
              <FlipVertical className="w-5 h-5 mr-2" />
              {trick.name}
            </h3>
            <p className="flex items-center text-sm text-slate-400 mb-2">
              <Star className="w-4 h-4 mr-1" />
              Difficulty: {trick.difficulty}
            </p>
            <p className="card-description">{trick.description}</p>
            <button className="mt-4 px-4 py-2 bg-slate-700 rounded-lg text-white hover:bg-slate-600 flex items-center">
              <Edit3 className="w-4 h-4 mr-2" />
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrickList;