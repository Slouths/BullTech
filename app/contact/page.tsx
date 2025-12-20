'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface WeatherData {
  temp: number;
  condition: string;
  humidity: number;
  wind: number;
  icon: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    subject: '',
    message: '',
    services: [] as string[],
    otherService: '',
    shootLocation: '',
    locationType: '',
    shootType: '',
    equipmentNeeds: '',
    budget: '',
  });

  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Fetch Miami weather from Open-Meteo (free, no API key needed)
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=25.76&longitude=-80.19&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph'
        );
        const data = await res.json();

        const weatherCode = data.current.weather_code;
        let condition = 'Clear';
        let icon = '☀️';

        if (weatherCode >= 0 && weatherCode <= 3) { condition = 'Clear'; icon = '☀️'; }
        else if (weatherCode >= 45 && weatherCode <= 48) { condition = 'Foggy'; icon = '🌫️'; }
        else if (weatherCode >= 51 && weatherCode <= 67) { condition = 'Rainy'; icon = '🌧️'; }
        else if (weatherCode >= 71 && weatherCode <= 77) { condition = 'Snowy'; icon = '❄️'; }
        else if (weatherCode >= 80 && weatherCode <= 82) { condition = 'Showers'; icon = '🌦️'; }
        else if (weatherCode >= 95 && weatherCode <= 99) { condition = 'Thunderstorm'; icon = '⛈️'; }
        else { condition = 'Cloudy'; icon = '☁️'; }

        setWeather({
          temp: Math.round(data.current.temperature_2m),
          condition,
          humidity: data.current.relative_humidity_2m,
          wind: Math.round(data.current.wind_speed_10m),
          icon,
        });
      } catch (error) {
        console.error('Failed to fetch weather:', error);
      }
    };

    fetchWeather();
  }, []);

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Handle form submission here
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your submission!');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white pt-32 md:pt-40 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          
          {/* LEFT COLUMN - Contact Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
                Let's Work<br/>Together
              </h1>
              <p className="text-lg leading-relaxed text-white/80 max-w-md">
                Whether you're planning a high-end advertising shoot, a multi-station technical production, or a remote-location project in the Caribbean or South Florida, BullTech is here to ensure your workflow is smooth, stable, and stress-free. We look forward to supporting your next production.
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="mailto:hello@BullDigital.tech" 
                className="block text-xl font-bold hover:text-bulltech-pink transition-colors"
              >
                hello@BullDigital.tech
              </a>
              <a 
                href="tel:+13055227386" 
                className="block text-xl font-bold hover:text-bulltech-pink transition-colors"
              >
                +1 (305) 522-7386
              </a>
            </div>

            {/* WhatsApp QR Code Section */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-bulltech-pink to-bulltech-blue flex items-center justify-center">
                  <span className="text-white font-bold text-lg">BT</span>
                </div>
                <div>
                  <p className="font-bold text-lg">Bull</p>
                  <a
                    href="https://wa.me/1786206499"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-bulltech-pink hover:underline"
                  >
                    wa.me/1786206499
                  </a>
                </div>
              </div>
              <p className="text-xs text-white/60 mb-4">WhatsApp Business Account</p>
              {/* QR Code - Using a QR code generator API */}
              <div className="bg-white p-4 rounded-lg flex items-center justify-center aspect-square">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/1786206499`}
                  alt="WhatsApp QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Miami Weather Widget */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-bulltech-blue to-bulltech-pink flex items-center justify-center">
                  <span className="text-2xl">{weather?.icon || '☀️'}</span>
                </div>
                <div>
                  <p className="font-bold text-lg">Miami Weather</p>
                  <p className="text-sm text-white/60">Current Conditions</p>
                </div>
              </div>

              {weather ? (
                <div className="space-y-4">
                  {/* Temperature Display */}
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-black text-bulltech-blue">{weather.temp}°</span>
                    <span className="text-lg text-white/60 mb-2">F</span>
                  </div>

                  <p className="text-lg font-medium text-white/80">{weather.condition}</p>

                  {/* Weather Details */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-wider">Humidity</p>
                      <p className="text-lg font-bold">{weather.humidity}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-wider">Wind</p>
                      <p className="text-lg font-bold">{weather.wind} mph</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-32">
                  <div className="w-8 h-8 border-2 border-bulltech-pink border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN - Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <p className="text-sm text-white/70 mb-8">
              Requests for services may be submitted through this form. You are also welcome to e-mail us directly at{' '}
              <a href="mailto:info@bulldigital.com" className="text-bulltech-pink hover:underline">
                info@bulldigital.com
              </a>.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">
                  Name <span className="text-bulltech-pink">(required)</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-bulltech-pink transition-colors"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-bulltech-pink transition-colors"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Company</label>
                <input
                  type="text"
                  placeholder="Company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-bulltech-pink transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">
                  Email <span className="text-bulltech-pink">(required)</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-bulltech-pink transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">
                  Subject <span className="text-bulltech-pink">(required)</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-bulltech-pink transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">
                  Message <span className="text-bulltech-pink">(required)</span>
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-bulltech-pink transition-colors resize-none"
                />
              </div>

              {/* Services */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-3">
                  Services (Requested)
                </label>
                <div className="space-y-2">
                  {['Digital Capture', 'Equipment Rental', 'Live Streaming', 'Post Production'].map((service) => (
                    <label key={service} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="w-5 h-5 rounded border-white/20 bg-white/10 text-bulltech-pink focus:ring-bulltech-pink focus:ring-2"
                      />
                      <span className="text-white group-hover:text-bulltech-pink transition-colors">{service}</span>
                    </label>
                  ))}
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.services.includes('Other')}
                      onChange={() => handleServiceChange('Other')}
                      className="w-5 h-5 rounded border-white/20 bg-white/10 text-bulltech-pink focus:ring-bulltech-pink focus:ring-2"
                    />
                    <span className="text-white group-hover:text-bulltech-pink transition-colors">Other (Specify)</span>
                  </label>
                  {formData.services.includes('Other') && (
                    <input
                      type="text"
                      placeholder="Other"
                      value={formData.otherService}
                      onChange={(e) => setFormData({ ...formData, otherService: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-bulltech-pink transition-colors ml-8"
                    />
                  )}
                </div>
              </div>

              {/* Shoot Location */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Shoot Location</label>
                <select
                  value={formData.shootLocation}
                  onChange={(e) => setFormData({ ...formData, shootLocation: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-bulltech-pink transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="los-angeles">Los Angeles, CA</option>
                  <option value="greater-socal">Greater Southern California</option>
                  <option value="northern-california">Northern California</option>
                  <option value="nyc">New York City</option>
                  <option value="another-state">Another State</option>
                  <option value="international">International</option>
                  <option value="virtual">Virtual</option>
                  <option value="na">N/A</option>
                </select>
              </div>

              {/* Location Type */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Location Type</label>
                <select
                  value={formData.locationType}
                  onChange={(e) => setFormData({ ...formData, locationType: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-bulltech-pink transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="studio">Studio</option>
                  <option value="indoor">On Location (Indoor)</option>
                  <option value="outdoor">On Location (Outdoor)</option>
                  <option value="underwater">Underwater</option>
                  <option value="virtual">Virtual</option>
                  <option value="other">Other</option>
                  <option value="na">N/A</option>
                </select>
              </div>

              {/* Shoot Type */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Shoot Type</label>
                <select
                  value={formData.shootType}
                  onChange={(e) => setFormData({ ...formData, shootType: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-bulltech-pink transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="advertising">Advertising</option>
                  <option value="editorial">Editorial</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="publicity">Publicity</option>
                  <option value="social-content">Social Content</option>
                  <option value="tech-support">Tech/Support Request</option>
                  <option value="test-portfolio">Test / Portfolio Request</option>
                </select>
              </div>

              {/* Equipment Needs */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Equipment Needs</label>
                <textarea
                  rows={4}
                  placeholder="Equipment Needs"
                  value={formData.equipmentNeeds}
                  onChange={(e) => setFormData({ ...formData, equipmentNeeds: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-bulltech-pink transition-colors resize-none"
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Budget</label>
                <p className="text-xs text-white/60 mb-3">
                  For digital tech services, provide full digital budget including equipment. Please list post production budgets separately if applicable. If unknown, leave blank.
                </p>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60">$</span>
                  <input
                    type="text"
                    placeholder="Budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full pl-8 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-bulltech-pink transition-colors"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-bulltech-pink hover:bg-bulltech-blue text-black font-bold uppercase tracking-widest rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
