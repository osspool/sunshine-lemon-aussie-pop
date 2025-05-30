
import { Button } from "@/components/ui/button";
import { Sun, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background decorative shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-brand-yellow/30 to-brand-green/20 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-tl from-brand-green/30 to-brand-yellow/20 rounded-full blur-xl animate-float"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/c5f7d5db-75f8-40c3-a3b2-33e00398a97d.png" 
            alt="Pops Lemonade AU Logo" 
            className="w-48 h-auto md:w-64 animate-fade-in-up"
          />
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="text-brand-green">Taste the </span>
          <span className="text-brand-yellow">Zest of Life!</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Australia's most refreshing all-natural lemonade, handcrafted with love and bursting with pure, wholesome goodness
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Taste the Pop! 🍋
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-brand-yellow text-brand-green hover:bg-brand-yellow/10 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Find Your Flavour! 🌟
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center space-x-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-yellow/20 rounded-full flex items-center justify-center mb-2 mx-auto animate-bounce-gentle">
              <span className="text-2xl">🍋</span>
            </div>
            <p className="text-sm text-gray-600 font-medium">100% Natural</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center mb-2 mx-auto animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
              <span className="text-2xl">🇦🇺</span>
            </div>
            <p className="text-sm text-gray-600 font-medium">Aussie Made</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-yellow/20 rounded-full flex items-center justify-center mb-2 mx-auto animate-bounce-gentle" style={{ animationDelay: '1s' }}>
              <span className="text-2xl">❤️</span>
            </div>
            <p className="text-sm text-gray-600 font-medium">Made with Love</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
