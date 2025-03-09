
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass p-12 rounded-2xl max-w-lg mx-auto"
        >
          <span className="px-4 py-2 rounded-full bg-accent/5 text-accent text-xs uppercase tracking-wider font-medium inline-block mb-6">
            Error 404
          </span>
          
          <h1 className="text-4xl font-medium mb-4">Page Not Found</h1>
          <p className="text-foreground/70 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <a
            href="/"
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium inline-block transition-all duration-300 button-highlight"
          >
            Return Home
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
