import React from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Star, Users, ArrowUpRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const ChallengeLeaderboard = () => {
  const { toast } = useToast();

  // Mock leaderboard data - in a real app this would come from an API
  const leaderboardData = [
    { rank: 1, name: "Alex Johnson", score: 4850, challenges: 142, photo: "https://i.pravatar.cc/150?img=1" },
    { rank: 2, name: "Sophie Chen", score: 4720, challenges: 135, photo: "https://i.pravatar.cc/150?img=5" },
    { rank: 3, name: "Miguel Rodriguez", score: 4690, challenges: 138, photo: "https://i.pravatar.cc/150?img=8" },
    { rank: 4, name: "Emily Wong", score: 4510, challenges: 130, photo: "https://i.pravatar.cc/150?img=9" },
    { rank: 5, name: "David Kim", score: 4350, challenges: 129, photo: "https://i.pravatar.cc/150?img=3" },
    { rank: 6, name: "Jessica Taylor", score: 4220, challenges: 124, photo: "https://i.pravatar.cc/150?img=4" },
    { rank: 7, name: "Marcus Johnson", score: 4100, challenges: 119, photo: "https://i.pravatar.cc/150?img=6" },
    { rank: 8, name: "Olivia Martinez", score: 3940, challenges: 115, photo: "https://i.pravatar.cc/150?img=10" },
    { rank: 9, name: "Ryan Patel", score: 3820, challenges: 112, photo: "https://i.pravatar.cc/150?img=12" },
    { rank: 10, name: "Lisa Wilson", score: 3750, challenges: 108, photo: "https://i.pravatar.cc/150?img=11" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const handleViewProfile = (name: string) => {
    toast({
      title: "View Profile",
      description: `You would see ${name}'s profile in a real app.`,
    });
  };

  const getRankIcon = (rank: number) => {
    switch(rank) {
      case 1: return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2: return <Medal className="h-5 w-5 text-gray-400" />;
      case 3: return <Medal className="h-5 w-5 text-amber-700" />;
      default: return <span className="font-bold text-gray-500">{rank}</span>;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
          <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
          Global Leaderboard
        </h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Top performers across all coding challenges.
        </p>
      </div>
      
      <div className="p-6 overflow-x-auto">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6 flex items-center">
          <Users className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
          <p className="text-blue-700 dark:text-blue-300 text-sm">
            <strong>Your rank:</strong> 42nd out of 12,547 participants. Keep solving to climb higher!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg p-5 text-white shadow-lg"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-yellow-100 text-sm font-medium">Top Scorer</p>
                <h3 className="font-bold text-lg mt-1">{leaderboardData[0].name}</h3>
              </div>
              <div className="bg-yellow-300 rounded-full p-2">
                <Trophy className="h-6 w-6 text-yellow-700" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-lg font-bold">{leaderboardData[0].score} points</p>
              <p className="text-yellow-100 text-sm">{leaderboardData[0].challenges} challenges completed</p>
            </div>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg p-5 text-white shadow-lg"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-100 text-sm font-medium">Second Place</p>
                <h3 className="font-bold text-lg mt-1">{leaderboardData[1].name}</h3>
              </div>
              <div className="bg-gray-200 rounded-full p-2">
                <Medal className="h-6 w-6 text-gray-700" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-lg font-bold">{leaderboardData[1].score} points</p>
              <p className="text-gray-100 text-sm">{leaderboardData[1].challenges} challenges completed</p>
            </div>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg p-5 text-white shadow-lg"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-amber-100 text-sm font-medium">Third Place</p>
                <h3 className="font-bold text-lg mt-1">{leaderboardData[2].name}</h3>
              </div>
              <div className="bg-amber-500 rounded-full p-2">
                <Medal className="h-6 w-6 text-amber-900" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-lg font-bold">{leaderboardData[2].score} points</p>
              <p className="text-amber-100 text-sm">{leaderboardData[2].challenges} challenges completed</p>
            </div>
          </motion.div>
        </div>
        
        <div className="overflow-hidden">
          <div className="overflow-x-auto">
            <motion.table 
              variants={container}
              initial="hidden"
              animate="show"
              className="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
            >
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Rank
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    User
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Score
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Challenges
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Profile
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {leaderboardData.map((user) => (
                  <motion.tr
                    key={user.rank}
                    variants={item}
                    whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                    className="hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700">
                        {getRankIcon(user.rank)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={user.photo} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {user.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-sm text-gray-900 dark:text-white">{user.score}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {user.challenges}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleViewProfile(user.name)}
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                      >
                        View 
                        <ArrowUpRight className="ml-1 h-3 w-3" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </div>
      </div>
    </div>
  );
};
