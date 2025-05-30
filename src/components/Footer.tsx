
import { Instagram, Facebook, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-green text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand section */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4 text-brand-yellow">
              Pops Lemonade AU
            </h3>
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

          {/* Social media */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold mb-4 text-brand-yellow">
              Follow Our Journey
            </h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
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
            <p className="text-white/60 text-sm">
              hello@popslemonade.com.au
            </p>
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
