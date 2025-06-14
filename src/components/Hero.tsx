// src/components/Hero.tsx
import React, { useContext } from 'react';
import { ArrowRight, Cloud, Sprout, Clock, ShoppingCart } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';
import { useCart } from '../hooks/useCart';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { t } = useContext(LanguageContext);
  const { addToCart, setIsCartOpen } = useCart();

  const featuredProduct = {
    id: '1',
    name: 'Premium Wheat Seeds',
    code: 'WHEAT01',
    category: 'Seeds',
    description: 'High-quality wheat seeds with excellent germination rates.',
    price: 500,
    image: '/wheat-seeds.png', // Ensure this image exists in public/
    inStock: true,
  };

  const handleAddToCart = () => {
    addToCart(featuredProduct);
    setIsCartOpen(true);
  };

  return (
    <section className="min-h-screen bg-[var(--background)] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-[var(--primary)] leading-tight">
                Kisan ki Har Zarurat Ka Smart Jawab
              </h1>
              <p className="text-xl text-[var(--text)] leading-relaxed">
                Discover Seeds, Fertilizers, Plants, Weather Updates, Farming News, Tips & More – All in One Place.<br />
                Compare, Choose, and Grow Smarter – Save Time, Cut Costs by 20%, and Reduce Losses with Agrow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('services')}
                className="group bg-[var(--primary)] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#245C3F] transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>View Products</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="border-2 border-[var(--secondary)] text-[var(--secondary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--secondary)] hover:text-white transition-colors"
              >
                Join Agrow
              </button>
              <button
                onClick={handleAddToCart}
                className="bg-[var(--accent)] text-[var(--primary)] px-8 py-4 rounded-lg font-medium hover:bg-[#8BBF47] transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Add Featured Product to Cart</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--primary)]">Save 20%</div>
                <div className="text-[var(--text)]">on Costs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--primary)]">Reduce Losses</div>
                <div className="text-[var(--text)]">by 15%</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--primary)]">Grow Smarter</div>
                <div className="text-[var(--text)]">with Agrow</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/hero-image.jpg" // Update this path to a valid image in public/
                alt="Agrow Marketplace"
                className="rounded-2xl shadow-2xl w-full h-auto"
                onError={(e) => {
                  e.currentTarget.src = '/fallback-image.jpg'; // Ensure this fallback image exists in public/
                  e.currentTarget.alt = 'Image not found';
                }}
              />
            </div>

            <div className="absolute hidden lg:block -top-4 -left-4 bg-[var(--background)] p-4 rounded-xl shadow-lg z-20 border-l-4 border-[var(--accent)]">
              <div className="flex items-center space-x-3">
                <div className="bg-[var(--accent)] p-2 rounded-lg">
                  <Cloud className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <div>
                  <div className="font-medium text-[var(--text)]">Real-Time Weather Updates</div>
                </div>
              </div>
            </div>

            <div className="absolute hidden lg:block -bottom-4 -right-4 bg-[var(--background)] p-4 rounded-xl shadow-lg z-20 border-l-4 border-[var(--accent)]">
              <div className="flex items-center space-x-3">
                <div className="bg-[var(--accent)] p-2 rounded-lg">
                  <Sprout className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <div>
                  <div className="font-medium text-[var(--text)]">Quality Seeds & Fertilizers</div>
                </div>
              </div>
            </div>

            <div className="absolute hidden lg:block top-1/2 -right-8 bg-[var(--background)] p-4 rounded-xl shadow-lg z-20 border-l-4 border-[var(--accent)]">
              <div className="flex items-center space-x-3">
                <div className="bg-[var(--accent)] p-2 rounded-lg">
                  <Clock className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <div>
                  <div className="font-medium text-[var(--text)]">Save Time, Grow Smarter</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
