import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState, useEffect } from "react";
import { 
  Bot, 
  Search, 
  TrendingUp, 
  Target, 
  FileText, 
  Users, 
  Trophy,
  Goal,
  Route,
  ArrowRight
} from "lucide-react";
import careerPathwaysImage from "@assets/Screenshot 2025-05-17 182855.png";
import xpRewardInterface from "@assets/XP & Reward Interface.png";
import careerChoiceImage from "@assets/East Asian Male Choosing Career.png";

const features = [
  {
    icon: Bot,
    title: "1. Personalized Career Coaching",
    description: "Tailored AI-powered coaching offering personalized advice and action plans to guide your career journey.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    alt: "AI-powered career coaching session",
    cta: "Start Coaching"
  },
  {
    icon: TrendingUp,
    title: "2. Skill Gap Analysis",
    description: "Assess your current skills, identify gaps, and receive recommendations to elevate your qualifications.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    alt: "Professional skills assessment and analysis",
    cta: "Analyze Skills"
  },
  {
    icon: Route,
    title: "3. Tailored Career Pathways",
    description: "Receive a bespoke roadmap with clear milestones and tailored career opportunities based on your goals.",
    image: careerChoiceImage,
    alt: "Professional using VR to explore various career options and paths",
    cta: "Build Pathway"
  },
  {
    icon: Users,
    title: "4. Industry Specific Networking",
    description: "Create your own or join groups tailored to your chosen industry—connect with professionals already in the field or others, just like you, who are working toward the same career path.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    alt: "Professional networking groups and industry connections",
    cta: "Join Network"
  }
];

const additionalFeatures = [
  {
    icon: FileText,
    title: "5. AI-Generated Cover Letter",
    description: "Automatically generate a personalized cover letter that fits the specific role you're applying for.",
    color: "bg-indigo-100 text-indigo-500"
  },
  {
    icon: Target,
    title: "6. Milestone Tracker",
    description: "Track and celebrate career progress with personalized goals and visible milestones (Premium: Full visibility).",
    color: "bg-purple-100 text-purple-500"
  },
  {
    icon: Search,
    title: "7. Explore Roles Access",
    description: "Get limited (Freemium) or unlimited (Premium) access to in-depth role insights, including job fit, salaries, and perks.",
    color: "bg-blue-100 text-blue-500"
  },
  {
    icon: TrendingUp,
    title: "8. Deep Skill Gap Analysis (Premium)",
    description: "Receive a detailed skill gap report to understand areas needing improvement for career advancement.",
    color: "bg-green-100 text-green-500"
  },
  {
    icon: Trophy,
    title: "9. XP Points & Rewards (2x XP Premium)",
    description: "Earn XP points for completing milestones and unlock rewards to accelerate your career progress.",
    color: "bg-yellow-100 text-yellow-500"
  },
  {
    icon: FileText,
    title: "10. AI-Powered Resume Builder",
    description: "Generate a professional, optimized resume tailored to the job you're aiming for with AI-driven insights.",
    color: "bg-pink-100 text-pink-500"
  },
  {
    icon: Goal,
    title: "11. Career Alignment & Role Insights",
    description: "Get in-depth role overviews and personalized recommendations based on your skills, experience, and career aspirations.",
    color: "bg-cyan-100 text-cyan-500"
  }
];

const valueProps = [
  {
    icon: Bot,
    title: "Personalized Career Coaching",
    description: "Get expert guidance every step of the way. Our AI-powered coach builds a relationship with you, offering tailored advice and strategies that align with your unique strengths and career goals.",
    color: "bg-fresh-green text-white"
  },
  {
    icon: TrendingUp,
    title: "Skill Gap Analysis & Growth",
    description: "Discover exactly where you stand. CareerFrame identifies the gaps between your current skills and the ones required for your dream role, giving you a clear path to grow and advance.",
    color: "bg-navy text-white"
  },
  {
    icon: Route,
    title: "Tailored Career Pathways",
    description: "No one-size-fits-all approach. CareerFrame creates a bespoke roadmap for your career, matching you with the right opportunities and learning resources to unlock your potential.",
    color: "bg-purple-500 text-white"
  }
];

