import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SoundButton } from "@/components/SoundButton";
import { useToast } from "@/hooks/use-toast";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import messageChatIcon from "../../assets/message-chat-circle.png";
import zapIcon from "../../assets/zap.png";
import chartBreakoutIcon from "../../assets/chart-breakout-square.png";
import { Target, TrendingUp, Search, Users, Bot, Trophy } from "lucide-react";

// Enhanced preload with timeout and retry logic for better device compatibility
const preloadImages = (callback?: () => void) => {
  if (typeof window !== "undefined") {
    const imagesToPreload = [
      "/Pattern.png",
      "/TopLeftCornerFrame.png", 
      "/BottomRightCornerFrame.png",
    ];

    let loadedCount = 0;
    const totalImages = imagesToPreload.length;

    imagesToPreload.forEach((src) => {
      const img = new Image();

      // Set loading timeout for slow connections
      const timeout = setTimeout(() => {
        console.warn(`Timeout loading: ${src}`);
        sessionStorage.setItem(`failed_${src.replace("/", "")}`, "true");
        loadedCount++;
        if (loadedCount === totalImages && callback) callback();
      }, 10000); // 10 second timeout

      img.onload = () => {
        clearTimeout(timeout);
        console.log(`Preloaded: ${src}`);
        // Clear any previous failure flags
        sessionStorage.removeItem(`failed_${src.replace("/", "")}`);
        sessionStorage.setItem(`preloaded_${src.replace("/", "")}`, "true");
        loadedCount++;
        if (loadedCount === totalImages && callback) callback();
      };

      img.onerror = () => {
        clearTimeout(timeout);
        console.warn(`Failed to preload: ${src}`);
        sessionStorage.setItem(`failed_${src.replace("/", "")}`, "true");
        loadedCount++;
        if (loadedCount === totalImages && callback) callback();
      };

      // Always use cache-busting parameter for fresh loading
      img.src = `${src}?v=${Date.now()}`;
    });
  }
};

