import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function FounderStorySection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white shadow-xl">
          <CardContent className="p-8 lg:p-12">
            <div className="text-center mb-8">
              <Quote className="h-12 w-12 text-fresh-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-navy mb-4">
                Why I Created CareerFrame
              </h2>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/3">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-fresh-green to-navy/20 p-1">
                  <div className="w-full h-full rounded-full bg-soft-grey/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-navy">CF</span>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold text-navy">Sarah Chen</h3>
                  <p className="text-soft-grey">Founder & CEO</p>
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <blockquote className="text-lg text-soft-grey leading-relaxed">
                  <p className="mb-4">
                    "Three years ago, I was stuck in a marketing role that drained my energy every single day. 
                    I knew I wanted something different, but I had no idea where to start or what I was even qualified for."
                  </p>
                  <p className="mb-4">
                    "After months of career coaching sessions costing £200+ per hour and generic online courses 
                    that didn't apply to my situation, I realized there had to be a better way."
                  </p>
                  <p className="mb-4">
                    "That's when I decided to combine my background in AI and my personal career transformation 
                    experience to create CareerFrame — the platform I wish I'd had during my own journey."
                  </p>
                  <p className="font-semibold text-navy">
                    "Today, I wake up excited about my work, and I'm passionate about helping others 
                    experience that same transformation."
                  </p>
                </blockquote>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-fresh-green">10+</div>
                  <div className="text-sm text-soft-grey">Years in AI & Tech</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-fresh-green">12,000+</div>
                  <div className="text-sm text-soft-grey">Lives Transformed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-fresh-green">92%</div>
                  <div className="text-sm text-soft-grey">Success Rate</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}