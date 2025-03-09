import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, BookOpen, CheckCircle, Clock, Code, 
  GitBranch, GraduationCap, Layers, Lock
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const ChallengeTracks = () => {
  const { toast } = useToast();

  // Mock data - in a real app this would come from an API
  const tracks = [
    {
      id: "1",
      title: "Data Structures & Algorithms",
      description: "Master essential data structures and algorithms for technical interviews.",
      image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2066&auto=format&fit=crop",
      progress: 35,
      totalChallenges: 45,
      completedChallenges: 16,
      difficulty: "Beginner to Advanced",
      estimatedHours: 25,
      isFeatured: true,
      isLocked: false
    },
    {
      id: "2",
      title: "Dynamic Programming Deep Dive",
      description: "Master the art of solving complex optimization problems.",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2074&auto=format&fit=crop",
      progress: 10,
      totalChallenges: 30,
      completedChallenges: 3,
      difficulty: "Intermediate to Advanced",
      estimatedHours: 20,
      isFeatured: false,
      isLocked: false
    },
    {
      id: "3",
      title: "System Design Fundamentals",
      description: "Learn how to design scalable systems and ace system design interviews.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      progress: 0,
      totalChallenges: 15,
      completedChallenges: 0,
      difficulty: "Intermediate to Advanced",
      estimatedHours: 15,
      isFeatured: false,
      isLocked: true
    },
    {
      id: "4",
      title: "Graph Algorithms Mastery",
      description: "Conquer graph problems with advanced techniques and algorithms.",
      image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop",
      progress: 0,
      totalChallenges: 25,
      completedChallenges: 0,
      difficulty: "Advanced",
      estimatedHours: 18,
      isFeatured: false,
      isLocked: true
    }
  ];

  const handleStartTrack = (trackId: string, isLocked: boolean) => {
    if (isLocked) {
      toast({
        title: "Premium Content",
        description: "This track is available for premium subscribers only.",
      });
    } else {
      toast({
        title: "Track Started",
        description: `You've started the track. Your progress will be tracked.`,
      });
    }
  };

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

  return (
    <div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Learning Tracks</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Structured pathways designed to build your skills systematically. Each track contains curated challenges 
          to help you master specific topics.
        </p>
      </motion.div>

      {/* Featured Track */}
      {tracks.filter(track => track.isFeatured).map(track => (
        <motion.div
          key={track.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl overflow-hidden shadow-xl"
        >
          <div className="md:flex">
            <div className="md:w-1/3 h-48 md:h-auto relative">
              <img 
                src={track.image} 
                alt={track.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <Badge className="bg-blue-500 text-white px-3 py-1 text-sm">
                  Featured Track
                </Badge>
              </div>
            </div>
            <div className="p-6 md:w-2/3 text-white">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">{track.title}</h3>
                <Badge variant="outline" className="border-white/30 text-white">
                  {track.difficulty}
                </Badge>
              </div>
              <p className="mb-4 text-blue-100">{track.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">{track.completedChallenges}</div>
                  <div className="text-xs text-blue-200">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{track.totalChallenges}</div>
                  <div className="text-xs text-blue-200">Total Challenges</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{track.progress}%</div>
                  <div className="text-xs text-blue-200">Progress</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{track.estimatedHours}h</div>
                  <div className="text-xs text-blue-200">Est. Time</div>
                </div>
              </div>
              
              <div className="w-full bg-blue-900 rounded-full h-2.5 mb-6">
                <div 
                  className="bg-white h-2.5 rounded-full" 
                  style={{ width: `${track.progress}%` }}
                ></div>
              </div>
              
              <div className="flex justify-end">
                <Button 
                  onClick={() => handleStartTrack(track.id, track.isLocked)}
                  className="bg-white text-blue-700 hover:bg-blue-50"
                >
                  {track.progress > 0 ? "Continue Learning" : "Start Track"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {tracks.filter(track => !track.isFeatured).map(track => (
          <motion.div
            key={track.id}
            variants={item}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <div className="h-48 relative">
              <img 
                src={track.image} 
                alt={track.title} 
                className="w-full h-full object-cover"
              />
              {track.isLocked && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-800 rounded-full p-3">
                    <Lock className="h-6 w-6 text-yellow-500" />
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{track.title}</h3>
                <Badge 
                  variant="outline" 
                  className="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                >
                  {track.difficulty}
                </Badge>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{track.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Layers className="h-4 w-4 mr-2 text-blue-500" />
                  <span>{track.totalChallenges} Challenges</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="h-4 w-4 mr-2 text-blue-500" />
                  <span>~{track.estimatedHours} hours</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-4 w-4 mr-2 text-blue-500" />
                  <span>{track.completedChallenges} Completed</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <GitBranch className="h-4 w-4 mr-2 text-blue-500" />
                  <span>Multiple Paths</span>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${track.progress}%` }}
                ></div>
              </div>
              
              <div className="mt-auto pt-4 flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  {track.isLocked ? (
                    <div className="flex items-center">
                      <GraduationCap className="h-4 w-4 mr-1 text-yellow-500" />
                      <span className="text-yellow-600 dark:text-yellow-500">Premium</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>{track.progress > 0 ? `${track.progress}% Complete` : "Not started"}</span>
                    </div>
                  )}
                </div>
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => handleStartTrack(track.id, track.isLocked)}
                  className="flex items-center gap-1"
                >
                  {track.isLocked ? (
                    <>Unlock<Lock className="h-3 w-3" /></>
                  ) : (
                    <>Start Track<ArrowRight className="h-3 w-3" /></>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
