import axios from 'axios';

const API_BASE_URL = 'https://api.skateboardtricks.com';

export interface Trick {
  id: number;
  name: string;
  difficulty: string;
  description: string;
  steps: string[];
  tips: string;
  videoUrl: string;
}

export interface CommunityPost {
  id: number;
  user: string;
  message: string;
  date: string;
  likes: number;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  points: number;
  achieved: boolean;
}

export const fetchTricks = async (): Promise<Trick[]> => {
  try {
    const response = await axios.get<Trick[]>(`${API_BASE_URL}/tricks`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tricks:', error);
    throw error;
  }
};

export const fetchCommunityPosts = async (): Promise<CommunityPost[]> => {
  try {
    const response = await axios.get<CommunityPost[]>(`${API_BASE_URL}/community/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching community posts:', error);
    throw error;
  }
};

export const fetchAchievements = async (): Promise<Achievement[]> => {
  try {
    const response = await axios.get<Achievement[]>(`${API_BASE_URL}/achievements`);
    return response.data;
  } catch (error) {
    console.error('Error fetching achievements:', error);
    throw error;
  }
};