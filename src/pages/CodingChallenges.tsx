import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { CodingChallengesContent } from "@/components/dashboard/coding-challenges/CodingChallengesContent";

const CodingChallenges = () => {
  useEffect(() => {
    document.title = "Proba | Coding Challenges";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex h-screen w-full bg-gray-50 dark:bg-gray-900"
    >
      <Sidebar />
      <motion.main
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="flex-1 overflow-auto"
      >
        <CodingChallengesContent />
      </motion.main>
    </motion.div>
  );
};

export default CodingChallenges;
