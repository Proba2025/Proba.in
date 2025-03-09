import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, Code, ArrowRight, BarChart, Bookmark
} from "lucide-react";

interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  timeEstimate: string;
  popularity: number;
  isBookmarked: boolean;
}

interface ChallengesListProps {
  onSelectChallenge: (id: string) => void;
}

export const ChallengesList: React.FC<ChallengesListProps> = ({ onSelectChallenge }) => {
  // Mock data - in a real app this would come from an API
  const challenges: Challenge[] = [
    {
      id: "1",
      title: "Two Sum",
      description: "Find two numbers in an array that add up to a target value.",
      difficulty: "Easy",
      category: "Arrays & Hashing",
      timeEstimate: "15-20 min",
      popularity: 95,
      isBookmarked: false
    },
    {
      id: "2",
      title: "Valid Parentheses",
      description: "Determine if a string of parentheses is valid.",
      difficulty: "Easy",
      category: "Stack",
      timeEstimate: "10-15 min",
      popularity: 92,
      isBookmarked: true
    },
    {
      id: "3",
      title: "Merge Intervals",
      description: "Merge all overlapping intervals and return the non-overlapping intervals.",
      difficulty: "Medium",
      category: "Arrays & Sorting",
      timeEstimate: "20-30 min",
      popularity: 88,
      isBookmarked: false
    },
    {
      id: "4",
      title: "LRU Cache",
      description: "Design and implement a data structure for Least Recently Used (LRU) cache.",
      difficulty: "Medium",
      category: "Design",
      timeEstimate: "30-40 min",
      popularity: 85,
      isBookmarked: false
    },
    {
      id: "5",
      title: "Trapping Rain Water",
      description: "Calculate how much water can be trapped after raining.",
      difficulty: "Hard",
      category: "Dynamic Programming",
      timeEstimate: "40-50 min",
      popularity: 80,
      isBookmarked: false
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const getDifficultyColor = (difficulty: "Easy" | "Medium" | "Hard") => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Medium": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Hard": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-4"
    >
      {challenges.map((challenge) => (
        <motion.div
          key={challenge.id}
          variants={item}
          whileHover={{ scale: 1.01 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-md transition-all cursor-pointer"
          onClick={() => onSelectChallenge(challenge.id)}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">{challenge.title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{challenge.description}</p>
            </div>
            <Bookmark 
              className={`h-5 w-5 ${challenge.isBookmarked ? 'fill-blue-500 text-blue-500' : 'text-gray-400'}`} 
            />
          </div>
          
          <div className="mt-4 flex items-center flex-wrap gap-2">
            <Badge className={getDifficultyColor(challenge.difficulty)}>
              {challenge.difficulty}
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 border-blue-200 dark:border-blue-800">
              {challenge.category}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 ml-auto">
              <Clock className="h-3 w-3" />
              <span>{challenge.timeEstimate}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 ml-2">
              <BarChart className="h-3 w-3" />
              <span>{challenge.popularity}% success</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
            <div className="flex space-x-2">
              <Badge variant="outline" className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <Code className="h-3 w-3 mr-1" />
                Python
              </Badge>
              <Badge variant="outline" className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <Code className="h-3 w-3 mr-1" />
                JavaScript
              </Badge>
            </div>
            <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-500" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
