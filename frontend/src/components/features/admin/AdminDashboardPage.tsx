'use client';

import { useState } from 'react';
import Link from 'next/link';
import AdminSidebar from '@/components/features/admin/Sidebar';

interface Submission {
  id: string;
  name: string;
  avatarText: string;
  track: string;
  version: string;
  projectTitle: string;
  status: string;
}

const initialSubmissions: Submission[] = [
  {
    id: '1',
    name: 'Arjun Mehta',
    avatarText: 'AM',
    track: 'Cloud Architecture Intern',
    version: 'v1.4.2',
    projectTitle: 'Scalable Microservices with Kubernetes',
    status: 'Pending',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    avatarText: 'PS',
    track: 'UI/UX Research Intern',
    version: 'Final Submission',
    projectTitle: 'Neomorphic Design Systems for Fintech',
    status: 'Pending',
  },
  {
    id: '3',
    name: 'Vikram Singh',
    avatarText: 'VS',
    track: 'Machine Learning Intern',
    version: 'Module 4',
    projectTitle: 'Predictive Analysis of Market Fluctuations',
    status: 'Pending',
  },
];

export default function AdminDashboardPage() {
  const [submissions, setSubmissions] = useState<Submission[]>(initialSubmissions);
  const [reviewedId, setReviewedId] = useState<string | null>(null);

  const handleReview = (id: string) => {
    setReviewedId(id);
    // Simulating approval action
    setTimeout(() => {
      setSubmissions((prev) => prev.filter((sub) => sub.id !== id));
      setReviewedId(null);
    }, 1000);
  };

  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0e0e0e] min-h-screen text-slate-900 dark:text-white antialiased flex">
      {/* Admin SideNavBar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Header Section */}
        <header className="h-16 flex items-center justify-between px-10 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl sticky top-0 z-30 border-b border-slate-200/50 dark:border-slate-800/50">
          <div className="space-y-0.5">
            <p className="text-[#0099ad] font-bold tracking-wide uppercase text-[10px]">Operations Overview</p>
            <h2 className="text-xl font-bold font-headline text-[#000f22] dark:text-white tracking-tight">Executive Dashboard</h2>
          </div>
          <button className="bg-gradient-to-r from-[#000f22] to-[#0a2540] text-white px-5 py-2 rounded-lg font-bold text-xs shadow-md flex items-center gap-2 hover:opacity-90 transition-all active:scale-95">
            <span className="material-symbols-outlined text-sm">add</span>
            Add New Internship
          </button>
        </header>

        <main className="p-10 max-w-7xl mx-auto space-y-12 w-full flex-grow">
          {/* Stats Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Enrollments */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm flex flex-col gap-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <span className="material-symbols-outlined text-8xl">group</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Enrollments</span>
                <h3 className="text-4xl font-extrabold font-headline text-[#000f22] dark:text-white tracking-tight">12,482</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 dark:text-emerald-400 px-2 py-0.5 rounded-full text-xs font-bold flex items-center">
                  <span className="material-symbols-outlined text-xs mr-1">trending_up</span>
                  14%
                </span>
                <span className="text-slate-400 text-xs">vs last month</span>
              </div>
            </div>

            {/* Revenue */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm flex flex-col gap-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <span className="material-symbols-outlined text-8xl">payments</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Revenue (INR)</span>
                <h3 className="text-4xl font-extrabold font-headline text-[#000f22] dark:text-white tracking-tight">₹4.2M</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 dark:text-emerald-400 px-2 py-0.5 rounded-full text-xs font-bold flex items-center">
                  <span className="material-symbols-outlined text-xs mr-1">trending_up</span>
                  8.2%
                </span>
                <span className="text-slate-400 text-xs">above target</span>
              </div>
            </div>

            {/* Completion Rate */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm flex flex-col gap-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <span className="material-symbols-outlined text-8xl">task_alt</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Completion Rate</span>
                <h3 className="text-4xl font-extrabold font-headline text-[#000f22] dark:text-white tracking-tight">78.5%</h3>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-[#f0c110] h-full w-[78.5%] rounded-full"></div>
              </div>
            </div>
          </section>

          {/* Main Console Grid: Asymmetric Layout */}
          <section className="grid grid-cols-1 xl:grid-cols-3 gap-12">
            {/* Review Queue (Left column, takes 2 cols) */}
            <div className="xl:col-span-2 space-y-6">
              <div className="flex items-center justify-between px-2">
                <h4 className="text-xl font-bold font-headline text-[#000f22] dark:text-white">Pending Review Queue</h4>
                <span className="bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-100 dark:border-red-900">
                  {submissions.length} Action Required
                </span>
              </div>

              <div className="space-y-4">
                {submissions.length > 0 ? (
                  submissions.map((sub) => (
                    <div
                      key={sub.id}
                      className="bg-white dark:bg-slate-900 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group hover:bg-[#f3f4f5] dark:hover:bg-slate-850 border border-slate-200/50 dark:border-slate-800/50 shadow-sm transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-[#000f22] dark:text-white">
                          {sub.avatarText}
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-[#000f22] dark:text-white">{sub.name}</h5>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{sub.track} • {sub.version}</p>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <span className="text-[10px] font-semibold text-slate-400 uppercase mb-0.5">Project Scope</span>
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{sub.projectTitle}</span>
                      </div>

                      <div className="flex items-center gap-4">
                        <button className="text-slate-500 hover:text-[#000f22] dark:hover:text-white transition-colors">
                          <span className="material-symbols-outlined">code</span>
                        </button>
                        <button
                          onClick={() => handleReview(sub.id)}
                          disabled={reviewedId === sub.id}
                          className="bg-[#000f22] dark:bg-white text-white dark:text-[#000f22] text-xs font-bold px-5 py-2.5 rounded-lg hover:opacity-90 transition-all active:scale-95 shadow-sm disabled:opacity-50"
                        >
                          {reviewedId === sub.id ? 'Approving...' : 'Review Now'}
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-12 text-center border border-slate-200/50 dark:border-slate-800/50">
                    <span className="material-symbols-outlined text-4xl text-slate-300 mb-2">done_all</span>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">Review queue is empty. Good job!</p>
                  </div>
                )}
              </div>
            </div>

            {/* Insights Panel (Right column, 1 col) */}
            <div className="space-y-8">
              {/* Activity Heatmap Mockup */}
              <div className="bg-[#000f22] dark:bg-slate-900 text-white p-8 rounded-xl shadow-xl relative overflow-hidden border border-slate-800">
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <h5 className="font-bold font-headline text-lg tracking-tight">Platform Traffic</h5>
                    <span className="material-symbols-outlined text-[#2fd9f4]">insights</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-32">
                    <div className="bg-white/10 w-full h-[40%] rounded-sm"></div>
                    <div className="bg-white/10 w-full h-[60%] rounded-sm"></div>
                    <div className="bg-white/10 w-full h-[55%] rounded-sm"></div>
                    <div className="bg-[#2fd9f4] w-full h-[90%] rounded-sm"></div>
                    <div className="bg-white/10 w-full h-[45%] rounded-sm"></div>
                    <div className="bg-white/10 w-full h-[70%] rounded-sm"></div>
                    <div className="bg-white/10 w-full h-[85%] rounded-sm"></div>
                    <div className="bg-white/10 w-full h-[30%] rounded-sm"></div>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Intern activity has peaked in the <span className="text-[#2fd9f4] font-bold">last 48 hours</span> following the new Project Assignment release.
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#2fd9f4]/10 blur-3xl"></div>
              </div>

              {/* Recent Events logs */}
              <div className="bg-[#f3f4f5] dark:bg-slate-900/60 p-8 rounded-xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm space-y-6">
                <h5 className="text-sm font-bold text-[#000f22] dark:text-white uppercase tracking-widest border-b border-slate-200/50 dark:border-slate-800/50 pb-4">
                  Recent Events
                </h5>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#f0c110] mt-1.5 shrink-0"></div>
                    <div>
                      <p className="text-xs font-bold text-[#000f22] dark:text-white">System Upgrade Success</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">Database migrated to v4.0.12</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#2fd9f4] mt-1.5 shrink-0"></div>
                    <div>
                      <p className="text-xs font-bold text-[#000f22] dark:text-white">New Certification Issue</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">Digital Signature generated for 45 users</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-slate-400 mt-1.5 shrink-0"></div>
                    <div>
                      <p className="text-xs font-bold text-[#000f22] dark:text-white">Scheduled Maintenance</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">Tonight at 02:00 AM IST</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full border-t border-slate-200/50 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-900 py-8 px-12 flex flex-col md:flex-row justify-between items-center gap-4 mt-auto">
          <div className="flex flex-col gap-1">
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
