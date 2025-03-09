import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Clock, Code, FileText, MessageSquare, PlayCircle, XCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ChallengeDetailProps {
  challengeId: string;
  onBack: () => void;
}

export const ChallengeDetail: React.FC<ChallengeDetailProps> = ({ challengeId, onBack }) => {
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("javascript");
  const [code, setCode] = useState<string>(`function twoSum(nums, target) {
  // Your code here
  
}`);

  // This is mock data - in a real app, you would fetch this based on the challengeId
  const challenge = {
    id: challengeId,
    title: "Two Sum",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    difficulty: "Easy",
    category: "Arrays & Hashing",
    timeEstimate: "15-20 min",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
      }
    ],
    constraints: [
      "2 <= nums.length <= 104",
      "-109 <= nums[i] <= 109",
      "-109 <= target <= 109",
      "Only one valid answer exists."
    ],
    hints: [
      "Try to use a hash map to track the numbers you've seen so far.",
      "For each number, check if the target - current number exists in your hash map."
    ],
    solutions: {
      optimal: {
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        approach: "Use a hash map to store the values we've seen and their indices. For each number, check if its complement (target - num) exists in the hash map."
      }
    }
  };

  const handleRunCode = () => {
    toast({
      title: "Code Execution",
      description: "Your code is being executed...",
    });
    // In a real app, you would send the code to a backend for execution
    setTimeout(() => {
      toast({
        title: "Code Execution Complete",
        description: "Your solution passed 4/5 test cases.",
        variant: "default",
      });
    }, 2000);
  };

  const handleSubmitSolution = () => {
    toast({
      title: "Solution Submitted",
      description: "Your solution is being evaluated...",
    });
    // In a real app, you would send the solution to a backend for verification
    setTimeout(() => {
      toast({
        title: "Congratulations!",
        description: "Your solution passed all test cases.",
        variant: "default",
      });
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow"
    >
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onBack}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Challenges
        </Button>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{challenge.title}</h2>
            <div className="flex items-center mt-2 space-x-2">
              <span className={`px-2 py-1 rounded text-xs font-medium 
                ${challenge.difficulty === "Easy" 
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" 
                  : challenge.difficulty === "Medium"
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                }`}>
                {challenge.difficulty}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {challenge.timeEstimate}
              </span>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button variant="outline" onClick={() => toast({ title: "Feature", description: "This feature is coming soon!" })}>
              <MessageSquare className="mr-2 h-4 w-4" />
              Discuss
            </Button>
            <Button variant="outline" onClick={() => toast({ title: "Feature", description: "This feature is coming soon!" })}>
              <FileText className="mr-2 h-4 w-4" />
              Solution
            </Button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="p-6 border-r border-gray-200 dark:border-gray-700 overflow-y-auto max-h-[calc(100vh-300px)]">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Problem Description</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{challenge.description}</p>
          
          <h4 className="text-md font-medium text-gray-900 dark:text-white mb-2">Examples:</h4>
          <div className="space-y-4 mb-6">
            {challenge.examples.map((example, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
                <p className="text-sm font-mono"><strong>Input:</strong> {example.input}</p>
                <p className="text-sm font-mono"><strong>Output:</strong> {example.output}</p>
                {example.explanation && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{example.explanation}</p>
                )}
              </div>
            ))}
          </div>
          
          <h4 className="text-md font-medium text-gray-900 dark:text-white mb-2">Constraints:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mb-6">
            {challenge.constraints.map((constraint, idx) => (
              <li key={idx} className="text-sm font-mono">{constraint}</li>
            ))}
          </ul>
          
          <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => toast({ 
                title: "Hint", 
                description: challenge.hints[0]
              })}
            >
              Need a hint?
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <div className="flex justify-between items-center">
              <div className="space-x-2">
                <Button 
                  variant={selectedLanguage === "javascript" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLanguage("javascript")}
                >
                  JavaScript
                </Button>
                <Button 
                  variant={selectedLanguage === "python" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLanguage("python")}
                >
                  Python
                </Button>
                <Button 
                  variant={selectedLanguage === "java" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedLanguage("java")}
                >
                  Java
                </Button>
              </div>
              
              <div className="space-x-2">
                <Button 
                  size="sm" 
                  variant="ghost"
                  onClick={() => toast({ title: "Reset", description: "Code has been reset to the initial state." })}
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex-1 p-4 bg-gray-900 font-mono text-white overflow-y-auto min-h-[300px]">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full bg-transparent resize-none outline-none"
              style={{ minHeight: "240px" }}
            />
          </div>
          
          <div className="p-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600 flex justify-between">
            <div>
              <Button variant="outline" size="sm" onClick={handleRunCode}>
                <PlayCircle className="mr-2 h-4 w-4" />
                Run Code
              </Button>
            </div>
            <Button onClick={handleSubmitSolution}>
              <CheckCircle className="mr-2 h-4 w-4" />
              Submit Solution
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
