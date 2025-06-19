import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function FounderStorySection() {
  return (
    <section id="founder-story" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
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
                  <h3 className="text-xl font-semibold text-navy">Arron McWilliam</h3>
                  <p className="text-soft-grey">Founder & CEO</p>
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <blockquote className="text-lg text-soft-grey leading-relaxed">
                  <p className="mb-4">
                    "When I left the military in 2011, I found myself completely lost in the civilian job market. I had the discipline, the work ethic, the drive — but none of that seemed to matter. Job applications went unanswered. Roles I knew I could thrive in were out of reach because my CV didn't say the right things. I wasn't even getting feedback to know where I was going wrong. It was exhausting and demoralising."
                  </p>
                  <p className="mb-4">
                    "Thanks to a friend, I eventually landed a job in the gas industry and worked relentlessly to build a stable future — but that feeling of being overlooked and undervalued never really left me. At times, it felt like I had to prove I was applying for jobs just to reassure my partner, because the silence from employers made it look like I wasn't trying."
                  </p>
                  <p className="mb-4">
                    "That experience stayed with me. It lit a fire. I wanted to build something that gave people like me the guidance, clarity, and confidence I didn't have back then — without the £100-an-hour coaching fees or the irrelevant advice of generic career platforms."
                  </p>
                  <p className="font-semibold text-navy">
                    "That's why I created CareerFrame — a place where you're recognised for your true potential, not just what's written on your CV. It's the platform I wish I had when I was starting over. And now, I'm here to help others find direction, regain confidence, and take control of their future."
                  </p>
                </blockquote>
              </div>
            </div>
            

          </CardContent>
        </Card>
      </div>
    </section>
  );
}