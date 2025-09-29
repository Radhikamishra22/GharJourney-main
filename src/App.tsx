import React from 'react';
import JourneyPage from './components/JourneyPage';
import { 
  Search, 
  Home, 
  Phone, 
  CheckCircle, 
  Package,
  Filter,
  DollarSign,
  Shield,
  Ban,
  ArrowRight,
  ArrowDown,
  MapPin,
  Mail,
  Star,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  if (currentPage === 'journey') {
    return <JourneyPage />;
  }

  const journeySteps = [
    {
      icon: <Search className="w-8 h-8 text-purple-600" />,
      title: "Search & Filter Properties",
      description: "Use powerful filters to find rooms that fit your budget and needs.",
      image: "https://images.pexels.com/photos/7578842/pexels-photo-7578842.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      icon: <Home className="w-8 h-8 text-purple-600" />,
      title: "Browse Verified Listings",
      description: "View real photos and verified details of PGs, hostels, and rooms.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      icon: <Phone className="w-8 h-8 text-purple-600" />,
      title: "Connect with Owners",
      description: "Reach out directly. No middlemen, no brokerage.",
      image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: "Schedule Visit & Finalize",
      description: "See the property in person and confirm your decision.",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      icon: <Package className="w-8 h-8 text-purple-600" />,
      title: "Move In Smoothly",
      description: "Move in stress-free with support from GharPadharo.",
      image: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    }
  ];

  const features = [
    {
      icon: <Filter className="w-12 h-12 text-purple-600" />,
      title: "Easy Search",
      description: "Advanced filters to find exactly what you need"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-green-600" />,
      title: "Affordable Prices",
      description: "Best rates with transparent pricing"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Verified Listings",
      description: "All properties are verified and authentic"
    },
    {
      icon: <Ban className="w-12 h-12 text-red-600" />,
      title: "Zero Brokerage",
      description: "Connect directly with property owners"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Student at DIT University",
      content: "Found my perfect PG within a week! The process was so smooth and transparent.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      rating: 5
    },
    {
      name: "Rahul Gupta",
      role: "Working Professional",
      content: "No brokerage, direct contact with owners. Saved me thousands of rupees!",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      rating: 5
    },
    {
      name: "Ankit Verma",
      role: "Student at Graphic Era",
      content: "Verified listings gave me confidence. Moved in without any surprises.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-purple-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/image copy.png" 
                  alt="GharPadharo Logo" 
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-2xl font-bold">
                  GharPadharo
                </div>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => setCurrentPage('home')} className="hover:text-purple-200 transition-colors">Home</button>
              <a href="#" className="hover:text-purple-200 transition-colors">Properties</a>
              <a href="#" className="hover:text-purple-200 transition-colors">About</a>
              <button onClick={() => setCurrentPage('journey')} className="hover:text-purple-200 transition-colors">Journey</button>
              <a href="#" className="hover:text-purple-200 transition-colors">Contact</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="hidden md:block bg-white text-purple-700 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Post Property FREE
              </button>
              
              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-purple-600 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-purple-600">
              <nav className="flex flex-col space-y-4 mt-4">
                <a href="https://www.gharpadharo.com/" className="hover:text-purple-200 transition-colors py-2">Home</a>
                <a href="https://www.gharpadharo.com/" className="hover:text-purple-200 transition-colors py-2">Properties</a>
                <a href="https://www.gharpadharo.com/" className="hover:text-purple-200 transition-colors py-2">About</a>
                <button 
                  onClick={() => {
                    setCurrentPage('journey');
                    setIsMobileMenuOpen(false);
                  }} 
                  className="text-left hover:text-purple-200 transition-colors py-2"
                >
                  Journey
                </button>
                <a href="https://www.gharpadharo.com/" className="hover:text-purple-200 transition-colors py-2">Contact</a>
                <button className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors mt-4 text-center">
                  Post Property FREE
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Journey <span className="text-purple-600">Starts Here</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Follow the steps to find your perfect room in Uttarakhand. 
              Simple, transparent, and hassle-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Start Your Journey
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Flow Diagram */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Path to the Perfect Room
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <img 
              src="/public/image.png" 
              alt="GharPadharo Journey Timeline"
              className="w-full h-auto rounded-xl shadow-lg max-w-4xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose GharPadharo?
            </h2>
            <p className="text-xl text-gray-600">
              We make finding accommodation simple, transparent, and affordable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gray-50 rounded-full group-hover:bg-gray-100 transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from students and professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Find Your Room?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of students and professionals who found their perfect accommodation through GharPadharo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              Browse Properties
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              List Your Property
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/image copy.png" 
                  alt="GharPadharo Logo" 
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-2xl font-bold">
                  GharPadharo
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Find your perfect room without any hassle or brokerage.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">Jakhan, Rajpur Road, Dehradun, India</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">hello@gharpadharo.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">+91 98765 43210</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Properties</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Safety Tips</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Report Issue</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024–2025 GharPadharo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;