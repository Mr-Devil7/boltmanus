// src/App.tsx
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Offerings from './components/Offerings';
import Mission from './components/Mission';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Services from './components/Services';
import Cart from './components/Cart';
import LanguagePopup from './components/LanguagePopup';
import { LanguageProvider } from './context/LanguageContext';
import { products } from './data/products';

// Simple Error Boundary Component
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Something went wrong. Please check the console for details.
          </h1>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentSection) {
      case 'terms':
        return <Terms />;
      case 'contact':
        return <Contact />;
      case 'services':
        return <Services />;
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <About />
            <Offerings products={products} />
            <Mission />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <LanguageProvider>
      <ErrorBoundary>
        <div className="min-h-screen bg-white">
          <Header currentSection={currentSection} onNavigate={handleNavigate} />
          <main>{renderContent()}</main>
          <Footer />
          <Cart />
          <LanguagePopup />
        </div>
      </ErrorBoundary>
    </LanguageProvider>
  );
}

export default App;
