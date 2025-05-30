
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Droplets, Heart, Star, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-16 h-16 bg-brand-yellow/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-brand-green/20 rounded-full animate-bounce-gentle"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-brand-yellow/15 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-brand-green/15 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <Features />
        <Products />
        <FindUs />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
