'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Sidebar from '@/components/features/dashboard/Sidebar';

interface WorkspaceData {
  title: string;
  domain: string;
  duration: string;
  techStack: string;
  complexity: string;
  status: string;
  phases: {
    num: string;
    title: string;
    details: string;
    codeSnippet?: string;
  }[];
  mentor: {
    name: string;
    role: string;
    avatarText: string;
  };
}

const workspaceDetails: Record<string, WorkspaceData> = {
  'mern-stack': {
    title: 'Enterprise MERN Stack Architect',
    domain: 'Full Stack Development',
    duration: '8 Weeks',
    techStack: 'MERN / AWS',
    complexity: 'Advanced',
    status: 'In Progress',
    phases: [
      {
        num: 'PHASE 01',
        title: 'Database & Schema Modeling',
        details: 'Design the relational structure using MongoDB and mongoose. Define indexes, cascades, and validation schema structures for e-commerce carts and transactions.'
      },
      {
        num: 'PHASE 02',
        title: 'Express REST Router Setup',
        details: 'Initialize Express endpoints, configure standard request logs (morgan), routing modules, and error-handling middlewares.'
      },
      {
        num: 'PHASE 03',
        title: 'Middleware & Auth Engineering',
        details: 'During this phase, you will implement a robust JWT-based authentication system. Unlike standard tutorials, you must handle refresh token rotation and cross-site scripting (XSS) prevention.',
        codeSnippet: `// Example: Industrial Middleware Header
const authenticate = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) throw new UnauthorizedError();
  // ... token rotation logic
  next();
}`
      },
      {
        num: 'PHASE 04',
        title: 'Complex State & Payment Engines',
        details: 'Integrate the Stripe or Razorpay SDK, configure webhook handlers for order completions, and coordinate transient inventory states.'
      },
      {
        num: 'PHASE 05',
        title: 'Production Deployment (AWS/Vercel)',
        details: 'Configure multi-stage Docker builds, set up continuous integration, and launch variables to staging platforms.'
      }
    ],
    mentor: {
      name: 'David Thorne',
      role: 'Senior Solutions Architect',
      avatarText: 'DT'
    }
  },
  'ai-chatbot': {
    title: 'AI Chatbot & NLP Engineering',
    domain: 'Artificial Intelligence',
    duration: '4 Weeks',
    techStack: 'Python / LangChain',
    complexity: 'Advanced',
    status: 'In Progress',
    phases: [
      {
        num: 'PHASE 01',
        title: 'Prompt Engineering & System Prompts',
        details: 'Create system instructions, handle variables interpolation, and test semantic boundaries of LLMs.'
      },
      {
        num: 'PHASE 02',
        title: 'RAG Pipeline Integration',
        details: 'Parse document chunks, calculate embeddings, insert into ChromaDB, and build retrieval chain models.'
      },
      {
        num: 'PHASE 03',
        title: 'Agentic Tool Calling',
        details: 'Configure LLMs to select tools autonomously. Define JSON schemas and parse arguments securely.',
        codeSnippet: `# Example: Python Tool Binding
@tool
def get_user_records(user_id: str) -> dict:
    """Retrieves transactional logs from database."""
    # ... secure query logic
    return db.query(user_id)`
      },
      {
        num: 'PHASE 04',
        title: 'Deployment & Token Auditing',
        details: 'Log API response times, track tokens usage, and deploy the endpoints using FastAPI and Docker.'
      }
    ],
    mentor: {
      name: 'Dr. Sarah Jenkins',
      role: 'AI Research Lead',
      avatarText: 'SJ'
    }
  },
  'ui-ux-design': {
    title: 'Next-Gen Interface Systems',
    domain: 'UI/UX Design',
    duration: '6 Weeks',
    techStack: 'Figma / Design Tokens',
    complexity: 'Beginner',
    status: 'In Progress',
    phases: [
      {
        num: 'PHASE 01',
        title: 'Typography & Harmonious Grid',
        details: 'Design an editorial type scale using Manrope and Inter. Create horizontal grids and spatial rules.'
      },
      {
        num: 'PHASE 02',
        title: 'Design Tokens & Semantic Colors',
        details: 'Define background, surface, outlines, and highlight tokens. Integrate Figma variables for light/dark switching.'
      },
      {
        num: 'PHASE 03',
        title: 'Interactive Prototyping & Micro-interactions',
        details: 'Construct reusable UI cards, define component variants, and set up spring-based micro-interactions.',
        codeSnippet: `/* Example: CSS Custom Transition Properties */
.interactive-card {
  transition: background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.2s ease-out;
}`
      },
      {
        num: 'PHASE 04',
        title: 'Developer Handoff Package',
        details: 'Organize design specs, export vector assets, write layout documentation, and create a redline specs guide.'
      }
    ],
    mentor: {
      name: 'Marcus Aurel',
      role: 'Principal Designer',
      avatarText: 'MA'
    }
  }
};

