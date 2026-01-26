'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Package Image Component for handling scaling and slideshows
function PackageImage({ name, defaultImage }: { name: string; defaultImage: string }) {
  const [currentImage, setCurrentImage] = useState(defaultImage);

  useEffect(() => {
    if (name === 'MEAN MACHINE') {
      const images = ['/MEAN MACHINE1.png', '/MEAN MACHINE2.png', '/MEAN MACHINE 3.png'];
      
      const updateImage = () => {
        const index = Math.floor(Date.now() / 1500) % images.length;
        setCurrentImage(images[index]);
      };

      updateImage();
      const interval = setInterval(updateImage, 100);
      return () => clearInterval(interval);
    }
  }, [name]);

  const getScaleClass = () => {
    if (name === 'FAST & FURIOUS') {
      return 'scale-[1.6]'; // Increased scale for Fast & Furious
    }
    if (name === 'MEAN MACHINE') {
      return 'scale-125';
    }
    if (['CALLE 8', 'CRUISELINER', 'Hi-ROLLER'].includes(name)) {
      return 'scale-[1.4]';
    }
    return '';
  };

  return (
    <Image
      src={currentImage}
      alt={name}
      fill
      className={`object-contain ${getScaleClass()} transition-transform duration-300`}
    />
  );
}

export default function ServicesPage() {
  const [expandedPackage, setExpandedPackage] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'studio' | 'locations' | 'additional'>('locations');
  const [activePhotoTab, setActivePhotoTab] = useState<'camera' | 'underwater'>('camera');
  
  // New state for equipment dropdowns
  const [expandedEquipment, setExpandedEquipment] = useState<string[]>([]);
  
  // New state for camera dropdowns
  const [expandedCameraSystem, setExpandedCameraSystem] = useState<string[]>([]);

  const togglePackage = (name: string) => {
    setExpandedPackage(prev => 
      prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
    );
  };

  const toggleEquipment = (name: string) => {
    setExpandedEquipment(prev => 
      prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
    );
  };

  const toggleCameraSystem = (name: string) => {
    setExpandedCameraSystem(prev => 
      prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
    );
  };

  const studioPackages = [
    {
      name: 'CALLE 8',
      image: '/CALLE 8.png',
      includes: [
        'APPLE 16.2" MBP M2/M3',
        'APPLE iPad Air/Directors Cage',
        'HOLLYLAND MARS TX & RX 4K KIT',
        'INOVATIV DIGI-PLATE or SEAPORT LAPTOP KIT',
        'HYPER JUICE BATTERY or ANKER',
        'CAMERA TETHER KIT',
        'CAMERA ACCESSORIES',
        'COMPUTER PERIPHERALS',
        '27" EIZO monitor w/Hood',
        'ECOFLOW River Pro Battery',
        'KUPO roller',
      ],
    },
    {
      name: 'CRUISELINER',
      image: '/CRUISELINER.png',
      includes: [
        'APPLE 16.2" MBP M2/M3 OR MAC MINI M4 MAX-OUT',
        '2x EIZO 27\'',
        'INOVATIV VOYAGER Setup w/double monitor brace',
        'ECOFLOW Delta MAX BATTERY',
        'CAMERA TETHER KIT',
        'CAMERA ACCESSORIES',
        'COMPUTER PERIPHERALS',
      ],
    },
    {
      name: 'Hi-ROLLER',
      image: '/HIROLLER1.png',
      includes: [
        'MAC STUDIO PRO ULTRA M1 OR MAC MINI M4 MAX-OUT',
        '2x EIZO 27\'',
        'INOVATIV VOYAGER Setup w/double monitor brace',
        'ECOFLOW Delta MAX BATTERY',
        'CAMERA TETHER KIT',
        'CAMERA ACCESSORIES',
        'COMPUTER PERIPHERALS',
        '16" + tools monitors',
        'HOLLYLAND M1 TX/RX & 4K Mars RX or Pyro TX/RX',
        '27" EIZO monitor w/Hood',
        'ECOFLOW River Pro Battery',
        'KUPO roller w/MULE ECOFLOW Tray',
      ],
    },
  ];

  const locationPackages = [
    {
      name: 'Flamingo',
      image: '/FLAMINGO.png',
      includes: [
        'APPLE 16.2" MBP M2/M3',
        'APPLE iPad Air/Directors Cage',
        'HOLLYLAND MARS TX 4K KIT',
        'INOVATIV DIGI-PLATE or SEAPORT LAPTOP KIT',
        'HYPER JUICE BATTERY or ANKER',
        'CAMERA TETHER KIT',
        'CAMERA ACCESSORIES',
        'COMPUTER PERIPHERALS',
      ],
    },
    {
      name: 'FAST & FURIOUS',
      image: '/FAST FURIOUS1.png',
      includes: [
        'APPLE 16.2" MBP M2/M3 or MAC MINI M4 MAX-OUT',
        '1x EIZO 27" (version A) 2x EIZO 27\' (version B)',
        'TRP Tent or MULE tent',
        'INOVATIV Axis Setup w/ single or double monitor brace',
        'ECOFLOW Delta 2 or River Pro BATTERY',
        'CAMERA TETHER KIT',
        'CAMERA ACCESSORIES',
        'COMPUTER PERIPHERALS',
      ],
    },
    {
      name: 'MEAN MACHINE',
      image: '/MEAN MACHINE1.png',
      includes: [
        'MAC STUDIO PRO ULTRA M1 OR MAC MINI M4 MAX-OUT',
        '2x EIZO 27\'',
        'MULE tent',
        'INOVATIV VOYAGER Setup w/double monitor brace',
        'ECOFLOW Delta MAX BATTERY',
        'CAMERA TETHER KIT',
        'CAMERA ACCESSORIES',
        'COMPUTER PERIPHERALS',
        '16" + tools monitors',
      ],
    },
  ];

  const customSourcingNote = (
    <div className="mt-12 pt-8 border-t border-white/10 text-center flex flex-col items-center">
      <p className="text-lg font-medium mb-4">Looking for a piece of equipment we don't show online?</p>
      <p className="text-white/80 mb-4">We're here to help.</p>
      <p className="text-white/80 mb-6">We offer custom equipment sourcing for any production need.</p>
      <p className="text-white/80 mb-8">Contact us for availability and options:</p>
      
      <Link
        href="/contact"
        className="inline-block px-12 py-4 border border-bulltech-pink text-bulltech-pink text-lg font-bold uppercase tracking-widest hover:bg-bulltech-pink hover:text-black transition-all duration-300"
      >
        Get in Touch
      </Link>

      <p className="text-white/60 mt-8 italic">Thank you.</p>
    </div>
  );

  const workstationData = {
    heavyCarts: [
      { model: 'Voyager 42', size: '42"', specs: 'Cart w/ middle shelf, acc. hooks, Premium 10" wheel' },
      { model: 'Voyager 36', size: '36"', specs: 'Cart, accessory hooks, Premium 10" wheel upgrade' },
      { model: 'AXIS', size: 'N/A', specs: 'Base station w/ WorkSurface Pro' },
      { model: 'Proaim Victor V1.1', size: '42"', specs: 'Camera cart, accessory hooks' },
    ],
    portable: [
      { make: 'Inovativ', model: 'DigiPlate Pro + DigiSystem Pro Kit' },
      { make: 'Inovativ', model: 'DigiSystem DigiShade Pro for DigiPlate Pro' },
      { make: 'Inovativ', model: 'DigiSystem 1535 Pro Ultra Kit' },
      { make: 'Seaport Digital', model: 'I-Visor LS Pro Mag Laptop Case w/ mount + sun hood' },
    ],
    accessories: [
      { make: 'Inovativ', model: 'Insight Monitor Mount System for Voyager 42' },
      { make: 'Inovativ', model: 'BOA Arm Systems' },
      { make: 'Proaim', model: 'Monitor Articulated Arm w/ Inovativ QR' },
      { make: 'Inovativ', model: 'Dual QR VESA System' },
      { make: 'Inovativ', model: 'Offset Baby Pin Mount' },
      { make: 'Inovativ', model: '5/8 Baby Pin Arm Systems' },
      { make: 'Inovativ', model: '5/8 Pro Monitor Mounts w/ QR' },
      { make: 'Inovativ', model: 'Quick Release Monitor Systems' },
      { make: 'Inovativ', model: 'Insight 36 Monitor System' },
      { make: 'Inovativ', model: 'Insight 42 Monitor System' },
      { make: 'Inovativ', model: 'Mast Riser System' },
      { make: 'Inovativ', model: 'Accessory Hooks' },
      { make: 'Inovativ', model: 'AXIS Dual Bar for monitor mount' },
      { make: 'Inovativ', model: 'AXIS Work Surface Pro w/ V-Drop' },
      { make: 'Kupo', model: '340 Roller Stand Base + 20" C-Stand Riser' },
      { make: 'Matthews', model: 'Low Boy Junior Steel Wheeled Stand' },
      { make: 'Faini Made', model: 'Cable Hooks & Battery External Holders' },
      { make: 'Faini Made', model: 'Camera Holster Rings' },
      { make: 'Mule', model: 'Utility Trays – Medium / Large' },
      { make: 'Mule', model: 'Full-Length Cart Tent + Tent Mounting System' },
      { make: 'TRP Worldwide', model: '4x4 Ultrablounce Floppy Tent – Rolling Video Village' },
      { make: 'E-Z UP Eclipse', model: 'Video Village II Tent w/ Walls (10\') Black' },
      { make: 'Filmtools', model: 'Visqueen Bags / Tarps / Rain Covers – Large Clear' },
      { make: 'Robocup', model: 'Drinks Caddy' },
    ],
  };

  const monitorData = {
    eizo: [
      { model: 'CG 2700X', size: '27"', specs: '27" 16:9 4K DISPLAY, VESA' },
      { model: 'CG 2700S', size: '27"', specs: '27" 16:9 DISPLAY, VESA' },
    ],
    nec: [
      { model: '', size: '27"', specs: '27" 16:9 4K DISPLAY, VESA' },
      { model: '', size: '27"', specs: '27" 16:9 DISPLAY, VESA' },
    ],
    apple: [
      { model: 'STUDIO DISPLAY', size: '27"', specs: '27" RETINA DISPLAY 5K NR, VESA' },
      { model: 'IPAD PRO', size: '13"', specs: '12.9" M4 1TB' },
      { model: 'IPAD AIR', size: '11"', specs: '11" M3 1TB' },
    ],
    lg: [
      { model: '49L V640S-UB', size: '49"', specs: '49" VIDEO-VILLAGE DISPLAY, VESA' },
    ],
    accessories: [
      { make: 'GELATIN', accessory: 'xLamina 13 2.0 - with Magnetic Carbon Shade' },
      { make: 'GELATIN', accessory: 'V Lock Universal Mount' },
      { make: 'GELATIN', accessory: 'Carbon Shade Studio' },
      { make: 'INOVATIV', accessory: 'PRO MONITOR MOUNT' },
      { make: 'INOVATIV', accessory: 'QR PRO VESA SYSTEM' },
      { make: 'ACCSOON', accessory: 'PowerCage II' },
    ],
  };

  const wirelessData = {
    teradek: [
      { model: 'Teradek Ace 750 HDMI', specs: '750FT RANGE / HDMI WIRELESS VIDEO' },
    ],
    hollylandVideo: [
      { model: 'Mars M1', specs: 'WIRELESS MONITOR / TX / RX' },
      { model: 'Mars 4K', specs: '4K UHD WIRELESS SYSTEM' },
      { model: 'Pyro S 4K', specs: '4K UHD / LONG RANGE SYSTEM' },
      { model: 'Pyro H 4K', specs: '4K UHD / HDMI-SDI SYSTEM' },
    ],
    hollylandAudio: [
      { model: 'Solidcom C1 Pro-3S', specs: 'FULL-DUPLEX INTERCOM / ENC / 1.9GHz' },
    ],
    wifi: [
      { model: 'GL-MT3000', specs: 'AX3000 WI-FI 6 ROUTER' },
      { model: 'GL-AXT1800', specs: 'WI-FI 6 GIGABIT ROUTER' },
    ],
    starlink: [
      { component: 'High Performance Antenna', specs: 'STARLINK SATELLITE INTERNET ANTENNA' },
      { component: 'G2 WiFi Mesh Router', specs: 'STARLINK MESH ROUTER' },
      { component: 'Satellite Dish Backpack', specs: 'SPACEX SATELLITE DISH & ROUTER B-PACK' },
    ]
  };

  const batteriesData = {
    ecoflow: [
      { model: 'River Pro', specs: '720Wh Portable Power Station' },
      { model: 'River Pro + Extra Battery', specs: '720Wh ×2 = 1440Wh' },
      { model: 'Delta 2', specs: '1024Wh Portable Power Station' },
      { model: 'Delta 2 Max', specs: '2048Wh Portable Power Station' },
    ],
    powerBanks: [
      { make: 'HyperJuice', model: '245W USB-C 100W 27000mAh Power Bank' },
      { make: 'Anker', model: 'Prime 27K 250W, 170W Fast USB-C Recharge' },
    ],
    airConditioning: [
      { make: 'EcoFlow', model: 'Wave 3 Portable AC + Wave 3 AddOn Battery' },
      { make: 'IcyBreeze', model: 'v2 Pro Portable Air Cooler – 38 qts, 12V, Battery + Charger' },
    ]
  };

  const canonData = {
    systems: [
      { model: 'R5', mount: 'RF', specs: 'FULL FRAME 45 MP CMOS' },
      { model: 'R5 MARK II', mount: 'RF', specs: 'FULL FRAME 45 MP CMOS BSI' },
    ],
    primes: [
      { mount: 'RF', prime: '35MM f/1.4L VCM' },
      { mount: 'RF', prime: '50MM f/1.2L' },
      { mount: 'RF', prime: '85MM f/1.2L' },
    ],
    zooms: [
      { mount: 'RF', zoom: '15-35MM f/2.8L IS' },
      { mount: 'RF', zoom: '24-70MM f/2.8L' },
      { mount: 'RF', zoom: '70-200MM f/2.8L IS' },
    ],
    accessories: [
      { system: 'R5', accessory: 'BG-R10 BATTERY GRIP' },
      { system: 'R5', accessory: 'EF/RF CONTROL RING ADAPTER' },
      { system: 'R5 MARK II', accessory: 'BG-R20 BATTERY GRIP' },
    ],
  };

  const nikonData = {
    systems: [
      { model: 'D850', mount: 'F/AF-S', specs: 'FULL FRAME 45 MP CMOS' },
      { model: 'Z8', mount: 'Z', specs: 'FULL FRAME 45.7 MP CMOS' },
      { model: 'Z9', mount: 'Z', specs: 'FULL FRAME 45.7 MP CMOS' },
      { model: 'FM2', mount: 'F', specs: 'AF 35MM FILM CAMERA' },
      { model: 'F4S', mount: 'F/AF-S', specs: 'AF 35MM FILM CAMERA' },
    ],
    primesFAFS: [
      { mount: 'AF-S', prime: '24MM f/1.8G' },
      { mount: 'M', prime: '50MM f/1.2' },
      { mount: 'AF-S', prime: '60MM f/2.8G MICRO' },
      { mount: 'AF-S', prime: '85MM f/1.8G' },
      { mount: 'AF-S', prime: '180MM f/2.8G MICRO VR' },
      { mount: 'F/AF-S', prime: '135MM f/2 AF DC-NIKKOR' },
    ],
    zoomsFAFS: [
      { mount: 'AF-S', zoom: '14-24MM f/2.8G ED N' },
      { mount: 'AF-S', zoom: '24-70MM f/2.8E ED N VR' },
      { mount: 'AF-S', zoom: '70-200MM f/2.8E FL ED N VR' },
    ],
    primesZ: [
      { mount: 'Z', prime: '35MM f/1.2S' },
      { mount: 'Z', prime: '85MM f/1.2S' },
      { mount: 'Z', prime: '135MM f/1.8S PLENA' },
    ],
    zoomsZ: [
      { mount: 'Z', zoom: '14-24MM f/2.8S' },
      { mount: 'Z', zoom: '24-70MM f/2.8S' },
      { mount: 'Z', zoom: '70-200MM f/2.8S VR' },
    ],
    accessories: [
      { system: 'D850', accessory: 'MB-D18 MULTI-POWER BATTERY GRIP' },
      { system: 'Z8', accessory: 'MB-N12 BATTERY GRIP' },
      { system: 'Z8/Z9', accessory: 'FTZ II ADAPTER' },
    ],
  };

  const fujifilmData = {
    systems: [
      { model: 'GFX 100 II', mount: 'GF', specs: 'MEDIUM FORMAT 102 MP CMOS' },
    ],
    primesGF: [
      { mount: 'GF', prime: '23MM f/4 R LM WR' },
      { mount: 'GF', prime: '30MM f/3.5 R WR' },
      { mount: 'GF', prime: '30MM f/5.6 T/S' },
      { mount: 'GF', prime: '45MM f/2.8 R WR' },
      { mount: 'GF', prime: '50MM f/3.5 R LM WR' },
      { mount: 'GF', prime: '55MM f/1.7 R WR' },
      { mount: 'GF', prime: '63MM f/2.8 R WR' },
      { mount: 'GF', prime: '80MM f/1.7 R WR' },
      { mount: 'GF', prime: '110MM f/2 R LM WR' },
      { mount: 'GF', prime: '110MM f/5.6 T/S MACRO' },
      { mount: 'GF', prime: '120MM f/4 LM OIS WR MACRO' },
      { mount: 'GF', prime: '250MM f/4 R LM OIS' },
      { mount: 'GF', prime: '500MM f/5.6 R LM OIS WR' },
    ],
    zoomsGF: [
      { mount: 'GF', zoom: '20-35MM f/4 R WR' },
      { mount: 'GF', zoom: '32-64MM f/4 R LM WR' },
      { mount: 'GF', zoom: '35-70MM f/4.5-5.6 WR' },
      { mount: 'GF', zoom: '45-100MM f/4 R LM OIS WR' },
      { mount: 'GF', zoom: '100-200MM f/5.6 R LM OIS WR' },
    ],
    accessories: [
      { system: 'GFX 100/100SII', accessory: 'SMALLRIG 3232 A17 L-BRACKET' },
      { system: 'GFX 100 II', accessory: 'SMALLRIG APL2349 L-BRACKET' },
      { system: 'GFX 100 II', accessory: 'REALLY RIGHT STUFF APL2349 L-BRACKET' },
    ],
  };

  const phaseOneData = {
    digitalBacks: [
      { model: 'IQ140 40MP', mount: 'MAMIYA 645 AF', specs: '40 MP CMOS 1:3 CROP FACTOR' },
    ],
    cameraBody: [
      { model: '645DF+', brand: 'PHASEONE', specs: 'Equivalent to MAMIYA 645' },
    ],
    primes: [
      { mount: '645 AF', prime: 'SCHNEIDER - KREUNACH 80MM f/2.8' },
      { mount: '645 AF', prime: 'SCHNEIDER - KREUNACH 152MM f/3.5' },
    ],
    accessories: [
      { system: 'IQ / 645DF+', accessory: 'PHASEONE V-Grip Air' },
    ],
  };

  const hasselbladData = {
    systems: [
      { model: 'H5X', mount: 'HC/HCD', specs: 'F/F MEDIUM FORMAT FILM OR DIGITAL' },
      { model: 'H6X', mount: 'HC/HCD', specs: 'F/F MEDIUM FORMAT FILM OR DIGITAL' },
    ],
    primesHCHCD: [
      { mount: 'HCD', prime: '24MM f/4.8' },
      { mount: 'HCD', prime: '28MM f/4' },
      { mount: 'HC', prime: '35MM f/3.5' },
      { mount: 'HC', prime: '50MM f/3.5' },
      { mount: 'HC', prime: '50MM f/3.5 ORANGE' },
      { mount: 'HC', prime: '80MM f/2.8' },
      { mount: 'HC', prime: '80MM f/2.8 ORANGE' },
      { mount: 'HC', prime: '100MM f/2.2' },
      { mount: 'HC', prime: '100MM f/2.2 ORANGE' },
      { mount: 'HC', prime: '120MM f/4 MACRO' },
      { mount: 'HC', prime: '150MM f/3.2' },
      { mount: 'HC', prime: '210MM f/4' },
      { mount: 'HC', prime: '300MM f/4.5' },
    ],
    zoomsHCHCD: [
      { mount: 'HCD', zoom: '35-90MM f/4-5.6' },
      { mount: 'HCD', zoom: '35-90MM f/4-5.6 ORANGE' },
      { mount: 'HC', zoom: '50-110MM f/3.5-4.5' },
    ],
    accessories: [
      { system: 'H5X/H6X', accessory: 'HM 16-32 FILM BACKS' },
      { system: 'H5X/H6X', accessory: '13MM, 26MM AND 52MM EXTENSION TUBES' },
      { system: 'H5X/H6X', accessory: 'REALLY RIGHT STUFF BH-1L L-BRACKET' },
    ],
  };

  const essentialsData = [
    { make: 'Hollyland', model: 'Solidcom C1 Pro-3S Full-Duplex ENC Wireless Intercom Headsets System (1.9GHz)' },
    { make: 'Starlink', model: 'Satellite Internet Antenna, Mesh Router, SpaceX Satellite Dish & Router Backpack' },
    { make: 'Gelatin', model: 'xLamina Pro 13 (iPad Pro 13") with V-Lock Carbon Fiber Sun Shade' },
    { make: 'Gelatin', model: 'Carbon Shade Studio for EIZO 27" & NEC 27"' },
    { make: 'Lenspen', model: 'Sensor Klear Loupe & Pen' },
    { make: 'Accsoon', model: 'iPad PowerCage II' },
    { make: 'Nine-Volt', model: 'iPad Cage w/ Shade' },
    { make: 'SmallRig', model: 'Mini Side Handle Handgrip with Dual 1/4-20 Screw Mount' },
    { make: 'SmallRig', model: 'Universal Phone Cage, Smartphone Video Rig Kit' },
    { make: 'SmallRig', model: 'Brandon Li All-in-One Mobile Video Kit with Wireless + 67mm VND Filter' },
    { make: 'SmallRig', model: '10500mAh Replacement USB-C Battery for Sony NP-F970, PD 36W Fast Charging' },
    { make: 'SmallRig', model: 'V-Mount Battery VB50, 50Wh / 3400mAh with USB-C, D-TAP, USB-A, DC Ports, OLED' },
    { make: 'SmallRig', model: 'Universal Photography Tripod Dolly, Heavy Duty with 3" Rubber Wheels' },
    { make: 'Faini Made', model: 'Camera Holster Super Clamp' },
    { make: 'Faini Made', model: 'GL.iNet GL-AXT1800 Router Mount' },
    { make: 'Faini Made', model: 'GL.iNet GL-MT3000 Router Mount' },
    { make: 'Faini Made', model: 'Numpad Plate with Mini Adjustable Tension Arm' },
    { make: 'Wacom', model: 'Intuos Pro Paper Edition Tablet (Large) PTH860P' },
    { make: 'Loupedeck', model: 'Loupedeck CT' },
    { make: 'Datacolor', model: 'SpyderX Elite' },
    { make: 'SanDisk', model: 'Pro-Blade Station 16TB TB3' },
    { make: 'SanDisk', model: 'Pro-Blade Transport USB-C 20Gb/s' },
    { make: 'SanDisk', model: 'Pro-Dock 4' },
    { make: 'SanDisk', model: 'Pro-Reader Multi Card Reader' },
    { make: 'SanDisk', model: 'Pro-Reader CFexpress Type B' },
    { make: 'SanDisk', model: 'Pro-Reader CFast' },
    { make: 'SanDisk', model: 'Pro-Reader RED Mini-Mag' },
    { make: 'ProGrade', model: 'CFexpress / XQD Thunderbolt 3 Reader' },
    { make: 'Canon', model: 'SELPHY Compact 4x6 Printer' },
    { make: 'Mule', model: 'Utility Trays – Mini / Large' },
    { make: 'Mule', model: 'Full-Length Cart Tent & Mounting System' },
    { make: 'Sakk', model: 'Camera Support Saddlebags' },
    { make: 'TRP Worldwide', model: '4x4 Ultrabounce Floppy Tent' },
    { make: 'Gitzo', model: 'GT2542 Mountaineer Carbon Fiber Tripod' },
    { make: 'Gitzo', model: 'G504 Tele Studex + G526 Geared Column' },
    { make: 'Gitzo', model: 'R No. 2 Head' },
    { make: 'Gitzo', model: 'GH3382QD Ball Head' },
    { make: 'Gitzo', model: 'G1372 Panoramic 3-Way Head' },
    { make: 'Manfroto', model: 'Magic Arm Variable Friction' },
    { make: 'Manfrotto', model: 'Camera Bracket for Magic Arm' },
    { make: 'Kupo', model: 'Rolling Monitor Stand + Pumpkin Weight' },
    { make: 'TetherTools', model: 'Rolling Monitor Stand + Pumpkin Weight' },
    { make: 'Freeky Fit', model: 'Hydraulic Rolling Stool, 400lb, 360° Swivel' },
    { make: 'Matthews', model: '4x4 Floppy Cutter – Top Hinge' },
    { make: 'Matthews', model: '40" C-Stand with Turtle Base & Grip Arm' },
    { make: 'Matthews', model: '20" Hollywood C-Stand with Grip Arm' },
    { make: 'Profoto', model: 'B1 500 AirTTL Flash' },
    { make: 'Profoto', model: 'Li-Ion Battery for B1 / B1X' },
    { make: 'Profoto', model: 'Air Remote TTL-C for Canon' },
    { make: 'Profoto', model: 'Air Remote TTL-C for Nikon' },
    { make: 'Robocup', model: 'Drinks Caddy' },
    { make: 'DemerBox', model: 'DB2 Rugged IP67 Bluetooth Speaker' },
    { make: 'Outin', model: 'Nano Portable Espresso Machine 7500mAh' },
    { make: 'Makita', model: 'CM501D Coffee Maker' },
    { make: 'Makita', model: 'DUB185 Air Blower' },
    { make: 'Vevor', model: 'Beach Dolly with 12" Balloon Wheels' },
    { make: 'Tipke', model: 'Fold-It Aluminum Utility Cart' },
  ];

  return (
    <main className="bg-[#080808] min-h-screen text-white pt-32 md:pt-40 px-6 md:px-12 pb-20">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="mb-20 md:mb-32">
          <h1 className="text-[clamp(3rem,8vw,8rem)] font-black uppercase leading-[0.85] tracking-tighter mb-8">
            Equipment &<br/>Workflow<br/>Engineering
          </h1>

          <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-white/80">
            <p>
              BullTech maintains a curated inventory of high-end digital equipment, including capture workstations, carts, monitors,
              lighting accessories, underwater systems, and backup architectures.
            </p>
            <p>
              Every item is maintained, tested, and configured in-house to meet professional standards—ensuring reliability on
              demanding sets where downtime is not an option.
            </p>
            <p className="font-medium text-white">
              Because we oversee both the operation and the gear, our clients benefit from:
            </p>

            <ul className="space-y-3 ml-6 list-disc">
              <li>Seamless integration</li>
              <li>Faster setups</li>
              <li>Fewer technical complications</li>
              <li>Consistent color and file integrity</li>
            </ul>
          </div>
        </div>

        {/* Section 1: Digital Capture Packages */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Digital Capture<br/>Packages
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { key: 'locations', label: 'LOCATIONS' },
              { key: 'studio', label: 'STUDIO' },
              { key: 'additional', label: 'Additional Services' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => { setActiveTab(tab.key as typeof activeTab); setExpandedPackage([]); }}
                className={`px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.key
                    ? 'bg-bulltech-pink text-black'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* STUDIO Tab Content */}
          {activeTab === 'studio' && (
            <div className="space-y-4">
              {studioPackages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 border-l-4 border-l-bulltech-pink rounded-2xl overflow-hidden transition-all duration-300"
                >
                  {/* Collapsed Header - Always Visible */}
                  <button
                    onClick={() => togglePackage(pkg.name)}
                    className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-6">
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <PackageImage name={pkg.name} defaultImage={pkg.image} />
                      </div>
                      <div className="text-left">
                        <h4 className="text-2xl md:text-3xl font-black italic text-bulltech-pink tracking-wide">
                          {pkg.name}
                        </h4>
                        <p className="text-sm text-white/50">DIGITAL TECHNICIAN - 10 HOURS</p>
                      </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${expandedPackage.includes(pkg.name) ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {expandedPackage.includes(pkg.name) && (
                    <div className="px-6 pb-6 pt-2 border-t border-white/10">
                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-full md:w-1/3 flex justify-center">
                          <div className="relative w-[250px] h-[250px]">
                            <PackageImage name={pkg.name} defaultImage={pkg.image} />
                          </div>
                        </div>
                        <div className="w-full md:w-2/3">
                          <p className="text-sm uppercase tracking-widest text-white/50 mb-4">Includes:</p>
                          <ol className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                            {pkg.includes.map((item, i) => (
                              <li key={i} className="flex gap-3 text-white/80">
                                <span className="text-bulltech-pink font-mono text-sm">{i + 1}</span>
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* LOCATIONS Tab Content */}
          {activeTab === 'locations' && (
            <div className="space-y-4">
              {locationPackages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 border-l-4 border-l-bulltech-pink rounded-2xl overflow-hidden transition-all duration-300"
                >
                  {/* Collapsed Header - Always Visible */}
                  <button
                    onClick={() => togglePackage(pkg.name)}
                    className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-6">
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <PackageImage name={pkg.name} defaultImage={pkg.image} />
                      </div>
                      <div className="text-left">
                        <h4 className="text-2xl md:text-3xl font-black italic text-bulltech-pink tracking-wide">
                          {pkg.name}
                        </h4>
                        <p className="text-sm text-white/50">DIGITAL TECHNICIAN - 10 HOURS</p>
                      </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${expandedPackage.includes(pkg.name) ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {expandedPackage.includes(pkg.name) && (
                    <div className="px-6 pb-6 pt-2 border-t border-white/10">
                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-full md:w-1/3 flex justify-center">
                          <div className="relative w-[250px] h-[250px]">
                            <PackageImage name={pkg.name} defaultImage={pkg.image} />
                          </div>
                        </div>
                        <div className="w-full md:w-2/3">
                          <p className="text-sm uppercase tracking-widest text-white/50 mb-4">Includes:</p>
                          <ol className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                            {pkg.includes.map((item, i) => (
                              <li key={i} className="flex gap-3 text-white/80">
                                <span className="text-bulltech-pink font-mono text-sm">{i + 1}</span>
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ADDITIONAL SERVICES Tab Content */}
          {activeTab === 'additional' && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
              <ul className="grid md:grid-cols-2 gap-x-12 gap-y-3 mb-8">
                {[
                  'File retention',
                  'Post processing',
                  'Color treatment',
                  'Photo retouching',
                  'BTS',
                  'CAMERA B',
                  'OTS',
                  'REMOTE SHOOTING',
                  'Multiple TECH TEAMS Coordination',
                  'Custom WORKFLOWS FOR: Agencies & Production Co.',
                  'CAMERA READY PRE-PRO',
                  'Asset MANAGEMENT & Line of custody',
                  'WORKFLOWS CONSULTATION',
                  'Under Water Productions',
                ].map((service, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <span className="text-bulltech-pink mt-1">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <p className="text-white/60 italic border-t border-white/10 pt-6">
                Please ask us about our additional services, we are here to make your production a success.
              </p>
            </div>
          )}

        </section>

        {/* Section 2: Digital Equipment List */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Digital<br/>Equipment List
            </h2>
          </div>

          <p className="text-white/80 mb-12 leading-relaxed max-w-3xl">
            Our comprehensive inventory of digital equipment for on-set and post-production workflows.
          </p>

          {/* Equipment Categories List */}
          <div className="space-y-4 mb-12">
            {/* WORKSTATIONS Dropdown */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 border-l-4 border-l-bulltech-pink rounded-2xl overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleEquipment('WORKSTATIONS')}
                className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <h4 className="text-2xl md:text-4xl font-black italic text-bulltech-pink tracking-wide uppercase">
                    WORKSTATIONS
                  </h4>
                </div>
                <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${expandedEquipment.includes('WORKSTATIONS') ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {expandedEquipment.includes('WORKSTATIONS') && (
                <div className="px-6 pb-8 pt-2 border-t border-white/10 space-y-8">
                  {/* HEAVY CARTS TABLE */}
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                      HEAVY ON WHEEL CARTS
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm md:text-base border-collapse">
                        <thead>
                          <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                            <th className="py-2 px-2">Model</th>
                            <th className="py-2 px-2">Size</th>
                            <th className="py-2 px-2">Specifications</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          {workstationData.heavyCarts.map((item, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                              <td className="py-3 px-2 font-medium">{item.model}</td>
                              <td className="py-3 px-2 text-white/70">{item.size}</td>
                              <td className="py-3 px-2 text-white/70">{item.specs}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* PORTABLE TABLE */}
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                      PORTABLE (ON STICKS / ROLLERS)
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm md:text-base border-collapse">
                        <thead>
                          <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                            <th className="py-2 px-2 w-1/3">Make</th>
                            <th className="py-2 px-2 w-2/3">Model</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          {workstationData.portable.map((item, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                              <td className="py-3 px-2 font-medium">{item.make}</td>
                              <td className="py-3 px-2 text-white/70">{item.model}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* ACCESSORIES TABLE */}
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                      WORKSTATION ACCESSORIES
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm md:text-base border-collapse">
                        <thead>
                          <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                            <th className="py-2 px-2 w-1/3">Make</th>
                            <th className="py-2 px-2 w-2/3">Model</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          {workstationData.accessories.map((item, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                              <td className="py-3 px-2 font-medium">{item.make}</td>
                              <td className="py-3 px-2 text-white/70">{item.model}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* MONITORS Dropdown */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 border-l-4 border-l-bulltech-pink rounded-2xl overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleEquipment('MONITORS')}
                className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <h4 className="text-2xl md:text-4xl font-black italic text-bulltech-pink tracking-wide uppercase">
                    MONITORS
                  </h4>
                </div>
                <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${expandedEquipment.includes('MONITORS') ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {expandedEquipment.includes('MONITORS') && (
                <div className="px-6 pb-8 pt-2 border-t border-white/10 space-y-8">
                  {/* EIZO MONITORS TABLE */}
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                      EIZO MONITORS
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm md:text-base border-collapse">
                        <thead>
                          <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                            <th className="py-2 px-2">Model</th>
                            <th className="py-2 px-2">Size</th>
                            <th className="py-2 px-2">Specifications</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          {monitorData.eizo.map((item, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                              <td className="py-3 px-2 font-medium">{item.model}</td>
                              <td className="py-3 px-2 text-white/70">{item.size}</td>
                              <td className="py-3 px-2 text-white/70">{item.specs}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* NEC MONITORS TABLE */}
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                      NEC MONITORS
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm md:text-base border-collapse">
                        <thead>
                          <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                            <th className="py-2 px-2">Model</th>
                            <th className="py-2 px-2">Size</th>
                            <th className="py-2 px-2">Specifications</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          {monitorData.nec.map((item, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                              <td className="py-3 px-2 font-medium">{item.model}</td>
                              <td className="py-3 px-2 text-white/70">{item.size}</td>
                              <td className="py-3 px-2 text-white/70">{item.specs}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* APPLE MONITORS TABLE */}
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                      APPLE MONITORS
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm md:text-base border-collapse">
                        <thead>
                          <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                            <th className="py-2 px-2">Model</th>
                            <th className="py-2 px-2">Size</th>
                            <th className="py-2 px-2">Specifications</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          {monitorData.apple.map((item, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                              <td className="py-3 px-2 font-medium">{item.model}</td>
                              <td className="py-3 px-2 text-white/70">{item.size}</td>
                              <td className="py-3 px-2 text-white/70">{item.specs}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* LG MONITORS TABLE */}
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                      LG MONITORS
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm md:text-base border-collapse">
                        <thead>
                          <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                            <th className="py-2 px-2">Model</th>
                            <th className="py-2 px-2">Size</th>
                            <th className="py-2 px-2">Specifications</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          {monitorData.lg.map((item, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                              <td className="py-3 px-2 font-medium">{item.model}</td>
                              <td className="py-3 px-2 text-white/70">{item.size}</td>
                              <td className="py-3 px-2 text-white/70">{item.specs}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* ACCESSORIES TABLE */}
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                      ACCESSORIES
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm md:text-base border-collapse">
                        <thead>
                          <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                            <th className="py-2 px-2 w-1/3">Make</th>
                            <th className="py-2 px-2 w-2/3">Accessory</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          {monitorData.accessories.map((item, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                              <td className="py-3 px-2 font-medium">{item.make}</td>
                              <td className="py-3 px-2 text-white/70">{item.accessory}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* WIRELESS Dropdown */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 border-l-4 border-l-bulltech-pink rounded-2xl overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleEquipment('WIRELESS')}
                className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <h4 className="text-2xl md:text-4xl font-black italic text-bulltech-pink tracking-wide uppercase">
                    WIRELESS
                  </h4>
                </div>
                <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${expandedEquipment.includes('WIRELESS') ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {expandedEquipment.includes('WIRELESS') && (
                <div className="px-6 pb-8 pt-2 border-t border-white/10 space-y-8">
                  {/* TERADEK TABLE */}
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                      TERADEK – WIRELESS TRANSMITTERS
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm md:text-base border-collapse">
                        <thead>
                          <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                            <th className="py-2 px-2 w-1/3">Model</th>
                            <th className="py-2 px-2 w-2/3">Specifications</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          {wirelessData.teradek.map((item, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                              <td className="py-3 px-2 font-medium">{item.model}</td>
                              <td className="py-3 px-2 text-white/70">{item.specs}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* HOLLYLAND VIDEO TABLE */}
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                      HOLLYLAND – WIRELESS VIDEO
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm md:text-base border-collapse">
                        <thead>
                          <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                            <th className="py-2 px-2 w-1/3">Model</th>
                            <th className="py-2 px-2 w-2/3">Specifications</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          {wirelessData.hollylandVideo.map((item, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                              <td className="py-3 px-2 font-medium">{item.model}</td>
                              <td className="py-3 px-2 text-white/70">{item.specs}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* HOLLYLAND AUDIO TABLE */}
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                      HOLLYLAND – WIRELESS AUDIO
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm md:text-base border-collapse">
                        <thead>
                          <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                            <th className="py-2 px-2 w-1/3">Model</th>
                            <th className="py-2 px-2 w-2/3">Specifications</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          {wirelessData.hollylandAudio.map((item, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                              <td className="py-3 px-2 font-medium">{item.model}</td>
                              <td className="py-3 px-2 text-white/70">{item.specs}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* WIFI SYSTEMS TABLE */}
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                      WIFI SYSTEMS
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm md:text-base border-collapse">
                        <thead>
                          <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                            <th className="py-2 px-2 w-1/3">Model</th>
                            <th className="py-2 px-2 w-2/3">Specifications</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          {wirelessData.wifi.map((item, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                              <td className="py-3 px-2 font-medium">{item.model}</td>
                              <td className="py-3 px-2 text-white/70">{item.specs}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* STARLINK TABLE */}
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                      STARLINK SATELLITE INTERNET
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm md:text-base border-collapse">
                        <thead>
                          <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                            <th className="py-2 px-2 w-1/3">Component</th>
                            <th className="py-2 px-2 w-2/3">Specifications</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          {wirelessData.starlink.map((item, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                              <td className="py-3 px-2 font-medium">{item.component}</td>
                              <td className="py-3 px-2 text-white/70">{item.specs}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* BATTERIES Dropdown */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 border-l-4 border-l-bulltech-pink rounded-2xl overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleEquipment('BATTERIES')}
                className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <h4 className="text-2xl md:text-4xl font-black italic text-bulltech-pink tracking-wide uppercase">
                    BATTERIES
                  </h4>
                </div>
                <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${expandedEquipment.includes('BATTERIES') ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {expandedEquipment.includes('BATTERIES') && (
                <div className="px-6 pb-8 pt-2 border-t border-white/10 space-y-8">
                  {/* ECOFLOW TABLE */}
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                      MOBILE ECOFLOW POWER STATIONS
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm md:text-base border-collapse">
                        <thead>
                          <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                            <th className="py-2 px-2 w-1/3">Model</th>
                            <th className="py-2 px-2 w-2/3">Specifications</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          {batteriesData.ecoflow.map((item, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                              <td className="py-3 px-2 font-medium">{item.model}</td>
                              <td className="py-3 px-2 text-white/70">{item.specs}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* POWER BANKS TABLE */}
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                      MOBILE BATTERY POWER BANK UNITS
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm md:text-base border-collapse">
                        <thead>
                          <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                            <th className="py-2 px-2 w-1/3">Make</th>
                            <th className="py-2 px-2 w-2/3">Model</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          {batteriesData.powerBanks.map((item, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                              <td className="py-3 px-2 font-medium">{item.make}</td>
                              <td className="py-3 px-2 text-white/70">{item.model}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* AIR CONDITIONING TABLE */}
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                      MOBILE AIR CONDITIONING
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm md:text-base border-collapse">
                        <thead>
                          <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                            <th className="py-2 px-2 w-1/3">Make</th>
                            <th className="py-2 px-2 w-2/3">Model</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          {batteriesData.airConditioning.map((item, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                              <td className="py-3 px-2 font-medium">{item.make}</td>
                              <td className="py-3 px-2 text-white/70">{item.model}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </section>

        {/* Section 3: Photo Equipment List */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Photo<br/>Equipment List
            </h2>
          </div>

          <p className="text-white/80 mb-12 leading-relaxed max-w-3xl">
            Professional photography equipment including cameras and underwater systems.
          </p>

          {/* Photo Tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { key: 'camera', label: 'CAMERA SYSTEMS' },
              { key: 'underwater', label: 'UNDERWATER HOUSING' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActivePhotoTab(tab.key as typeof activePhotoTab)}
                className={`px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  activePhotoTab === tab.key
                    ? 'bg-bulltech-pink text-black'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-4">
            {activePhotoTab === 'camera' && (
              <div className="space-y-4">
                  {/* NIKON Dropdown */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 border-l-4 border-l-bulltech-pink rounded-2xl overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => toggleCameraSystem('NIKON')}
                      className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-6">
                        <h4 className="text-2xl md:text-4xl font-black italic text-bulltech-pink tracking-wide uppercase">
                          NIKON
                        </h4>
                      </div>
                      <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${expandedCameraSystem.includes('NIKON') ? 'rotate-180' : ''}`}>
                        <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    {expandedCameraSystem.includes('NIKON') && (
                      <div className="px-6 pb-8 pt-2 border-t border-white/10 space-y-8">
                        {/* CAMERA SYSTEMS TABLE */}
                        <div>
                          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                            CAMERA SYSTEMS
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm md:text-base border-collapse">
                              <thead>
                                <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                                  <th className="py-2 px-2 w-1/4">Model</th>
                                  <th className="py-2 px-2 w-1/4">Mount</th>
                                  <th className="py-2 px-2 w-1/2">Specifications</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {nikonData.systems.map((item, i) => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 font-medium">{item.model}</td>
                                    <td className="py-3 px-2 text-white/70">{item.mount}</td>
                                    <td className="py-3 px-2 text-white/70">{item.specs}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* PRIMES F/AF-S TABLE */}
                        <div>
                          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                            LENSES – F / AF-S MOUNT (PRIMES)
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm md:text-base border-collapse">
                              <thead>
                                <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                                  <th className="py-2 px-2 w-1/3">Mount</th>
                                  <th className="py-2 px-2 w-2/3">Primes</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {nikonData.primesFAFS.map((item, i) => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 font-medium">{item.mount}</td>
                                    <td className="py-3 px-2 text-white/70">{item.prime}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* ZOOMS F/AF-S TABLE */}
                        <div>
                          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                            LENSES – F / AF-S MOUNT (ZOOMS)
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm md:text-base border-collapse">
                              <thead>
                                <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                                  <th className="py-2 px-2 w-1/3">Mount</th>
                                  <th className="py-2 px-2 w-2/3">Zooms</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {nikonData.zoomsFAFS.map((item, i) => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 font-medium">{item.mount}</td>
                                    <td className="py-3 px-2 text-white/70">{item.zoom}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                        
                        {/* PRIMES Z TABLE */}
                        <div>
                          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                            LENSES – Z MOUNT (PRIMES)
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm md:text-base border-collapse">
                              <thead>
                                <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                                  <th className="py-2 px-2 w-1/3">Mount</th>
                                  <th className="py-2 px-2 w-2/3">Primes</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {nikonData.primesZ.map((item, i) => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 font-medium">{item.mount}</td>
                                    <td className="py-3 px-2 text-white/70">{item.prime}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* ZOOMS Z TABLE */}
                        <div>
                          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                            LENSES – Z MOUNT (ZOOMS)
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm md:text-base border-collapse">
                              <thead>
                                <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                                  <th className="py-2 px-2 w-1/3">Mount</th>
                                  <th className="py-2 px-2 w-2/3">Zooms</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {nikonData.zoomsZ.map((item, i) => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 font-medium">{item.mount}</td>
                                    <td className="py-3 px-2 text-white/70">{item.zoom}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* ACCESSORIES TABLE */}
                        <div>
                          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                            ACCESSORIES
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm md:text-base border-collapse">
                              <thead>
                                <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                                  <th className="py-2 px-2 w-1/3">System</th>
                                  <th className="py-2 px-2 w-2/3">Accessory</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {nikonData.accessories.map((item, i) => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 font-medium">{item.system}</td>
                                    <td className="py-3 px-2 text-white/70">{item.accessory}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CANON Dropdown */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 border-l-4 border-l-bulltech-pink rounded-2xl overflow-hidden transition-all duration-300 mt-4">
                    <button
                      onClick={() => toggleCameraSystem('CANON')}
                      className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-6">
                        <h4 className="text-2xl md:text-4xl font-black italic text-bulltech-pink tracking-wide uppercase">
                          CANON
                        </h4>
                      </div>
                      <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${expandedCameraSystem.includes('CANON') ? 'rotate-180' : ''}`}>
                        <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    {expandedCameraSystem.includes('CANON') && (
                      <div className="px-6 pb-8 pt-2 border-t border-white/10 space-y-8">
                        {/* CAMERA SYSTEMS TABLE */}
                        <div>
                          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                            CAMERA SYSTEMS
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm md:text-base border-collapse">
                              <thead>
                                <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                                  <th className="py-2 px-2 w-1/4">Model</th>
                                  <th className="py-2 px-2 w-1/4">Mount</th>
                                  <th className="py-2 px-2 w-1/2">Specifications</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {canonData.systems.map((item, i) => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 font-medium">{item.model}</td>
                                    <td className="py-3 px-2 text-white/70">{item.mount}</td>
                                    <td className="py-3 px-2 text-white/70">{item.specs}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* PRIMES TABLE */}
                        <div>
                          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                            LENSES – PRIMES RF MOUNT
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm md:text-base border-collapse">
                              <thead>
                                <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                                  <th className="py-2 px-2 w-1/3">Mount</th>
                                  <th className="py-2 px-2 w-2/3">Primes</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {canonData.primes.map((item, i) => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 font-medium">{item.mount}</td>
                                    <td className="py-3 px-2 text-white/70">{item.prime}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* ZOOMS TABLE */}
                        <div>
                          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                            LENSES — ZOOMS RF MOUNT
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm md:text-base border-collapse">
                              <thead>
                                <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                                  <th className="py-2 px-2 w-1/3">Mount</th>
                                  <th className="py-2 px-2 w-2/3">Zooms</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {canonData.zooms.map((item, i) => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 font-medium">{item.mount}</td>
                                    <td className="py-3 px-2 text-white/70">{item.zoom}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* ACCESSORIES TABLE */}
                        <div>
                          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                            ACCESSORIES
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm md:text-base border-collapse">
                              <thead>
                                <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                                  <th className="py-2 px-2 w-1/3">System</th>
                                  <th className="py-2 px-2 w-2/3">Accessory</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {canonData.accessories.map((item, i) => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 font-medium">{item.system}</td>
                                    <td className="py-3 px-2 text-white/70">{item.accessory}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* FUJIFILM Dropdown */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 border-l-4 border-l-bulltech-pink rounded-2xl overflow-hidden transition-all duration-300 mt-4">
                    <button
                      onClick={() => toggleCameraSystem('FUJIFILM')}
                      className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-6">
                        <h4 className="text-2xl md:text-4xl font-black italic text-bulltech-pink tracking-wide uppercase">
                          FUJIFILM
                        </h4>
                      </div>
                      <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${expandedCameraSystem.includes('FUJIFILM') ? 'rotate-180' : ''}`}>
                        <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    {expandedCameraSystem.includes('FUJIFILM') && (
                      <div className="px-6 pb-8 pt-2 border-t border-white/10 space-y-8">
                        {/* CAMERA SYSTEMS TABLE */}
                        <div>
                          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                            CAMERA SYSTEMS
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm md:text-base border-collapse">
                              <thead>
                                <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                                  <th className="py-2 px-2 w-1/4">Model</th>
                                  <th className="py-2 px-2 w-1/4">Mount</th>
                                  <th className="py-2 px-2 w-1/2">Specifications</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {fujifilmData.systems.map((item, i) => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 font-medium">{item.model}</td>
                                    <td className="py-3 px-2 text-white/70">{item.mount}</td>
                                    <td className="py-3 px-2 text-white/70">{item.specs}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* PRIMES GF TABLE */}
                        <div>
                          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                            LENSES – GF MOUNT (PRIMES)
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm md:text-base border-collapse">
                              <thead>
                                <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                                  <th className="py-2 px-2 w-1/3">Mount</th>
                                  <th className="py-2 px-2 w-2/3">Primes</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {fujifilmData.primesGF.map((item, i) => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 font-medium">{item.mount}</td>
                                    <td className="py-3 px-2 text-white/70">{item.prime}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* ZOOMS GF TABLE */}
                        <div>
                          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                            LENSES – GF MOUNT (ZOOMS)
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm md:text-base border-collapse">
                              <thead>
                                <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                                  <th className="py-2 px-2 w-1/3">Mount</th>
                                  <th className="py-2 px-2 w-2/3">Zooms</th>
                                  </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {fujifilmData.zoomsGF.map((item, i) => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 font-medium">{item.mount}</td>
                                    <td className="py-3 px-2 text-white/70">{item.zoom}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* ACCESSORIES TABLE */}
                        <div>
                          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                            ACCESSORIES
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm md:text-base border-collapse">
                              <thead>
                                <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                                  <th className="py-2 px-2 w-1/3">System</th>
                                  <th className="py-2 px-2 w-2/3">Accessory</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {fujifilmData.accessories.map((item, i) => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 font-medium">{item.system}</td>
                                    <td className="py-3 px-2 text-white/70">{item.accessory}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* PHASE ONE Dropdown */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 border-l-4 border-l-bulltech-pink rounded-2xl overflow-hidden transition-all duration-300 mt-4">
                    <button
                      onClick={() => toggleCameraSystem('PHASE ONE')}
                      className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-6">
                        <h4 className="text-2xl md:text-4xl font-black italic text-bulltech-pink tracking-wide uppercase">
                          PHASE ONE
                        </h4>
                      </div>
                      <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${expandedCameraSystem.includes('PHASE ONE') ? 'rotate-180' : ''}`}>
                        <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    {expandedCameraSystem.includes('PHASE ONE') && (
                      <div className="px-6 pb-8 pt-2 border-t border-white/10 space-y-8">
                        {/* DIGITAL BACKS TABLE */}
                        <div>
                          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                            DIGITAL BACKS
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm md:text-base border-collapse">
                              <thead>
                                <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                                  <th className="py-2 px-2 w-1/4">Model</th>
                                  <th className="py-2 px-2 w-1/4">Mount</th>
                                  <th className="py-2 px-2 w-1/2">Specifications</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {phaseOneData.digitalBacks.map((item, i) => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 font-medium">{item.model}</td>
                                    <td className="py-3 px-2 text-white/70">{item.mount}</td>
                                    <td className="py-3 px-2 text-white/70">{item.specs}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* CAMERA BODY TABLE */}
                        <div>
                          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                            CAMERA BODY
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm md:text-base border-collapse">
                              <thead>
                                <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                                  <th className="py-2 px-2 w-1/4">Model</th>
                                  <th className="py-2 px-2 w-1/4">Brand</th>
                                  <th className="py-2 px-2 w-1/2">Specifications</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {phaseOneData.cameraBody.map((item, i) => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 font-medium">{item.model}</td>
                                    <td className="py-3 px-2 text-white/70">{item.brand}</td>
                                    <td className="py-3 px-2 text-white/70">{item.specs}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* PRIMES TABLE */}
                        <div>
                          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                            LENSES
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm md:text-base border-collapse">
                              <thead>
                                <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                                  <th className="py-2 px-2 w-1/3">Mount</th>
                                  <th className="py-2 px-2 w-2/3">Primes</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {phaseOneData.primes.map((item, i) => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 font-medium">{item.mount}</td>
                                    <td className="py-3 px-2 text-white/70">{item.prime}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* ACCESSORIES TABLE */}
                        <div>
                          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                            ACCESSORIES
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm md:text-base border-collapse">
                              <thead>
                                <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                                  <th className="py-2 px-2 w-1/3">System</th>
                                  <th className="py-2 px-2 w-2/3">Accessory</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {phaseOneData.accessories.map((item, i) => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 font-medium">{item.system}</td>
                                    <td className="py-3 px-2 text-white/70">{item.accessory}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* HASSELBLAD Dropdown */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 border-l-4 border-l-bulltech-pink rounded-2xl overflow-hidden transition-all duration-300 mt-4">
                    <button
                      onClick={() => toggleCameraSystem('HASSELBLAD')}
                      className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-6">
                        <h4 className="text-2xl md:text-4xl font-black italic text-bulltech-pink tracking-wide uppercase">
                          HASSELBLAD
                        </h4>
                      </div>
                      <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${expandedCameraSystem.includes('HASSELBLAD') ? 'rotate-180' : ''}`}>
                        <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    {expandedCameraSystem.includes('HASSELBLAD') && (
                      <div className="px-6 pb-8 pt-2 border-t border-white/10 space-y-8">
                        {/* CAMERA SYSTEMS TABLE */}
                        <div>
                          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                            CAMERA SYSTEMS
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm md:text-base border-collapse">
                              <thead>
                                <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                                  <th className="py-2 px-2 w-1/4">Model</th>
                                  <th className="py-2 px-2 w-1/4">Mount</th>
                                  <th className="py-2 px-2 w-1/2">Specifications</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {hasselbladData.systems.map((item, i) => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 font-medium">{item.model}</td>
                                    <td className="py-3 px-2 text-white/70">{item.mount}</td>
                                    <td className="py-3 px-2 text-white/70">{item.specs}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* PRIMES HC/HCD TABLE */}
                        <div>
                          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                            LENSES – HC/HCD PRIMES
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm md:text-base border-collapse">
                              <thead>
                                <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                                  <th className="py-2 px-2 w-1/3">Mount</th>
                                  <th className="py-2 px-2 w-2/3">Primes</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {hasselbladData.primesHCHCD.map((item, i) => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 font-medium">{item.mount}</td>
                                    <td className="py-3 px-2 text-white/70">{item.prime}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* ZOOMS HC/HCD TABLE */}
                        <div>
                          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                            LENSES – HC/HCD ZOOMS
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm md:text-base border-collapse">
                              <thead>
                                <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                                  <th className="py-2 px-2 w-1/3">Mount</th>
                                  <th className="py-2 px-2 w-2/3">Zooms</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {hasselbladData.zoomsHCHCD.map((item, i) => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 font-medium">{item.mount}</td>
                                    <td className="py-3 px-2 text-white/70">{item.zoom}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* ACCESSORIES TABLE */}
                        <div>
                          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-bulltech-pink">
                            ACCESSORIES
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm md:text-base border-collapse">
                              <thead>
                                <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                                  <th className="py-2 px-2 w-1/3">System</th>
                                  <th className="py-2 px-2 w-2/3">Accessory</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/10">
                                {hasselbladData.accessories.map((item, i) => (
                                  <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-2 font-medium">{item.system}</td>
                                    <td className="py-3 px-2 text-white/70">{item.accessory}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activePhotoTab === 'underwater' && (
                <div className="w-full py-24 border border-white/10 rounded-2xl bg-white/5 flex flex-col items-center justify-center space-y-6">
                   <h3 className="text-3xl md:text-5xl font-black italic tracking-tighter text-white/40">
                     COMING SOON
                   </h3>
                   <div className="flex space-x-2">
                     <div className="w-3 h-3 bg-bulltech-pink rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                     <div className="w-3 h-3 bg-bulltech-pink rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                     <div className="w-3 h-3 bg-bulltech-pink rounded-full animate-bounce"></div>
                   </div>
                </div>
              )}
          </div>
        </section>

        {/* Section 4: Essentials List */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Essentials<br/>List
            </h2>
          </div>

          <p className="text-white/80 mb-12 leading-relaxed max-w-3xl">
              Essential accessories and support equipment for every production.
            </p>

            {/* Essentials Dropdown */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 border-l-4 border-l-bulltech-pink rounded-2xl overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggleEquipment('ESSENTIALS')}
                className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <h4 className="text-2xl md:text-4xl font-black italic text-bulltech-pink tracking-wide uppercase">
                    ESSENTIALS FOR LOCATION & STUDIO
                  </h4>
                </div>
                <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${expandedEquipment.includes('ESSENTIALS') ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {expandedEquipment.includes('ESSENTIALS') && (
                <div className="px-6 pb-8 pt-2 border-t border-white/10">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm md:text-base border-collapse">
                      <thead>
                        <tr className="border-b border-white/20 text-white/50 text-xs uppercase tracking-wider">
                          <th className="py-2 px-2 w-1/4">Make</th>
                          <th className="py-2 px-2 w-3/4">Model</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {essentialsData.map((item, i) => (
                          <tr key={i} className="hover:bg-white/5 transition-colors">
                            <td className="py-3 px-2 font-medium">{item.make}</td>
                            <td className="py-3 px-2 text-white/70">{item.model}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10 mt-8">
              <p className="text-white/60 italic">
                Complete essentials list and availability can be customized based on your production requirements.
              </p>
            </div>
        </section>

        {/* Custom Sourcing Note */}
        <div className="mb-24 md:mb-32">
          {customSourcingNote}
        </div>


      </div>
    </main>
  );
}
