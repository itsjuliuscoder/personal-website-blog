// src/lib/gtag.ts
import ReactGA from "react-ga4";

// Initialize Google Analytics with your tracking ID
export const initGA = () => {
    if (!process.env.NEXT_PUBLIC_GA_TRACKING_ID) return;
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID);
};

// Log page views
export const logPageView = (url: string) => {
    ReactGA.send({ hitType: "pageview", page: url });
};
    
export const logEvent = (action: string, category: string, label?: string, value?: number) => {
    ReactGA.event({
        category,
        action,
        label,
        value,
    });
};

