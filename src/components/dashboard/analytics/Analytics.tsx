import React, { useState, useEffect } from "react";
import { 
  Clock, 
  CheckCircle, 
  BarChart3, 
  Brain, 
  Target, 
  ArrowUpRight,
  CalendarDays, 
  LineChart,
  Cpu,
  Zap,
  Activity,
  BarChart2,
  Trophy,
  Timer,
} from "lucide-react";
import AnalyticsCard from "@/components/AnalyticsCard";
import PerformanceChart from "@/components/PerformanceChart";
import { cn } from "@/lib/utils";

// Sample data
const performanceData = [
  { name: "Jan", score: 65 },
  { name: "Feb", score: 59 },
  { name: "Mar", score: 70 },
  { name: "Apr", score: 74 },
  { name: "May", score: 68 },
  { name: "Jun", score: 82 },
  { name: "Jul", score: 85 },
  { name: "Aug", score: 91 },
];

const interviewData = [
  { name: "Technical", score: 72 },
  { name: "Communication", score: 85 },
  { name: "Problem Solving", score: 78 },
  { name: "System Design", score: 65 },
  { name: "Data Structures", score: 80 },
  { name: "Algorithms", score: 76 },
];

const codingData = [
  { name: "Week 1", score: 45 },
  { name: "Week 2", score: 52 },
  { name: "Week 3", score: 60 },
  { name: "Week 4", score: 65 },
  { name: "Week 5", score: 72 },
  { name: "Week 6", score: 78 },
  { name: "Week 7", score: 82 },
  { name: "Week 8", score: 88 },
];

const testCompletionData = [
  { name: "Mon", score: 3 },
  { name: "Tue", score: 5 },
  { name: "Wed", score: 2 },
  { name: "Thu", score: 6 },
  { name: "Fri", score: 4 },
  { name: "Sat", score: 7 },
  { name: "Sun", score: 5 },
];

const performanceMetricsData = [
  { name: "Memory Usage", efficiency: 78, speed: 65 },
  { name: "Algorithm Choice", efficiency: 85, speed: 72 },
  { name: "Time Complexity", efficiency: 62, speed: 88 },
  { name: "Space Complexity", efficiency: 90, speed: 55 },
  { name: "Edge Cases", efficiency: 75, speed: 80 },
];

const performanceProgressData = [
  { name: "Week 1", efficiency: 50, speed: 45 },
  { name: "Week 2", efficiency: 55, speed: 50 },
  { name: "Week 3", efficiency: 60, speed: 58 },
  { name: "Week 4", efficiency: 65, speed: 63 },
  { name: "Week 5", efficiency: 72, speed: 70 },
  { name: "Week 6", efficiency: 78, speed: 80 },
  { name: "Week 7", efficiency: 85, speed: 85 },
  { name: "Week 8", efficiency: 90, speed: 88 },
];

type TabType = "overview" | "tests" | "interviews" | "coding" | "progress" | "performance";

