
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      name: "The Classic Pop",
      description: "Timeless lemon, pure and simple. Our signature blend that started it all - perfectly balanced sweetness with that zesty lemon kick.",
      emoji: "🍋",
      color: "from-yellow-200 to-yellow-300",
      textColor: "text-yellow-800",
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Crimson Zest",
      description: "A vibrant berry lemonade that combines the tartness of fresh lemons with the sweet, juicy burst of premium strawberries.",
      emoji: "🍓",
      color: "from-red-200 to-pink-300",
      textColor: "text-red-800",
      image: "https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Bush Mint Twist",
      description: "A unique Australian-inspired flavor featuring our classic lemon base with a refreshing hint of native mint leaves.",
      emoji: "🌿",
      color: "from-green-200 to-emerald-300",
      textColor: "text-green-800",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-brand-green/5 to-brand-yellow/5">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-green mb-6 animate-fade-in-up">
            Our Refreshing Range
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Three delicious flavors, each bursting with natural goodness and crafted to perfection
          </p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={product.name}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-lg overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 text-4xl animate-bounce-gentle group-hover:scale-110 transition-transform duration-300">
                  {product.emoji}
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 className={`text-2xl font-bold mb-4 ${product.textColor} group-hover:scale-105 transition-transform duration-300`}>
                  {product.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-brand-green text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 group-hover:shadow-lg"
                >
                  Try This Flavor
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg text-gray-600 mb-6">
            Can't decide? Why not try all three!
          </p>
          <Button 
            size="lg"
            className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-green px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get the Variety Pack 🌈
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
