import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SoundButton } from "@/components/SoundButton";
import { useToast } from "@/hooks/use-toast";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";

// Enhanced preload with timeout and retry logic for better device compatibility
const preloadImages = () => {
  if (typeof window !== "undefined") {
    const imagesToPreload = [
      "/Pattern.png",
      "/TopLeftCornerFrame.png",
      "/BottomRightCornerFrame.png",
    ];

    imagesToPreload.forEach((src) => {
      const img = new Image();

      // Set loading timeout for slow connections
      const timeout = setTimeout(() => {
        console.warn(`Timeout loading: ${src}`);
      }, 10000); // 10 second timeout

      img.onload = () => {
        clearTimeout(timeout);
        console.log(`Preloaded: ${src}`);
        // Store in sessionStorage to prevent re-loading
        sessionStorage.setItem(`preloaded_${src.replace("/", "")}`, "true");
      };

      img.onerror = () => {
        clearTimeout(timeout);
        console.warn(`Failed to preload: ${src}`);
        // Set fallback flag
        sessionStorage.setItem(`failed_${src.replace("/", "")}`, "true");
      };

      // Add cache-busting parameter for reliability
      img.src = `${src}?v=${Date.now()}`;
    });
  }
};

export function ComingSoonPage() {
  const { scrollY } = useScroll();

  // Transform scroll position to frame positions
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
  const [isMobile, setIsMobile] = useState(false);
  const { toast } = useToast();

  // Check if mobile view for responsive pattern display
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
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
    preloadImages();

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
      frameDiv.className = `corner-frame-${isTopLeft ? "top-left" : "bottom-right"}`;
      frameDiv.style.cssText = `
        position: absolute !important;
        ${isTopLeft ? "top: -40px !important; left: -30px !important;" : "bottom: 0px !important; right: 0px !important;"}
        width: ${isMobile ? "280px" : "520px"} !important;
        height: ${isMobile ? "280px" : "600px"} !important;
        z-index: 100001 !important;
        pointer-events: none !important;
        opacity: 0;
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
        opacity: 0.8 !important;
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

    // Scroll animation handler - smooth animation within banner section only
    const handleScroll = () => {
      if (!topLeftFrame || !bottomRightFrame) return;

      const bannerRect = bannerSection.getBoundingClientRect();
      const bannerHeight = (bannerSection as HTMLElement).offsetHeight;

      // Calculate scroll progress within banner section bounds only
      if (bannerRect.top <= 0 && bannerRect.bottom > 0) {
        const scrollIntoView = Math.abs(bannerRect.top);
        const maxScroll = bannerHeight * 0.6; // Animate over 60% of banner height
        const scrollProgress = Math.min(scrollIntoView / maxScroll, 1);

        // Smooth easing for natural movement - cubic bezier for more fluid animation
        const easedProgress =
          scrollProgress < 0.5
            ? 4 * scrollProgress * scrollProgress * scrollProgress
            : 1 - Math.pow(-2 * scrollProgress + 2, 3) / 2;

        const translateDistance = easedProgress * 100; // 100px movement for better visibility
        const opacity = Math.max(0.8 - easedProgress * 0.3, 0.4); // More visible fade range

        // Apply transforms with hardware acceleration for both frames identically
        const topLeftTransform = `translate3d(-${translateDistance}px, -${translateDistance}px, 0px)`;
        const bottomRightTransform = `translate3d(${translateDistance}px, ${translateDistance}px, 0px)`;

        // Apply identical animation properties to both frames
        topLeftFrame.style.transform = topLeftTransform;
        topLeftFrame.style.opacity = opacity.toString();
        topLeftFrame.style.willChange = "transform, opacity";

        bottomRightFrame.style.transform = bottomRightTransform;
        bottomRightFrame.style.opacity = opacity.toString();
        bottomRightFrame.style.willChange = "transform, opacity";

        // Smooth containment with gradual clipping for both frames
        if (translateDistance > 40) {
          const clipAmount = Math.min(translateDistance - 40, 60);
          topLeftFrame.style.clipPath = `inset(${clipAmount}px 0 0 ${clipAmount}px)`;
          bottomRightFrame.style.clipPath = `inset(0 ${clipAmount}px ${clipAmount}px 0)`;
        } else {
          topLeftFrame.style.clipPath = "inset(0 0 0 0)";
          bottomRightFrame.style.clipPath = "inset(0 0 0 0)";
        }
      } else {
        // Reset to corner positions when banner is fully visible - identical for both
        topLeftFrame.style.transform = "translate3d(0px, 0px, 0px)";
        topLeftFrame.style.opacity = "0.8";
        topLeftFrame.style.clipPath = "inset(0 0 0 0)";
        topLeftFrame.style.willChange = "auto";

        bottomRightFrame.style.transform = "translate3d(0px, 0px, 0px)";
        bottomRightFrame.style.opacity = "0.8";
        bottomRightFrame.style.clipPath = "inset(0 0 0 0)";
        bottomRightFrame.style.willChange = "auto";
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // Cleanup
      window.removeEventListener("scroll", handleScroll);
      const existingFrames = bannerSection.querySelectorAll(
        ".corner-frame-top-left, .corner-frame-bottom-right",
      );
      existingFrames.forEach((frame) => frame.remove());
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
    <section
      className="min-h-screen flex flex-col relative overflow-hidden motion-safe coming-soon-section"
      style={{
        background:
          "linear-gradient(303.01deg, #FFF1F0 0%, #FFFAF1 33.33%, #E8FAF6 66.67%, #EAF6FD 100%)",
        marginTop: "-128px",
        paddingTop: "128px",
        minHeight: "100vh",
        width: "100%",
        backgroundAttachment: "scroll", // Better performance on mobile
        backgroundSize: "cover",
      }}
    >
      {/* Pattern Background - Enhanced Mobile Coverage */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.9, x: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-1/2 h-full pattern-background md:w-1/2"
        style={{
          backgroundImage: sessionStorage.getItem("failed_Pattern.png")
            ? "linear-gradient(45deg, rgba(255,241,240,0.15) 0%, rgba(255,250,241,0.15) 50%, rgba(240,248,255,0.15) 100%)"
            : "url(/Pattern.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: isMobile ? "center right" : "center",
          backgroundColor: "rgba(255,250,241,0.1)",
          opacity: imagesLoaded ? 1 : 0.7,
          transition: "opacity 0.8s ease-in-out",
          minHeight: "100vh",
          height: "100%",
          width: isMobile ? "50%" : "50%",
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 0,
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
        onLoad={() => {
          console.log(
            "Pattern background loaded successfully on mobile:",
            isMobile,
          );
          setImagesLoaded(true);
        }}
        onError={(e) => {
          console.warn(
            "Pattern image failed to load on mobile:",
            isMobile,
            "using fallback",
          );
          sessionStorage.setItem("failed_Pattern.png", "true");
          const target = e.currentTarget as HTMLElement;
          target.style.backgroundImage = `
            linear-gradient(45deg, rgba(255,241,240,0.15) 0%, rgba(255,250,241,0.15) 50%, rgba(240,248,255,0.15) 100%),
            radial-gradient(circle at 30% 20%, rgba(130,147,64,0.08) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(30,58,138,0.08) 0%, transparent 50%)
          `;
        }}
      />

      {/* Corner frames are now injected directly into document.body via useEffect */}
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-28 flex-1 flex flex-col relative z-10 pt-16 sm:pt-20 md:pt-24 lg:pt-20">
        {/* Main Launch Message - Mobile Responsive */}
        <div className="flex-1 flex items-center justify-center py-6 sm:py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto w-full"
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-gray-800 mb-4 leading-tight px-2"
              style={{
                fontFamily: "Inter",
                letterSpacing: "-0.02em",
              }}
            >
              Launch day is soon approaching
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-6 px-4 max-w-3xl mx-auto"
              style={{
                fontFamily: "Inter",
                lineHeight: "1.5",
              }}
            >
              we're letting in only 10 people first and you'll want to be one of
              them!
            </p>

            {/* Countdown Timer - Mobile Responsive */}
            <div className="flex justify-center items-center mb-8 gap-1 sm:gap-2 px-4">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Min" },
                { value: timeLeft.seconds, label: "Sec" },
              ].map((item, index) => (
                <React.Fragment key={item.label}>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div 
                      className="inline-flex flex-col items-center justify-center shadow-md border border-gray-200 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-lg sm:rounded-xl p-2 countdown-timer-box"
                      style={{
                        backgroundColor: '#ffffff !important',
                        background: '#ffffff !important',
                        backgroundImage: 'none !important',
                        opacity: '1 !important',
                        border: '2px solid #e5e7eb !important'
                      }}
                    >
                      <div
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-none"
                        style={{
                          fontFamily:
                            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        }}
                      >
                        {String(item.value).padStart(2, "0")}
                      </div>
                      <div className="text-xs sm:text-xs md:text-sm font-medium uppercase tracking-wide mt-1 text-gray-600">
                        {item.label}
                      </div>
                    </div>
                  </motion.div>
                  {index < 3 && (
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-600 mx-1 sm:mx-2">
                      :
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl font-semibold mb-8"
              style={{
                color: "#1F2937",
                fontFamily:
                  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              Subscribe to enter the waitlist
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-md mx-auto px-4"
            >
              <form onSubmit={handleWaitlistSignup} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-3 sm:px-4 sm:py-4 text-base sm:text-lg border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 email-input-field"
                  style={{
                    fontFamily:
                      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    backgroundColor: '#ffffff !important',
                    background: '#ffffff !important',
                    backgroundImage: 'none !important',
                    opacity: '1 !important',
                    border: '2px solid #e5e7eb !important'
                  }}
                />
                <SoundButton
                  soundType="submit"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white px-4 py-3 sm:px-6 sm:py-4 font-semibold rounded-lg text-base sm:text-lg transition-all duration-200 hover:scale-[1.02] hover:bg-green-600 secure-my-spot-button"
                  style={{
                    backgroundColor: "#829340 !important",
                    background: "#829340 !important",
                    color: "white !important",
                    fontFamily:
                      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  }}
                >
                  {isSubmitting ? "Securing..." : "Secure My Spot"}
                </SoundButton>
              </form>

              <p className="text-sm text-gray-500 text-center mt-4">
                Get notified when we launch + exclusive early access
              </p>

              <div className="flex justify-center items-center mt-6 gap-2 flex-wrap">
                <div className="flex -space-x-2">
                  <img
                    src={avatar1}
                    alt="User avatar"
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src={avatar2}
                    alt="User avatar"
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src={avatar3}
                    alt="User avatar"
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <span className="text-xs sm:text-sm ml-2 flex items-center gap-1 sm:gap-2">
                  <span className="font-semibold" style={{ color: "#829340" }}>
                    3 joined
                  </span>
                  <span className="text-gray-400">|</span>
                  <span className="font-semibold" style={{ color: "#667085" }}>
                    5 spots left
                  </span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