export default function WorkspacePage() {
  const params = useParams();
  const id = (params.id as string) || 'mern-stack';
  const project = workspaceDetails[id] || workspaceDetails['mern-stack'];

  const [expandedPhase, setExpandedPhase] = useState<string>('PHASE 03');
  const [repoUrl, setRepoUrl] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [feedbackRequested, setFeedbackRequested] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!repoUrl) return;
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#f8f9fa] dark:bg-slate-950 min-h-screen text-slate-900 dark:text-white antialiased flex">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Workspace Subheader */}
        <header className="h-16 flex items-center justify-between px-8 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl fixed top-0 left-64 right-0 z-30 border-b border-slate-200/50 dark:border-slate-800/50">
          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-sm font-medium">Workspace</span>
            <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
            <span className="text-[#000f22] dark:text-white text-sm font-bold truncate max-w-xs md:max-w-md">
              {project.title}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-[#000f22] dark:text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95">
              Save Draft
            </button>
          </div>
        </header>

        {/* Content Body */}
        <div className="pt-24 px-12 pb-20 max-w-6xl w-full flex-grow">
          {/* Main Title Section */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
              <div className="max-w-2xl">
                <span className="inline-flex items-center px-3 py-1 bg-[#d2e4ff] text-[#001c37] text-[10px] font-bold tracking-wider uppercase rounded-full mb-4">
                  Industrial Track
                </span>
                <h2 className="text-4xl font-extrabold text-[#000f22] dark:text-white mb-4 tracking-tight">
                  {project.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium italic">
                  Master the complete development lifecycle by engineering a scalable system. Follow guidelines closely.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#000f22] to-[#0a2540] text-white rounded-xl font-bold shadow-lg shadow-primary/10 hover:opacity-90 active:scale-95 transition-all">
                  <span className="material-symbols-outlined text-sm">download</span>
                  Download Note (PDF)
                </button>
                <div className="text-[11px] text-slate-400 text-center">Version 2.4 Updated Yesterday</div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-[#f3f4f5] dark:bg-slate-900 p-6 rounded-2xl">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Time to Complete</p>
                <p className="text-xl font-extrabold text-[#000f22] dark:text-white">{project.duration}</p>
              </div>
              <div className="bg-[#f3f4f5] dark:bg-slate-900 p-6 rounded-2xl">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Tech Stack</p>
                <p className="text-xl font-extrabold text-[#000f22] dark:text-white">{project.techStack}</p>
              </div>
              <div className="bg-[#f3f4f5] dark:bg-slate-900 p-6 rounded-2xl">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Complexity</p>
                <p className="text-xl font-extrabold text-[#000f22] dark:text-white">{project.complexity}</p>
              </div>
              <div className="bg-[#f3f4f5] dark:bg-slate-900 p-6 rounded-2xl border-l-4 border-[#ffe08b]">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Status</p>
                <p className="text-xl font-extrabold text-[#745b00] dark:text-[#f0c110]">{project.status}</p>
              </div>
            </div>
          </section>

          {/* Project Progress Roadmap */}
          <section className="mb-16">
            <h3 className="text-xl font-extrabold text-[#000f22] dark:text-white mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#2fd9f4]">analytics</span>
              Project Progress Roadmap
            </h3>
            <div className="relative px-4">
              <div className="absolute top-5 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2"></div>
              <div className="relative flex justify-between">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#000f22] dark:bg-white text-white dark:text-[#000f22] flex items-center justify-center z-10 shadow-lg">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Enrollment</p>
                    <p className="text-[10px] text-slate-400">Day 1</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#000f22] dark:bg-white text-white dark:text-[#000f22] flex items-center justify-center z-10 shadow-lg">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Architecture</p>
                    <p className="text-[10px] text-slate-400">Week 2</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border-2 border-[#000f22] dark:border-white text-[#000f22] dark:text-white flex items-center justify-center z-10 ring-4 ring-[#f8f9fa] dark:ring-slate-950">
                    <span className="text-xs font-extrabold">3</span>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Feature Dev</p>
                    <p className="text-[10px] text-slate-400">Week 8 (Active)</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400 z-10">
                    <span className="text-xs font-extrabold">4</span>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-slate-400">Final Review</p>
                    <p className="text-[10px] text-slate-400">Week 11</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400 z-10">
                    <span className="material-symbols-outlined text-sm">verified_user</span>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-slate-400">Certification</p>
                    <p className="text-[10px] text-slate-400">Week 12</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Asymmetric Details Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Guide Accordions (Left side, takes 2 cols) */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-[#f3f4f5] dark:bg-slate-900/60 rounded-3xl p-8 border border-slate-200/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#0a2540] dark:bg-slate-800 flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">menu_book</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-[#000f22] dark:text-white">Industrial Implementation Guide</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-455">Step-by-step documentation for production-ready code.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {project.phases.map((phase) => {
                    const isExpanded = expandedPhase === phase.num;
                    return (
                      <div key={phase.num} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
                        <button
                          onClick={() => setExpandedPhase(isExpanded ? '' : phase.num)}
                          className="w-full flex justify-between items-center text-left focus:outline-none"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-black px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded-md text-slate-700 dark:text-slate-300">
                              {phase.num}
                            </span>
                            <h5 className="text-sm font-bold text-[#000f22] dark:text-white">{phase.title}</h5>
                          </div>
                          <span className="material-symbols-outlined text-slate-400">
                            {isExpanded ? 'expand_less' : 'expand_more'}
                          </span>
                        </button>
                        {isExpanded && (
                          <div className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
                            <p>{phase.details}</p>
                            {phase.codeSnippet && (
                              <pre className="bg-[#000f22] text-slate-300 p-4 rounded-xl font-mono text-[11px] overflow-x-auto">
                                <code>{phase.codeSnippet}</code>
                              </pre>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Submission, Mentor & Video (Right side) */}
            <div className="space-y-8">
              {/* Submission Card */}
              <div className="bg-[#f3f4f5] dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/40">
                <h4 className="text-sm font-extrabold text-[#000f22] dark:text-white mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined">rocket_launch</span>
                  Project Submission
                </h4>

                {isSubmitted ? (
                  <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 p-4 rounded-xl text-center text-emerald-800 dark:text-emerald-400">
                    <span className="material-symbols-outlined text-2xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <p className="text-xs font-bold uppercase mb-1">Submitted Successfully</p>
                    <p className="text-[10px]">Your submission is in the queue for code review.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                        GitHub Repository URL
                      </label>
                      <input
                        required
                        value={repoUrl}
                        onChange={(e) => setRepoUrl(e.target.value)}
                        className="w-full bg-white dark:bg-slate-800 border-0 border-b-2 border-slate-200 dark:border-slate-700 focus:border-[#745b00] dark:focus:border-white focus:ring-0 rounded-t-lg px-4 py-3 text-sm transition-all"
                        placeholder="https://github.com/username/repo"
                        type="url"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#000f22] text-white dark:bg-white dark:text-[#000f22] rounded-xl font-bold hover:opacity-90 transition-all active:scale-[0.98] text-sm"
                    >
                      Submit Project
                    </button>
                    <p className="text-[10px] text-slate-400 text-center">
                      Submission locks the current version for review. Double check your code before hitting submit.
                    </p>
                  </form>
                )}
              </div>

              {/* Mentor Card */}
              <div className="bg-[#f3f4f5] dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/40">
                <h4 className="text-sm font-extrabold text-[#000f22] dark:text-white mb-4">Mentor Support</h4>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#0a2540] text-[#a2eeff] flex items-center justify-center font-bold text-sm">
                    {project.mentor.avatarText}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#000f22] dark:text-white">{project.mentor.name}</p>
                    <p className="text-[10px] text-[#0099ad] font-semibold">{project.mentor.role}</p>
                  </div>
                </div>
                <button
                  onClick={() => setFeedbackRequested(true)}
                  disabled={feedbackRequested}
                  className="w-full py-2 border-2 border-slate-200 dark:border-slate-700 text-[#000f22] dark:text-white text-xs font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-all disabled:opacity-50"
                >
                  {feedbackRequested ? 'Feedback Requested' : 'Request Feedback'}
                </button>
              </div>

              {/* Video Thumbnail */}
              <div className="aspect-square rounded-3xl bg-slate-900 overflow-hidden relative group cursor-pointer flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                  <span className="material-symbols-outlined text-white text-5xl group-hover:scale-110 transition-transform">
                    play_circle
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-[10px] font-bold text-[#2fd9f4] uppercase tracking-wider mb-1">VIDEO EXPLAINER</p>
                  <p className="text-sm font-bold text-white">How to Submit Your Project</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full border-t border-slate-200/50 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-900 py-8 px-12 flex flex-col md:flex-row justify-between items-center gap-4 mt-auto">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <span className="text-sm font-bold text-slate-900 dark:text-white font-headline">Glorious Labs</span>
            <p className="text-xs text-slate-500">© 2026 Glorious Labs. All rights reserved.</p>
          </div>
          <div className="flex gap-8 text-xs text-slate-500">
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Support</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
