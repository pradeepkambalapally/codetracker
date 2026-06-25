import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import WhyCodeTracker from "../components/landing/WhyCodeTracker";
import DashboardPreview from "../components/landing/DashboardPreview";
import PlatformSupport from "../components/landing/PlatformSupport";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

const Landing = () => {

    return (

        <div className="
            min-h-screen

            bg-slate-100
            dark:bg-slate-900
        ">

            <Navbar />
            
            <Hero />
            
            <Features />
            
            <WhyCodeTracker />
            
            <DashboardPreview />
            
            <PlatformSupport />
            
            <CTA />
            
            <Footer />

        </div>

    );

};

export default Landing;