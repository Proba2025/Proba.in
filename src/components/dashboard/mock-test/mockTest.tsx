import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Target, Trophy, Timer, CheckCircle, BookOpen, Award, Medal, Zap, Lightbulb, Bookmark, ChevronRight, BarChart3, BarChart4, PieChart, Activity } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Test = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("tests");
  const [hoverCard, setHoverCard] = useState<string | null>(null);

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

  // Recommended tests based on user profile
  const recommendedTests = [
    { title: "Data Structures", level: "Intermediate", questions: 15, time: "45 min", completion: 0 },
    { title: "System Design", level: "Advanced", questions: 10, time: "60 min", completion: 25 },
    { title: "JavaScript Basics", level: "Beginner", questions: 20, time: "30 min", completion: 100 },
  ];

  return (
    <div className="p-4 md:p-8 space-y-6 lg:space-y-8 max-w-[1400px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Test Mode</h1>
            <p className="text-muted-foreground">Practice tests to assess and improve your skills</p>
          </div>
          <Button onClick={() => handleButtonClick("New Test")} className="w-full sm:w-auto">
            <Zap className="mr-2 h-4 w-4" />
            Start New Test
          </Button>
        </div>
      </motion.div>

      <Tabs defaultValue="tests" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-4">
          <TabsTrigger value="tests">Practice Tests</TabsTrigger>
          <TabsTrigger value="progress">My Progress</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <TabsContent value="tests" className="m-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="lg:col-span-2"
                >
                  <Card className="border bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-semibold mb-4">Practice Tests</h2>
                      
                      <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                      >
                        {[
                          { id: "quick", icon: Brain, title: "Quick Test", desc: "15-minute practice test", action: "Start Test" },
                          { id: "full", icon: Timer, title: "Full Practice", desc: "Complete practice exam", action: "Begin Exam" },
                          { id: "topic", icon: Target, title: "Topic Focus", desc: "Practice specific topics", action: "Select Topics" },
                          { id: "study", icon: BookOpen, title: "Study Materials", desc: "Access learning resources", action: "Browse Resources" }
                        ].map((item) => (
                          <motion.div 
                            key={item.id}
                            variants={itemVariants}
                            onMouseEnter={() => setHoverCard(item.id)}
                            onMouseLeave={() => setHoverCard(null)}
                          >
                            <Card className={`p-6 transition-all duration-300 cursor-pointer border ${hoverCard === item.id ? 'shadow-lg border-primary/30 bg-accent/30' : 'bg-card/80'}`}>
                              <div className="flex items-start space-x-4">
                                <div className={`p-3 rounded-full bg-primary/10 ${hoverCard === item.id ? 'bg-primary/20' : ''}`}>
                                  <item.icon className={`w-6 h-6 text-primary`} />
                                </div>
                                <div className="space-y-2">
                                  <h3 className="font-semibold">{item.title}</h3>
                                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                              </div>
                              <Button 
                                className={`mt-4 w-full ${hoverCard === item.id ? 'bg-primary/90' : ''}`}
                                onClick={() => handleButtonClick(item.title)}
                              >
                                {item.action}
                              </Button>
                            </Card>
                          </motion.div>
                        ))}
                      </motion.div>

                      <div className="mt-8">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold">Recommended for You</h3>
                          <Button variant="ghost" size="sm" onClick={() => handleButtonClick("View All")}>
                            View All
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="space-y-3">
                          {recommendedTests.map((test, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <Card className="p-4 hover:bg-accent/30 transition-colors duration-200">
                                <div className="flex flex-col sm:flex-row justify-between gap-2">
                                  <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                      <h4 className="font-medium">{test.title}</h4>
                                      <Badge variant="outline" className="text-xs">{test.level}</Badge>
                                    </div>
                                    <div className="flex items-center text-sm text-muted-foreground gap-3">
                                      <span className="flex items-center">
                                        <Lightbulb className="h-3 w-3 mr-1" />
                                        {test.questions} questions
                                      </span>
                                      <span className="flex items-center">
                                        <Timer className="h-3 w-3 mr-1" />
                                        {test.time}
                                      </span>
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-center space-x-3 mt-2 sm:mt-0">
                                    {test.completion > 0 && (
                                      <div className="flex items-center text-xs">
                                        <Progress value={test.completion} className="w-16 h-1.5 mr-2" />
                                        <span className="text-muted-foreground">{test.completion}%</span>
                                      </div>
                                    )}
                                    <Button 
                                      size="sm" 
                                      onClick={() => handleButtonClick(`${test.title} Test`)}
                                    >
                                      {test.completion === 100 ? "Retake" : (test.completion > 0 ? "Continue" : "Start")}
                                    </Button>
                                  </div>
                                </div>
                              </Card>
                            </motion.div>
                          ))}
                        </div>
                      </div>
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
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-semibold mb-4">Current Progress</h2>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <Trophy className="h-5 w-5 text-primary" />
                              <span>Overall Completion</span>
                            </div>
                            <span className="font-semibold">75%</span>
                          </div>
                          <Progress value={75} className="h-2 mb-4" />
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="font-semibold">Skills Progress</h3>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Technical Knowledge</span>
                              <span>85%</span>
                            </div>
                            <Progress value={85} className="h-1.5" />
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Problem Solving</span>
                              <span>70%</span>
                            </div>
                            <Progress value={70} className="h-1.5" />
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Communication</span>
                              <span>65%</span>
                            </div>
                            <Progress value={65} className="h-1.5" />
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <h3 className="font-semibold">Achievements</h3>
                          
                          <div className="flex items-center space-x-3">
                            <div className="p-2 rounded-full bg-primary/10">
                              <CheckCircle className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-sm">Completed 10 Practice Tests</span>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <div className="p-2 rounded-full bg-primary/10">
                              <CheckCircle className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-sm">Mastered 5 Topics</span>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <div className="p-2 rounded-full bg-primary/10">
                              <Award className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-sm">90% Score on Full Practice</span>
                          </div>
                        </div>

                        <Button variant="outline" className="w-full mt-2" onClick={() => handleButtonClick("Achievements")}>
                          All Achievements
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="progress" className="m-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border bg-card/50 backdrop-blur-sm md:col-span-2">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-6">Your Performance</h2>
                    
                    <div className="space-y-8">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Card className="p-4 text-center">
                          <div className="flex flex-col items-center">
                            <Trophy className="h-6 w-6 text-yellow-500 mb-2" />
                            <h4 className="text-2xl font-bold">25</h4>
                            <p className="text-xs text-muted-foreground">Tests Taken</p>
                          </div>
                        </Card>
                        
                        <Card className="p-4 text-center">
                          <div className="flex flex-col items-center">
                            <Medal className="h-6 w-6 text-blue-500 mb-2" />
                            <h4 className="text-2xl font-bold">8</h4>
                            <p className="text-xs text-muted-foreground">Perfect Scores</p>
                          </div>
                        </Card>
                        
                        <Card className="p-4 text-center">
                          <div className="flex flex-col items-center">
                            <Activity className="h-6 w-6 text-green-500 mb-2" />
                            <h4 className="text-2xl font-bold">78%</h4>
                            <p className="text-xs text-muted-foreground">Avg. Score</p>
                          </div>
                        </Card>
                        
                        <Card className="p-4 text-center">
                          <div className="flex flex-col items-center">
                            <Bookmark className="h-6 w-6 text-purple-500 mb-2" />
                            <h4 className="text-2xl font-bold">12</h4>
                            <p className="text-xs text-muted-foreground">Saved Tests</p>
                          </div>
                        </Card>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-medium">Test History</h3>
                        <div className="space-y-3">
                          {[
                            { name: "Full Stack Development", date: "May 5, 2023", score: 92, total: 100 },
                            { name: "Data Structures", date: "April 28, 2023", score: 85, total: 100 },
                            { name: "System Design Interview", date: "April 15, 2023", score: 78, total: 100 },
                            { name: "JavaScript Fundamentals", date: "April 3, 2023", score: 95, total: 100 },
                          ].map((test, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <Card className="p-4">
                                <div className="flex flex-col sm:flex-row justify-between gap-2">
                                  <div>
                                    <h4 className="font-medium">{test.name}</h4>
                                    <p className="text-xs text-muted-foreground">{test.date}</p>
                                  </div>
                                  <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                                    <div>
                                      <span className="text-sm font-medium">{test.score}/{test.total}</span>
                                      <Progress value={(test.score / test.total) * 100} className="h-1.5 w-24" />
                                    </div>
                                    <Button size="sm" variant="outline" onClick={() => handleButtonClick(`Review ${test.name}`)}>
                                      Review
                                    </Button>
                                  </div>
                                </div>
                              </Card>
                            </motion.div>
                          ))}
                        </div>
                        <Button className="w-full" variant="outline" onClick={() => handleButtonClick("View All History")}>
                          View Complete History
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="space-y-6">
                  <Card className="border bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Skill Breakdown</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <div className="flex items-center">
                              <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                              <span>Frontend</span>
                            </div>
                            <span>92%</span>
                          </div>
                          <Progress value={92} className="h-1.5" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <div className="flex items-center">
                              <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                              <span>Backend</span>
                            </div>
                            <span>78%</span>
                          </div>
                          <Progress value={78} className="h-1.5" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <div className="flex items-center">
                              <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                              <span>Algorithms</span>
                            </div>
                            <span>85%</span>
                          </div>
                          <Progress value={85} className="h-1.5" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <div className="flex items-center">
                              <span className="inline-block w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                              <span>System Design</span>
                            </div>
                            <span>65%</span>
                          </div>
                          <Progress value={65} className="h-1.5" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <div className="flex items-center">
                              <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                              <span>Database</span>
                            </div>
                            <span>70%</span>
                          </div>
                          <Progress value={70} className="h-1.5" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Recommended Focus</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-2">
                          <div className="p-1.5 rounded-full bg-primary/10 mt-0.5">
                            <Target className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">System Design Principles</p>
                            <p className="text-xs text-muted-foreground">Improve your system design skills</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-2">
                          <div className="p-1.5 rounded-full bg-primary/10 mt-0.5">
                            <Target className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Database Optimization</p>
                            <p className="text-xs text-muted-foreground">Practice query optimization</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-2">
                          <div className="p-1.5 rounded-full bg-primary/10 mt-0.5">
                            <Target className="h-3.5 w-3.5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">Advanced Algorithms</p>
                            <p className="text-xs text-muted-foreground">Practice graph and dynamic programming</p>
                          </div>
                        </div>
                        
                        <Button variant="outline" className="w-full mt-2" onClick={() => handleButtonClick("Create Learning Plan")}>
                          Create Learning Plan
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="resources" className="m-0">
              <Card className="border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Learning Resources</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <BookOpen className="h-8 w-8 text-primary mb-4" />
                        <h3 className="text-lg font-medium mb-2">Study Guides</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Comprehensive guides covering all interview topics and test materials.
                        </p>
                        <Button variant="outline" className="w-full" onClick={() => handleButtonClick("Study Guides")}>
                          Browse Guides
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <PieChart className="h-8 w-8 text-primary mb-4" />
                        <h3 className="text-lg font-medium mb-2">Practice Problems</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Hundreds of practice problems with detailed solutions and explanations.
                        </p>
                        <Button variant="outline" className="w-full" onClick={() => handleButtonClick("Practice Problems")}>
                          Solve Problems
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <BarChart3 className="h-8 w-8 text-primary mb-4" />
                        <h3 className="text-lg font-medium mb-2">Video Courses</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          In-depth video courses taught by industry experts.
                        </p>
                        <Button variant="outline" className="w-full" onClick={() => handleButtonClick("Video Courses")}>
                          Watch Videos
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <Award className="h-8 w-8 text-primary mb-4" />
                        <h3 className="text-lg font-medium mb-2">Mock Interviews</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Realistic mock interviews with feedback from professionals.
                        </p>
                        <Button variant="outline" className="w-full" onClick={() => handleButtonClick("Mock Interviews")}>
                          Schedule Interview
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <BarChart4 className="h-8 w-8 text-primary mb-4" />
                        <h3 className="text-lg font-medium mb-2">Flashcards</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Interactive flashcards for quick learning and memorization.
                        </p>
                        <Button variant="outline" className="w-full" onClick={() => handleButtonClick("Flashcards")}>
                          Study Flashcards
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover:shadow-md transition-all duration-300">
                      <CardContent className="p-6">
                        <Lightbulb className="h-8 w-8 text-primary mb-4" />
                        <h3 className="text-lg font-medium mb-2">Community Forum</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Connect with other candidates and share knowledge.
                        </p>
                        <Button variant="outline" className="w-full" onClick={() => handleButtonClick("Community Forum")}>
                          Join Discussion
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mt-8 p-4 bg-accent/30 rounded-lg">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-medium">Premium Resources</h3>
                        <p className="text-sm text-muted-foreground">
                          Unlock exclusive content and personalized coaching
                        </p>
                      </div>
                      <Button onClick={() => handleButtonClick("Premium Access")}>
                        Upgrade Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </div>
  );
};

export default Test;
