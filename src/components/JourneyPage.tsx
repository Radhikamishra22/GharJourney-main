import React from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Home, 
  Building, 
  Smartphone, 
  Users, 
  TrendingUp, 
  Rocket,
  CheckCircle,
  ArrowDown,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

const JourneyPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const milestones = [
    {
      year: "2024",
      quarter: "Q1",
      title: "Company Founded",
      description: "GharPadharo is launched in Dehradun, Uttarakhand to help students find affordable rooms.",
      icon: <Home className="w-8 h-8 text-purple-600" />,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      stats: "Day 1"
    },
    {
      year: "2024",
      quarter: "Q2", 
      title: "100+ Listings Onboarded",
      description: "GharPadharo grows quickly, onboarding verified PGs, hostels, and rental properties.",
      icon: <Building className="w-8 h-8 text-blue-600" />,
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      stats: "100+ Properties"
    },
    {
      year: "2024",
      quarter: "Q3",
      title: "Mobile Web Experience",
      description: "Optimized mobile experience to serve on-the-go users across Uttarakhand.",
      icon: <Smartphone className="w-8 h-8 text-green-600" />,
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      stats: "Mobile First"
    },
    {
      year: "2024",
      quarter: "Q4",
      title: "Trusted by 500+ Students",
      description: "Positive feedback fuels growth; community support builds trust.",
      icon: <Users className="w-8 h-8 text-orange-600" />,
      image: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      stats: "500+ Happy Users"
    },
    {
      year: "2025",
      quarter: "Q1",
      title: "Expansion into Multiple Cities",
      description: "Now serving Haridwar, Rishikesh, and Mussoorie with new listings.",
      icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      stats: "4 Cities"
    },
    {
      year: "2025",
      quarter: "Q3",
      title: "2000+ Listings Live",
      description: "GharPadharo becomes one of the fastest-growing housing platforms in Uttarakhand.",
      icon: <Rocket className="w-8 h-8 text-red-600" />,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      stats: "2000+ Properties"
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
              <a href="https://www.gharpadharo.com/" className="hover:text-purple-200 transition-colors">Home</a>
              <a href="https://www.gharpadharo.com/" className="hover:text-purple-200 transition-colors">Properties</a>
              <a href="https://www.gharpadharo.com/" className="hover:text-purple-200 transition-colors">About</a>
              <a href="https://www.gharpadharo.com/" className="hover:text-purple-200 transition-colors">Contact</a>
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
              Our Journey <span className="text-purple-600">So Far</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              See how GharPadharo has grown since our founding in 2024, 
              transforming the way students find accommodation in Uttarakhand.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>Founded 2024</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>2000+ Properties</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>4 Cities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Company Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From a simple idea to becoming Uttarakhand's trusted housing platform
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-200 via-purple-400 to-purple-600"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                      <div className="flex items-center mb-4">
                        <div className="bg-gray-50 rounded-full p-3 mr-4">
                          {milestone.icon}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-purple-600">
                            {milestone.year} {milestone.quarter}
                          </div>
                          <div className="text-lg font-bold text-gray-900">
                            {milestone.title}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {milestone.description}
                      </p>
                      <div className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block">
                        {milestone.stats}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Image */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                    <img 
                      src={milestone.image} 
                      alt={milestone.title}
                      className="w-full h-48 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden max-w-md mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-purple-200 via-purple-400 to-purple-600"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start mb-12">
                  {/* Timeline Node */}
                  <div className="absolute left-6 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-16">
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
                      <div className="flex items-center mb-4">
                        <div className="bg-gray-50 rounded-full p-2 mr-3">
                          {milestone.icon}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-purple-600">
                            {milestone.year} {milestone.quarter}
                          </div>
                          <div className="text-lg font-bold text-gray-900">
                            {milestone.title}
                          </div>
                        </div>
                      </div>
                      <img 
                        src={milestone.image} 
                        alt={milestone.title}
                        className="w-full h-32 object-cover rounded-lg mb-4"
                      />
                      <p className="text-gray-600 mb-4">
                        {milestone.description}
                      </p>
                      <div className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block">
                        {milestone.stats}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be a Part of Our Journey
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of property owners and students who are already part of the GharPadharo community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              List Your Property
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Explore Rooms
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
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-2xl font-bold">
                  GharPadharo
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Founded in 2024, GharPadharo simplifies housing for students and professionals in Uttarakhand. 
                Find your perfect room without any hassle or brokerage.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">Jakhan, Rajpur Road, Dehradun</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">gharpadharo@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">+91 7903266907</span>
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
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
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
};

export default JourneyPage;