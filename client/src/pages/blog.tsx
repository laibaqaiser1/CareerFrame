import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "5 Signs It's Time for a Career Change",
    excerpt: "Recognizing when your current role no longer serves your goals and how to take action.",
    date: "January 2, 2025",
    readTime: "5 min read",
    category: "Career Growth"
  },
  {
    title: "How AI is Changing Career Development",
    excerpt: "The future of career guidance and how technology is personalizing professional growth.",
    date: "December 28, 2024",
    readTime: "7 min read",
    category: "Technology"
  },
  {
    title: "Building Skills for the Remote Work Era",
    excerpt: "Essential skills for thriving in today's distributed work environment.",
    date: "December 20, 2024",
    readTime: "6 min read",
    category: "Skills"
  }
];

export default function Blog() {
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
          <h1 className="text-4xl font-bold text-navy mb-4">Career Blog</h1>
          <p className="text-xl text-soft-grey">
            Expert insights, tips, and strategies to accelerate your career journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-fresh-green bg-fresh-green/10 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center text-xs text-soft-grey">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{post.title}</h3>
                <p className="text-soft-grey text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-soft-grey">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                  <Button variant="ghost" size="sm" className="text-fresh-green p-0">
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-navy mb-4">Stay Updated</h2>
          <p className="text-soft-grey mb-6">
            Get the latest career insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fresh-green"
            />
            <Button className="bg-fresh-green text-white hover:bg-opacity-90">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}