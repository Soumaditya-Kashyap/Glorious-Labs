'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] min-h-screen font-sans flex flex-col antialiased">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm shadow-slate-900/5 flex justify-between items-center px-8 h-16 max-w-full mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/GL_Name_logo.png"
            alt="Glorious Labs"
            width={180}
            height={36}
            className="object-contain h-8 sm:h-9 md:h-10 w-auto"
          />
        </Link>
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm tracking-tight">
          <Link href="/" className="text-slate-900 border-b-2 border-slate-900 pb-1">
            Home
          </Link>
          <Link href="/catalog" className="text-slate-500 hover:text-slate-900 transition-colors">
            Catalog
          </Link>
          <Link href="/dashboard/certificates" className="text-slate-500 hover:text-slate-900 transition-colors">
            Verify Certificates
          </Link>
          <Link href="/login" className="text-slate-500 hover:text-slate-900 transition-colors">
            Dashboard
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-slate-900 font-bold text-sm hover:opacity-80 transition-all active:scale-95">
            Login
          </Link>
          <Link href="/register" className="bg-[#0a2540] text-white px-6 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-all active:scale-95">
            Join
          </Link>
        </div>
      </nav>

      <main className="pt-16 flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#f8f9fa] pt-8 pb-20 md:pt-12 md:pb-28 px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#a2eeff]/30 text-[#004e5a] rounded-full text-xs font-bold mb-6">
                <span className="material-symbols-outlined text-sm">stars</span>
                ENROLLMENT OPEN FOR 2026
              </div>
              <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-[#000f22] leading-[1.1] mb-6">
                Industry-Standard <span className="text-[#745b00]">Internships</span> for Every Career Path
              </h1>
              <p className="text-slate-600 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-normal">
                Choose between our <strong>Basic Internship</strong> for core skills or our <strong>Pro Placement Track</strong> for dedicated career support. Guided projects + Professional Hands-on Notes + Verified Certification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/catalog" className="inline-block text-center bg-gradient-to-r from-[#000f22] to-[#0a2540] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/10 hover:opacity-90 active:scale-[0.98] transition-all">
                  Browse Internships
                </Link>
                <Link href="#pricing" className="inline-block text-center bg-white border border-slate-200 text-[#000f22] px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                  Compare Tracks
                </Link>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-8 opacity-70">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#745b00]">verified_user</span>
                  <span className="text-sm font-semibold text-slate-700">Razorpay Secured</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0099ad]">group</span>
                  <span className="text-sm font-semibold text-slate-700">1,000+ Students Enrolled</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#2fd9f4]/10 rounded-full blur-[100px]"></div>
              <div className="bg-[#f3f4f5] p-4 rounded-[2rem] shadow-2xl relative overflow-hidden">
                {/* Simulated dashboard placeholder */}
                <div className="bg-[#0a2540] rounded-2xl w-full p-6 text-white aspect-[4/3] flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-[#22d3ee] flex items-center justify-center font-black text-xs text-[#0a2540]">GL</div>
                      <span className="font-bold text-xs tracking-tighter">Glorious Labs</span>
                    </div>
                    <span className="bg-[#22d3ee] text-[#0a2540] text-[9px] font-bold px-2 py-0.5 rounded-full">LIVE PORTAL</span>
                  </div>
                  <div className="my-4">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Active Project</p>
                    <p className="text-lg font-bold">Enterprise MERN Stack Development</p>
                    <div className="mt-2 w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#22d3ee] h-full w-[78%] rounded-full"></div>
                    </div>
                    <p className="text-right text-[10px] mt-1 text-[#22d3ee]">78% Complete</p>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">AR</div>
                      <div>
                        <p className="text-xs font-semibold">Alex Rivera</p>
                        <p className="text-[9px] text-slate-400">Level 4 Intern</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[#22d3ee] text-sm">verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works & Two Tracks */}
        <section className="bg-[#f3f4f5] py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl font-extrabold text-[#000f22] mb-4">Choose Your Path to Success</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Select the track that fits your career goals. Pricing varies based on the technical domain and track chosen.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {/* Basic Internship Track */}
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200/50 shadow-sm relative overflow-hidden group hover:border-[#000f22]/20 transition-all">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-8xl text-slate-900">school</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-[#000f22] mb-2">Basic Internship</h3>
                <p className="text-slate-600 mb-8">Perfect for building a strong foundation and professional portfolio.</p>
                <ul className="space-y-4 mb-8 text-slate-700">
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-[#745b00] text-lg">check_circle</span>
                    Industry-Curated Hands-on Notes
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-[#745b00] text-lg">check_circle</span>
                    Guided Capstone Projects
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-[#745b00] text-lg">check_circle</span>
                    Verified Completion Certificate
                  </li>
                </ul>
                <Link href="/catalog" className="block text-center w-full py-4 rounded-xl border-2 border-[#000f22] text-[#000f22] font-bold hover:bg-[#000f22] hover:text-white transition-all">
                  Explore Basic Tracks
                </Link>
              </div>

              {/* Pro Placement Track */}
              <div className="bg-[#000f22] p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                  <span className="material-symbols-outlined text-8xl text-white">rocket_launch</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-white mb-2">Pro Placement Track</h3>
                <p className="text-slate-300 mb-8">Comprehensive training designed to get you hired at top tech firms.</p>
                <ul className="space-y-4 mb-8 text-white">
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-[#2fd9f4] text-lg">verified</span>
                    Everything in Basic Track
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-[#2fd9f4] text-lg">verified</span>
                    1-on-1 Mentorship & Resume Review
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <span className="material-symbols-outlined text-[#2fd9f4] text-lg">verified</span>
                    Priority Placement Assistance
                  </li>
                </ul>
                <Link href="/catalog" className="block text-center w-full py-4 rounded-xl bg-white text-[#000f22] font-bold hover:bg-[#2fd9f4] transition-all">
                  Join Pro Track
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-2xl hover:translate-y-[-4px] transition-transform duration-300">
                <div className="w-12 h-12 bg-[#000f22] text-white flex items-center justify-center rounded-xl font-bold mb-6">01</div>
                <h3 className="font-headline text-xl font-bold text-[#000f22] mb-3">Register</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Choose your domain and preferred track to begin your journey.</p>
              </div>
              {/* Step 2 */}
              <div className="bg-white p-8 rounded-2xl hover:translate-y-[-4px] transition-transform duration-300">
                <div className="w-12 h-12 bg-[#f0c110] text-[#241a00] flex items-center justify-center rounded-xl font-bold mb-6">02</div>
                <h3 className="font-headline text-xl font-bold text-[#000f22] mb-3">Learn</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Access professional notes and industry-curated modules immediately.</p>
              </div>
              {/* Step 3 */}
              <div className="bg-white p-8 rounded-2xl hover:translate-y-[-4px] transition-transform duration-300">
                <div className="w-12 h-12 bg-[#2fd9f4] text-[#001f25] flex items-center justify-center rounded-xl font-bold mb-6">03</div>
                <h3 className="font-headline text-xl font-bold text-[#000f22] mb-3">Project</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Work on industry-standard guided projects to build your portfolio.</p>
              </div>
              {/* Step 4 */}
              <div className="bg-white p-8 rounded-2xl hover:translate-y-[-4px] transition-transform duration-300">
                <div className="w-12 h-12 bg-[#0099ad] text-white flex items-center justify-center rounded-xl font-bold mb-6">04</div>
                <h3 className="font-headline text-xl font-bold text-[#000f22] mb-3">Get Certified</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Receive your completion certificate and verified offer letter.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Internships */}
        <section className="py-20 px-8 max-w-7xl mx-auto" id="popular-internships">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-headline text-4xl font-extrabold text-[#000f22] mb-4">Popular Internships</h2>
              <p className="text-slate-600">Master high-demand skills with our top-rated programs. Pricing varies by domain.</p>
            </div>
            <Link href="/catalog" className="text-[#0099ad] font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View all opportunities <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Web Dev */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col justify-between">
              <div className="h-48 bg-slate-900 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] to-black opacity-90"></div>
                <span className="material-symbols-outlined text-white/20 text-9xl absolute -bottom-10 -right-10">code</span>
                <span className="relative z-10 text-white font-headline font-bold text-2xl">MERN Stack Dev</span>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#ffe08b] text-[#241a00] text-[10px] font-bold rounded-full mb-4">FEATURED</span>
                  <h3 className="font-headline text-2xl font-bold text-[#000f22] mb-2">Web Development</h3>
                  <p className="text-slate-500 text-sm mb-6">MERN stack, responsive design, and scalable architecture.</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700 font-bold text-sm bg-slate-100 px-3 py-1 rounded-full italic">Flexible Pricing</span>
                  <Link href="/catalog" className="bg-[#000f22] text-white p-3 rounded-full hover:bg-slate-800 active:scale-90 transition-all flex items-center justify-center">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: GenAI */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col justify-between">
              <div className="h-48 bg-slate-900 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00282f] to-[#001114] opacity-90"></div>
                <span className="material-symbols-outlined text-white/20 text-9xl absolute -bottom-10 -right-10">psychology</span>
                <span className="relative z-10 text-white font-headline font-bold text-2xl">Generative AI</span>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#a2eeff] text-[#001f25] text-[10px] font-bold rounded-full mb-4">TRENDING</span>
                  <h3 className="font-headline text-2xl font-bold text-[#000f22] mb-2">Generative AI</h3>
                  <p className="text-slate-500 text-sm mb-6">Prompt engineering, LLMs, and AI application building.</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700 font-bold text-sm bg-slate-100 px-3 py-1 rounded-full italic">Flexible Pricing</span>
                  <Link href="/catalog" className="bg-[#000f22] text-white p-3 rounded-full hover:bg-slate-800 active:scale-90 transition-all flex items-center justify-center">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3: Data Science */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col justify-between">
              <div className="h-48 bg-slate-900 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 opacity-90"></div>
                <span className="material-symbols-outlined text-white/20 text-9xl absolute -bottom-10 -right-10">monitoring</span>
                <span className="relative z-10 text-white font-headline font-bold text-2xl">Data Science</span>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#d2e4ff] text-[#001c37] text-[10px] font-bold rounded-full mb-4">OPEN</span>
                  <h3 className="font-headline text-2xl font-bold text-[#000f22] mb-2">Data Science</h3>
                  <p className="text-slate-500 text-sm mb-6">Python, Pandas, and professional predictive modeling.</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700 font-bold text-sm bg-slate-100 px-3 py-1 rounded-full italic">Flexible Pricing</span>
                  <Link href="/catalog" className="bg-[#000f22] text-white p-3 rounded-full hover:bg-slate-800 active:scale-90 transition-all flex items-center justify-center">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Glorious Labs */}
        <section className="bg-[#000f22] py-20 px-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#2fd9f4]/5 -skew-x-12 transform translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl mb-16">
              <h2 className="font-headline text-4xl font-extrabold mb-6 text-white">Why Glorious Labs?</h2>
              <p className="text-slate-300 text-lg">We bridge the gap between academic theory and industrial reality with high-quality, accessible education tailored to your goals.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-white/5 backdrop-blur-lg p-10 rounded-[2.5rem] flex flex-col justify-between border border-white/10 shadow-lg">
                <div>
                  <span className="material-symbols-outlined text-4xl text-[#2fd9f4] mb-6">menu_book</span>
                  <h3 className="font-headline text-3xl font-bold mb-4 text-white">Industrial Hands-on Notes</h3>
                  <p className="text-slate-300 leading-relaxed">Unlike generic tutorials, our notes are curated by industry professionals. They focus on the 'how' and 'why' of actual production environments, giving you insights you won't find in textbooks.</p>
                </div>
                <div className="mt-8 flex gap-4">
                  <div className="w-24 h-12 rounded bg-white/5 flex items-center justify-center text-xs font-semibold text-slate-400">Git Workflows</div>
                  <div className="w-24 h-12 rounded bg-white/5 flex items-center justify-center text-xs font-semibold text-slate-400">Clean Architecture</div>
                  <div className="w-24 h-12 rounded bg-white/5 flex items-center justify-center text-xs font-semibold text-slate-400">Docker & CI/CD</div>
                </div>
              </div>
              <div className="bg-[#f0c110] p-10 rounded-[2.5rem] flex flex-col justify-between shadow-2xl text-[#241a00]">
                <div>
                  <span className="material-symbols-outlined text-4xl text-[#241a00] mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                  <h3 className="font-headline text-3xl font-bold mb-4">Verified Credentials</h3>
                  <p className="text-[#584400] leading-relaxed">Receive an industry-recognized completion certificate and a professional offer letter that adds massive value to your resume.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers Section */}
        <section className="py-20 px-8 max-w-7xl mx-auto scroll-mt-24" id="pricing">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-extrabold text-[#000f22] mb-4">Choose Your Path</h2>
            <p className="text-slate-600">Tailored tracks for every level of commitment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Tier */}
            <div className="bg-[#f3f4f5] p-10 rounded-3xl border border-slate-200/50 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2 text-[#000f22]">Basic Track</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-[#000f22]">₹99 - ₹149</span>
                    <span className="text-slate-500 text-sm">/ full program</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-10 text-slate-700">
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#000f22] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Core Internship Curriculum
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#000f22] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Guided Projects
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#000f22] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Curated Hands-on Notes
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#000f22] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Verifiable Certificate
                  </li>
                </ul>
              </div>
              <Link href="/catalog" className="block text-center w-full py-3 rounded-xl border border-[#000f22] text-[#000f22] font-bold hover:bg-[#000f22] hover:text-white transition-all active:scale-95">
                Enroll in Basic
              </Link>
            </div>

            {/* Pro Tier */}
            <div className="bg-[#000f22] p-10 rounded-3xl relative overflow-hidden text-white shadow-xl flex flex-col justify-between border-2 border-[#f0c110]/20">
              <div className="absolute top-0 right-0 p-4">
                <span className="bg-[#f0c110] text-[#241a00] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">MOST POPULAR</span>
              </div>
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">Pro Track</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-[#2fd9f4]">₹199 - ₹299</span>
                    <span className="text-slate-400 text-sm">/ full program</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#2fd9f4] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    Everything in Basic
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-[#f0c110]">
                    <span className="material-symbols-outlined text-[#f0c110] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                    Placement Support & Referrals
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-[#f0c110]">
                    <span className="material-symbols-outlined text-[#f0c110] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                    1-on-1 Mentorship Session
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-[#f0c110]">
                    <span className="material-symbols-outlined text-[#f0c110] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                    Detailed Code & Resume Reviews
                  </li>
                </ul>
              </div>
              <Link href="/catalog" className="block text-center w-full py-3 rounded-xl bg-white text-[#000f22] font-bold hover:bg-[#2fd9f4] transition-all active:scale-95">
                Enroll in Pro
              </Link>
            </div>
          </div>
        </section>

        {/* Ready to launch CTA */}
        <section className="py-20 px-8">
          <div className="max-w-5xl mx-auto bg-[#e7e8e9] p-12 rounded-[3rem] text-center">
            <h2 className="font-headline text-4xl font-extrabold text-[#000f22] mb-6">Ready to launch your career?</h2>
            <p className="text-slate-600 text-lg mb-10">Join 1,000+ students already learning and building with Glorious Labs.</p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input 
                className="flex-grow px-6 py-4 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#745b00] text-slate-900" 
                placeholder="Enter your email" 
                type="email"
              />
              <Link href="/register" className="bg-[#000f22] text-white px-8 py-4 rounded-xl font-bold whitespace-nowrap active:scale-95 transition-all text-center">
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 bg-[#f8f9fa] flex flex-col md:flex-row justify-between items-center px-12 py-12 gap-8 mt-auto">
        <div className="flex flex-col gap-4">
          <span className="text-base font-bold text-slate-900">Glorious Labs</span>
          <p className="font-inter text-xs text-slate-500 max-w-xs">Building the next generation of tech talent through accessible, industry-grade internships.</p>
          <p className="font-inter text-xs text-slate-500">© 2026 Glorious Labs. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-xs font-semibold text-slate-500">
          <div className="flex flex-col gap-4">
            <span className="font-bold text-slate-900 uppercase tracking-widest text-[10px]">Company</span>
            <Link href="#" className="hover:text-[#0099ad] transition-colors">About Us</Link>
            <Link href="#" className="hover:text-[#0099ad] transition-colors">Contact Us</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold text-slate-900 uppercase tracking-widest text-[10px]">Legal</span>
            <Link href="#" className="hover:text-[#0099ad] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#0099ad] transition-colors">Terms of Service</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold text-slate-900 uppercase tracking-widest text-[10px]">Support</span>
            <Link href="#" className="hover:text-[#0099ad] transition-colors">Help Center</Link>
            <Link href="#" className="hover:text-[#0099ad] transition-colors">Verify Certificate</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
