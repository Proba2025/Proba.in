import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChallengesList } from "./ChallengesList";
import { ChallengeDetail } from "./ChallengeDetail";
import { ChallengeFilters } from "./ChallengeFilters";
import { ChallengeLeaderboard } from "./ChallengeLeaderboard";
import { ChallengeTracks } from "./ChallengeTracks";

export const CodingChallengesContent = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(null);

  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Coding Challenges</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Practice with our curated collection of coding challenges and prepare for technical interviews.
        </p>
      </motion.div>

      <Tabs defaultValue="explore" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="explore">Explore</TabsTrigger>
          <TabsTrigger value="tracks">Learning Tracks</TabsTrigger>
          <TabsTrigger value="my-challenges">My Challenges</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
        </TabsList>
        
        <TabsContent value="explore" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-3">
              <ChallengeFilters />
            </div>
            <div className="lg:col-span-9">
              {!selectedChallenge ? (
                <ChallengesList onSelectChallenge={setSelectedChallenge} />
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChallengeDetail 
                    challengeId={selectedChallenge} 
                    onBack={() => setSelectedChallenge(null)} 
                  />
                </motion.div>
              )}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="tracks">
          <ChallengeTracks />
        </TabsContent>
        
        <TabsContent value="my-challenges">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">My Challenges</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Track your progress and revisit challenges you've attempted or bookmarked.
            </p>
            {/* Challenge history would go here */}
            <div className="mt-8 text-center p-10 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
              <p className="text-gray-500 dark:text-gray-400">You haven't attempted any challenges yet.</p>
              <button 
                onClick={() => (document.querySelector('button[value="explore"]') as HTMLButtonElement)?.click()}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Start Exploring
              </button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="leaderboard">
          <ChallengeLeaderboard />
        </TabsContent>
      </Tabs>
    </div>
  );
};
