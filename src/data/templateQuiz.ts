// =================================================================
// QUIZ TEMPLATE - HOW TO CREATE YOUR OWN QUIZ
// =================================================================
//
// This template allows you to create any image-based multiple choice quiz.
// Follow these steps to create your own quiz:
//
// 1. PREPARE YOUR IMAGES:
//    - Place all question images in the public/images folder
//    - Recommended image dimensions: 800x600px or similar 4:3/16:9 ratio
//    - Supported formats: PNG, JPG, SVG
//    - Example path: public/images/question1.jpg will be referenced as "/images/question1.jpg"
//
// 2. CUSTOMIZE QUIZ APPEARANCE:
//    - Update QUIZ_CONFIG below with:
//      * title: Your quiz title
//      * description: Brief quiz description
//      * themeColor: Choose your accent color (see section below)
//      * startScreenImage: Optional image to show on start screen (path relative to public folder)
//
// 2.1 CUSTOMIZING THEME COLORS:
//    - Default available colors: 'blue', 'green', 'sky', 'red', 'purple', 'orange', 'pink'
//    - To add a new color (e.g., 'indigo'):
//      1. Add the color to the themeColor type in src/types.ts
//      2. Add the following classes to tailwind.config.js safelist:
//         'bg-indigo-50',
//         'bg-indigo-100',
//         'bg-indigo-600',
//         'bg-indigo-700',
//         'text-indigo-600',
//         'text-indigo-700',
//         'text-indigo-800',
//         'text-indigo-900',
//         'border-indigo-500',
//         'border-indigo-200',
//         'hover:bg-indigo-700',
//         'hover:text-indigo-700',
//         'hover:bg-indigo-50'
//      3. Use the new color in your QUIZ_CONFIG
//
// 3. ADD YOUR QUESTIONS:
//    - Follow the templateQuestions format below
//    - Each question requires:
//      * id: Unique number for each question
//      * question: The question text shown to users
//      * correctAnswer: The correct answer (exact match required)
//      * description: Brief context shown with the question
//      * fact: Interesting fact shown after answering (optional, can be empty string)
//      * imageUrl: Path to question image (relative to public folder)
//
// =================================================================

import type { QuestionData } from '../types';

// Quiz display configuration - Customize these values
export const QUIZ_CONFIG = {
  title: "Russian Federation Navy Surface Combatant Recognition and Identification",
  description: "Test your knowledge of RFN surface combatant silhouettes",
  themeColor: 'pink' as const,  // Available colors: 'blue' | 'green' | 'sky' | 'red' | 'purple' | 'orange' | 'pink'
  quiz_name: "rfn_sc", // Unique identifier for the quiz, used in database
  startScreenImage: "/images/quiz-start.png" // Optional: Image shown on start screen
};

// Example questions - Replace with your own
export const templateQuestions: QuestionData[] = [
  {
    id: 1,
    question: "What is this vessel?",
    correctAnswer: "Astrakhan PG",
    description: "",
    fact: "",
    imageUrl: "/images/Astrakhan PG.png"  // Place image in public/images/
  },
  {
    id: 2,
    question: "What is this landmark?",
    correctAnswer: "Eiffel Tower",
    description: "An iconic iron lattice tower on the Champ de Mars in Paris",
    fact: "The Eiffel Tower was originally intended to be a temporary structure for the 1889 World's Fair!",
    imageUrl: "/images/eiffel-tower.jpg"
  }
];

// =================================================================
// COMPLETE EXAMPLE - Geography Quiz
// =================================================================
/*
export const QUIZ_CONFIG = {
  title: "World Capitals Quiz",
  description: "Test your knowledge of famous capital cities",
  themeColor: 'green' as const,  // Try different colors like 'purple' or 'orange'!
  quiz_name: "world_capitals_quiz",
  startScreenImage: "/images/capitals-intro.jpg"
};

export const capitalQuestions: QuestionData[] = [
  {
    id: 1,
    question: "What capital city is this?",
    correctAnswer: "Tokyo",
    description: "The most populous metropolitan area in the world",
    fact: "Tokyo was originally known as Edo until 1868",
    imageUrl: "/images/tokyo.jpg"
  },
  {
    id: 2,
    question: "Which European capital is shown here?",
    correctAnswer: "Paris",
    description: "The capital and largest city of France",
    fact: "Paris has 20 different administrative districts called arrondissements",
    imageUrl: "/images/paris.jpg"
  },
  {
    id: 3,
    question: "Name this South American capital",
    correctAnswer: "Buenos Aires",
    description: "The capital of Argentina",
    fact: "Buenos Aires means 'fair winds' in Spanish",
    imageUrl: "/images/buenos-aires.jpg"
  }
];
*/

// =================================================================
// TIPS FOR GOOD QUESTIONS
// =================================================================
// 1. Use clear, high-quality images
// 2. Keep question text concise and specific
// 3. Ensure correct answers are unambiguous
// 4. Add interesting facts to make the quiz educational
// 5. Use consistent formatting for similar questions
// 6. Test your image paths before deploying
// =================================================================
