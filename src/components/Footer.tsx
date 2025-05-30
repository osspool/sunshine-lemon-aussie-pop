
import { Instagram, Facebook, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-green text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand section with logo */}
          <div className="text-center md:text-left">
            <div className="mb-4 flex justify-center md:justify-start">
              <img 
                src="/lovable-uploads/c5f7d5db-75f8-40c3-a3b2-33e00398a97d.png" 
                alt="Pops Lemonade AU Logo" 
                className="w-32 h-auto"
              />
            </div>
            <p className="text-white/80 leading-relaxed">
              Bringing you the zest of life with every sip. Handcrafted with love, 
              made with the finest Australian ingredients.
            </p>
          </div>

          {/* Quick links */}
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4 text-brand-yellow">
              Quick Links
            </h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-brand-yellow transition-colors duration-300">Our Story</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors duration-300">Find Us</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors duration-300">Wholesale</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us section */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold mb-4 text-brand-yellow">
              Contact Us
            </h4>
            <div className="mb-4">
              <p className="text-white/80 mb-2">
                📧 hello@popslemonade.com.au
              </p>
              <p className="text-white/80 mb-4">
                📱 Follow our journey on social media
              </p>
            </div>
            <div className="flex justify-center md:justify-end space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-brand-green transition-all duration-300 cursor-pointer transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-brand-green transition-all duration-300 cursor-pointer transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-brand-green transition-all duration-300 cursor-pointer transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-brand-green transition-all duration-300 cursor-pointer transform hover:scale-110">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 flex items-center justify-center gap-2">
            © 2024 Pops Lemonade AU. Made with <Heart className="w-4 h-4 text-brand-yellow" /> in Australia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
