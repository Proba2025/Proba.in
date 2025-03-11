import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import logo from "../../../public/favicon.ico";
import {
  ChevronLeft,
  LayoutDashboard,
  FileText,
  Code,
  MessageSquare,
  PieChart,
  Settings,
  Users,
  BookOpen,
  LogOut,
  Moon,
  Sun,
  Bell,
  HelpCircle,
  FolderKanban,
  ChevronRight,
} from "lucide-react";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  const { toast } = useToast();
  const location = useLocation();

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");

    toast({
      title: `${
        newTheme.charAt(0).toUpperCase() + newTheme.slice(1)
      } mode activated`,
      description: `Successfully switched to ${newTheme} mode.`,
    });
  };

  // Handle window resize to automatically collapse sidebar on smaller screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on initial load

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { icon: LayoutDashboard, label: "Overview", path: "/dashboard" },
    { icon: FileText, label: "Mock Tests", path: "/dashboard/mock-tests" },
    {
      icon: MessageSquare,
      label: "Mock Interviews",
      path: "/dashboard/mock-interviews",
    },
    {
      icon: Code,
      label: "Coding Challenges",
      path: "/dashboard/coding-challenges",
    },
    { icon: PieChart, label: "Analytics", path: "/dashboard/analytics" },
    { icon: Users, label: "B2B Solutions", path: "/dashboard/b2b" },
    { icon: FolderKanban, label: "Projects", path: "/dashboard/projects" },
    { icon: Settings, label: "Settings", path: "/dashboard/settings" },
  ];

  const handleLogout = () => {
    toast({
      title: "Logging out",
      description: "You would be logged out in a real application.",
    });
  };

  const handleHelp = () => {
    toast({
      title: "Help Center",
      description: "Our support team is available 24/7. How can we assist you?",
    });
  };

  const handleNotifications = () => {
    toast({
      title: "Notifications",
      description: "You have 3 unread notifications.",
    });
  };

  // Sidebar animation variants
  const sidebarVariants = {
    expanded: { width: 250, transition: { duration: 0.3, ease: "easeInOut" } },
    collapsed: { width: 80, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <motion.div
      initial={collapsed ? "collapsed" : "expanded"}
      animate={collapsed ? "collapsed" : "expanded"}
      variants={sidebarVariants}
      className="h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-sm flex flex-col z-20"
    >
      {/* Logo */}
      <div className="p-4 flex items-center justify-between">
        <AnimatePresence mode="wait">
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              <img src={logo} alt="logo" className="h-8 w-8" />
              <span className="font-bold text-xl">Proba</span>
            </motion.div>
          )}
        </AnimatePresence>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
        >
          <motion.div
            key={collapsed.toString()} // Ensures animation applies when component changes
            initial={{ opacity: 0, x: collapsed ? -10 : 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {collapsed ? (
              <img src={logo} alt="logo" className="h-8 w-8" />
            ) : (
              <ChevronLeft className="h-5 w-5" />
            )}
          </motion.div>
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4 scrollbar-none">
        <nav className="px-2 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.label}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                  isActive
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                )}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="h-5 w-5" />
                </motion.div>
                <AnimatePresence mode="wait">
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2 }}
                      className="whitespace-nowrap font-medium"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Utility Buttons */}
      <div className="p-2 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={cn(
              "flex items-center justify-center w-full py-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all",
              collapsed ? "rounded-lg" : "rounded-lg px-3 justify-start gap-3"
            )}
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
            <AnimatePresence mode="wait">
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="whitespace-nowrap font-medium"
                >
                  {theme === "light" ? "Dark Mode" : "Light Mode"}
                </motion.span>
              )}
            </AnimatePresence>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleNotifications}
            className={cn(
              "flex items-center justify-center w-full py-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all",
              collapsed ? "rounded-lg" : "rounded-lg px-3 justify-start gap-3"
            )}
          >
            <Bell className="h-5 w-5" />
            <AnimatePresence mode="wait">
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="whitespace-nowrap font-medium"
                >
                  Notifications
                </motion.span>
              )}
            </AnimatePresence>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleHelp}
            className={cn(
              "flex items-center justify-center w-full py-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all",
              collapsed ? "rounded-lg" : "rounded-lg px-3 justify-start gap-3"
            )}
          >
            <HelpCircle className="h-5 w-5" />
            <AnimatePresence mode="wait">
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="whitespace-nowrap font-medium"
                >
                  Help Center
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <Button
          variant="ghost"
          onClick={handleLogout}
          className={cn(
            "w-full flex items-center gap-3 justify-start px-3 py-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
          )}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <LogOut className="h-5 w-5" />
          </motion.div>
          <AnimatePresence mode="wait">
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
                className="whitespace-nowrap font-medium"
              >
                Logout
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </div>
    </motion.div>
  );
};
