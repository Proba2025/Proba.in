import React, { Suspense, lazy, useEffect } from "react";
import { motion } from "framer-motion";
import {Sidebar} from "@/components/dashboard/Sidebar";

// Lazy Load Components for Performance Optimization
const Analytics = lazy(() => import("@/components/dashboard/analytics/Analytics"));

const CodingChallenges = () => {
  useEffect(() => {
    document.title = "Proba | Analytics";
  }, []);

  return (
    <div className="flex h-screen w-full bg-gray-50 dark:bg-gray-900">
      {/* Sidebar Navigation */}
      <Suspense fallback={<div className="p-4">Loading Sidebar...</div>}>
        <Sidebar />
      </Suspense>

      {/* Main Content */}
      <motion.main
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        role="main"
        aria-label="Coding Challenges Content"
        className="flex-1 overflow-auto p-4 md:p-6 focus:outline-none"
      >
        <Suspense fallback={<div className="p-4">Loading Mock Interview...</div>}>
          <Analytics />
        </Suspense>
      </motion.main>
    </div>
  );
};

export default CodingChallenges;
