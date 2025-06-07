
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Users, Book, Calendar, Circle } from 'lucide-react';

const Index = () => {
  const [selectedGuide, setSelectedGuide] = useState(null);

  const spiritualGuides = [
    {
      id: 1,
      name: "Zen Master Kenji",
      tradition: "Buddhism",
      specialty: "Mindfulness & Detachment",
      avatar: "🧘‍♂️",
      color: "from-orange-400 to-red-500"
    },
    {
      id: 2,
      name: "Sophia the Stoic",
      tradition: "Stoicism",
      specialty: "Virtue & Resilience", 
      avatar: "🏛️",
      color: "from-blue-400 to-purple-500"
    },
    {
      id: 3,
      name: "Mystical Maria",
      tradition: "Christian Mysticism",
      specialty: "Divine Love & Contemplation",
      avatar: "✨",
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 4,
      name: "Taoist Sage Li",
      tradition: "Taoism",
      specialty: "Natural Harmony & Wu Wei",
      avatar: "🌸",
      color: "from-green-400 to-teal-500"
    }
  ];

  const dailyRituals = [
    {
      name: "Morning Gratitude Flow",
      duration: "10 min",
      tradition: "Universal",
      completed: false
    },
    {
      name: "Stoic Evening Reflection",
      duration: "15 min", 
      tradition: "Stoicism",
      completed: true
    },
    {
      name: "Zen Walking Meditation",
      duration: "20 min",
      tradition: "Buddhism", 
      completed: false
    }
  ];

  const philosophyTopics = [
    { name: "The Nature of Suffering", participants: 127, active: true },
    { name: "Free Will vs. Determinism", participants: 89, active: false },
    { name: "What Makes Life Meaningful?", participants: 156, active: true },
    { name: "Technology and Human Connection", participants: 203, active: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-white/5">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                <Circle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">SoulSynth</h1>
                <p className="text-sm text-purple-200">AI-Powered Spiritual Guidance</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" className="text-white hover:text-purple-200">Dashboard</Button>
              <Button variant="ghost" className="text-white hover:text-purple-200">Community</Button>
              <Button variant="ghost" className="text-white hover:text-purple-200">Library</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Discover Your Spiritual Path
            </h2>
            <p className="text-xl text-purple-200 mb-8 leading-relaxed">
              Engage with AI spiritual guides, explore ancient wisdom traditions, and build your personalized practice for the modern age.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Begin Your Journey
              </Button>
              <Button size="lg" variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-400/10">
                Explore Traditions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        <Tabs defaultValue="guides" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white/10 backdrop-blur-sm">
            <TabsTrigger value="guides" className="data-[state=active]:bg-purple-500">AI Guides</TabsTrigger>
            <TabsTrigger value="rituals" className="data-[state=active]:bg-purple-500">Daily Rituals</TabsTrigger>
            <TabsTrigger value="philosophy" className="data-[state=active]:bg-purple-500">Philosophy</TabsTrigger>
            <TabsTrigger value="community" className="data-[state=active]:bg-purple-500">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="guides" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {spiritualGuides.map((guide) => (
                <Card key={guide.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all cursor-pointer" onClick={() => setSelectedGuide(guide)}>
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${guide.color} flex items-center justify-center text-2xl mb-4`}>
                      {guide.avatar}
                    </div>
                    <CardTitle className="text-white">{guide.name}</CardTitle>
                    <CardDescription className="text-purple-200">{guide.tradition}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-purple-300 text-center">{guide.specialty}</p>
                    <Button className="w-full mt-4 bg-purple-500 hover:bg-purple-600">
                      Start Session
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rituals" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Today's Rituals
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {dailyRituals.map((ritual, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                      <div>
                        <h4 className="text-white font-medium">{ritual.name}</h4>
                        <p className="text-sm text-purple-300">{ritual.duration} • {ritual.tradition}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {ritual.completed && <Badge className="bg-green-500">✓</Badge>}
                        <Button size="sm" variant={ritual.completed ? "outline" : "default"}>
                          {ritual.completed ? "Complete" : "Start"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Spiritual Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-purple-300 mb-2">
                      <span>Mindfulness</span>
                      <span>Level 7</span>
                    </div>
                    <Progress value={75} className="bg-white/20" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-purple-300 mb-2">
                      <span>Wisdom</span>
                      <span>Level 5</span>
                    </div>
                    <Progress value={45} className="bg-white/20" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-purple-300 mb-2">
                      <span>Compassion</span>
                      <span>Level 6</span>
                    </div>
                    <Progress value={60} className="bg-white/20" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Custom Rituals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300 mb-4">Create personalized rituals based on your unique spiritual path.</p>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
                    Design New Ritual
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="philosophy" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Book className="w-5 h-5 mr-2" />
                    Active Discussions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {philosophyTopics.map((topic, index) => (
                    <div key={index} className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-white font-medium mb-1">{topic.name}</h4>
                          <p className="text-sm text-purple-300">{topic.participants} participants</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {topic.active && <div className="w-2 h-2 bg-green-400 rounded-full"></div>}
                          <Badge variant={topic.active ? "default" : "secondary"}>
                            {topic.active ? "Live" : "Archived"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Daily Wisdom</CardTitle>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-purple-200 italic text-lg leading-relaxed mb-4">
                    "The mind is everything. What you think you become."
                  </blockquote>
                  <p className="text-purple-300 text-sm">— Buddha</p>
                  <Button className="w-full mt-6 bg-purple-500 hover:bg-purple-600">
                    Explore This Teaching
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="community" className="mt-8">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Virtual Congregations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-purple-500">MS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-white font-medium">Mindful Stoics</p>
                        <p className="text-xs text-purple-300">23 members online</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-orange-500">ZS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-white font-medium">Zen Seekers</p>
                        <p className="text-xs text-purple-300">17 members online</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-purple-500 hover:bg-purple-600">
                    Join a Group
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Live Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-white/5">
                      <h4 className="text-white font-medium">Group Meditation</h4>
                      <p className="text-sm text-purple-300">Starting in 15 minutes</p>
                      <p className="text-xs text-purple-400">Led by Zen Master Kenji</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <h4 className="text-white font-medium">Philosophy Debate</h4>
                      <p className="text-sm text-purple-300">Tomorrow at 2:00 PM</p>
                      <p className="text-xs text-purple-400">Topic: The Good Life</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Create Your Church</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-300 mb-4">Start your own spiritual community and define its unique beliefs and practices.</p>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
                    Found New Order
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Floating Sacred Geometry */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full text-purple-400">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full text-pink-400">
            <polygon points="50,5 80,80 20,80" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <polygon points="50,20 65,60 35,60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Index;
