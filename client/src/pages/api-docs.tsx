import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Code, Book, Key, Zap } from "lucide-react";

export default function ApiDocs() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-navy mb-4">API Documentation</h1>
          <p className="text-xl text-soft-grey">
            Integrate CareerFrame's AI-powered career guidance into your applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <Key className="h-8 w-8 text-fresh-green mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Authentication</h3>
              <p className="text-sm text-soft-grey">API key management</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Code className="h-8 w-8 text-fresh-green mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Endpoints</h3>
              <p className="text-sm text-soft-grey">Available API routes</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Book className="h-8 w-8 text-fresh-green mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Examples</h3>
              <p className="text-sm text-soft-grey">Code samples</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Zap className="h-8 w-8 text-fresh-green mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Webhooks</h3>
              <p className="text-sm text-soft-grey">Real-time updates</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center mb-12">
          <h2 className="text-2xl font-bold text-navy mb-4">Coming Soon</h2>
          <p className="text-soft-grey mb-6">
            We're working on comprehensive API documentation to help developers integrate CareerFrame's capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-fresh-green text-white hover:bg-opacity-90">
              Join Beta Access
            </Button>
            <Link href="/contact">
              <Button variant="outline" className="border-fresh-green text-fresh-green hover:bg-fresh-green hover:text-white">
                Contact for Early Access
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Planned Features</h3>
              <ul className="space-y-2 text-soft-grey">
                <li>• Career assessment API</li>
                <li>• Skill gap analysis endpoint</li>
                <li>• Job matching algorithms</li>
                <li>• Real-time career insights</li>
                <li>• Progress tracking webhooks</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Use Cases</h3>
              <ul className="space-y-2 text-soft-grey">
                <li>• HR platforms integration</li>
                <li>• Educational institutions</li>
                <li>• Career coaching apps</li>
                <li>• Job board enhancements</li>
                <li>• Corporate training systems</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}