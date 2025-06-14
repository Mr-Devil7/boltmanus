import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const Services: React.FC = () => {
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products & Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of agricultural technology solutions designed 
            to optimize your farming operations and maximize productivity.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-green-600 text-white px-6 py-2 rounded-full font-medium">
            All Products
          </button>
          {categories.map(category => (
            <button
              key={category}
              className="bg-white text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-green-50 transition-colors border border-gray-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-green-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Need Custom Solutions?</h3>
            <p className="text-green-100 mb-6 text-lg">
              We offer customized agricultural technology solutions tailored to your specific needs. 
              Get in touch with our experts to discuss your requirements.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;