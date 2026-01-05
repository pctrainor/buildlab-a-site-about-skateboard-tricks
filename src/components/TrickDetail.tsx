import React from 'react';
import { useParams } from 'react-router-dom';
import { FlipVertical, Star, Edit3 } from 'lucide-react';

interface Trick {
  id: number;
  name: string;
  difficulty: string;
  description: string;
  steps: string[];
  tips: string;
  videoUrl: string;
}

const mockTrickDetails: Trick[] = [
  {
    id: 1,
    name: 'Ollie',
    difficulty: 'Easy',
    description: 'The basic jump without grabbing the skateboard.',
    steps: [
      'Position your feet properly on the skateboard.',
      'Crouch down and pop the tail of the board.',
      'Slide your front foot up the board to level it out.',
      'Land back on the ground with both feet.'
    ],
    tips: 'Keep your shoulders parallel to the board for better balance.',
    videoUrl: 'https://www.youtube.com/watch?v=abc123'
  },
  {
    id: 2,
    name: 'Kickflip',
    difficulty: 'Intermediate',
    description: 'A flip trick where the skateboard flips 360 degrees along the axis that extends from the nose to the tail of the deck.',
    steps: [
      'Position your feet: back foot on the tail, front foot angled.',
      'Pop the tail and flick the front foot off the side of the board.',
      'Catch the board with your back foot as it completes the flip.',
      'Land with both feet over the bolts.'
    ],
    tips: 'Practice the flick motion by standing still before trying while moving.',
    videoUrl: 'https://www.youtube.com/watch?v=def456'
  }
];

const TrickDetail: React.FC = () => {
  const { trickId } = useParams<{ trickId: string }>();
  const trick = mockTrickDetails.find(t => t.id === Number(trickId));

  if (!trick) {
    return <div className="p-6 text-center text-white">Trick not found.</div>;
  }

  return (
    <div className="p-6 bg-gradient-to-b from-zinc-800 to-slate-900 text-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{trick.name}</h1>
      <p className="mb-2 text-lg">{trick.description}</p>
      <div className="flex items-center mb-2">
        <Star className="w-5 h-5 mr-2 text-yellow-400" />
        <span className="text-sm">{trick.difficulty}</span>
      </div>
      <h2 className="text-2xl font-semibold mt-4">Steps</h2>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        {trick.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mt-4">Tips</h2>
      <p className="mt-2">{trick.tips}</p>
      <div className="mt-6">
        <a
          href={trick.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition"
        >
          <FlipVertical className="w-5 h-5 mr-2" />
          Watch Tutorial
        </a>
      </div>
    </div>
  );
};

export default TrickDetail;