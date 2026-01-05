import React from 'react';
import { MessageCircle, Users } from 'lucide-react';

interface CommunityPost {
  id: number;
  user: string;
  message: string;
  date: string;
  likes: number;
}

const mockCommunityPosts: CommunityPost[] = [
  {
    id: 1,
    user: 'skaterboy92',
    message: 'Just landed my first kickflip! Absolutely stoked!',
    date: '2023-10-12',
    likes: 34,
  },
  {
    id: 2,
    user: 'trickmaster',
    message: 'Can anyone share tips for improving balance on downhill rides?',
    date: '2023-10-11',
    likes: 12,
  },
  {
    id: 3,
    user: 'olliequeen',
    message: 'Favorite trick: Heelflip! What about you guys?',
    date: '2023-10-10',
    likes: 27,
  },
];

const Community: React.FC = () => {
  return (
    <section className="bg-zinc-900 p-8 shadow-md rounded-lg max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
        <Users className="mr-2" />
        Community Feed
      </h2>
      <div>
        {mockCommunityPosts.map((post) => (
          <div key={post.id} className="bg-zinc-800 p-4 rounded-lg mb-4 shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg text-slate-200 font-medium">{post.user}</h3>
              <span className="text-sm text-slate-400">{post.date}</span>
            </div>
            <p className="text-slate-300 mb-2">{post.message}</p>
            <div className="flex items-center text-slate-400">
              <MessageCircle className="mr-1" /> {post.likes} likes
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Community;