'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface BenefitCardProps {
  icon: string;
  title: string;
  desc: string;
}

function BenefitCard({ icon, title, desc }: BenefitCardProps) {
  return (
    <div className="bg-[#f3f4f5] p-8 rounded-2xl transition-all hover:translate-y-[-4px]">
      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm text-[#0a2540]">
        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
      </div>
      <h3 className="text-lg font-bold mb-2 text-[#000f22]">{title}</h3>
      <p className="text-sm text-slate-500">{desc}</p>
    </div>
  );
}

interface AccordionItemProps {
  question: string;
  answer: string;
}

function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200/50 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-2 font-bold text-lg text-[#000f22] focus:outline-none"
      >
        <span>{question}</span>
        <span className={`material-symbols-outlined transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 text-slate-600 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

const detailsData: Record<string, {
  title: string;
  tagline: string;
  tags: string[];
  basicPrice: number;
  proPrice: number;
  duration: string;
  difficulty: string;
  projectsCount: number;
  mentor: { name: string; role: string; avatarText: string };
  faq: { question: string; answer: string }[];
}> = {
  'mern-stack': {
    title: 'Full-Stack Web Development Internship',
    tagline: "Master the modern web stack in an intensive, project-led environment. This isn't just a course; it's a deep dive into professional engineering practices, architecture, and deployment strategies used at world-class tech firms.",
    tags: ['Next.js', 'PostgreSQL', 'AWS', 'TypeScript'],
    basicPrice: 149,
    proPrice: 299,
    duration: '8 Weeks',
    difficulty: 'Intermediate',
    projectsCount: 4,
    mentor: { name: 'David Thorne', role: 'Senior Solutions Architect', avatarText: 'DT' },
    faq: [
      { question: 'Who is this internship for?', answer: "It's designed for students and career switchers who have a basic understanding of HTML/CSS and want to transition into professional full-stack development." },
      { question: 'Will I get a job after completion?', answer: "While we don't guarantee jobs, our Pro members get exclusive access to our hiring network and resume reviews which significantly boosts placement chances." },
      { question: 'Is the certificate recognized?', answer: 'Yes, our certificates are verifiable via a unique ID on our portal and are recognized by several partner firms across India.' }
    ]
  },
  'ai-chatbot': {
    title: 'AI Chatbot & NLP Engineering',
    tagline: 'Deep dive into Generative AI engineering. Create production-level LLM pipelines, prompt engineering benchmarks, and custom AI agents integrated with real databases.',
    tags: ['Python', 'OpenAI', 'LangChain', 'FastAPI'],
    basicPrice: 119,
    proPrice: 249,
    duration: '4 Weeks',
    difficulty: 'Advanced',
    projectsCount: 3,
    mentor: { name: 'Dr. Sarah Jenkins', role: 'AI Research Lead', avatarText: 'SJ' },
    faq: [
      { question: 'What prerequisites are needed?', answer: 'Basic knowledge of Python scripting and REST APIs will help you get the most out of this program.' },
      { question: 'How is this different from generic AI courses?', answer: 'We focus on production deployment, prompt security, cost optimization, and actual API middleware design rather than just running notebooks.' }
    ]
  },
  'ui-ux-design': {
    title: 'Next-Gen Interface Systems',
    tagline: 'Learn design as a structural science. Build comprehensive Figma design systems, manage color and layout tokens, and understand the developer handoff workflow.',
    tags: ['Figma', 'Tokens', 'AutoLayout', 'Handoff'],
    basicPrice: 99,
    proPrice: 199,
    duration: '6 Weeks',
    difficulty: 'Beginner',
    projectsCount: 3,
    mentor: { name: 'Marcus Aurel', role: 'Principal Designer', avatarText: 'MA' },
    faq: [
      { question: 'Do I need prior design tool experience?', answer: 'No, this track is structured to take you from Figma basics to building industrial design systems.' },
      { question: 'Will I learn HTML/CSS as part of UI/UX?', answer: 'This course focuses on design systems and interface heuristics. However, we cover developer handoff and how code structures align with designs.' }
    ]
  },
  'data-science': {
    title: 'Predictive Analytics & Big Data',
    tagline: 'Harness the power of data to forecast trends. Clean, analyze, model, and deploy statistical algorithms on massive real-world datasets.',
    tags: ['Python', 'Pandas', 'Scikit-Learn', 'SQL'],
    basicPrice: 149,
    proPrice: 299,
    duration: '12 Weeks',
    difficulty: 'Advanced',
    projectsCount: 5,
    mentor: { name: 'Elena Rostova', role: 'Lead Data Scientist', avatarText: 'ER' },
    faq: [
      { question: 'What math background is required?', answer: 'Basic statistics and algebra are helpful. We review core mathematical concepts before diving into machine learning models.' },
      { question: 'Which datasets will we work on?', answer: 'We use curated e-commerce transaction sets, financial market logs, and user activity metrics for predictive modeling.' }
    ]
  }
};

export default function InternshipDetailsPage() {
  const params = useParams();
  const id = (params.id as string) || 'mern-stack';
  const data = detailsData[id] || detailsData['mern-stack'];

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] min-h-screen font-sans flex flex-col antialiased">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm shadow-slate-900/5 flex justify-between items-center px-8 h-16 max-w-full mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/GL_Name_logo.png"
            alt="Glorious Labs"
            width={180}
            height={36}
            className="object-contain h-8 sm:h-9 md:h-10 w-auto dark:brightness-0 dark:invert"
          />
        </Link>
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm tracking-tight">
          <Link href="/" className="text-slate-500 hover:text-slate-900 transition-colors">Home</Link>
          <Link href="/catalog" className="text-slate-900 border-b-2 border-slate-900 pb-1">Catalog</Link>
          <Link href="/dashboard/certificates" className="text-slate-500 hover:text-slate-900 transition-colors">Success Stories</Link>
          <Link href="/login" className="text-slate-500 hover:text-slate-900 transition-colors">Dashboard</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="font-bold text-sm text-slate-900 hover:opacity-80 transition-all active:scale-95 duration-200">Login</Link>
          <Link href="/register" className="bg-[#0a2540] text-white px-6 py-2 rounded-lg font-bold text-sm active:scale-95 transition-all">Join</Link>
        </div>
      </nav>

      <main className="pt-20 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex-grow w-full">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a2eeff] text-[#001c37] text-xs font-bold mb-6">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              PREMIUM INTERNSHIP
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#000f22] tracking-tight leading-[1.1] mb-6">
              {data.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              {data.tagline}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-4 mb-12">
              {data.tags.map((tag) => (
                <div key={tag} className="flex items-center gap-2 px-4 py-2 bg-[#f3f4f5] rounded-xl border border-slate-200/50">
                  <span className="material-symbols-outlined text-slate-700 text-sm">terminal</span>
                  <span className="font-bold text-sm text-[#000f22]">{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Enrollment Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/50">
              <div className="mb-8">
                <div className="relative w-full aspect-video rounded-xl bg-slate-900 flex items-center justify-center overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] to-black opacity-80"></div>
                  <span className="material-symbols-outlined text-white/5 text-9xl absolute -bottom-10 -right-10">code_blocks</span>
                  <span className="relative z-10 text-white font-headline font-bold text-xl px-4 text-center">
                    {data.title}
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-extrabold text-[#000f22]">₹{data.basicPrice}</span>
                  <span className="text-slate-400 line-through text-lg">₹4,999</span>
                  <span className="text-[#2fd9f4] font-bold text-sm ml-auto">97% OFF</span>
                </div>
                <p className="text-sm text-slate-500">Starting price for Basic Track. Limited time early bird discount.</p>
              </div>
              <Link
                href="/register"
                className="block w-full text-center bg-gradient-to-r from-[#000f22] to-[#0a2540] text-white py-4 rounded-xl font-bold text-lg mb-4 active:scale-[0.98] transition-all shadow-md"
              >
                Enroll Now
              </Link>
              <p className="text-center text-xs text-slate-400 font-medium">Secure Payment powered by Razorpay</p>
              <div className="mt-8 space-y-4 pt-6 border-t border-slate-200/50">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#745b00]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-sm font-semibold text-slate-700">{data.duration} Duration</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#745b00]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-sm font-semibold text-slate-700">{data.projectsCount} Guided Projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#745b00]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-sm font-semibold text-slate-700">Industry Expert Mentorship</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <section className="mt-24 md:mt-32">
          <h2 className="text-3xl font-extrabold text-[#000f22] mb-12 text-center">What You'll Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard icon="description" title="Hands-on Notes" desc="Curated playbooks teaching industrial setup and folder architecture." />
            <BenefitCard icon="rocket_launch" title="Real-world Projects" desc="Build production-ready projects and submit via GitHub." />
            <BenefitCard icon="verified" title="Verifiable Credentials" desc="Each certificate carries a unique security verification ID." />
            <BenefitCard icon="mail" title="Professional Offers" desc="Performance-based official offer letters on successful reviews." />
          </div>
        </section>

        {/* Pricing Tiers Table */}
        <section className="mt-32 scroll-mt-24" id="pricing">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#000f22] mb-4">Choose Your Path</h2>
            <p className="text-slate-500">Tailored tracks for every level of commitment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Tier */}
            <div className="bg-[#f3f4f5] p-10 rounded-3xl border border-slate-200/50 flex flex-col justify-between">
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2 text-[#000f22]">Basic Track</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-[#000f22]">₹{data.basicPrice}</span>
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
                    {data.projectsCount} Guided Projects
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#000f22] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Curated Hands-on Notes
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-[#000f22] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    Standard Certificate
                  </li>
                </ul>
              </div>
              <Link href="/register" className="block text-center w-full py-3 rounded-xl border border-[#000f22] text-[#000f22] font-bold hover:bg-[#000f22] hover:text-white transition-all active:scale-95">
                Enroll in Basic
              </Link>
            </div>

            {/* Pro Tier */}
            <div className="bg-[#000f22] p-10 rounded-3xl text-white shadow-xl flex flex-col justify-between border-2 border-[#f0c110]/20">
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">Pro Track</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-[#2fd9f4]">₹{data.proPrice}</span>
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
                    Resume & LinkedIn Reviews
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-[#f0c110]">
                    <span className="material-symbols-outlined text-[#f0c110] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                    1-on-1 Dedicated Mentor Support
                  </li>
                </ul>
              </div>
              <Link href="/register" className="block text-center w-full py-3 rounded-xl bg-white text-[#000f22] font-bold hover:bg-[#2fd9f4] transition-all active:scale-95">
                Enroll in Pro
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Bento Style */}
        <section className="mt-32">
          <h2 className="text-3xl font-extrabold text-[#000f22] mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-[#f3f4f5] p-8 rounded-2xl flex flex-col justify-between">
              <p className="text-xl font-medium leading-relaxed mb-8 italic">
                "The curriculum at Glorious Labs gave me the confidence to handle complex system designs. Within 2 months of submitting my projects, I landed a software developer intern role."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-400 flex items-center justify-center font-bold text-white">
                  RS
                </div>
                <div>
                  <p className="font-bold text-[#000f22]">Rahul Sharma</p>
                  <p className="text-sm text-slate-500">Software Engineer @ TechCorp</p>
                </div>
              </div>
            </div>
            <div className="bg-[#000f22] text-white p-8 rounded-2xl flex flex-col justify-between">
              <span className="material-symbols-outlined text-5xl opacity-30 mb-6">format_quote</span>
              <p className="text-lg font-bold mb-8">"The detailed Hands-on Notes are absolute gold. They teach you clean folder structure, Git patterns, and real deployment setups."</p>
              <p className="text-sm font-medium opacity-80">Anjali Gupta, Backend Dev</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-32 max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#000f22] mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {data.faq.map((item) => (
              <AccordionItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#f8f9fa] w-full border-t border-slate-200 flex flex-col md:flex-row justify-between items-center px-12 py-12 gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-base font-bold text-slate-900">Glorious Labs</span>
          <p className="font-inter text-xs text-slate-500 max-w-[200px] text-center md:text-left">Building the next generation of professional software engineers.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link className="font-inter text-xs text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacy Policy</Link>
          <Link className="font-inter text-xs text-slate-500 hover:text-slate-900 transition-colors" href="#">Terms of Service</Link>
          <Link className="font-inter text-xs text-slate-500 hover:text-slate-900 transition-colors" href="#">Support</Link>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="font-inter text-xs text-slate-500">© 2026 Glorious Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
