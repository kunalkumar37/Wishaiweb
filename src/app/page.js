'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Code, Globe, Target, Layers, Rocket, Users } from 'lucide-react';
import { WavyBackground } from '@/components/ui/wavy-background';


const WishAILandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    // <WavyBackground className=" fixed max-w-4xl mx-auto pb-40">
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} flex flex-col`}>
      {/* Header */}
      
      <header className="px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">wish.ai</div>
        <nav>
          {/* <a href="#about" className="mx-4 hover:text-gray-500">About</a> */}
          <a href="#services" className="mx-4 hover:text-gray-500">Services</a>
          <a href="#contact" className={`mx-4 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} px-4 py-2 rounded-full hover:opacity-90`}>Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-16 space-y-16">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold">
              <Rocket className="inline mr-4" size={48} />
              Welcome to <a href="#">wish.ai</a>
            </h1>
            <p className="text-xl leading-relaxed">
              At wish.ai, we harness the power of artificial intelligence to turn your aspirations into achievements. Whether you're dreaming of personal growth, career advancement, or making a mark in the world, we're here to provide you with the tools and insights you need to succeed.
            </p>
          <button className={`px-8 py-3 rounded-full text-lg transition ${darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
            Join Us
          </button>
          </div>

          {/* AI-Generated Image Placeholder */}
          <div className="flex items-center justify-center">
            <Image 
              src="/ai-innovation.jpg" 
              alt="AI Innovation Visualization" 
              width={500} 
              height={500} 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
        {/* About Us Section */}
        <section id="about-us" className={`shadow-xl rounded-2xl p-12 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
          <p className="text-lg leading-relaxed text-center">
            Founded with the belief that everyone should have the opportunity to fulfill their dreams, wish.ai was created to bridge the gap between aspiration and reality. We combine cutting-edge AI technology with a passion for human potential to create a platform where dreams are not just wished for, but actively pursued.
          </p>
        </section>
        {/* Services Section */}
        <section id="services" className={`shadow-xl rounded-2xl p-12 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-4xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`rounded-lg p-6 text-center shadow-md ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <Code className="mx-auto mb-4" size={50} />
              <h3 className="font-bold text-xl mb-2">Personalized Dream Analysis</h3>
              <p>Use our AI to analyze your dreams and aspirations...</p>
            </div>
            <div className={`rounded-lg p-6 text-center shadow-md ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <Globe className="mx-auto mb-4" size={50} />
              <h3 className="font-bold text-xl mb-2">AI-Driven Planning</h3>
              <p>Get a step-by-step plan customized to your life's goals...</p>
            </div>
            <div className={`rounded-lg p-6 text-center shadow-md ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <Target className="mx-auto mb-4" size={50} />
              <h3 className="font-bold text-xl mb-2">Progress Tracking</h3>
              <p>Monitor your journey towards your dreams with analytics...</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`shadow-xl rounded-2xl p-12 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-4xl font-bold mb-8 text-center">Our Mission & Vision</h2>
          <p className="text-lg leading-relaxed text-center">
            At wish.ai, our mission is to empower individuals worldwide to achieve their dreams using AI to provide personalized guidance, planning, and progress tracking.
          </p>
        </section>

        {/* Investors Section */}
        <section id="investors" className={`shadow-xl rounded-2xl p-12 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className="text-4xl font-bold mb-8 text-center">For Investors and Venture Capitalists</h2>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">What We Want:</h3>
          <ul className="list-disc pl-6">
            <li>Funding for Growth: To scale operations, enhance AI capabilities, and global expansion.</li>
            <li>Strategic Partnerships: For guidance, industry connections, and market penetration.</li>
            <li>Innovative Collaborations: With tech companies and research institutions for shared innovation.</li>
          </ul>
          <h3 className="text-2xl font-bold mt-6 mb-4">Investment Highlights:</h3>
          <ul className="list-disc pl-6">
            <li>Early-Mover Advantage: Leading in AI for personal dream fulfillment.</li>
            <li>User Engagement: High retention through personalized service.</li>
            <li>Technology Edge: Continuously evolving AI for ongoing user value.</li>
          </ul>
        </div>
        <div className="relative" style={{ borderLeft: darkMode ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(0,0,0,0.2)', paddingLeft: '2rem' }}>
          <h3 className="text-2xl font-bold mb-4">What We Offer:</h3>
          <div className="mb-4">
            <h4 className="text-xl font-bold mb-2">To Users:</h4>
            <ul className="list-disc pl-6">
              <li>AI-Driven Dream Realization: Tools for personalized guidance, planning, and tracking.</li>
              <li>Personalized Dream Analysis: AI understanding of individual aspirations.</li>
              <li>Customized Roadmaps: AI-generated plans tailored to each user's situation.</li>
              <li>Progress Monitoring: Adaptive tracking and advice based on user progress.</li>
              <li>Community and Support: AI-enhanced community engagement.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">To Investors:</h4>
            <ul className="list-disc pl-6">
              <li>Market Potential: Capturing a share in the growing personal development and AI market.</li>
              <li>Scalability: Efficient scaling with cloud-based AI solutions.</li>
              <li>Data-Driven Insights: Valuable data for further product development or monetization.</li>
              <li>Revenue Streams: Diverse income sources from subscriptions to enterprise partnerships.</li>
              <li>Innovation Leadership: Being at the forefront of AI application in personal empowerment.</li>
              <li>Social Impact: Enhancing societal productivity and well-being.</li>
              <li>Robust Technology: Ethical, secure, and privacy-focused AI technology.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <button className={`px-8 py-3 rounded-full text-lg ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} hover:opacity-90`}>
          Contact Us for Investment Opportunities
        </button>
      </div>
    </section>

        {/* <section id="contact-us" className={`py-12 px-6 rounded-2xl text-center ${darkMode ? 'bg-white text-black' : 'text-white bg-black'}`}>
          <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-lg mb-6">
            Be part of a revolutionary journey to redefine AI for India and the world. Whether you're an investor, a tech enthusiast, or a collaborator, we welcome you to connect with us.
          </p>
          <button className={`px-8 py-3 rounded-full text-lg transition ${darkMode ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-200'}`}>
            Get in Touch
          </button>
        </section> */}
        {/* Contact Us Section */}
        <section id="contact" className={`shadow-xl rounded-2xl p-12 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
          <p className="text-lg leading-relaxed text-center mb-4">
            Have questions, feedback, or want to collaborate? We're here to help you achieve more.
          </p>
          <div className="text-center">
            <p className="text-lg mb-2">Email: <a href="mailto:kunalsingh1903078@gmail.com" className="underline">contact@wish.ai</a></p>
            <p className="text-lg mb-2">Address: [Bangalore,India]</p>
            <p className="text-lg">Phone: [Email Me.😊😊]</p>
          </div>
        </section>

      </main>

      {/* Footer */}
        <footer className={`py-8 px-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
          <div className="container mx-auto grid md:grid-cols-2 gap-8 text-center">
            <div>
          <h3 className="font-bold mb-2">Follow The 🧠 Behind This</h3>
          <p><a href="https://x.com/KunalKu02642346" className="hover:text-gray-500">X</a></p>
          <p><a href="https://www.linkedin.com/in/kunalkumar6/" className="hover:text-gray-500">LinkedIn</a></p>
          
            </div>
            <div>
          
          <div className="mt-4 space-x-4">
            <a href="#privacy" className="hover:text-gray-500">Privacy</a>
            <a href="#terms" className="hover:text-gray-500">Terms</a>
          </div>
          <p>© 2025 wish.ai. Empowering AI for Dreams.</p>
            </div>
          </div>
          
        </footer>
        
        {/* Dark Mode Toggle */}
      <button 
        onClick={toggleDarkMode}
        className="fixed bottom-4 right-4 p-3 rounded-full transition-all duration-300 ease-in-out"
        style={{ 
          backgroundColor: darkMode ? 'white' : 'black',
          color: darkMode ? 'black' : 'white'
        }}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </div>
    //  {/* </WavyBackground>  */}
  );
  
};

export default WishAILandingPage;