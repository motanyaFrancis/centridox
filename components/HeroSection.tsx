'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [, setButtonColor] = useState<string>('#ffffff'); 
  const [, setTextColor] = useState<string>('#1e3a8a'); 

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    video.playbackRate = 0.5;
    const ctx = canvas.getContext('2d');

    const extractColor = () => {
      if (!ctx) return;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = frame.data;

      let r = 0, g = 0, b = 0;
      const pixelCount = data.length / 4;

      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
      }

      r = Math.floor(r / pixelCount);
      g = Math.floor(g / pixelCount);
      b = Math.floor(b / pixelCount);

      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

      setButtonColor(`rgb(${r},${g},${b})`);
      setTextColor(luminance > 150 ? '#1e3a8a' : '#ffffff');
    };

    const handleLoaded = () => {
      extractColor(); // run once after load
      const interval = setInterval(extractColor, 2000);
      return () => clearInterval(interval);
    };

    video.addEventListener('loadeddata', handleLoaded);

    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
    };
  }, []);

  return (
    <section className="relative text-white min-h-screen flex flex-col overflow-hidden">
      {/* Hidden Canvas for Frame Sampling */}
      <canvas ref={canvasRef} width={64} height={36} className="hidden" />

      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />


      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Hero Content */}
      <motion.div
        className="flex flex-1 items-center justify-center relative z-10"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center py-16">
          <div className="lg:w-2/5 text-center lg:text-left">
            <span className="w-20 h-1 bg-white inline-block mb-8" />
            <h1 className="text-2xl sm:text-4xl font-black leading-tight">
              
              <span className="block text-2xl sm:text-4xl max-xs:text-3xl text-white/90 font-normal">
                <span className='capitalize text-secondary-300 font-black '>Centridox: </span> Your All-in-One Digital Workspace
              </span>
            </h1>
            <p className="mt-4 text-white text-lg font-light">
              Manage emails, documents, tasks, and workflows – all from one intelligent cloud system.
            </p>

            {/* Dynamic Buttons */}
            <div className="flex justify-center lg:justify-start mt-10 space-x-4">
              <Link href="#" className="group relative inline-block font-semibold rounded-full overflow-hidden">
                <div
                  className="relative z-50 flex items-center py-4 px-6 rounded-full transition duration-200"
                  style={{ backgroundColor: '#1e3a8a', color: '#ffffff' }}
                >
                  <p className="mr-2">Try Centridox</p>
                </div>
              </Link>
              <Link href="#" className="max-sm:hidden group transition duration-900 relative inline-block font-semibold rounded-full overflow-hidden border-2 border-secondary-200 text-secondary-200 hover:bg-secondary-200 hover:text-primary-500">
                <div className="relative z-50 flex items-center py-3 px-5  transition duration-200">
                  <p className="mr-2 uppercase">Watch a Demo</p>
                </div>
              </Link>
              
            </div>
          </div>

          <div className="lg:w-3/5 mb-12 lg:mb-0 flex justify-center relative group" />
        </div>
      </motion.div>


      {/* Scroll Down Animation */}
      <div className="container arrowContainerP">
        <div className="arrowSection">
          <div className="arrowContainer slideDownDiv">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>


    </section>
  );
}
