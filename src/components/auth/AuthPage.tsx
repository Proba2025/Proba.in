import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";
import { useNavigate } from "react-router-dom";

export const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn);
  };

  const handleDemoLogin = () => {
    // In a real app, this would authenticate the user
    // For now, just redirect to home and show a success message
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      
      {/* Decorative elements */}
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute right-1/4 bottom-1/4 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl animate-subtle-pulse" />
      
      <div className="z-10 flex flex-col md:flex-row w-full max-w-5xl overflow-hidden relative">
        {/* Left side - Branding */}
        <div className="w-full md:w-2/5 p-8 flex flex-col justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="h-12 w-12 bg-blue-600 rounded-xl mb-6"></div>
            <h1 className="text-4xl font-bold text-gray-900">
              Experience simplicity.
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Sign in to continue your journey with our platform designed with beauty and functionality in mind.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden md:block"
          >
            <button
              onClick={handleDemoLogin}
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
            >
              Continue without an account
            </button>
          </motion.div>
        </div>

        {/* Right side - Auth forms */}
        <div className="w-full md:w-3/5 glass md:rounded-3xl relative overflow-hidden px-4 py-12 sm:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={isSignIn ? "signin" : "signup"}
              initial={{ opacity: 0, x: isSignIn ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isSignIn ? 20 : -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full flex flex-col space-y-8"
            >
              <div className="staggered-fade-in">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {isSignIn ? "Welcome back" : "Create an account"}
                </h2>
                <p className="text-gray-600 mt-2">
                  {isSignIn
                    ? "Enter your credentials to access your account"
                    : "Fill in the form to create your account"}
                </p>
              </div>

              {isSignIn ? <SignInForm /> : <SignUpForm />}

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  {isSignIn ? "Don't have an account? " : "Already have an account? "}
                  <button
                    onClick={toggleAuthMode}
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    {isSignIn ? "Sign up" : "Sign in"}
                  </button>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="form-shimmer absolute inset-0 pointer-events-none"></div>
        </div>

        {/* Mobile demo login */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="md:hidden text-center mt-6"
        >
          <button
            onClick={handleDemoLogin}
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 mx-auto"
          >
            Continue without an account
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthPage;
