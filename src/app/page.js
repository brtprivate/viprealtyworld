
'use client'
import Hero from '../components/Hero';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import Offer from '../components/Home/Offer';
import Construction from '../components/Home/Construction';
import Interiors from '../components/Home/Interiors';
import Works from '../components/Home/Works';
import People from '../components/Home/People';
import Contact from '../components/Home/Contact';

import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <title>VIP Realty - Your Dream Property Awaits in Greater Noida</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="VIP Realty - Your trusted real estate partner for Residential, Commercial, Plots, Luxury Homes & Rentals in Greater Noida. Building Trust, One Property at a Time." />
      </Head>
      <div className="min-h-screen">
        <div className="animate-fade-in">
          <Hero />
        </div>
        <div className="animate-slide-up">
          <About />
        </div>
        <div className="animate-scale-in">
          <Services />
        </div>
        <div className="animate-fade-in">
          <Offer />
        </div>
        <div className="animate-slide-up">
          <Construction />
        </div>
        <div className="animate-scale-in">
          <Interiors />
        </div>
        <div className="animate-fade-in">
          <Works />
        </div>
        <div className="animate-slide-up">
          <People />
        </div>
        <div className="animate-scale-in">
          <Contact />
        </div>
      </div>
      <style jsx global>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          0% {
            transform: scale(0.95);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out;
        }
      `}</style>
    </>
  );
}