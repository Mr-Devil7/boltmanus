// src/components/Testimonials.tsx
import React, { useContext } from 'react';
import { Star, Quote } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useContext(LanguageContext);

  const testimonials = [
    {
      name: t('testimonials.items.0.name'),
      role: t('testimonials.items.0.role'),
      location: t('testimonials.items.0.location'),
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: t('testimonials.items.0.text'),
    },
    {
      name: t('testimonials.items.1.name'),
      role: t('testimonials.items.1.role'),
      location: t('testimonials.items.1.location'),
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: t('testimonials.items.1.text'),
    },
    {
      name: t('testimonials.items.2.name'),
      role: t('testimonials.items.2.role'),
      location: t('testimonials.items.2.location'),
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: t('testimonials.items.2.text'),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('testimonials.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('testimonials.description')}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 h-6 w-6 text-green-200" />
                <p className="text-gray-600 italic">{testimonial.text}</p>
                <Quote className="absolute -bottom-2 -right-2 h-6 w-6 text-green-200 rotate-180" />
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-4">{t('testimonials.join_cta')}</p>
          <button
            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all duration-200"
          >
            {t('testimonials.start_journey')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
