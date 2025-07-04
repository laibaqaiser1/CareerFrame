import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Search, Book, MessageCircle, User, Settings, Target } from "lucide-react";

const helpCategories = [
  {
    icon: User,
    title: "Getting Started",
    description: "Learn the basics of using CareerFrame",
    articles: [
      "How to create your profile",
      "Taking your first career assessment",
      "Understanding your results",
      "Setting career goals"
    ]
  },
  {
    icon: Target,
    title: "Career Planning",
    description: "Make the most of your career roadmap",
    articles: [
      "How to read your career pathway",
      "Setting realistic milestones",
      "Tracking your progress",
      "Updating your goals"
    ]
  },
  {
    icon: Book,
    title: "Skill Development",
    description: "Build the skills you need",
    articles: [
      "Understanding skill gap analysis",
      "Finding learning resources",
      "Earning XP and rewards",
      "Skill verification process"
    ]
  },
  {
    icon: Settings,
    title: "Account & Billing",
    description: "Manage your CareerFrame account",
    articles: [
      "Upgrading to Premium",
      "Managing billing information",
      "Canceling subscription",
      "Data privacy and security"
    ]
  }
];

export default function Help() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-navy mb-4">Help Center</h1>
          <p className="text-xl text-soft-grey">
            Find answers to common questions and learn how to make the most of CareerFrame.
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search help articles..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fresh-green"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {helpCategories.map((category, index) => (
            <Card key={index}>
              <CardContent className="p-8">
                <category.icon className="h-10 w-10 text-fresh-green mb-4" />
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-soft-grey mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <a href="#" className="text-fresh-green hover:underline text-sm">
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Book className="h-12 w-12 text-fresh-green mx-auto mb-4" />
              <h4 className="font-semibold mb-2">User Guide</h4>
              <p className="text-sm text-soft-grey mb-4">
                Complete guide to using all CareerFrame features
              </p>
              <Button variant="outline" size="sm" className="border-fresh-green text-fresh-green">
                Read Guide
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-12 w-12 text-fresh-green mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Live Chat</h4>
              <p className="text-sm text-soft-grey mb-4">
                Chat with our support team in real-time
              </p>
              <Button variant="outline" size="sm" className="border-fresh-green text-fresh-green">
                Start Chat
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Target className="h-12 w-12 text-fresh-green mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Video Tutorials</h4>
              <p className="text-sm text-soft-grey mb-4">
                Step-by-step video guides for key features
              </p>
              <Button variant="outline" size="sm" className="border-fresh-green text-fresh-green">
                Watch Videos
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-navy mb-4">Still Need Help?</h2>
          <p className="text-soft-grey mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-fresh-green text-white hover:bg-opacity-90">
                Contact Support
              </Button>
            </Link>
            <Button variant="outline" className="border-fresh-green text-fresh-green hover:bg-fresh-green hover:text-white">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}