const Analytics: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: "overview", label: "Overview", icon: <BarChart3 size={18} /> },
    { id: "tests", label: "Mock Tests", icon: <CheckCircle size={18} /> },
    { id: "interviews", label: "Interviews", icon: <Brain size={18} /> },
    { id: "coding", label: "Coding", icon: <LineChart size={18} /> },
    { id: "performance", label: "Performance", icon: <Zap size={18} /> },
    { id: "progress", label: "Progress", icon: <Target size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col p-4 md:p-8 animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 text-primary rounded-md px-2 py-1 text-xs font-medium slide-in-right">Analytics</div>
        </div>
        <h1 className="text-3xl font-bold text-proba-900 dark:text-proba-50 mt-2 slide-in-right" style={{ animationDelay: "100ms" }}>Performance Analytics</h1>
        <p className="text-proba-600 dark:text-proba-400 mt-1 slide-in-right" style={{ animationDelay: "200ms" }}>Track your progress and identify areas for improvement</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 slide-in-right" style={{ animationDelay: "300ms" }}>
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "analytics-tab flex items-center gap-2 transition-all duration-300",
              activeTab === tab.id ? "active scale-in" : ""
            )}
            style={{ animationDelay: `${index * 100 + 400}ms` }}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnalyticsCard
              title="Tests Completed"
              value="32"
              subtext="Last 30 days"
              icon={<CheckCircle className="h-5 w-5" />}
              trend={{ value: 12, isPositive: true }}
              isLoading={loading}
              animationDelay={0}
            />
            <AnalyticsCard
              title="Avg. Score"
              value="78%"
              subtext="Across all tests"
              icon={<BarChart3 className="h-5 w-5" />}
              trend={{ value: 5, isPositive: true }}
              isLoading={loading}
              animationDelay={100}
            />
            <AnalyticsCard
              title="Total Study Time"
              value="42h"
              subtext="Last 30 days"
              icon={<Clock className="h-5 w-5" />}
              trend={{ value: 8, isPositive: true }}
              isLoading={loading}
              animationDelay={200}
            />
            <AnalyticsCard
              title="Next Session"
              value="Technical Interview"
              subtext="Tomorrow, 10:00 AM"
              icon={<CalendarDays className="h-5 w-5" />}
              isLoading={loading}
              animationDelay={300}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PerformanceChart
              data={performanceData}
              dataKey="score"
              title="Overall Performance"
              yAxisLabel="Score"
              stroke="#3B82F6"
              animationDelay={0}
            />
            <PerformanceChart
              data={interviewData}
              dataKey="score"
              title="Interview Skills Breakdown"
              yAxisLabel="Score"
              stroke="#6366F1"
              animationDelay={200}
            />
          </div>
        </div>
      )}

      {/* Tests Tab */}
      {activeTab === "tests" && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnalyticsCard
              title="Tests Attempted"
              value="54"
              subtext="Total tests"
              icon={<CheckCircle className="h-5 w-5" />}
            />
            <AnalyticsCard
              title="Avg. Completion Time"
              value="48 min"
              subtext="Per test"
              icon={<Clock className="h-5 w-5" />}
            />
            <AnalyticsCard
              title="Pass Rate"
              value="85%"
              subtext="Overall success"
              icon={<Target className="h-5 w-5" />}
              trend={{ value: 7, isPositive: true }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PerformanceChart
              data={testCompletionData}
              dataKey="score"
              title="Tests Completed This Week"
              yAxisLabel="Count"
              stroke="#10B981"
            />
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-medium text-proba-800 mb-6">Recent Tests</h3>
              <div className="space-y-4">
                {[
                  { name: "Java Developer Assessment", score: 92, date: "Aug 15" },
                  { name: "System Design Principles", score: 78, date: "Aug 12" },
                  { name: "Frontend Frameworks", score: 85, date: "Aug 10" },
                  { name: "Database Management", score: 81, date: "Aug 8" },
                ].map((test, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border-b border-slate-100">
                    <div>
                      <div className="font-medium text-proba-800">{test.name}</div>
                      <div className="text-sm text-proba-500">{test.date}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="font-semibold text-proba-900">{test.score}%</div>
                      <ArrowUpRight size={16} className="text-emerald-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interviews Tab */}
      {activeTab === "interviews" && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnalyticsCard
              title="Mock Interviews"
              value="18"
              subtext="Completed"
              icon={<Brain className="h-5 w-5" />}
            />
            <AnalyticsCard
              title="Highest Score"
              value="94%"
              subtext="Technical interview"
              icon={<Target className="h-5 w-5" />}
            />
            <AnalyticsCard
              title="Areas to Improve"
              value="System Design"
              subtext="Based on feedback"
              icon={<BarChart3 className="h-5 w-5" />}
            />
          </div>

          <div className="grid grid-cols-1 gap-6">
            <PerformanceChart
              data={interviewData}
              dataKey="score"
              title="Interview Skills Performance"
              yAxisLabel="Score"
              stroke="#8B5CF6"
            />
          </div>
          
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-medium text-proba-800 mb-4">Interview Feedback Summary</h3>
            <div className="space-y-5">
              {[
                { category: "Technical Knowledge", rating: 8.5, feedback: "Strong understanding of core concepts, but could improve depth in system architecture." },
                { category: "Communication Skills", rating: 9.0, feedback: "Excellent clarity and articulation of complex ideas in simple terms." },
                { category: "Problem Solving", rating: 7.5, feedback: "Good approach to breaking down problems, consider exploring multiple solutions before implementation." },
              ].map((item, i) => (
                <div key={i} className="border-b border-slate-100 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-proba-800">{item.category}</h4>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm font-medium">{item.rating}/10</span>
                  </div>
                  <p className="text-proba-600 text-sm">{item.feedback}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Coding Tab */}
      {activeTab === "coding" && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnalyticsCard
              title="Challenges Completed"
              value="67"
              subtext="Out of 120 available"
              icon={<CheckCircle className="h-5 w-5" />}
            />
            <AnalyticsCard
              title="Success Rate"
              value="78%"
              subtext="All submissions"
              icon={<Target className="h-5 w-5" />}
              trend={{ value: 12, isPositive: true }}
            />
            <AnalyticsCard
              title="Avg. Solution Time"
              value="32 min"
              subtext="Per challenge"
              icon={<Clock className="h-5 w-5" />}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PerformanceChart
              data={codingData}
              dataKey="score"
              title="Coding Performance Trend"
              yAxisLabel="Score"
              stroke="#EC4899"
            />
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-medium text-proba-800 mb-4">Top Skills</h3>
              <div className="space-y-4">
                {[
                  { skill: "Data Structures", proficiency: 85 },
                  { skill: "Algorithms", proficiency: 78 },
                  { skill: "Time Complexity", proficiency: 72 },
                  { skill: "Space Optimization", proficiency: 68 },
                  { skill: "Dynamic Programming", proficiency: 62 },
                ].map((skill, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-proba-700">{skill.skill}</span>
                      <span className="text-xs text-proba-600">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Performance Tab */}
      {activeTab === "performance" && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnalyticsCard
              title="Code Efficiency"
              value="85%"
              subtext="Overall performance score"
              icon={<Cpu className="h-5 w-5" />}
              trend={{ value: 7, isPositive: true }}
              isLoading={loading}
              animationDelay={0}
            />
            <AnalyticsCard
              title="Execution Speed"
              value="76%"
              subtext="Compared to benchmark"
              icon={<Timer className="h-5 w-5" />}
              trend={{ value: 4, isPositive: true }}
              isLoading={loading}
              animationDelay={100}
            />
            <AnalyticsCard
              title="Optimization Score"
              value="92%"
              subtext="Based on latest submissions"
              icon={<Activity className="h-5 w-5" />}
              trend={{ value: 12, isPositive: true }}
              isLoading={loading}
              animationDelay={200}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PerformanceChart
              data={performanceProgressData}
              dataKey="efficiency"
              title="Code Efficiency Progress"
              yAxisLabel="Score"
              stroke="#8B5CF6"
              animationDelay={0}
            />
            <PerformanceChart
              data={performanceProgressData}
              dataKey="speed"
              title="Execution Speed Progress"
              yAxisLabel="Score"
              stroke="#EC4899"
              animationDelay={200}
            />
          </div>
          
          <div className="glass-card rounded-xl p-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h3 className="text-lg font-medium text-proba-800 dark:text-proba-200 mb-6">Performance Metrics Breakdown</h3>
            <div className="space-y-6">
              {performanceMetricsData.map((metric, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between">
                    <h4 className="text-sm font-medium text-proba-700 dark:text-proba-300">{metric.name}</h4>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-proba-600 dark:text-proba-400">
                        <Zap size={14} className="text-amber-500" /> Efficiency: {metric.efficiency}%
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-proba-600 dark:text-proba-400">
                        <Timer size={14} className="text-blue-500" /> Speed: {metric.speed}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-proba-600 dark:text-proba-400">Efficiency</span>
                        <span className="font-medium text-proba-700 dark:text-proba-300">{metric.efficiency}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-amber-500 rounded-full transition-all duration-1000" 
                          style={{ width: `${metric.efficiency}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-proba-600 dark:text-proba-400">Speed</span>
                        <span className="font-medium text-proba-700 dark:text-proba-300">{metric.speed}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 rounded-full transition-all duration-1000" 
                          style={{ width: `${metric.speed}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <h3 className="text-lg font-medium text-proba-800 dark:text-proba-200 mb-4">Recent Achievements</h3>
            <div className="space-y-4">
              {[
                { title: "Optimization Master", description: "Reduced code complexity by 30%", date: "Aug 17", icon: <Trophy size={16} className="text-amber-500" /> },
                { title: "Speed Demon", description: "Top 5% in execution time", date: "Aug 15", icon: <Zap size={16} className="text-blue-500" /> },
                { title: "Memory Efficient", description: "Used 40% less memory than average", date: "Aug 12", icon: <Cpu size={16} className="text-emerald-500" /> },
              ].map((achievement, i) => (
                <div key={i} className="flex items-start gap-3 p-3 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-proba-800 dark:text-proba-200">{achievement.title}</h4>
                      <span className="text-xs text-proba-500 dark:text-proba-400">{achievement.date}</span>
                    </div>
                    <p className="text-sm text-proba-600 dark:text-proba-400 mt-1">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Progress Tab */}
      {activeTab === "progress" && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnalyticsCard
              title="Learning Path Progress"
              value="68%"
              subtext="Full Stack Developer"
              icon={<Target className="h-5 w-5" />}
              trend={{ value: 15, isPositive: true }}
            />
            <AnalyticsCard
              title="Skills Improved"
              value="12"
              subtext="Last 60 days"
              icon={<ArrowUpRight className="h-5 w-5" />}
            />
            <AnalyticsCard
              title="Time to Completion"
              value="~4 weeks"
              subtext="At current pace"
              icon={<Clock className="h-5 w-5" />}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PerformanceChart
              data={performanceData}
              dataKey="score"
              title="Overall Progress Trajectory"
              yAxisLabel="Score"
              stroke="#0EA5E9"
            />
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-medium text-proba-800 mb-6">Upcoming Milestones</h3>
              <div className="space-y-4">
                {[
                  { name: "Advanced System Design", progress: 80, date: "Aug 25" },
                  { name: "Full Backend Integration", progress: 65, date: "Sep 10" },
                  { name: "Microservices Architecture", progress: 40, date: "Sep 22" },
                  { name: "Cloud Deployment", progress: 25, date: "Oct 5" },
                ].map((milestone, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-proba-800">{milestone.name}</div>
                        <div className="text-xs text-proba-500">Target: {milestone.date}</div>
                      </div>
                      <div className="text-sm font-medium text-proba-700">{milestone.progress}%</div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000" 
                        style={{ width: `${milestone.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analytics;
