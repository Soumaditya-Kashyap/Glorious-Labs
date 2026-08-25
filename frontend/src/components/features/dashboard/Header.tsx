'use client';

import Link from 'next/link';

interface HeaderProps {
  title?: string;
}

export default function Header({ title = 'Dashboard Overview' }: HeaderProps) {
  return (
    <header className="glass-header sticky top-0 z-30 h-16 flex items-center justify-between px-10 border-b border-slate-200/50 dark:border-slate-800/50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl">
      <h1 className="font-headline font-bold text-xl tracking-tight text-[#000f22] dark:text-white">
        {title}
      </h1>
      <div className="flex items-center gap-6">
        <button className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <Link 
          href="/catalog" 
          className="btn-gradient px-6 py-2 rounded-lg text-white text-sm font-semibold tracking-wide bg-gradient-to-r from-[#000f22] to-[#0a2540] hover:opacity-90 active:scale-95 transition-all shadow-sm"
        >
          Apply for New
        </Link>
      </div>
    </header>
  );
}
