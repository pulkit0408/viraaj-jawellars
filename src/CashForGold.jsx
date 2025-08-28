import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Clock,
  TrendingUp,
  Calculator,
  Users,
  Award,
} from "lucide-react";

const VirajJewellers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [goldPrice, setGoldPrice] = useState({ today: 6850, yesterday: 6820 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const heroSlides = [
    {
      title: "Get Maximum Cash for Your Gold",
      subtitle: "Instant evaluation • Best rates • Trusted process",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop",
    },
    {
      title: "Professional Gold Assessment",
      subtitle: "Expert evaluation • Transparent pricing • Immediate payment",
      image:
        "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&h=600&fit=crop",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center text-sm text-amber-800">
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <Phone size={16} className="mr-2" />
                +91-9350564449
              </span>
              <span className="flex items-center">
                <Mail size={16} className="mr-2" />
                cash@golddelhi.com
              </span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>7 Days Working: 9:00 AM-9:00 PM</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Viraj Jewellers
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
              >
                HOME
              </a>
              <a href="#cash-for-gold" className="text-amber-600 font-medium">
                CASH FOR GOLD
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
              >
                SERVICES
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
              >
                ABOUT US
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}

        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-xl">
                Get Instant Quote
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all">
                Call Now: +91-9350564449
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Price Ticker */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-8">
            <div className="flex items-center">
              <TrendingUp className="mr-2" />
              <span className="font-semibold">
                Today's 24K Gold Rate: ₹{goldPrice.today}/gram
              </span>
            </div>
            <div className="text-sm opacity-90">
              Yesterday: ₹{goldPrice.yesterday}/gram
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Viraj Jewellers?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              India's most trusted gold buyer with transparent pricing and
              instant payments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-amber-500" />,
                title: "100% Safe & Secure",
                description:
                  "Licensed and certified gold buying with complete documentation",
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-green-500" />,
                title: "Best Market Rates",
                description:
                  "Get the highest price for your gold based on live market rates",
              },
              {
                icon: <Clock className="w-12 h-12 text-blue-500" />,
                title: "Instant Payment",
                description:
                  "Immediate cash payment or bank transfer after evaluation",
              },
              {
                icon: <Award className="w-12 h-12 text-purple-500" />,
                title: "Expert Evaluation",
                description:
                  "Professional assessment using advanced testing equipment",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              Get cash for your gold in just 3 easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Bring Your Gold",
                description:
                  "Visit our store with your gold jewelry, coins, or ornaments",
                icon: "🏃‍♂️",
              },
              {
                step: "02",
                title: "Expert Evaluation",
                description:
                  "Our certified experts test and evaluate your gold's purity and weight",
                icon: "🔍",
              },
              {
                step: "03",
                title: "Instant Payment",
                description:
                  "Get immediate cash payment at the best market rates",
                icon: "💰",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border-2 border-amber-200 hover:border-amber-400 transition-colors">
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-amber-300 to-orange-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Gold Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Get Free Quote
                </h3>
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name*"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Write Your Message*"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>

            {/* Purity Checker */}
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Purity Check
                </h3>
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">⚖️</div>
                  <h4 className="text-2xl font-semibold text-amber-600 mb-4">
                    Professional Testing Equipment
                  </h4>
                  <p className="text-gray-600">
                    We use advanced XRF technology and acid testing to ensure
                    accurate purity assessment of your gold.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
                    <span className="font-semibold">24K Gold (99.9%)</span>
                    <span className="text-amber-600 font-bold">
                      ₹{goldPrice.today}/gram
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
                    <span className="font-semibold">22K Gold (91.6%)</span>
                    <span className="text-amber-600 font-bold">
                      ₹{Math.round(goldPrice.today * 0.916)}/gram
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
                    <span className="font-semibold">18K Gold (75%)</span>
                    <span className="text-amber-600 font-bold">
                      ₹{Math.round(goldPrice.today * 0.75)}/gram
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-4">
                    For updated gold prices visit: www.moneycontrol.com
                  </p>
                  <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-full font-semibold transition-all">
                    Check Live Rates
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Sell Your Gold?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert help in getting back your pledged gold at the best rates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Visit Our Store
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-full font-semibold transition-all">
              Call: +91-9350564449
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4">
                Viraj Jewellers
              </h3>
              <p className="text-gray-400 mb-4">
                India's most trusted cash for gold service with transparent
                pricing and professional evaluation.
              </p>
              <div className="flex space-x-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 text-amber-400 fill-current"
                  />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Cash for Gold</li>
                <li>Gold Evaluation</li>
                <li>Jewelry Assessment</li>
                <li>Gold Coins Purchase</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Gold Rates</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +91-9350564449
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  cash@golddelhi.com
                </p>
                <p className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  9:00 AM - 9:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Viraj Jewellers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VirajJewellers;
