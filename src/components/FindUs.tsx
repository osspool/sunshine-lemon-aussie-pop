
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Globe, Users } from "lucide-react";

const FindUs = () => {
  const locations = [
    {
      icon: MapPin,
      title: "Local Markets",
      description: "Find us at farmers markets across Sydney, Melbourne, and Brisbane every weekend",
      time: "Saturdays & Sundays"
    },
    {
      icon: Calendar,
      title: "Community Events",
      description: "We're popping up at festivals, fairs, and community gatherings throughout Australia",
      time: "Check our socials"
    },
    {
      icon: Globe,
      title: "Online Store",
      description: "Can't find us locally? Our online store launches soon with nationwide delivery",
      time: "Coming Soon"
    },
    {
      icon: Users,
      title: "Special Events",
      description: "Book Pops Lemonade for your next party, wedding, or corporate event",
      time: "Custom orders"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-green mb-6 animate-fade-in-up">
            Find Us Popping Up!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            From sunny days to festive nights, discover where you can get your hands on our refreshing lemonades
          </p>
        </div>

        {/* Locations grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {locations.map((location, index) => (
            <Card 
              key={location.title}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-yellow/20 to-brand-green/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <location.icon className="w-6 h-6 text-brand-green" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-brand-green mb-2 group-hover:text-brand-yellow transition-colors duration-300">
                  {location.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {location.description}
                </p>
                <p className="text-brand-yellow font-semibold text-sm">
                  {location.time}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social media CTA */}
        <div className="text-center bg-gradient-to-r from-brand-green to-brand-yellow rounded-3xl p-8 md:p-12 text-white animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Stay in the Loop! 📱
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Follow us on social media for the latest updates on where we'll be popping up next
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-brand-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Follow on Instagram 📸
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-green px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Join Our Community 🤝
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
