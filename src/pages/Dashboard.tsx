import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { BusinessDashboardContent } from "@/components/dashboard/business/BusinessDashboardContent";

const Dashboard = () => {
  const [accountType, setAccountType] = useState<"personal" | "business">("personal");
  
  // In a real app, you would fetch the user's account type from an API
  // This is just a demo to show both dashboard types
  useEffect(() => {
    // Check if URL contains a type parameter
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    if (type === "business") {
      setAccountType("business");
      document.title = "Proba | Business Dashboard";
    } else {
      setAccountType("personal");
      document.title = "Proba | Dashboard";
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex h-screen w-full bg-gray-50 dark:bg-gray-900"
    >
      <AnimatePresence mode="wait">
        <Sidebar />
      </AnimatePresence>
      <motion.main
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="flex-1 overflow-auto"
      >
        <AnimatePresence mode="wait">
          {accountType === "personal" ? (
            <motion.div
              key="personal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <DashboardContent />
            </motion.div>
          ) : (
            <motion.div
              key="business"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <BusinessDashboardContent />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.main>
    </motion.div>
  );
};

export default Dashboard;
