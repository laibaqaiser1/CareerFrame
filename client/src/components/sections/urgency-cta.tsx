import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export function UrgencyCTASection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 23,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-navy to-navy/90">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Card className="bg-white shadow-2xl">
          <CardContent className="p-8 lg:p-12">
            <div className="flex items-center justify-center gap-2 text-red-600 mb-6">
              <Clock className="h-6 w-6" />
              <span className="text-lg font-semibold">Limited Time Offer</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
              Join the Next Career Transformation Cohort
            </h2>
            
            <p className="text-xl text-soft-grey mb-8">
              We only accept 100 new members per month to ensure personalized attention. 
              Current cohort closes in:
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 mb-8">
              <div className="text-white px-4 py-3 rounded-lg" style={{ backgroundColor: '#829340' }}>
                <div className="text-2xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm">Hours</div>
              </div>
              <div className="text-white px-4 py-3 rounded-lg" style={{ backgroundColor: '#829340' }}>
                <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm">Minutes</div>
              </div>
              <div className="text-white px-4 py-3 rounded-lg" style={{ backgroundColor: '#829340' }}>
                <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                <div className="text-sm">Seconds</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2" style={{ color: '#829340' }} />
                <div className="text-2xl font-bold text-navy">73</div>
                <div className="text-sm text-soft-grey">Spots Remaining</div>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-2" style={{ color: '#829340' }} />
                <div className="text-2xl font-bold text-navy">72%</div>
                <div className="text-sm text-soft-grey">Reported Improved Career Confidence</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 mx-auto mb-2" style={{ color: '#829340' }} />
                <div className="text-2xl font-bold text-navy">90-Day</div>
                <div className="text-sm text-soft-grey">Satisfaction Guarantee</div>
              </div>
            </div>

            <Button 
              size="lg"
              className="text-white text-xl px-12 py-6 mb-4"
              style={{ backgroundColor: '#829340' }}
            >
              Secure Your Spot Now
            </Button>
            
            <p className="text-sm text-soft-grey">
              Next cohort starts in {Math.ceil((timeLeft.hours + timeLeft.minutes/60 + timeLeft.seconds/3600) / 24)} days • Free, why wouldn't you try? • 90-day money-back guarantee
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}