import React from 'react';
import { Leaf, Droplet, Sun, Shield } from 'lucide-react';

const Mission: React.FC = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Promoting eco-friendly farming practices that preserve our environment for future generations.'
    },
    {
      icon: Droplet,
      title: 'Water Conservation',
      description: 'Developing smart irrigation systems that optimize water usage and reduce waste.'
    },
    {
      icon: Sun,
      title: 'Renewable Energy',
      description: 'Integrating solar and other renewable energy sources into agricultural operations.'
    },
    {
      icon: Shield,
      title: 'Food Security',
      description: 'Ensuring reliable food production through innovative farming technologies.'
    }
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To revolutionize agriculture through innovative technology solutions that promote 
            sustainability, efficiency, and food security for a better tomorrow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Building a Sustainable Future
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At Agrow, we envision a world where technology and nature work in harmony to create 
              sustainable agricultural systems. Our mission is to develop and deploy innovative 
              solutions that help farmers increase productivity while minimizing environmental impact.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We're committed to making advanced agricultural technology accessible to farmers 
              worldwide, from small-scale operations to large commercial farms. Together, we're 
              building a more sustainable and food-secure future for all.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-green-200">
              <h4 className="font-bold text-gray-900 mb-2">Our Impact</h4>
              <p className="text-gray-600">
                Over 30% reduction in water usage and 25% increase in crop yields across 
                partner farms implementing our technology solutions.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/2889664/pexels-photo-2889664.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Sustainable Agriculture"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;