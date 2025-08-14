import rewardsImg from "@/assets/rewards.png";

export function RewardsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Separate Row */}
        <div className="text-left mb-12">
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "36px",
              lineHeight: "44px",
              letterSpacing: "-0.02em",
              color: "#1f2937",
              marginBottom: "16px"
            }}
          >
            Earn XP & Unlock Rewards
          </h2>
          <p
            className="max-w-3xl"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "28px",
              color: "#6b7280"
            }}
          >
            Complete tasks like CV building, skill upgrades, or community engagement to earn XP. Exchange points for discounts with partner brands or unlock premium features.
          </p>
        </div>

        {/* Content Section - Stats Grid and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Stats Grid Only */}
          <div>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="text-center">
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "48px",
                    lineHeight: "1",
                    color: "#829340",
                    marginBottom: "8px"
                  }}
                >
                  Build
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "#6b7280"
                  }}
                >
                  Your Skills
                </div>
              </div>

              <div className="text-center">
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "48px",
                    lineHeight: "1",
                    color: "#829340",
                    marginBottom: "8px"
                  }}
                >
                  Earn
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "#6b7280"
                  }}
                >
                  XP Points
                </div>
              </div>

              <div className="text-center">
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "48px",
                    lineHeight: "1",
                    color: "#829340",
                    marginBottom: "8px"
                  }}
                >
                  Unlock
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "#6b7280"
                  }}
                >
                  Rewards
                </div>
              </div>

              <div className="text-center">
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "48px",
                    lineHeight: "1",
                    color: "#829340",
                    marginBottom: "8px"
                  }}
                >
                  200+
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "#6b7280"
                  }}
                >
                  5-star reviews
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image Only */}
          <div>
            {/* Dashboard Image - Half Cut with 3-Side Borders */}
            <div className="relative flex justify-center lg:justify-start">
              <div
                className="relative overflow-hidden"
                style={{
                  width: "90%",
                  height: "400px",
                  borderLeft: "4px solid #1f2937",
                  borderTop: "4px solid #1f2937", 
                  borderBottom: "4px solid #1f2937",
                  borderTopLeftRadius: "12px",
                  borderBottomLeftRadius: "12px",
                  backgroundColor: "#ffffff"
                }}
              >
                <img
                  src={rewardsImg}
                  alt="CareerFrame Rewards Dashboard showing XP system and achievements"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: "0% center",
                    transform: "translateX(-2px)"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}