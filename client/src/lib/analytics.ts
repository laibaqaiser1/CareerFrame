// Define the gtag function globally
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = 'G-4MQ5D5NGD5';

  if (!measurementId) {
    console.warn('Missing Google Analytics Measurement ID');
    return;
  }

  // gtag is already loaded via the script tag in index.html
  if (typeof window !== 'undefined' && window.gtag) {
    // Additional configuration if needed
    window.gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href
    });
  }
};

// Track page views - useful for single-page applications
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const measurementId = 'G-4MQ5D5NGD5';
  if (!measurementId) return;
  
  window.gtag('config', measurementId, {
    page_path: url,
    page_title: document.title,
    page_location: window.location.origin + url
  });
};

// Track events
export const trackEvent = (
  action: string, 
  category?: string, 
  label?: string, 
  value?: number
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track waitlist signups
export const trackWaitlistSignup = (email: string) => {
  trackEvent('waitlist_signup', 'engagement', 'email_submission');
};

// Track navigation clicks
export const trackNavigation = (destination: string) => {
  trackEvent('navigation', 'user_engagement', destination);
};

// Track CTA button clicks
export const trackCTAClick = (ctaName: string) => {
  trackEvent('cta_click', 'conversion', ctaName);
};