export function FeaturesSection() {
  const { ref: valuePropRef, isVisible: valuePropVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { ref: additionalRef, isVisible: additionalVisible } = useScrollAnimation();
  
  // Animated grid state - 3x3 grid with 7 boxes and 2 empty spaces
  const [gridLayout, setGridLayout] = useState(() => {
    const initialGrid = new Array(9).fill(null);
    additionalFeatures.forEach((feature, index) => {
      initialGrid[index] = feature;
    });
    return initialGrid;
  });
  
  const [isPaused, setIsPaused] = useState(false);
  const [isPuzzleMode, setIsPuzzleMode] = useState(false);
  const [puzzleCompleted, setPuzzleCompleted] = useState(false);
  const [showReward, setShowReward] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);
  
  // Correct order for puzzle completion
  const correctOrder = additionalFeatures.map(feature => feature.title);
  
  const checkPuzzleCompletion = (currentGrid) => {
    const currentOrder = currentGrid.filter(item => item !== null).map(item => item.title);
    return JSON.stringify(currentOrder) === JSON.stringify(correctOrder);
  };
  
  const handleBoxClick = (clickedIndex) => {
    if (!isPuzzleMode || puzzleCompleted) return;
    
    setGridLayout(currentGrid => {
      const newGrid = [...currentGrid];
      const emptySpaces = [];
      
      newGrid.forEach((item, index) => {
        if (item === null) emptySpaces.push(index);
      });
      
      // Check if clicked box is adjacent to empty space
      const getAdjacent = (pos) => {
        const row = Math.floor(pos / 3);
        const col = pos % 3;
        const adjacent = [];
        
        if (row > 0) adjacent.push(pos - 3);
        if (row < 2) adjacent.push(pos + 3);
        if (col > 0) adjacent.push(pos - 1);
        if (col < 2) adjacent.push(pos + 1);
        
        return adjacent;
      };
      
      const adjacentToClicked = getAdjacent(clickedIndex);
      const validMoves = adjacentToClicked.filter(pos => emptySpaces.includes(pos));
      
      if (validMoves.length > 0 && newGrid[clickedIndex] !== null) {
        const targetPos = validMoves[0];
        newGrid[targetPos] = newGrid[clickedIndex];
        newGrid[clickedIndex] = null;
        
        // Check for completion
        if (checkPuzzleCompletion(newGrid)) {
          setPuzzleCompleted(true);
          setShowReward(true);
        }
      }
      
      return newGrid;
    });
  };
  
  const handleDragStart = (e, feature, index) => {
    if (!isPuzzleMode || puzzleCompleted) return;
    setDraggedItem(feature);
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    if (!isPuzzleMode || !draggedItem || draggedIndex === null) return;

    const sourceIndex = draggedIndex;
    
    // Check if target position is empty or adjacent to source
    if (gridLayout[dropIndex] !== null) return;
    
    const getAdjacent = (pos) => {
      const row = Math.floor(pos / 3);
      const col = pos % 3;
      const adjacent = [];
      
      if (row > 0) adjacent.push(pos - 3);
      if (row < 2) adjacent.push(pos + 3);
      if (col > 0) adjacent.push(pos - 1);
      if (col < 2) adjacent.push(pos + 1);
      
      return adjacent;
    };

    const adjacentPositions = getAdjacent(sourceIndex);
    if (!adjacentPositions.includes(dropIndex)) return;

    setGridLayout(currentGrid => {
      const newGrid = [...currentGrid];
      newGrid[dropIndex] = draggedItem;
      newGrid[sourceIndex] = null;
      
      // Check for completion
      if (checkPuzzleCompletion(newGrid)) {
        setPuzzleCompleted(true);
        setShowReward(true);
      }
      
      return newGrid;
    });

    setDraggedItem(null);
    setDraggedIndex(null);
  };

  const startPuzzleMode = () => {
    setIsPuzzleMode(true);
    setIsPaused(true); // This will stop automatic movement
    setPuzzleCompleted(false);
    setShowReward(false);
    
    // Shuffle the grid for puzzle
    setGridLayout(() => {
      const shuffled = [...additionalFeatures];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      
      const puzzleGrid = new Array(9).fill(null);
      shuffled.forEach((feature, index) => {
        puzzleGrid[index] = feature;
      });
      return puzzleGrid;
    });
  };
  
  const exitPuzzleMode = () => {
    setIsPuzzleMode(false);
    setIsPaused(false);
    setPuzzleCompleted(false);
    setShowReward(false);
    
    // Reset to original layout
    setGridLayout(() => {
      const initialGrid = new Array(9).fill(null);
      additionalFeatures.forEach((feature, index) => {
        initialGrid[index] = feature;
      });
      return initialGrid;
    });
  };
  
  useEffect(() => {
    if (isPuzzleMode) return; // Don't auto-move in puzzle mode
    const moveBox = () => {
      setGridLayout(currentGrid => {
        const newGrid = [...currentGrid];
        const emptySpaces = [];
        const filledSpaces = [];
        
        // Find empty and filled positions
        newGrid.forEach((item, index) => {
          if (item === null) {
            emptySpaces.push(index);
          } else {
            filledSpaces.push(index);
          }
        });
        
        if (emptySpaces.length === 0 || filledSpaces.length === 0) return currentGrid;
        
        // Find boxes that can move to adjacent empty spaces
        const getAdjacent = (pos) => {
          const row = Math.floor(pos / 3);
          const col = pos % 3;
          const adjacent = [];
          
          // Check all 4 directions
          if (row > 0) adjacent.push(pos - 3); // up
          if (row < 2) adjacent.push(pos + 3); // down
          if (col > 0) adjacent.push(pos - 1); // left
          if (col < 2) adjacent.push(pos + 1); // right
          
          return adjacent;
        };
        
        const movableBoxes = [];
        filledSpaces.forEach(boxPos => {
          const adjacentPositions = getAdjacent(boxPos);
          const canMoveTo = adjacentPositions.filter(pos => emptySpaces.includes(pos));
          if (canMoveTo.length > 0) {
            movableBoxes.push({ from: boxPos, to: canMoveTo });
          }
        });
        
        if (movableBoxes.length === 0) return currentGrid;
        
        // Randomly select a box to move
        const selectedBox = movableBoxes[Math.floor(Math.random() * movableBoxes.length)];
        const targetPosition = selectedBox.to[Math.floor(Math.random() * selectedBox.to.length)];
        
        // Move the box
        newGrid[targetPosition] = newGrid[selectedBox.from];
        newGrid[selectedBox.from] = null;
        
        return newGrid;
      });
    };
    
    // Start movement after initial render, then continue at random intervals
    const startMovement = () => {
      const move = () => {
        if (!isPaused) {
          moveBox();
        }
        // Schedule next move with random delay between 4-8 seconds for slower movement
        setTimeout(move, 4000 + Math.random() * 4000);
      };
      setTimeout(move, 2000); // Initial delay
    };
    
    startMovement();
  }, []);

  return (
    <>
      {/* Value Proposition */}
      <section className="py-16 bg-gradient-to-r from-emerald-400 to-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            ref={valuePropRef}
            className={`transition-all duration-700 ${valuePropVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 drop-shadow-lg">
              More Than a Job Board - It's Your Complete Career Ecosystem
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto mb-12 drop-shadow-md">
              We don't just show you what jobs exist. We show you which roles are right for you, and exactly how to get there with AI-powered guidance every step of the way.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-700 card-hover stagger-${index + 1} ${
                  valuePropVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className={`w-16 h-16 ${prop.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <prop.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{prop.title}</h3>
                <p className="text-black font-bold">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section id="features" className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={featuresRef}
            className={`text-center mb-16 transition-all duration-700 ${
              featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
              Powerful Features to Accelerate Your Career
            </h2>
            <p className="text-xl text-soft-grey max-w-3xl mx-auto">
              Every tool you need to discover, prepare for, and land your dream career - all powered by intelligent AI guidance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`bg-white shadow-lg card-hover transition-all duration-500 delay-${index * 100} ${
                  featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-fresh-green/10 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="h-6 w-6 text-fresh-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy mb-2">{feature.title}</h3>
                      <p className="text-soft-grey">{feature.description}</p>
                    </div>
                  </div>
                  <img 
                    src={feature.image}
                    alt={feature.alt}
                    className="rounded-lg w-full h-48 object-cover object-top mb-4" 
                  />
                  <Button variant="link" className="text-fresh-green p-0 h-auto font-semibold">
                    {feature.cta} <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Puzzle Controls */}
          <div className="text-center mb-6">
            {!isPuzzleMode ? (
              <Button 
                onClick={startPuzzleMode}
                className="bg-fresh-green hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold"
              >
                🧩 Try the Puzzle Challenge - Earn 20 XP!
              </Button>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-4">
                  <Button 
                    onClick={exitPuzzleMode}
                    variant="outline"
                    className="border-navy text-navy hover:bg-navy hover:text-white"
                  >
                    Exit Puzzle
                  </Button>
                  {puzzleCompleted && (
                    <div className="text-fresh-green font-bold text-lg">
                      🏆 Puzzle Complete!
                    </div>
                  )}
                </div>
                <p className="text-soft-grey">
                  {puzzleCompleted 
                    ? "Amazing work! You've earned 20 XP!" 
                    : "Drag boxes to empty spaces next to them. Arrange in original order to win!"
                  }
                </p>
              </div>
            )}
          </div>

          {/* Additional Features Grid - Organic 3x3 Movement */}
          <div 
            ref={additionalRef}
            className="grid grid-cols-3 gap-6 max-w-2xl mx-auto p-8 rounded-xl relative"
            style={{ 
              minHeight: '480px',
              backgroundColor: '#722F37', // Midnight red background
              border: '2px solid #5a1e23'
            }}
          >
            {gridLayout.map((feature, gridIndex) => (
              <div
                key={gridIndex}
                className={`transition-all duration-[2500ms] ease-out ${
                  additionalVisible ? 'opacity-100' : 'opacity-0'
                } ${isPuzzleMode && !feature ? 'border-2 border-dashed border-white border-opacity-30 rounded-lg' : ''}`}
                style={{
                  gridArea: `${Math.floor(gridIndex / 3) + 1} / ${(gridIndex % 3) + 1}`,
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' // Smooth easing
                }}
                onMouseEnter={() => !isPuzzleMode && setIsPaused(true)}
                onMouseLeave={() => !isPuzzleMode && setIsPaused(false)}
                onClick={() => handleBoxClick(gridIndex)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, gridIndex)}
              >
                {feature && (
                  <Card 
                    className={`bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-[2500ms] ease-out h-full ${
                      isPuzzleMode ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'
                    }`}
                    style={{
                      transform: 'scale(1)',
                      transitionProperty: 'all, box-shadow, transform',
                      transitionDuration: '2500ms', // Much slower transitions
                      transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                    draggable={isPuzzleMode && !puzzleCompleted}
                    onDragStart={(e) => handleDragStart(e, feature, gridIndex)}
                  >
                    <CardContent className="p-5 h-full flex flex-col">
                      <div className={`w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center mb-3 transition-all duration-700`}>
                        <feature.icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-base font-semibold text-navy mb-2">{feature.title}</h4>
                      <p className="text-sm text-soft-grey flex-1">{feature.description}</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            ))}
            
            {/* Reward Popup */}
            {showReward && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-xl">
                <Card className="bg-white max-w-md mx-4 shadow-2xl">
                  <CardContent className="p-8 text-center">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold text-navy mb-4">
                      Congratulations!
                    </h3>
                    <p className="text-lg text-soft-grey mb-6">
                      You've earned <span className="font-bold text-fresh-green">20 XP</span> by completing the puzzle!
                    </p>
                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-fresh-green hover:bg-green-600 text-white py-3 text-lg font-semibold"
                        onClick={() => {
                          // Scroll to newsletter signup
                          document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
                          setShowReward(false);
                        }}
                      >
                        Join for Free to Claim Your Reward
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => setShowReward(false)}
                      >
                        Close
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* XP & Rewards Highlight */}
          <div className="mt-16">
            <Card className="gradient-green text-white overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">🏆 Earn XP & Unlock Rewards</h3>
                    <p className="text-green-50 text-lg mb-6">
                      Complete tasks like CV building, skill upgrades, or community engagement to earn XP. Exchange points for discounts with partner brands or unlock premium features.
                    </p>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold">Build</div>
                        <div className="text-green-200 text-sm">Your Skills</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">Earn</div>
                        <div className="text-green-200 text-sm">XP Points</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">Unlock</div>
                        <div className="text-green-200 text-sm">Rewards</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <img 
                      src={xpRewardInterface}
                      alt="CareerFrame XP and Rewards Interface showing team leaderboards and milestone tracking" 
                      className="rounded-xl mx-auto max-w-full h-auto" 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
