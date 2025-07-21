import { motion } from "framer-motion";

export function ProblemSolutionSection() {
  return (
    <section className="section-padding section-divider" style={{ backgroundColor: 'var(--background-gray-50)' }}>
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div 
          className="card-base"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                😔
              </div>
              <h3 className="heading-sm tight-spacing" style={{ color: 'var(--text-primary)' }}>Feeling Stuck</h3>
              <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                Feeling stuck in a job that doesn't excite you? Every day feels like you're not reaching your full potential, just going through the motions without fulfilment.
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                ⏰
              </div>
              <h3 className="heading-sm tight-spacing" style={{ color: 'var(--text-primary)' }}>Missing Opportunities</h3>
              <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                The longer you stay in that job, the more you miss out on the opportunities that could change your life. The routine becomes draining, and the fear of stepping into something new only holds you back.
              </p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(136, 169, 143, 0.1)' }}>
                🚀
              </div>
              <h3 className="heading-sm tight-spacing" style={{ color: 'var(--text-primary)' }}>Break Free with CareerFrame</h3>
              <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                CareerFrame helps you break free from career confusion. With personalized coaching, skill gap analysis, and tailored career paths, we provide the tools and guidance to help you pursue work that aligns with your goals.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}