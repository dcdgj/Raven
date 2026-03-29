export type ViewState = 'START' | 'LKL' | 'RG' | 'SCHEDULE' | 'BUILDING' | 'PLAYERS' | 'GLOSSARY';

export interface PetInfo {
  type: string;
  name: string;
  age: string;
  description: string;
}

export interface Player {
  id: string;
  role: 'TOP' | 'JGL' | 'MID' | 'BOT' | 'SUP' | 'HEAD COACH';
  name: string;
  realName: string;
  mbti: string;
  enneagram: string;
  birth: string;
  appearance: string;
  height: string;
  outfit: string;
  personality: string; // Keywords separated by +
  traits: string[];
  weaknesses: string[];
  signatures?: string[];
  contract: string;
  transferHistory?: string;
  pastExperience?: string;
  routine?: string;
  features: string[]; // Specific lore/romance details/traits
  hobby?: string;
  alcohol?: string;
  loveLife?: string;
  pet?: PetInfo;
  imageUrls: string[];
}

export interface TeamHistory {
  year: string;
  rank: number; // For graphing (1 is best, 10 is worst)
  record: string;
  description: string;
}

export interface RoutineItem {
  time: string;
  activity: string;
}

export interface FloorInfo {
  floor: string;
  title: string;
  description: string;
}

export interface Term {
  term: string;
  definition: string;
  details?: string;
}