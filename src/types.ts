export interface QuestionData {
  id: number;
  question: string;   // The question to display
  correctAnswer: string;   // The correct answer
  description: string;    // Brief description or context
  fact: string;          // Interesting fact shown after answering
  imageUrl: string;      // Path to the question image
}

export interface HighScoreEntry {
  userName: string;
  score: number;
  accuracy: number;
  time: number;
  date: string;
}

export interface BestRun {
  userName: string;
  time: number;
  score: number;
  accuracy: number;
}

export interface QuizStats {
  highScore: number;
  bestRun: BestRun | null;
  highScores: HighScoreEntry[];
}

export interface QuizConfig {
  title: string;
  description: string;
  // Available theme colors. To add a new color:
  // 1. Add the color name here in the type definition
  // 2. Add the corresponding color classes to tailwind.config.js safelist
  // 3. Use the new color in your quiz configuration
  themeColor: 'blue' | 'green' | 'sky' | 'red' | 'purple' | 'orange' | 'pink';
  quiz_name: string;
  startScreenImage?: string;
}
