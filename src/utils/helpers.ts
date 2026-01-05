export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const capitalize = (text: string): string => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const sortPostsByDate = (posts: { date: string }[]): { date: string }[] => {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const calculateAchievementProgress = (achievements: { points: number; achieved: boolean }[]): number => {
  const totalPoints = achievements.reduce((sum, achievement) => sum + achievement.points, 0);
  const earnedPoints = achievements.filter(achievement => achievement.achieved).reduce((sum, achievement) => sum + achievement.points, 0);
  return (earnedPoints / totalPoints) * 100;
};