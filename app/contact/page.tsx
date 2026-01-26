'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface DailyWeather {
  day: string;
  code: number;
  max: number;
  min: number;
}

interface WeatherData {
  temp: number;
  condition: string;
  humidity: number;
  wind: number;
  icon: string;
  daily?: DailyWeather[];
}

// Reusable Custom Select Component
interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  isOpen: boolean;
  onToggle: () => void;
  placeholder?: string;
}

const CustomSelect = ({ label, value, onChange, options, isOpen, onToggle, placeholder = 'Select an option' }: CustomSelectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll active option into view when opened
  useEffect(() => {
    if (isOpen && containerRef.current) {
      const activeOption = containerRef.current.querySelector('[data-active="true"]');
      if (activeOption) {
        activeOption.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [isOpen]);

  const selectedLabel = options.find(opt => opt.value === value)?.label || placeholder;

  return (
    <div className="relative" ref={containerRef}>
      <label className="block text-sm font-bold uppercase tracking-wider mb-2">
        {label}
      </label>
      
      <button
        type="button"
        onClick={onToggle}
        className={`w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-left text-white focus:outline-none focus:border-bulltech-pink transition-all duration-200 flex items-center justify-between group ${
          isOpen ? 'border-bulltech-pink bg-white/15' : 'hover:bg-white/15'
        }`}
      >
        <span className={`block truncate ${!value ? 'text-white/40' : ''}`}>
          {selectedLabel}
        </span>
        <svg 
          className={`w-5 h-5 text-white/60 transition-transform duration-300 ${isOpen ? 'rotate-180 text-bulltech-pink' : 'group-hover:text-white'}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`absolute z-50 top-full left-0 right-0 mt-2 bg-[#1a1a1a] border border-white/20 rounded-lg shadow-2xl overflow-hidden transition-all duration-200 origin-top ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
        <div className="max-h-60 overflow-y-auto p-1 custom-scrollbar">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              data-active={option.value === value}
              onClick={() => {
                onChange(option.value);
                onToggle();
              }}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm transition-colors flex items-center justify-between ${
                option.value === value
                  ? 'bg-bulltech-pink/20 text-bulltech-pink font-medium'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              {option.label}
              {option.value === value && (
                <svg className="w-4 h-4 text-bulltech-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

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
    shootLocationDetails: '',
    locationType: '',
    shootType: '',
    equipmentNeeds: '',
    budget: '',
  });

  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [isSuccess, setIsSuccess] = useState(false);

  // Manage which dropdown is open
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch Miami weather
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=25.76&longitude=-80.19&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=America%2FNew_York'
        );
        const data = await res.json();

        const getWeatherIcon = (code: number) => {
          if (code >= 0 && code <= 3) return '☀️';
          if (code >= 45 && code <= 48) return '🌫️';
          if (code >= 51 && code <= 67) return '🌧️';
          if (code >= 71 && code <= 77) return '❄️';
          if (code >= 80 && code <= 82) return '🌦️';
          if (code >= 95 && code <= 99) return '⛈️';
          return '☁️';
        };

        const currentCode = data.current.weather_code;
        
        // Process daily forecast (next 5 days)
        // Ensure data.daily exists before mapping
        let daily: DailyWeather[] = [];
        if (data.daily && data.daily.time) {
          daily = data.daily.time.slice(0, 5).map((time: string, index: number) => {
            const date = new Date(time + 'T12:00:00'); // Append time to avoid UTC shift
            const day = date.toLocaleDateString('en-US', { weekday: 'short' });
            
            // Safely get temps, fallback to current if missing (though unlikely with proper API call)
            const max = typeof data.daily.temperature_2m_max[index] === 'number' 
              ? Math.round(data.daily.temperature_2m_max[index]) 
              : 0;
            const min = typeof data.daily.temperature_2m_min[index] === 'number' 
              ? Math.round(data.daily.temperature_2m_min[index]) 
              : 0;

            return {
              day,
              code: data.daily.weather_code[index],
              max,
              min,
            };
          });
        }

        setWeather({
          temp: Math.round(data.current.temperature_2m),
          condition: 'Clear', // Simplified
          humidity: data.current.relative_humidity_2m,
          wind: Math.round(data.current.wind_speed_10m),
          icon: getWeatherIcon(currentCode),
          daily
        });
      } catch (error) {
        console.error('Failed to fetch weather:', error);
      }
    };

    fetchWeather();
  }, []);

  // Handle clicking outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is inside specific service dropdown or generic container
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const errorData = await response.json();
        alert(`Failed to send message: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedServicesText = formData.services.length > 0
    ? formData.services.join(', ')
    : 'Select workflow';

  // Options Data
  const shootLocationOptions = [
    { label: 'Miami', value: 'miami' },
    { label: 'Isla Morada', value: 'isla-morada' },
    { label: 'Key West', value: 'key-west' },
    { label: 'Hollywood', value: 'hollywood' },
    { label: 'Ft. Lauderdale', value: 'ft-lauderdale' },
    { label: 'Palm Beach', value: 'palm-beach' },
    { label: 'Orlando', value: 'orlando' },
    { label: 'Atlanta', value: 'atlanta' },
    { label: 'NYC', value: 'nyc' },
    { label: 'LA', value: 'la' },
    { label: 'Another US State', value: 'another-us-state' },
    { label: 'Bahamas', value: 'bahamas' },
    { label: 'Caribbean (specify)', value: 'caribbean-specify' },
    { label: 'Spain', value: 'spain' },
    { label: 'International (specify)', value: 'international-specify' },
    { label: 'N/A', value: 'na' },
  ];

  const locationTypeOptions = [
    { label: 'Studio', value: 'studio' },
    { label: 'On Location (Indoor)', value: 'indoor' },
    { label: 'On Location (Outdoor)', value: 'outdoor' },
    { label: 'Underwater', value: 'underwater' },
    { label: 'Virtual', value: 'virtual' },
    { label: 'Other', value: 'other' },
    { label: 'N/A', value: 'na' },
  ];

  const shootTypeOptions = [
    { label: 'Advertising', value: 'advertising' },
    { label: 'Catalog', value: 'catalog' },
    { label: 'Editorial', value: 'editorial' },
    { label: 'E-Commerce', value: 'ecommerce' },
    { label: 'Publicity', value: 'publicity' },
    { label: 'Social Content', value: 'social-content' },
    { label: 'Tech/Support Request', value: 'tech-support' },
    { label: 'Test / Portfolio Request', value: 'test-portfolio' },
  ];

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

            {/* BullTech LLC QR Code Card */}
            <div className="bg-[#111] border border-white/10 rounded-2xl p-8 max-w-sm flex flex-col items-center text-center shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-bulltech-blue via-white to-bulltech-pink opacity-50"></div>
              
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <Image
                    src="/AF_Bulltech_Miami_Logo.webp"
                    alt="BullTech Logo"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-1">BullTech LLC</h3>
              <p className="text-white/40 text-sm mb-6">WhatsApp Business Account</p>

              <div className="bg-white p-2 rounded-xl mb-2">
                <Image
                  src="/whatsapp-qr.png"
                  alt="WhatsApp QR Code"
                  width={200}
                  height={200}
                  className="w-48 h-48 object-contain"
                  unoptimized
                />
              </div>
            </div>

            {/* Week Weather Outcome Widget */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src="/AF_Bulltech_Miami_Logo.webp"
                    alt="BullTech Logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg uppercase tracking-tight">Week Weather</p>
                  <p className="font-bold text-lg uppercase tracking-tight">Miami, FL</p>
                </div>
              </div>

              {weather && weather.daily ? (
                <div className="space-y-3">
                  {weather.daily.map((day, i) => (
                    <div key={i} className="flex items-center justify-between text-sm py-2 border-b border-white/5 last:border-0">
                      <div className="w-12 font-medium text-white/80">{day.day}</div>
                      <div className="text-xl">
                        {day.code >= 0 && day.code <= 3 ? '☀️' : 
                         day.code >= 51 ? '🌧️' : '☁️'}
                      </div>
                      <div className="flex gap-3 font-mono">
                        <span className="text-white">{day.max}°</span>
                        <span className="text-white/40">{day.min}°</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-32">
                  <div className="w-8 h-8 border-2 border-bulltech-pink border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>

            {/* Live Sets Widget */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src="/AF_Bulltech_Miami_Logo.webp"
                    alt="BullTech Logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg uppercase tracking-tight">Weather Livestream</p>
                  <p className="font-bold text-lg uppercase tracking-tight">Miami, FL</p>
                </div>
              </div>

              {/* Links to other cams */}
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase text-white/40 tracking-wider mb-2">Live Cams</p>
                {[
                  { name: 'W South Beach Cam (Official)', url: 'https://www.miamiandbeaches.com/l/hotels/w-south-beach/488?category=1' },
                  { name: 'Key Biscayne (Virginia Key)', url: 'https://www.miamiandbeaches.com/plan-your-trip/miami-webcams' },
                  { name: 'Coconut Grove (Arya Hotel)', url: 'https://www.miamiandbeaches.com/plan-your-trip/miami-webcams' },
                ].map((cam, i) => (
                  <a 
                    key={i}
                    href={cam.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
                  >
                    <span className="text-sm font-medium text-white/80 group-hover:text-bulltech-pink">{cam.name}</span>
                    <svg className="w-4 h-4 text-white/40 group-hover:text-bulltech-pink transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12" ref={dropdownRef}>
            <p className="text-sm text-white/70 mb-8">
              Requests for services may be submitted through this form. You are also welcome to e-mail us directly at{' '}
              <a href="mailto:hello@bulldigital.tech" className="text-bulltech-pink hover:underline">
                hello@bulldigital.tech
              </a>.
            </p>

            {isSuccess ? (
              <div className="bg-bulltech-pink/10 border border-bulltech-pink rounded-lg p-6 text-center animate-fade-in">
                <div className="w-16 h-16 bg-bulltech-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/80 mb-6">
                  Thank you for your inquiry. We have received your message and will get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-bulltech-pink hover:text-white transition-colors text-sm font-bold uppercase tracking-wider"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
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

              {/* Services Dropdown (Multi-select) */}
              <div className="relative">
                <label className="block text-sm font-bold uppercase tracking-wider mb-2">
                  Workflow
                </label>
                
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                  className={`w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-left text-white focus:outline-none focus:border-bulltech-pink transition-colors flex items-center justify-between group ${
                    activeDropdown === 'services' ? 'border-bulltech-pink bg-white/15' : 'hover:bg-white/15'
                  }`}
                >
                  <span className={`block truncate ${formData.services.length === 0 ? 'text-white/40' : ''}`}>
                    {selectedServicesText}
                  </span>
                  <svg 
                    className={`w-5 h-5 text-white/60 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180 text-bulltech-pink' : 'group-hover:text-white'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`absolute z-50 top-full left-0 right-0 mt-2 bg-[#1a1a1a] border border-white/20 rounded-lg shadow-2xl overflow-hidden transition-all duration-200 origin-top ${activeDropdown === 'services' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                  <div className="max-h-80 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                    {/* Services checkboxes */}
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" checked={formData.services.includes('Digital Capture')} onChange={() => handleServiceChange('Digital Capture')} className="w-5 h-5 rounded border-white/20 bg-white/10 text-bulltech-pink focus:ring-bulltech-pink focus:ring-2" />
                      <span className="text-white group-hover:text-bulltech-pink transition-colors">Digital Capture</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" checked={formData.services.includes('Equipment Rental')} onChange={() => handleServiceChange('Equipment Rental')} className="w-5 h-5 rounded border-white/20 bg-white/10 text-bulltech-pink focus:ring-bulltech-pink focus:ring-2" />
                      <span className="text-white group-hover:text-bulltech-pink transition-colors">Equipment Rental</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" checked={formData.services.includes('Live Streaming')} onChange={() => handleServiceChange('Live Streaming')} className="w-5 h-5 rounded border-white/20 bg-white/10 text-bulltech-pink focus:ring-bulltech-pink focus:ring-2" />
                      <span className="text-white group-hover:text-bulltech-pink transition-colors">Live Streaming</span>
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" checked={formData.services.includes('Post Production')} onChange={() => handleServiceChange('Post Production')} className="w-5 h-5 rounded border-white/20 bg-white/10 text-bulltech-pink focus:ring-bulltech-pink focus:ring-2" />
                        <span className="text-white group-hover:text-bulltech-pink transition-colors">Post Production</span>
                      </label>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <input type="checkbox" checked={formData.services.includes('Color')} onChange={() => handleServiceChange('Color')} className="w-4 h-4 rounded border-white/20 bg-white/10 text-bulltech-pink focus:ring-bulltech-pink focus:ring-2" />
                          <span className="text-white group-hover:text-bulltech-pink transition-colors">Color</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <input type="checkbox" checked={formData.services.includes('Retouching')} onChange={() => handleServiceChange('Retouching')} className="w-4 h-4 rounded border-white/20 bg-white/10 text-bulltech-pink focus:ring-bulltech-pink focus:ring-2" />
                          <span className="text-white group-hover:text-bulltech-pink transition-colors">Retouching</span>
                        </label>
                      </div>
                    </div>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" checked={formData.services.includes('Archival')} onChange={() => handleServiceChange('Archival')} className="w-5 h-5 rounded border-white/20 bg-white/10 text-bulltech-pink focus:ring-bulltech-pink focus:ring-2" />
                      <span className="text-white group-hover:text-bulltech-pink transition-colors">Archival</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" checked={formData.services.includes('Other')} onChange={() => handleServiceChange('Other')} className="w-5 h-5 rounded border-white/20 bg-white/10 text-bulltech-pink focus:ring-bulltech-pink focus:ring-2" />
                      <span className="text-white group-hover:text-bulltech-pink transition-colors">Other (Specify)</span>
                    </label>
                  </div>
                </div>
                
                {formData.services.includes('Other') && (
                  <input
                    type="text"
                    placeholder="Please specify other services"
                    value={formData.otherService}
                    onChange={(e) => setFormData({ ...formData, otherService: e.target.value })}
                    className="w-full mt-3 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-bulltech-pink transition-colors"
                  />
                )}
              </div>

              {/* Shoot Location - Custom Dropdown */}
              <div>
                <CustomSelect
                  label="Shoot Location"
                  value={formData.shootLocation}
                  onChange={(value) => setFormData({ ...formData, shootLocation: value })}
                  options={shootLocationOptions}
                  isOpen={activeDropdown === 'shootLocation'}
                  onToggle={() => setActiveDropdown(activeDropdown === 'shootLocation' ? null : 'shootLocation')}
                />
                {(formData.shootLocation === 'caribbean-specify' || formData.shootLocation === 'international-specify') && (
                  <input
                    type="text"
                    placeholder="Please specify location"
                    value={formData.shootLocationDetails}
                    onChange={(e) => setFormData({ ...formData, shootLocationDetails: e.target.value })}
                    className="w-full mt-3 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-bulltech-pink transition-colors"
                  />
                )}
              </div>

              {/* Location Type - Custom Dropdown */}
              <CustomSelect
                label="Location Type"
                value={formData.locationType}
                onChange={(value) => setFormData({ ...formData, locationType: value })}
                options={locationTypeOptions}
                isOpen={activeDropdown === 'locationType'}
                onToggle={() => setActiveDropdown(activeDropdown === 'locationType' ? null : 'locationType')}
              />

              {/* Shoot Type - Custom Dropdown */}
              <CustomSelect
                label="Shoot Type"
                value={formData.shootType}
                onChange={(value) => setFormData({ ...formData, shootType: value })}
                options={shootTypeOptions}
                isOpen={activeDropdown === 'shootType'}
                onToggle={() => setActiveDropdown(activeDropdown === 'shootType' ? null : 'shootType')}
              />

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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
