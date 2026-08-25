'use client';

import Sidebar from '@/components/features/dashboard/Sidebar';
import Header from '@/components/features/dashboard/Header';
import Link from 'next/link';

interface Certificate {
  id: string;
  title: string;
  date: string;
  verifyId: string;
  status: string;
}

const certificatesData: Certificate[] = [
  {
    id: '1',
    title: 'Advanced AI Systems',
    date: 'Oct 12, 2023',
    verifyId: 'GL-99281',
    status: 'Verified Achievement',
  },
  {
    id: '2',
    title: 'UI/UX Design Systems',
    date: 'Aug 04, 2023',
    verifyId: 'GL-88310',
    status: 'Verified Achievement',
  },
];

export default function CertificatesPage() {
  return (
    <div className="bg-[#f8f9fa] dark:bg-slate-950 min-h-screen text-slate-900 dark:text-white antialiased flex">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Header title="Certificates & Letters" />

        <main className="p-10 max-w-7xl mx-auto space-y-12 w-full flex-grow">
          {/* Header Section */}
          <header className="mb-12">
            <h2 className="text-4xl font-headline font-bold text-[#000f22] dark:text-white tracking-tight mb-2">
              Recognition & Achievements
            </h2>
            <p className="text-slate-500 dark:text-slate-455 max-w-2xl">
              Access your official Glorious Labs documentation, including earned internship certificates and verified offer letters.
            </p>
          </header>

          {/* Bento Layout: Document Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Section 1: Official Certificates */}
            <div className="lg:col-span-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline text-xl font-bold text-[#000f22] dark:text-white">
                  Earned Certificates
                </h3>
                <span className="px-3 py-1 bg-[#a2eeff] text-[#001f25] text-xs font-bold rounded-full">
                  2 COMPLETED
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificatesData.map((cert) => (
                  <div
                     key={cert.id}
                     className="bg-white dark:bg-slate-900 rounded-xl p-1 shadow-sm overflow-hidden border border-slate-100 dark:border-slate-800/50 hover:bg-[#f3f4f5] dark:hover:bg-slate-800 transition-all group flex flex-col justify-between"
                  >
                    <div className="p-4 flex-1">
                      <div className="relative h-44 rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center mb-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] to-black opacity-90"></div>
                        <span className="material-symbols-outlined text-white/5 text-9xl absolute -bottom-8 -right-8">
                          workspace_premium
                        </span>
                        <div className="relative z-10 text-center px-4">
                          <p className="text-xs text-[#2fd9f4] font-bold tracking-widest uppercase mb-1">Glorious Labs</p>
                          <p className="text-lg font-bold text-white leading-tight">{cert.title}</p>
                          <p className="text-[10px] text-slate-400 mt-2">ID: {cert.verifyId}</p>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter border border-white/10">
                            {cert.status}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-headline font-bold text-lg text-[#000f22] dark:text-white">
                            {cert.title}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Completed on {cert.date}
                          </p>
                        </div>
                        <span className="material-symbols-outlined text-[#2fd9f4]" style={{ fontVariationSettings: "'FILL' 1" }}>
                          verified
                        </span>
                      </div>
                    </div>

                    <div className="px-4 pb-4">
                      <div className="flex items-center gap-4 mt-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <button className="flex-grow bg-gradient-to-r from-[#000f22] to-[#0a2540] text-white text-xs font-bold py-3 rounded-lg flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm">
                          <span className="material-symbols-outlined text-sm">download</span>
                          Download PDF
                        </button>
                        <Link
                          href="#"
                          className="text-slate-500 dark:text-slate-400 hover:text-[#000f22] dark:hover:text-white text-xs font-semibold underline underline-offset-4 decoration-slate-300"
                        >
                          Verify ID: {cert.verifyId}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Professional Offers (Left Side, takes 8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <h3 className="font-headline text-xl font-bold text-[#000f22] dark:text-white">
                Professional Offers
              </h3>
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200/50 dark:border-slate-800/50 shadow-sm flex flex-col gap-4">
                {/* Offer Letter Card */}
                <div className="flex items-center justify-between p-4 bg-[#f3f4f5] dark:bg-slate-800/40 rounded-lg group hover:bg-[#e7e8e9] dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0a2540] flex items-center justify-center text-white shrink-0">
                      <span className="material-symbols-outlined text-[#2fd9f4]">description</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#745b00] dark:text-[#f0c110] uppercase tracking-widest">
                        Glorious Labs
                      </p>
                      <h5 className="font-headline font-bold text-[#000f22] dark:text-white">
                        Senior Frontend Intern
                      </h5>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Issued March 15, 2026</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="px-2.5 py-1 bg-[#ffe08b] text-[#241a00] text-[10px] font-bold rounded-full uppercase">
                      ACTIVE OFFER
                    </span>
                    <button className="text-[#000f22] dark:text-white text-xs font-bold flex items-center gap-1 hover:opacity-70 transition-opacity">
                      <span className="material-symbols-outlined text-sm">download</span>
                      PDF
                    </button>
                  </div>
                </div>

                {/* Placeholder/Soon */}
                <div className="flex items-center justify-center p-8 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg">
                  <p className="text-slate-500 dark:text-slate-455 text-sm font-medium italic">
                    New offer letters will appear here once processed.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Summary/Stats (Right Side, takes 4 cols) */}
            <div className="lg:col-span-4">
              <div className="bg-[#0a2540] dark:bg-slate-900 rounded-xl p-6 text-white h-full flex flex-col justify-between border border-slate-800">
                <div>
                  <h4 className="font-headline text-lg font-bold mb-4">Internship Stats</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-sm opacity-70">Total Earned</span>
                      <span className="text-xl font-bold">02</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-sm opacity-70">Offers Received</span>
                      <span className="text-xl font-bold">01</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm opacity-70">Points Accumulated</span>
                      <span className="text-xl font-bold text-[#2fd9f4]">4,250</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#2fd9f4] mb-1">
                      Upcoming Goal
                    </p>
                    <p className="text-sm font-medium mb-3">Backend Master Certification</p>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#2fd9f4] w-[65%]"></div>
                    </div>
                    <p className="text-[10px] text-right mt-1 opacity-50">65% Complete</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Expand gallery prompt */}
            <div className="lg:col-span-12 mt-4">
              <div className="bg-[#f3f4f5] dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl p-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-3xl opacity-40">
                    add_task
                  </span>
                </div>
                <h3 className="font-headline text-xl font-bold text-[#000f22] dark:text-white mb-2">
                  Want to expand your gallery?
                </h3>
                <p className="text-slate-500 dark:text-slate-405 max-w-md mx-auto mb-8">
                  You're only 1 project away from earning your next verified certificate. Finish your active features to unlock it!
                </p>
                <Link
                  href="/dashboard/workspace/mern-stack"
                  className="bg-[#000f22] dark:bg-white text-white dark:text-[#000f22] px-8 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-colors active:scale-95"
                >
                  Resume Current Project
                </Link>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full border-t border-slate-200/50 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-900 py-8 px-12 flex flex-col md:flex-row justify-between items-center gap-4 mt-auto">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <span className="text-sm font-bold text-slate-900 dark:text-white font-headline">Glorious Labs</span>
            <p className="text-xs text-slate-500">© 2026 Glorious Labs. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Support</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
