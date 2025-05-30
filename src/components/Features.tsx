
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Heart, Star, Leaf, Award } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Droplets,
      title: "All-Natural Goodness",
      description: "Pure ingredients, pure taste. No artificial colors or preservatives - just the wholesome goodness nature intended.",
      color: "text-blue-500"
    },
    {
      icon: Heart,
      title: "Freshly Squeezed Joy",
      description: "The zesty difference of real lemons, hand-squeezed to perfection for that burst of sunshine in every sip.",
      color: "text-brand-yellow"
    },
    {
      icon: Star,
      title: "Perfectly Balanced",
      description: "Sweetness meets tartness for ultimate refreshment. Each bottle is crafted to deliver the perfect flavor harmony.",
      color: "text-brand-green"
    },
    {
      icon: Leaf,
      title: "Seasonal Sensations",
      description: "Rotating seasonal fruit flavors like Summer Berry Bliss and Tropical Tango to keep your taste buds excited.",
      color: "text-green-500"
    },
    {
      icon: Award,
      title: "Aussie Crafted",
      description: "Proudly made in Australia with the finest local ingredients and traditional craftsmanship you can trust.",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-green mb-6 animate-fade-in-up">
            What Makes Pops Lemonade Special?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Handcrafted excellence in every bottle, delivering the purest, most delicious lemonade experience
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-yellow/20 to-brand-green/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-green mb-4 group-hover:text-brand-yellow transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
