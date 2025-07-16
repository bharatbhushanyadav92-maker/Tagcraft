
'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TagGenerator from '../components/TagGenerator';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TagGenerator />
      <Features />
      <Footer />
    </div>
  );
}
