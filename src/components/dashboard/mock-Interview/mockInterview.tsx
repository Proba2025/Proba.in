import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, UserPlus, Video, FileCheck, PieChart, BarChart, Award, Bookmark } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Interview = () => {
  const { toast } = useToast();

  const handleButtonClick = (mode: string) => {
    toast({
      title: `Starting ${mode}`,
      description: "This feature will be available soon.",
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="p-6 md:p-8 space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <h1 className="text-4xl font-bold tracking-tight">Interview Preparation</h1>
        <p className="text-muted-foreground">Choose your interview preparation mode</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2"
        >
          <Card className="overflow-hidden border bg-card/50 backdrop-blur-sm h-full">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Practice Options</h2>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <motion.div variants={itemVariants}>
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border bg-card/80">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Video className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold">Mock Interview</h3>
                        <p className="text-sm text-muted-foreground">Practice with AI-powered mock interviews</p>
                      </div>
                    </div>
                    <Button 
                      className="mt-4 w-full"
                      onClick={() => handleButtonClick("Mock Interview")}
                    >
                      Start Session
                    </Button>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border bg-card/80">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold">Timed Practice</h3>
                        <p className="text-sm text-muted-foreground">Complete timed interview questions</p>
                      </div>
                    </div>
                    <Button 
                      className="mt-4 w-full"
                      onClick={() => handleButtonClick("Timed Practice")}
                    >
                      Begin Timer
                    </Button>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border bg-card/80">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <UserPlus className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold">Peer Practice</h3>
                        <p className="text-sm text-muted-foreground">Practice with other candidates</p>
                      </div>
                    </div>
                    <Button 
                      className="mt-4 w-full"
                      onClick={() => handleButtonClick("Peer Practice")}
                    >
                      Find Partner
                    </Button>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border bg-card/80">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <FileCheck className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold">Review Mode</h3>
                        <p className="text-sm text-muted-foreground">Review past interview sessions</p>
                      </div>
                    </div>
                    <Button 
                      className="mt-4 w-full"
                      onClick={() => handleButtonClick("Review Mode")}
                    >
                      View History
                    </Button>
                  </Card>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="border bg-card/50 backdrop-blur-sm h-full">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Statistics</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <PieChart className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">Sessions Completed</span>
                  </div>
                  <span className="font-semibold">12</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BarChart className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">Average Score</span>
                  </div>
                  <span className="font-semibold">85%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">Skills Mastered</span>
                  </div>
                  <span className="font-semibold">7</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Bookmark className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">Saved Questions</span>
                  </div>
                  <span className="font-semibold">23</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-6">
                View Detailed Stats
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Interview;
