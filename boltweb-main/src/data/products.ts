import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Smart Irrigation Controller',
    code: 'SIC-001',
    price: 299.99,
    description: 'Advanced IoT-enabled irrigation system with weather integration and mobile app control.',
    image: 'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Irrigation',
    inStock: true
  },
  {
    id: '2',
    name: 'Soil Moisture Sensor Kit',
    code: 'SMS-002',
    price: 89.99,
    description: 'Wireless soil moisture monitoring system with real-time data analytics.',
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Sensors',
    inStock: true
  },
  {
    id: '3',
    name: 'Crop Health Monitor',
    code: 'CHM-003',
    price: 449.99,
    description: 'AI-powered crop health analysis system with drone integration capabilities.',
    image: 'https://images.pexels.com/photos/2889664/pexels-photo-2889664.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Monitoring',
    inStock: true
  },
  {
    id: '4',
    name: 'Weather Station Pro',
    code: 'WSP-004',
    price: 599.99,
    description: 'Professional weather monitoring station with long-range connectivity.',
    image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Weather',
    inStock: true
  },
  {
    id: '5',
    name: 'Automated Greenhouse Kit',
    code: 'AGK-005',
    price: 1299.99,
    description: 'Complete greenhouse automation system with climate control and monitoring.',
    image: 'https://images.pexels.com/photos/1454794/pexels-photo-1454794.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Automation',
    inStock: true
  },
  {
    id: '6',
    name: 'Nutrient Management System',
    code: 'NMS-006',
    price: 349.99,
    description: 'Precision nutrient delivery system with automated pH and EC monitoring.',
    image: 'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Nutrition',
    inStock: true
  }
];