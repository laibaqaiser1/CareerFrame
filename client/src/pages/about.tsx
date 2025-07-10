import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Target, Users, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-navy mb-4">About CareerFrame</h1>
          <p className="text-xl text-soft-grey">
            Empowering professionals to discover and achieve their dream careers through AI-powered guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-8">
              <Target className="h-12 w-12 text-fresh-green mb-4" />
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-soft-grey">
                To eliminate career confusion and help every professional find their perfect career path through personalized AI guidance and actionable insights.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-fresh-green mb-4" />
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-soft-grey">
                A world where every professional feels confident, fulfilled, and aligned with their career path, supported by intelligent technology and community.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-soft-grey mb-4">
              CareerFrame was founded on the belief that everyone deserves to find work that truly fulfills them. We saw too many talented professionals stuck in careers that didn't align with their values, skills, or aspirations.
            </p>
            <p className="text-soft-grey mb-4">
              Our team of career experts, AI researchers, and industry professionals came together to create a platform that provides personalized, actionable career guidance at scale. We combine cutting-edge AI technology with proven career development methodologies.
            </p>
            <p className="text-soft-grey">
              Today, CareerFrame helps thousands of professionals discover their ideal career paths, develop the right skills, and make confident career transitions.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-fresh-green mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Excellence</h4>
                <p className="text-sm text-soft-grey">We strive for the highest quality in everything we do.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-fresh-green mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Empathy</h4>
                <p className="text-sm text-soft-grey">We understand the challenges of career transitions.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="h-8 w-8 text-fresh-green mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Impact</h4>
                <p className="text-sm text-soft-grey">We measure success by the careers we help transform.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Ready to Start Your Journey?</h2>
          <p className="text-soft-grey mb-6">
            Join thousands of professionals who've discovered their ideal career path.
          </p>
          <Link href="/">
            <Button className="bg-fresh-green text-white hover:bg-opacity-90">
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}