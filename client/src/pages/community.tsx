import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Users, MessageSquare, Trophy, Calendar } from "lucide-react";

export default function Community() {
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
          <h1 className="text-4xl font-bold text-navy mb-4">Community</h1>
          <p className="text-xl text-soft-grey">
            Connect with fellow professionals on their career journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-fresh-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Industry Groups</h3>
              <p className="text-soft-grey mb-4">
                Join professionals in your field to share insights and opportunities.
              </p>
              <Button className="bg-fresh-green text-white hover:bg-opacity-90">
                Join Groups
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <MessageSquare className="h-12 w-12 text-fresh-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Discussion Forums</h3>
              <p className="text-soft-grey mb-4">
                Ask questions, share experiences, and get advice from peers.
              </p>
              <Button className="bg-fresh-green text-white hover:bg-opacity-90">
                View Forums
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <Trophy className="h-12 w-12 text-fresh-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Success Stories</h3>
              <p className="text-soft-grey mb-4">
                Celebrate achievements and inspire others with your journey.
              </p>
              <Button className="bg-fresh-green text-white hover:bg-opacity-90">
                Share Story
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <Calendar className="h-16 w-16 text-fresh-green mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-navy mb-4">Upcoming Events</h2>
          <p className="text-soft-grey mb-6">
            Join virtual networking events, workshops, and career discussions.
          </p>
          <Button className="bg-fresh-green text-white hover:bg-opacity-90">
            View Events
          </Button>
        </div>
      </div>
    </div>
  );
}