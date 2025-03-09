import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  BarChart3,
  FileCheck,
  FileEdit,
  FileText,
  LineChart,
  PieChart,
  Plus,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Video
} from "lucide-react";
import { Input } from "@/components/ui/input";

// Mock data
const statsData = [
  { label: "Active Assessments", value: 28, increase: "+5", icon: FileText },
  { label: "Candidates Tested", value: 387, increase: "+42", icon: UserCheck },
  { label: "Avg. Completion Rate", value: "76%", increase: "+3%", icon: Target },
  { label: "Hiring Conversion", value: "24%", increase: "+2%", icon: TrendingUp },
];

const assessmentTypes = [
  { id: "technical", label: "Technical Assessment", active: 12, icon: FileEdit },
  { id: "coding", label: "Coding Challenge", active: 8, icon: FileCheck },
  { id: "interview", label: "AI Interview", active: 5, icon: Video },
  { id: "personality", label: "Soft Skills Assessment", active: 3, icon: Users },
];

export const BusinessDashboardContent = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleCreateAssessment = () => {
    toast({
      title: "Create New Assessment",
      description: "The assessment creation wizard would launch in a real application.",
    });
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Business Dashboard
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Manage your hiring assessments and track candidate performance
          </p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              className="pl-9 w-[240px]" 
              placeholder="Search assessments..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button onClick={handleCreateAssessment}>
            <Plus className="mr-2 h-4 w-4" />
            New Assessment
          </Button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div 
        variants={containerAnimation}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {statsData.map((stat) => (
          <motion.div
            key={stat.label}
            variants={itemAnimation}
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
        {/* Active Assessments */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Active Assessments</h2>
            <Button variant="ghost" className="text-blue-600 dark:text-blue-400">
              View all
            </Button>
          </div>
          
          <div className="space-y-4">
            {assessmentTypes.map((type) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="flex items-center justify-between rounded-lg border border-gray-100 dark:border-gray-700 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <type.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 dark:text-white">{type.label}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{type.active} active • {type.active * 12} candidates</p>
                  </div>
                </div>
                <Button size="sm" className="ml-4">
                  Manage
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Analytics Preview */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
        >
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Analytics</h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Completion Rate</span>
                <span className="text-sm font-medium text-gray-800 dark:text-white">76%</span>
              </div>
              <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: "76%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Average Score</span>
                <span className="text-sm font-medium text-gray-800 dark:text-white">72%</span>
              </div>
              <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: "72%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Hiring Conversion</span>
                <span className="text-sm font-medium text-gray-800 dark:text-white">24%</span>
              </div>
              <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: "24%" }}></div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mt-6">
              <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                <PieChart className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
                <span className="text-xs text-gray-600 dark:text-gray-300 text-center">Skills</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
                <span className="text-xs text-gray-600 dark:text-gray-300 text-center">Results</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                <LineChart className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
                <span className="text-xs text-gray-600 dark:text-gray-300 text-center">Trends</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <Button className="w-full" variant="outline">
              View Detailed Analytics
            </Button>
          </div>
        </motion.div>
      </div>

      {/* AI Features */}
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
              <h2 className="text-xl font-bold">AI-Powered Hiring Solutions</h2>
            </div>
            <p className="text-blue-100 max-w-2xl">
              Our advanced AI assessment tools can help you identify top candidates with 80% higher accuracy than traditional methods. Customize your assessment flows and get detailed insights into candidate capabilities.
            </p>
          </div>
          <Button 
            variant="secondary" 
            className="whitespace-nowrap"
            onClick={() => toast({
              title: "AI Features",
              description: "Our team would set up a personalized demo in a real application.",
            })}
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Explore AI Features
          </Button>
        </div>
      </motion.div>

      {/* Recent Candidates */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Recent Candidates</h2>
          <Button variant="ghost" className="text-blue-600 dark:text-blue-400">
            View all candidates
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 dark:text-gray-400 text-sm">
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Assessment</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Score</th>
                <th className="pb-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {[
                { name: "Emily Chen", assessment: "Full Stack Developer", status: "Completed", score: 92 },
                { name: "Jamal Williams", assessment: "Frontend Engineer", status: "In Progress", score: null },
                { name: "Sarah Miller", assessment: "DevOps Specialist", status: "Completed", score: 87 },
                { name: "David Rodriguez", assessment: "Backend Developer", status: "Not Started", score: null },
                { name: "Aisha Khan", assessment: "UX Designer", status: "Completed", score: 95 },
              ].map((candidate, index) => (
                <tr key={index} className="text-gray-800 dark:text-gray-200">
                  <td className="py-3 font-medium">{candidate.name}</td>
                  <td className="py-3">{candidate.assessment}</td>
                  <td className="py-3">
                    <span 
                      className={`px-2 py-1 text-xs rounded-full ${
                        candidate.status === "Completed" 
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" 
                          : candidate.status === "In Progress"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {candidate.status}
                    </span>
                  </td>
                  <td className="py-3">
                    {candidate.score !== null ? `${candidate.score}%` : "-"}
                  </td>
                  <td className="py-3 text-right">
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};
