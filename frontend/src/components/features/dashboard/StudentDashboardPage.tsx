'use client';

import Sidebar from '@/components/features/dashboard/Sidebar';
import Header from '@/components/features/dashboard/Header';
import Link from 'next/link';

export default function StudentDashboardPage() {
  return (
    <div className="bg-[#f8f9fa] dark:bg-slate-950 min-h-screen text-slate-900 dark:text-white antialiased flex">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Canvas */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Header title="Dashboard Overview" />

        <main className="p-10 max-w-7xl mx-auto space-y-12 w-full flex-grow">
          {/* Greeting & Metrics */}
          <section className="space-y-6">
            <div className="flex flex-col gap-2">
              <h2 className="font-headline font-extrabold text-4xl text-[#000f22] dark:text-white tracking-tight">
                Welcome back, John!
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg">
                You have 2 active internships and 3 pending submissions for this week.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Metric Card 1 */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Overall Progress
                </p>
                <div className="mt-4 flex items-end justify-between">
                  <span className="text-4xl font-bold text-[#000f22] dark:text-white">78%</span>
                  <span className="text-[#004e5a] bg-[#a2eeff] dark:bg-[#00282f] dark:text-[#2fd9f4] font-bold text-xs px-2.5 py-1 rounded">
                    +12% this month
                  </span>
                </div>
              </div>

              {/* Metric Card 2 */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Hours Tracked
                </p>
                <div className="mt-4 flex items-end justify-between">
                  <span className="text-4xl font-bold text-[#000f22] dark:text-white">124</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-semibold">
                    / 160 required
                  </span>
                </div>
              </div>

              {/* Metric Card 3 */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Certificates Earned
                </p>
                <div className="mt-4 flex items-end justify-between">
                  <span className="text-4xl font-bold text-[#000f22] dark:text-white">04</span>
                  <span className="material-symbols-outlined text-[#f0c110] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Active Internships */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-headline font-bold text-2xl text-[#000f22] dark:text-white">
                Active Internships
              </h3>
              <Link href="/catalog" className="text-[#0099ad] font-semibold text-sm hover:underline">
                View all roles
              </Link>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Internship Card 1 */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm flex flex-col gap-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                <div className="flex justify-between items-start">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-[#000f22] dark:text-white text-lg">
                      AI
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-xl text-[#000f22] dark:text-white">
                        AI Research Associate
                      </h4>
                      <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">
                        CloudNexus Systems • Remote
                      </p>
                    </div>
                  </div>
                  <span className="bg-[#a2eeff] text-[#001f25] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    In Progress
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-slate-500 dark:text-slate-400">
                      Current Project: Neural Optimizer Phase II
                    </span>
                    <span className="text-[#000f22] dark:text-white">65%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#000f22] dark:bg-white h-full rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>

                <div className="flex gap-4 mt-2">
                  <button className="flex-1 bg-gradient-to-r from-[#000f22] to-[#0a2540] text-white py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm">
                    <span className="material-symbols-outlined text-sm">download</span>
                    Download Hands-on Note
                  </button>
                  <Link
                    href="/dashboard/workspace/ai-chatbot"
                    className="px-6 py-3 rounded-lg border border-slate-200 dark:border-slate-700 text-[#000f22] dark:text-white font-semibold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center"
                  >
                    Project Portal
                  </Link>
                </div>
              </div>

              {/* Internship Card 2 */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm flex flex-col gap-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                <div className="flex justify-between items-start">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-[#000f22] dark:text-white text-lg">
                      UX
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-xl text-[#000f22] dark:text-white">
                        UI/UX Design Intern
                      </h4>
                      <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">
                        FinFlow Digital • Hybrid
                      </p>
                    </div>
                  </div>
                  <span className="bg-[#ffe08b] text-[#241a00] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Featured
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-slate-500 dark:text-slate-400">
                      Current Project: Design System Audit
                    </span>
                    <span className="text-[#000f22] dark:text-white">90%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#000f22] dark:bg-white h-full rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div className="flex gap-4 mt-2">
                  <button className="flex-1 bg-gradient-to-r from-[#000f22] to-[#0a2540] text-white py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm">
                    <span className="material-symbols-outlined text-sm">download</span>
                    Download Hands-on Note
                  </button>
                  <Link
                    href="/dashboard/workspace/ui-ux-design"
                    className="px-6 py-3 rounded-lg border border-slate-200 dark:border-slate-700 text-[#000f22] dark:text-white font-semibold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center"
                  >
                    Project Portal
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Bento Grid: Submissions & Notifications */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
            {/* Recent Submissions */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm space-y-6">
              <h3 className="font-headline font-bold text-xl text-[#000f22] dark:text-white">
                Recent Submissions
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/40 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-[#00282f] text-[#2fd9f4] flex items-center justify-center">
                      <span className="material-symbols-outlined">description</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Phase 1 Architecture Doc</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Submitted 2 days ago • AI Research</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-[#0099ad]">Under Review</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/40 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-[#0a2540] text-[#d2e4ff] flex items-center justify-center">
                      <span className="material-symbols-outlined">code</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Component Library Audit</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Submitted 4 days ago • UI/UX Design</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-[#745b00]">Approved</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/40 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center">
                      <span className="material-symbols-outlined">link</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Weekly Reflection #4</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Submitted 1 week ago • Global</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-slate-500 dark:text-slate-450">Completed</span>
                </div>
              </div>
            </div>

            {/* Notifications Panel */}
            <div className="bg-[#f3f4f5] dark:bg-slate-900/60 p-8 rounded-xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline font-bold text-xl text-[#000f22] dark:text-white">
                    Notifications
                  </h3>
                  <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                    3 NEW
                  </span>
                </div>

                <div className="space-y-6 text-sm">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#2fd9f4] mt-2 shrink-0"></div>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-200">New feedback received</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Your mentor left comments on the "Neural Optimizer" project.</p>
                      <p className="text-[10px] mt-1 text-slate-400 font-medium">10 MIN AGO</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#2fd9f4] mt-2 shrink-0"></div>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-200">Weekly Meeting scheduled</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Catch-up with the Design Team on Friday, 10:00 AM.</p>
                      <p className="text-[10px] mt-1 text-slate-400 font-medium">2 HOURS AGO</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 mt-2 shrink-0"></div>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-200">Certificate Ready</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Your certificate for "Python for Data Science" is now available.</p>
                      <p className="text-[10px] mt-1 text-slate-400 font-medium">YESTERDAY</p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full py-2 text-xs font-bold text-[#000f22] dark:text-white border-t border-slate-200/50 dark:border-slate-800/50 pt-4 hover:text-[#0099ad] transition-colors mt-6">
                VIEW ALL NOTIFICATIONS
              </button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full border-t border-slate-200/50 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-900 py-8 px-12 flex flex-col md:flex-row justify-between items-center gap-4 mt-auto">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <span className="text-sm font-bold text-slate-900 dark:text-white font-headline">Glorious Labs</span>
            <p className="text-xs text-slate-500 dark:text-slate-450">© 2026 Glorious Labs. All rights reserved.</p>
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
