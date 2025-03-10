import { motion } from "framer-motion";
import { CheckCircle, Building, Zap, Shield, Code, Users, MessageSquare, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const featureItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const features = [
  {
    title: "AI-Powered Assessments",
    description: "Create customized tests with intelligent scoring and candidate evaluation.",
    icon: FileText,
  },
  {
    title: "Coding Challenges",
    description: "Technical assessments with real-time code execution and analysis.",
    icon: Code,
  },
  {
    title: "Structured Interviews",
    description: "Standardized interview templates with AI evaluation and feedback.",
    icon: MessageSquare,
  },
  {
    title: "Talent Analytics",
    description: "Comprehensive insights into candidate performance and potential.",
    icon: Users,
  },
];

const plans = [
  {
    name: "Starter",
    price: "$299",
    description: "For small teams getting started with hiring",
    features: [
      "Up to 5 team members",
      "50 assessments per month",
      "5 custom test templates",
      "Basic analytics",
      "Email support"
    ]
  },
  {
    name: "Professional",
    price: "$699",
    description: "For growing companies with active hiring needs",
    features: [
      "Up to 15 team members",
      "250 assessments per month",
      "20 custom test templates",
      "Advanced analytics",
      "Priority email & chat support",
      "API access"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with complex requirements",
    features: [
      "Unlimited team members",
      "Unlimited assessments",
      "Unlimited custom templates",
      "Advanced analytics with custom reports",
      "Dedicated account manager",
      "24/7 premium support",
      "Full API access",
      "Custom integrations"
    ]
  }
];

export default function B2BSolutions() {
  return (
    <div className="container max-w-7xl py-12">
      <motion.div 
        className="text-center mb-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl font-bold mb-4">B2B Hiring Solutions</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Streamline your recruitment process with AI-driven assessments, coding challenges, 
          and structured interviews to identify the best talent efficiently.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      >
        {features.map((feature, index) => (
          <motion.div key={index} variants={featureItem}>
            <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-proba-100 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-proba-600" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-16"
      >
        <Tabs defaultValue="plans" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="plans">Pricing Plans</TabsTrigger>
            <TabsTrigger value="casestudies">Case Studies</TabsTrigger>
            <TabsTrigger value="integration">Integration</TabsTrigger>
          </TabsList>
          <TabsContent value="plans">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={`relative h-full ${plan.popular ? 'border-proba-500 shadow-lg' : ''}`}>
                    {plan.popular && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-proba-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle>{plan.name}</CardTitle>
                      <div className="mt-4 mb-2">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                      </div>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-proba-500 mr-2 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className={`w-full ${plan.popular ? 'bg-proba-500 hover:bg-proba-600' : ''}`}>
                        {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="casestudies">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="h-5 w-5 text-proba-500" />
                    <span className="text-sm font-medium text-proba-500">Enterprise</span>
                  </div>
                  <CardTitle>How TechCorp reduced hiring time by 45%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    TechCorp was struggling with a lengthy hiring process for software engineers. After implementing Proba's coding challenges and AI assessments...
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Before Proba</span>
                      <span className="text-sm font-medium">After Proba</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>45 days</span>
                        <span className="text-green-600 font-medium">25 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>12% candidate satisfaction</span>
                        <span className="text-green-600 font-medium">94% candidate satisfaction</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Read Full Case Study</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="h-5 w-5 text-proba-500" />
                    <span className="text-sm font-medium text-proba-500">Startup</span>
                  </div>
                  <CardTitle>How StartupX scaled their engineering team 3x</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    StartupX needed to quickly grow their engineering team without compromising on quality. Using Proba's structured interviews and assessments...
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Before Proba</span>
                      <span className="text-sm font-medium">After Proba</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>4 engineers hired in 6 months</span>
                        <span className="text-green-600 font-medium">12 engineers in 3 months</span>
                      </div>
                      <div className="flex justify-between">
                        <span>30% first-year retention</span>
                        <span className="text-green-600 font-medium">92% first-year retention</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Read Full Case Study</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="integration">
            <Card>
              <CardHeader>
                <CardTitle>Seamless Integration with Your Workflow</CardTitle>
                <CardDescription>
                  Proba integrates with your existing HR and ATS systems for a streamlined hiring process.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center p-4 rounded-lg border border-gray-100">
                    <Zap className="h-8 w-8 text-proba-500 mb-3" />
                    <h3 className="font-medium mb-2">Easy Setup</h3>
                    <p className="text-sm text-muted-foreground">
                      Implementation in days, not months, with guided onboarding.
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 rounded-lg border border-gray-100">
                    <Shield className="h-8 w-8 text-proba-500 mb-3" />
                    <h3 className="font-medium mb-2">Enterprise Security</h3>
                    <p className="text-sm text-muted-foreground">
                      SOC 2 compliant with data encryption and privacy controls.
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 rounded-lg border border-gray-100">
                    <Code className="h-8 w-8 text-proba-500 mb-3" />
                    <h3 className="font-medium mb-2">API Access</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive API for custom integrations and workflows.
                    </p>
                  </div>
                </div>
                <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-medium mb-4">Compatible with:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Workday", "Greenhouse", "Lever", "BambooHR", "Gusto", "Namely", "SAP", "Salesforce"].map((system, i) => (
                      <div key={i} className="flex items-center justify-center h-12 px-4 rounded bg-white border border-gray-200">
                        {system}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button>Request Integration Information</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="bg-proba-50 rounded-2xl p-8 md:p-12 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your hiring process?</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
          Our team will create a custom solution tailored to your specific hiring needs and challenges.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-proba-500 hover:bg-proba-600">
            Schedule a Demo
          </Button>
          <Button size="lg" variant="outline">
            Contact Sales
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
