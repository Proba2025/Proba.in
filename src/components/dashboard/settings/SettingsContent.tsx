import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import {
  AtSign,
  Bell,
  CreditCard,
  Edit,
  Globe,
  Key,
  Lock,
  Save,
  Shield,
  User
} from "lucide-react";

const tabVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const SettingsContent = () => {
  const { toast } = useToast();
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [userType, setUserType] = useState<'personal' | 'business'>('personal');

  const handleSaveChanges = () => {
    toast({
      title: "Settings Saved",
      description: "Your changes have been saved successfully.",
    });
    setIsEditingProfile(false);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Account Settings</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Manage your account preferences and settings
        </p>
      </motion.div>

      {/* Account Type Selector */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Account Type</h2>
        <div className="flex gap-4">
          <Button
            onClick={() => setUserType('personal')}
            variant={userType === 'personal' ? "default" : "outline"}
            className="flex items-center gap-2 px-6"
          >
            <User className="h-5 w-5" />
            Personal
          </Button>
          <Button
            onClick={() => setUserType('business')}
            variant={userType === 'business' ? "default" : "outline"}
            className="flex items-center gap-2 px-6"
          >
            <Globe className="h-5 w-5" />
            Business
          </Button>
        </div>
      </motion.div>

      {/* Settings Tabs */}
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-6 bg-white dark:bg-gray-800 p-1 rounded-lg border border-gray-100 dark:border-gray-700">
          <TabsTrigger value="profile" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 dark:data-[state=active]:bg-blue-900/20 dark:data-[state=active]:text-blue-400">
            <User className="h-4 w-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 dark:data-[state=active]:bg-blue-900/20 dark:data-[state=active]:text-blue-400">
            <Lock className="h-4 w-4 mr-2" />
            Security
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 dark:data-[state=active]:bg-blue-900/20 dark:data-[state=active]:text-blue-400">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="billing" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 dark:data-[state=active]:bg-blue-900/20 dark:data-[state=active]:text-blue-400">
            <CreditCard className="h-4 w-4 mr-2" />
            Billing
          </TabsTrigger>
          {userType === 'business' && (
            <TabsTrigger value="team" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 dark:data-[state=active]:bg-blue-900/20 dark:data-[state=active]:text-blue-400">
              <Globe className="h-4 w-4 mr-2" />
              Team Management
            </TabsTrigger>
          )}
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <motion.div
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Profile Information</h2>
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center gap-2"
                onClick={() => setIsEditingProfile(!isEditingProfile)}
              >
                {isEditingProfile ? (
                  <>
                    <Save className="h-4 w-4" />
                    Save
                  </>
                ) : (
                  <>
                    <Edit className="h-4 w-4" />
                    Edit Profile
                  </>
                )}
              </Button>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input 
                    id="fullName" 
                    defaultValue="Alex Johnson" 
                    disabled={!isEditingProfile}
                    className="mt-1" 
                  />
                </div>
                
                <div className="flex-1">
                  <Label htmlFor="email">Email</Label>
                  <div className="flex mt-1">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300">
                      <AtSign className="h-4 w-4" />
                    </span>
                    <Input 
                      id="email" 
                      type="email" 
                      defaultValue="alex@example.com" 
                      disabled={!isEditingProfile}
                      className="rounded-l-none" 
                    />
                  </div>
                </div>
              </div>

              {userType === 'business' && (
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input 
                      id="companyName" 
                      defaultValue="TechCorp Solutions" 
                      disabled={!isEditingProfile}
                      className="mt-1" 
                    />
                  </div>
                  
                  <div className="flex-1">
                    <Label htmlFor="position">Position</Label>
                    <Input 
                      id="position" 
                      defaultValue="Technical Recruiter" 
                      disabled={!isEditingProfile}
                      className="mt-1" 
                    />
                  </div>
                </div>
              )}

              <div>
                <Label htmlFor="bio">Bio</Label>
                <textarea 
                  id="bio"
                  rows={4}
                  disabled={!isEditingProfile}
                  defaultValue="Software engineer with 5+ years of experience in full-stack development. Passionate about clean code and user experience."
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                />
              </div>

              {isEditingProfile && (
                <Button onClick={handleSaveChanges} className="mt-4">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              )}
            </div>
          </motion.div>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security">
          <motion.div
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 space-y-6"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Security Settings</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                      <div>
                        <h3 className="font-medium text-gray-800 dark:text-white">Change Password</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Update your password regularly for enhanced security</p>
                      </div>
                    </div>
                    <Button size="sm">Update</Button>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Key className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                      <div>
                        <h3 className="font-medium text-gray-800 dark:text-white">Two-Factor Authentication</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Add an extra layer of security to your account</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Enable</Button>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h3 className="font-medium text-gray-800 dark:text-white mb-4">Session Management</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    You're currently signed in on these devices:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                      <div>
                        <p className="font-medium text-gray-800 dark:text-white">Current Device • Chrome on MacOS</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">San Francisco, CA • Last active now</p>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full dark:bg-green-900/30 dark:text-green-400">
                        Active
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-100 dark:border-gray-700">
                      <div>
                        <p className="font-medium text-gray-800 dark:text-white">iPhone 13 • Safari iOS 16</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">San Francisco, CA • Last active 2 hours ago</p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20">
                        Logout
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications">
          <motion.div
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Notification Preferences</h2>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium text-gray-800 dark:text-white">Email Notifications</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mock-tests" defaultChecked />
                      <Label htmlFor="mock-tests" className="text-sm">Mock Test Results</Label>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Receive email when your test results are ready</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="interviews" defaultChecked />
                      <Label htmlFor="interviews" className="text-sm">Mock Interview Reminders</Label>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Get notified before your scheduled interviews</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="challenges" />
                      <Label htmlFor="challenges" className="text-sm">Coding Challenge Updates</Label>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Updates about new challenges</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="newsletter" defaultChecked />
                      <Label htmlFor="newsletter" className="text-sm">Weekly Newsletter</Label>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Tips, updates, and career resources</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
                <h3 className="font-medium text-gray-800 dark:text-white">In-App Notifications</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="app-results" defaultChecked />
                      <Label htmlFor="app-results" className="text-sm">Test Results</Label>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Show notifications for test results</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="app-reminders" defaultChecked />
                      <Label htmlFor="app-reminders" className="text-sm">Reminders</Label>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Show upcoming session reminders</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="app-messages" defaultChecked />
                      <Label htmlFor="app-messages" className="text-sm">Messages</Label>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Show notifications for new messages</span>
                  </div>
                </div>
              </div>
              
              {userType === 'business' && (
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
                  <h3 className="font-medium text-gray-800 dark:text-white">Team Notifications</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="team-joins" defaultChecked />
                        <Label htmlFor="team-joins" className="text-sm">Team Member Joins</Label>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Notify when new team members join</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="assessment-completed" defaultChecked />
                        <Label htmlFor="assessment-completed" className="text-sm">Assessment Completions</Label>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Notify when candidates complete assessments</span>
                    </div>
                  </div>
                </div>
              )}
              
              <Button className="mt-4">
                <Save className="mr-2 h-4 w-4" />
                Save Preferences
              </Button>
            </div>
          </motion.div>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing">
          <motion.div
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Billing & Subscription</h2>
            
            <div className="space-y-8">
              {/* Current Plan */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      {userType === 'business' ? 'Business Pro Plan' : 'Professional Plan'}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {userType === 'business' 
                        ? 'For teams that need advanced assessment and hiring tools'
                        : 'Access to all mock tests, interviews and coding challenges'}
                    </p>
                    <p className="mt-2 text-blue-700 dark:text-blue-400 font-medium">
                      {userType === 'business' ? '$99/month per seat' : '$29/month'}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full dark:bg-green-900/30 dark:text-green-400">
                    Active
                  </span>
                </div>
                
                <div className="mt-4 flex gap-3">
                  <Button variant="outline" size="sm">Change Plan</Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20">
                    Cancel Subscription
                  </Button>
                </div>
              </div>
              
              {/* Payment Methods */}
              <div>
                <h3 className="font-medium text-gray-800 dark:text-white mb-4">Payment Methods</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded mr-3">
                        <CreditCard className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 dark:text-white">•••• •••• •••• 4242</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Visa • Expires 12/2024</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full dark:bg-blue-900/30 dark:text-blue-400">
                        Default
                      </span>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="mt-4">
                  + Add Payment Method
                </Button>
              </div>
              
              {/* Billing History */}
              <div>
                <h3 className="font-medium text-gray-800 dark:text-white mb-4">Billing History</h3>
                
                <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium text-gray-500 dark:text-gray-400">Date</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-500 dark:text-gray-400">Description</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-500 dark:text-gray-400">Amount</th>
                        <th className="px-4 py-3 text-right font-medium text-gray-500 dark:text-gray-400">Receipt</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr className="bg-white dark:bg-gray-800">
                        <td className="px-4 py-3 text-gray-800 dark:text-gray-200">Oct 1, 2023</td>
                        <td className="px-4 py-3 text-gray-800 dark:text-gray-200">
                          {userType === 'business' ? 'Business Pro Plan' : 'Professional Plan'}
                        </td>
                        <td className="px-4 py-3 text-gray-800 dark:text-gray-200">
                          {userType === 'business' ? '$99.00' : '$29.00'}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <Button variant="ghost" size="sm">Download</Button>
                        </td>
                      </tr>
                      <tr className="bg-white dark:bg-gray-800">
                        <td className="px-4 py-3 text-gray-800 dark:text-gray-200">Sep 1, 2023</td>
                        <td className="px-4 py-3 text-gray-800 dark:text-gray-200">
                          {userType === 'business' ? 'Business Pro Plan' : 'Professional Plan'}
                        </td>
                        <td className="px-4 py-3 text-gray-800 dark:text-gray-200">
                          {userType === 'business' ? '$99.00' : '$29.00'}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <Button variant="ghost" size="sm">Download</Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
        </TabsContent>

        {/* Team Management Tab (Business only) */}
        {userType === 'business' && (
          <TabsContent value="team">
            <motion.div
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Team Management</h2>
              
              <div className="space-y-8">
                {/* Team Members */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-gray-800 dark:text-white">Team Members (8)</h3>
                    <Button size="sm">
                      + Invite Member
                    </Button>
                  </div>
                  
                  <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th className="px-4 py-3 text-left font-medium text-gray-500 dark:text-gray-400">Name</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-500 dark:text-gray-400">Email</th>
                          <th className="px-4 py-3 text-left font-medium text-gray-500 dark:text-gray-400">Role</th>
                          <th className="px-4 py-3 text-right font-medium text-gray-500 dark:text-gray-400">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        <tr className="bg-white dark:bg-gray-800">
                          <td className="px-4 py-3 text-gray-800 dark:text-gray-200 font-medium">Sarah Chen</td>
                          <td className="px-4 py-3 text-gray-800 dark:text-gray-200">sarah@techcorp.com</td>
                          <td className="px-4 py-3">
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full dark:bg-blue-900/30 dark:text-blue-400">
                              Admin
                            </span>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <Button variant="ghost" size="sm">Edit</Button>
                          </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                          <td className="px-4 py-3 text-gray-800 dark:text-gray-200 font-medium">Mike Johnson</td>
                          <td className="px-4 py-3 text-gray-800 dark:text-gray-200">mike@techcorp.com</td>
                          <td className="px-4 py-3">
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full dark:bg-green-900/30 dark:text-green-400">
                              Member
                            </span>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <Button variant="ghost" size="sm">Edit</Button>
                          </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                          <td className="px-4 py-3 text-gray-800 dark:text-gray-200 font-medium">Priya Patel</td>
                          <td className="px-4 py-3 text-gray-800 dark:text-gray-200">priya@techcorp.com</td>
                          <td className="px-4 py-3">
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full dark:bg-green-900/30 dark:text-green-400">
                              Member
                            </span>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <Button variant="ghost" size="sm">Edit</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {/* Team Settings */}
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white mb-4">Team Settings</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-100 dark:border-gray-700">
                      <div>
                        <p className="font-medium text-gray-800 dark:text-white">Team Permissions</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Manage access levels for team members</p>
                      </div>
                      <Button variant="outline" size="sm">Configure</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-100 dark:border-gray-700">
                      <div>
                        <p className="font-medium text-gray-800 dark:text-white">Assessment Templates</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Customize assessment workflows</p>
                      </div>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg border border-gray-100 dark:border-gray-700">
                      <div>
                        <p className="font-medium text-gray-800 dark:text-white">Integrations</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Connect to your HR systems</p>
                      </div>
                      <Button variant="outline" size="sm">Setup</Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

