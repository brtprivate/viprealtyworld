
'use client'
import Hero from '../components/Hero';
import Services from '../components/Home/Services';
import Offer from '../components/Home/Offer';
import Works from '../components/Home/Works';
import People from '../components/Home/People';
import Agents from '@/components/Home/Agents';
import Blog from '@/components/Home/Blog';
import Clients from '@/components/Home/Clinets';

import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamic imports for better performance
// const Hero = dynamic(() => import('../components/Hero'), { ssr: true });
// const Services = dynamic(() => import('../components/Home/Services'), { ssr: true });
// const Offer = dynamic(() => import('../components/Home/Offer'), { ssr: true });
// const Works = dynamic(() => import('../components/Home/Works'), { ssr: true });
// const People = dynamic(() => import('../components/Home/People'), { ssr: true });
// const Clients = dynamic(() => import('../components/Home/Clients'), { ssr: true });
// const Agents = dynamic(() => import('../components/Home/Agents'), { ssr: true });
// const Blog = dynamic(() => import('../components/Home/Blog'), { ssr: true });

export default function Home() {
  return (
    <>
      <Head>
        <title>Animated Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A Next.js portfolio with smooth animations" />
      </Head>
      <div className="min-h-screen">
        <div className="animate-fade-in">
          <Hero />
        </div>
        <div className="animate-slide-up">
          <Services />
        </div>
        <div className="animate-scale-in">
          <Offer />
        </div>
        <div className="animate-fade-in">
          <Works />
        </div>
        <div className="animate-slide-up">
          <People />
        </div>
        <div className="animate-scale-in">
          <Clients />
        </div>
        <div className="animate-fade-in">
          <Agents />
        </div>
        <div className="animate-slide-up">
          <Blog />
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