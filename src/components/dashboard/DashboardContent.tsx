import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  ArrowRight,
  BookOpen,
  Code,
  FileText,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Users
} from "lucide-react";

const statsData = [
  { label: "Practice Tests Taken", value: 87, increase: "+12%", icon: FileText },
  { label: "Mock Interviews", value: 23, increase: "+5%", icon: MessageSquare },
  { label: "Coding Challenges", value: 56, increase: "+8%", icon: Code },
  { label: "Learning Hours", value: 142, increase: "+15%", icon: BookOpen },
];

export const DashboardContent = () => {
  const { toast } = useToast();
  
  const handleStartActivity = (activity: string) => {
    toast({
      title: `Starting ${activity}`,
      description: "This would launch the activity in a real application.",
    });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Welcome back, <span className="text-blue-600">Alex</span>
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Track your progress and continue preparing for your dream job.
          </p>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {statsData.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</h3>
                <div className="mt-1 flex items-center text-sm">
                  <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500 font-medium">{stat.increase}</span>
                  <span className="ml-1 text-gray-500 dark:text-gray-400">from last month</span>
                </div>
              </div>
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <stat.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Recommended Activities */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Recommended for You</h2>
            <Button variant="ghost" className="text-blue-600 dark:text-blue-400">
              View all
            </Button>
          </div>
          
          <div className="space-y-4">
            {[
              { title: "Python Backend Developer Interview", type: "Mock Interview", time: "35 min", icon: MessageSquare },
              { title: "System Design Challenge: E-commerce Platform", type: "Coding Challenge", time: "60 min", icon: Code },
              { title: "Front-end Framework Assessment", type: "Mock Test", time: "45 min", icon: FileText },
            ].map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="flex items-center justify-between rounded-lg border border-gray-100 dark:border-gray-700 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <activity.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 dark:text-white">{activity.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{activity.type} • {activity.time}</p>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="ml-4"
                  onClick={() => handleStartActivity(activity.title)}
                >
                  Start
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
        >
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Your Progress</h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Mock Interviews</span>
                <span className="text-sm font-medium text-gray-800 dark:text-white">8/10</span>
              </div>
              <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Coding Skills</span>
                <span className="text-sm font-medium text-gray-800 dark:text-white">65%</span>
              </div>
              <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: "65%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">System Design</span>
                <span className="text-sm font-medium text-gray-800 dark:text-white">45%</span>
              </div>
              <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: "45%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Soft Skills</span>
                <span className="text-sm font-medium text-gray-800 dark:text-white">72%</span>
              </div>
              <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: "72%" }}></div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <Button className="w-full" variant="outline">
              View Complete Profile
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* B2B / Enterprise Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-6 text-white"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center mb-2">
              <Sparkles className="h-6 w-6 mr-2" />
              <h2 className="text-xl font-bold">Proba for Enterprise</h2>
            </div>
            <p className="text-blue-100 max-w-2xl">
              Streamline your hiring process with AI-driven assessments, coding challenges, and structured interviews to identify the best talent efficiently.
            </p>
          </div>
          <Button 
            variant="secondary" 
            className="whitespace-nowrap"
            onClick={() => toast({
              title: "Enterprise Demo",
              description: "A sales representative would contact you in a real application.",
            })}
          >
            <Users className="mr-2 h-4 w-4" />
            Schedule Demo
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