export function ComingSoonPage() {
  const { scrollY } = useScroll();

  // Scroll transforms for corner frame animations
  const topLeftX = useTransform(scrollY, [0, 500], [0, -100]);
  const topLeftY = useTransform(scrollY, [0, 500], [0, -80]);
  const bottomRightX = useTransform(scrollY, [0, 500], [0, 100]);
  const bottomRightY = useTransform(scrollY, [0, 500], [0, 80]);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [spotsRemaining, setSpotsRemaining] = useState(7);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [patternReady, setPatternReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [cacheVersion] = useState(() => Date.now()); // Stable cache version
  const { toast } = useToast();

  // Check if mobile view for responsive pattern display
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Clear pattern cache on mobile to ensure fresh loading
    if (window.innerWidth < 768) {
      console.log("Mobile device detected, clearing pattern cache for fresh load");
      sessionStorage.removeItem("preloaded_Pattern.png");
      sessionStorage.removeItem("failed_Pattern.png");
    }

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Force white backgrounds after component mounts and after any updates
  useEffect(() => {
    const forceWhiteBackgrounds = () => {
      // Force countdown timer boxes to be white
      const countdownBoxes = document.querySelectorAll('.countdown-timer-box');
      countdownBoxes.forEach((box) => {
        if (box instanceof HTMLElement) {
          box.style.setProperty('background-color', '#ffffff', 'important');
          box.style.setProperty('background', '#ffffff', 'important');
          box.style.setProperty('background-image', 'none', 'important');
        }
      });

      // Force email input to be white
      const emailInputs = document.querySelectorAll('.email-input-field');
      emailInputs.forEach((input) => {
        if (input instanceof HTMLElement) {
          input.style.setProperty('background-color', '#ffffff', 'important');
          input.style.setProperty('background', '#ffffff', 'important');
          input.style.setProperty('background-image', 'none', 'important');
        }
      });

      // Force button to be green with white text
      const buttons = document.querySelectorAll('.secure-my-spot-button');
      buttons.forEach((button) => {
        if (button instanceof HTMLElement) {
          button.style.setProperty('background-color', '#829340', 'important');
          button.style.setProperty('background', '#829340', 'important');
          button.style.setProperty('color', 'white', 'important');
        }
      });

      // Force navbar sign-in buttons to be green with white text
      const navbarButtons = document.querySelectorAll('.navbar-signin-btn');
      navbarButtons.forEach((button) => {
        if (button instanceof HTMLElement) {
          button.style.setProperty('background-color', '#829340', 'important');
          button.style.setProperty('background', '#829340', 'important');
          button.style.setProperty('color', 'white', 'important');
          button.style.setProperty('border', '1px solid #829340', 'important');
        }
      });

      // Force hamburger lines to be white
      const hamburgerLines = document.querySelectorAll('.mobile-menu-toggle span');
      hamburgerLines.forEach((line) => {
        if (line instanceof HTMLElement) {
          line.style.setProperty('background-color', '#ffffff', 'important');
          line.style.setProperty('background', '#ffffff', 'important');
        }
      });
    };

    // Apply immediately
    forceWhiteBackgrounds();

    // Apply after a slight delay to override any other styles
    const timeoutId = setTimeout(forceWhiteBackgrounds, 100);

    // Apply whenever the window regains focus (in case of Replit refresh)
    const handleFocus = () => forceWhiteBackgrounds();
    window.addEventListener('focus', handleFocus);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  // Calculate countdown to launch date and preload images
  useEffect(() => {
    // Clear any previous failed states for fresh load
    if (isMobile) {
      sessionStorage.removeItem("failed_Pattern.png");
      console.log(
        "Mobile device detected, clearing pattern cache for fresh load",
      );
    }

    // Preload background images on component mount
    preloadImages(() => {
      console.log("All images preloaded, setting pattern ready");
      setPatternReady(true);
      // Force reflow to ensure pattern displays
      setTimeout(() => {
        const section = document.querySelector('.coming-soon-section');
        if (section) {
          console.log("Pattern class applied:", section.classList.contains('pattern-loaded'));
          console.log("Section background:", window.getComputedStyle(section).background.substring(0, 100));
        }
      }, 100);
    });

    // Check if images are already loaded from cache
    const checkCacheStatus = () => {
      const patternLoaded = sessionStorage.getItem("preloaded_Pattern.png");
      const topLeftLoaded = sessionStorage.getItem(
        "preloaded_TopLeftCornerFrame.png",
      );
      const bottomRightLoaded = sessionStorage.getItem(
        "preloaded_BottomRightCornerFrame.png",
      );

      console.log(
        "Cache status - Pattern:",
        !!patternLoaded,
        "TopLeft:",
        !!topLeftLoaded,
        "BottomRight:",
        !!bottomRightLoaded,
        "Mobile:",
        isMobile,
      );

      if (patternLoaded && topLeftLoaded && bottomRightLoaded) {
        setImagesLoaded(true);
      }
    };

    // Small delay to allow sessionStorage to be checked
    setTimeout(checkCacheStatus, 100);

    const launchDate = new Date("2025-08-18T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  // Inject corner frames with banner-section-only positioning
  useEffect(() => {
    const bannerSection = document.querySelector(".coming-soon-section");
    if (!bannerSection) return;

    const createCornerFrame = (src: string, isTopLeft: boolean) => {
      const frameDiv = document.createElement("div");
      frameDiv.className = `corner-frame-${isTopLeft ? "top-left" : "bottom-right"} ${isTopLeft ? "" : "bottom-right-frame"}`;
      frameDiv.style.cssText = `
        position: absolute !important;
        ${isTopLeft 
          ? (isMobile ? "top: -20px !important; left: -20px !important;" : "top: -40px !important; left: -30px !important;")
          : (isMobile ? "bottom: -5px !important; right: -5px !important;" : "bottom: 0px !important; right: 0px !important;")}
        width: ${isMobile ? "280px" : "520px"} !important;
        height: ${isMobile ? "280px" : "600px"} !important;
        z-index: 100001 !important;
        pointer-events: none !important;
        opacity: 1,
        transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        transform: translateZ(0);
        overflow: hidden !important;
        clip-path: inset(0 0 0 0) !important;
        will-change: transform, opacity;
      `;

      const img = document.createElement("img");
      img.src = src;
      img.style.cssText = `
        width: 100% !important;
        height: 100% !important;
        object-fit: contain !important;
        object-position: ${isTopLeft ? "top left" : "bottom right"} !important;
        opacity: 1, !important;
        display: block !important;
      `;

      img.onload = () => {
        // Ensure both frames appear at the same time with identical timing
        setTimeout(() => {
          frameDiv.style.opacity = "0.8";
          frameDiv.style.transform = "translateZ(0) translate3d(0px, 0px, 0px)";
          console.log(
            `🖼️ ${isTopLeft ? "TopLeft" : "BottomRight"} Frame loaded and positioned`,
          );
        }, 400); // Same timing for both frames
      };

      frameDiv.appendChild(img);
      bannerSection.appendChild(frameDiv);

      return frameDiv;
    };

    const topLeftFrame = createCornerFrame("/TopLeftCornerFrame.png", true);
    const bottomRightFrame = createCornerFrame(
      "/BottomRightCornerFrame.png",
      false,
    );

    // Scroll animation handler for corner frames (both mobile and desktop)
    const handleScroll = () => {
      if (topLeftFrame && bottomRightFrame) {
        const scrollValue = window.scrollY;
        const topLeftXValue = -scrollValue * 0.2; // Subtle parallax
        const topLeftYValue = -scrollValue * 0.16;
        const bottomRightXValue = scrollValue * 0.2;
        const bottomRightYValue = scrollValue * 0.16;
        
        topLeftFrame.style.transform = `translate3d(${topLeftXValue}px, ${topLeftYValue}px, 0)`;
        
        // Combine scale and translate for bottom right frame on mobile
        if (isMobile) {
          bottomRightFrame.style.transform = `scale(0.8) translate3d(${bottomRightXValue}px, ${bottomRightYValue}px, 0)`;
        } else {
          bottomRightFrame.style.transform = `translate3d(${bottomRightXValue}px, ${bottomRightYValue}px, 0)`;
        }
        
        // Debug scroll animation (reduced frequency) - can be removed in production
        // if (scrollValue % 10 === 0) {
        //   console.log(`🔄 Scroll: ${scrollValue}px, TopLeft: (${topLeftXValue}, ${topLeftYValue}), BottomRight: (${bottomRightXValue}, ${bottomRightYValue})`);
        // }
      }
    };

    // Add scroll listener for animations
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // Cleanup scroll listener
      window.removeEventListener("scroll", handleScroll);
      const existingFrames = bannerSection.querySelectorAll(
        ".corner-frame-top-left, .corner-frame-bottom-right",
      );
      existingFrames.forEach((frame: Element) => frame.remove());
    };
  }, [isMobile]);

  // Manage spot tracking
  useEffect(() => {
    // Force reset localStorage and set to 8 spots (2 people have already joined)
    localStorage.clear(); // Clear all localStorage
    localStorage.setItem("careerframe_spots_remaining", "8");
    setSpotsRemaining(8);

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "careerframe_spots_remaining" && e.newValue) {
        setSpotsRemaining(parseInt(e.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleWaitlistSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Failed to subscribe");

      // Decrease spots counter
      const currentSpots = parseInt(
        localStorage.getItem("careerframe_spots_remaining") || "8",
      );
      if (currentSpots > 0) {
        const newCount = currentSpots - 1;
        setSpotsRemaining(newCount);
        localStorage.setItem(
          "careerframe_spots_remaining",
          newCount.toString(),
        );

        // Trigger storage event to update all components
        window.dispatchEvent(
          new StorageEvent("storage", {
            key: "careerframe_spots_remaining",
            newValue: newCount.toString(),
            oldValue: currentSpots.toString(),
          }),
        );
      }

      // Track waitlist signup in Google Analytics
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "waitlist_signup", {
          event_category: "engagement",
          event_label: "email_submission",
        });
      }

      toast({
        title: "Welcome to the waitlist!",
        description:
          "You've secured your spot! We'll notify you when we launch.",
      });

      setEmail("");
    } catch (error) {
      toast({
        title: "Failed to join waitlist",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Debug logging for background visibility
  useEffect(() => {
    console.log("🎨 BACKGROUND DEBUG:", {
      mobile: isMobile,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      userAgent: navigator.userAgent.substring(0, 50),
      isReplit: window.location.hostname.includes("replit"),
      scrollY: window.scrollY,
    });

    // Check if we're in an iframe (Replit preview)
    const inIframe = window.self !== window.top;
    console.log("🖼️ IFRAME STATUS:", inIframe);

    // Try to force visibility with extreme CSS
    setTimeout(() => {
      const allDivs = document.querySelectorAll("div");
      allDivs.forEach((div, index) => {
        if (index < 5) {
          const styles = getComputedStyle(div);
          console.log(`DIV ${index}:`, {
            background: styles.background.substring(0, 30),
            display: styles.display,
            visibility: styles.visibility,
            zIndex: styles.zIndex,
          });
        }
      });
    }, 100);

    // Check if background element exists and is visible
    setTimeout(() => {
      const bgDiv = document.querySelector(".coming-soon-bg");
      const section = document.querySelector(".coming-soon-section");
      const body = document.body;
      const html = document.documentElement;

      console.log("🔍 COMPREHENSIVE DEBUG:", {
        backgroundDiv: {
          exists: !!bgDiv,
          visible: bgDiv ? getComputedStyle(bgDiv).display !== "none" : false,
          opacity: bgDiv ? getComputedStyle(bgDiv).opacity : "none",
          background: bgDiv
            ? getComputedStyle(bgDiv).background.substring(0, 100)
            : "none",
          position: bgDiv ? getComputedStyle(bgDiv).position : "none",
          zIndex: bgDiv ? getComputedStyle(bgDiv).zIndex : "none",
        },
        section: {
          exists: !!section,
          visible: section
            ? getComputedStyle(section).display !== "none"
            : false,
          background: section
            ? getComputedStyle(section).background.substring(0, 50)
            : "none",
          zIndex: section ? getComputedStyle(section).zIndex : "none",
        },
        body: {
          background: getComputedStyle(body).background.substring(0, 50),
          overflow: getComputedStyle(body).overflow,
        },
        html: {
          background: getComputedStyle(html).background.substring(0, 50),
          overflow: getComputedStyle(html).overflow,
        },
        viewport: {
          scrollY: window.scrollY,
          innerHeight: window.innerHeight,
          innerWidth: window.innerWidth,
        },
      });

      // Check all parent elements that might be covering
      let element = bgDiv?.parentElement;
      let level = 0;
      while (element && level < 5) {
        const styles = getComputedStyle(element);
        console.log(`🔗 Parent Level ${level}:`, {
          tagName: element.tagName,
          background: styles.background.substring(0, 50),
          zIndex: styles.zIndex,
          position: styles.position,
          overflow: styles.overflow,
        });
        element = element.parentElement;
        level++;
      }
    }, 500);
  }, [isMobile]);

  return (
    <div>
      <section
        className={`flex flex-col relative motion-safe force-animations coming-soon-section ${patternReady ? 'pattern-loaded' : ''}`}
      style={{
        background: `linear-gradient(303.01deg, #FFF1F0 0%, #FFFAF1 33.33%, #E8FAF6 66.67%, #EAF6FD 100%)`,
        width: "100%",
      }}
    >

      {/* Corner frames are now injected directly into document.body via useEffect */}
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-28 flex-1 flex flex-col relative z-10">
        {/* What to Expect After You Sign Up Content */}
        <div className="flex-1 flex items-center justify-center pt-12 sm:pt-16 md:pt-20 pb-4 sm:pb-6 md:pb-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-xl mx-auto w-full mobile-fade-in"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-gray-800 mb-4 leading-tight px-2 mobile-slide-up"
              style={{
                fontFamily: "Inter",
                letterSpacing: "-0.02em",
              }}
            >
              Your Potential Is Bigger Than your Job Title — Let's Prove It
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-center text-gray-600 mb-4 px-4 max-w-2xl mx-auto mobile-fade-in-delayed"
              style={{
                fontFamily: "Inter",
                lineHeight: "1.5",
              }}
            >
              Real Progress - Real People, 6 x cheaper than the average career coach
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4 w-full max-w-sm mx-auto sm:max-w-none"
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full sm:w-auto px-4 sm:px-6 py-2 text-sm font-semibold border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                onClick={() => window.open('https://app.careerframe.co.uk/', '_blank')}
              >
                Subscribe
              </Button>
              <Button
                size="sm"
                className="get-started-button w-full sm:w-auto px-4 sm:px-6 py-2 text-sm font-semibold text-white"
                style={{ 
                  backgroundColor: "#829340 !important",
                  background: "#829340 !important",
                  color: "white !important",
                  borderRadius: "8px !important"
                }}
                onClick={() => window.open('https://app.careerframe.co.uk/', '_blank')}
              >
                Start for Free
              </Button>
            </motion.div>
            
            {/* Guarantee */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-xs font-medium text-gray-700 mb-6"
            >
              90-day satisfaction guarantee
            </motion.p>









          </motion.div>
        </div>
      </div>
      

    </section>

    </div>
  );
}
