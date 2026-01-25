export type ViewState = 'START' | 'LKL' | 'RG' | 'SCHEDULE' | 'BUILDING' | 'PLAYERS' | 'GLOSSARY';

export interface Player {
  id: string;
  role: 'TOP' | 'JGL' | 'MID' | 'BOT' | 'SUP' | 'HEAD COACH';
  name: string;
  realName: string;
  mbti: string;
  enneagram: string;
  birth: string;
  appearance: string;
  outfit: string;
  personality: string; // Keywords separated by +
  traits: string[];
  weaknesses: string[];
  signatures?: string[];
  contract: string;
  transferHistory?: string;
  routine?: string;
  secret: string[]; // Specific lore/romance details
  alcohol?: string;
  loveLife?: string;
  pet?: string;
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