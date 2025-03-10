import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MoreHorizontal, Clock, CheckCircle2, Clock3, AlertCircle, Plus } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  daysAgo: number;
  status: 'completed' | 'in-progress' | 'planning';
  members: number;
  progress: number;
  delay?: number;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20';
    case 'in-progress':
      return 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20';
    case 'planning':
      return 'bg-amber-500/10 text-amber-500 hover:bg-amber-500/20';
    default:
      return 'bg-gray-500/10 text-gray-500 hover:bg-gray-500/20';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle2 className="h-4 w-4 mr-1" />;
    case 'in-progress':
      return <Clock3 className="h-4 w-4 mr-1" />;
    case 'planning':
      return <AlertCircle className="h-4 w-4 mr-1" />;
    default:
      return null;
  }
};

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  daysAgo, 
  status, 
  members, 
  progress,
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <Card className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
        <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center text-xs text-muted-foreground mb-4">
          <Clock className="h-3 w-3 mr-1" />
          <span>Updated {daysAgo} days ago</span>
        </div>
        
        <div className="w-full bg-secondary rounded-full h-2 mb-4">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-0">
        <Badge variant="outline" className={`flex items-center ${getStatusColor(status)}`}>
          {getStatusIcon(status)}
          <span className="capitalize">{status.replace('-', ' ')}</span>
        </Badge>
        
        <div className="flex items-center">
          <div className="flex -space-x-2">
            {Array.from({ length: Math.min(members, 3) }).map((_, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center"
              >
                <span className="text-xs font-medium">{['AT', 'JD', 'RM'][i]}</span>
              </div>
            ))}
            {members > 3 && (
              <div className="w-7 h-7 rounded-full bg-secondary border-2 border-background flex items-center justify-center">
                <span className="text-xs font-medium">+{members - 3}</span>
              </div>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  return (
    <>
      <div className="space-y-8">
        <div className="flex items-center justify-between animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            <span>New Project</span>
          </Button>
        </div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="space-y-6 animate-fade-in">
          <TabsList className="grid grid-cols-4 w-[600px]">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Website Redesign"
                description="Revamp of company website and brand assets"
                daysAgo={2}
                status="in-progress"
                members={4}
                progress={65}
                delay={100}
              />
              <ProjectCard
                title="Mobile App Development"
                description="iOS and Android native applications"
                daysAgo={5}
                status="in-progress"
                members={6}
                progress={42}
                delay={200}
              />
              <ProjectCard
                title="Brand Identity"
                description="Creating a new brand identity and guidelines"
                daysAgo={1}
                status="planning"
                members={3}
                progress={15}
                delay={300}
              />
              <ProjectCard
                title="Marketing Campaign"
                description="Q4 product launch campaign"
                daysAgo={8}
                status="completed"
                members={5}
                progress={100}
                delay={400}
              />
              <ProjectCard
                title="Customer Dashboard"
                description="Customer insights and analytics dashboard"
                daysAgo={3}
                status="in-progress"
                members={4}
                progress={78}
                delay={500}
              />
              <ProjectCard
                title="Content Strategy"
                description="Content creation and distribution strategy"
                daysAgo={12}
                status="completed"
                members={2}
                progress={100}
                delay={600}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="active" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Website Redesign"
                description="Revamp of company website and brand assets"
                daysAgo={2}
                status="in-progress"
                members={4}
                progress={65}
              />
              <ProjectCard
                title="Mobile App Development"
                description="iOS and Android native applications"
                daysAgo={5}
                status="in-progress"
                members={6}
                progress={42}
              />
              <ProjectCard
                title="Brand Identity"
                description="Creating a new brand identity and guidelines"
                daysAgo={1}
                status="planning"
                members={3}
                progress={15}
              />
              <ProjectCard
                title="Customer Dashboard"
                description="Customer insights and analytics dashboard"
                daysAgo={3}
                status="in-progress"
                members={4}
                progress={78}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="completed" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Marketing Campaign"
                description="Q4 product launch campaign"
                daysAgo={8}
                status="completed"
                members={5}
                progress={100}
              />
              <ProjectCard
                title="Content Strategy"
                description="Content creation and distribution strategy"
                daysAgo={12}
                status="completed"
                members={2}
                progress={100}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="archived" className="space-y-4">
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <MoreHorizontal className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-2">No archived projects</h3>
              <p className="text-muted-foreground max-w-md">
                When you archive a project, it will appear here. Archived projects are read-only but can be restored.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Projects;
