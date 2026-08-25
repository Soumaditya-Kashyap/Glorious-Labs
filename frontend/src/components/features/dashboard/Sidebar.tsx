'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface SidebarLink {
  label: string;
  href: string;
  icon: string;
}

const sidebarLinks: SidebarLink[] = [
  { label: 'Home', href: '/dashboard', icon: 'home' },
  { label: 'My Internships', href: '/dashboard', icon: 'work' },
  { label: 'Projects', href: '/dashboard', icon: 'assignment' },
  { label: 'Submissions', href: '/dashboard', icon: 'send' },
  { label: 'Certificates', href: '/dashboard/certificates', icon: 'verified' },
  { label: 'Profile', href: '/dashboard/profile', icon: 'person' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-slate-50 dark:bg-slate-900 flex flex-col p-4 gap-2 z-40 border-r border-slate-200/50 dark:border-slate-800/50">
        <Link href="/" className="flex items-center px-1">
          <Image
            src="/GL_Name_logo.png"
            alt="Glorious Labs"
            width={180}
            height={36}
            className="object-contain h-8 w-auto dark:brightness-0 dark:invert"
          />
        </Link>
        <p className="font-inter text-sm font-medium text-slate-500 mt-1">Intern Dashboard</p>

      <nav className="flex-1 flex flex-col gap-1 mt-4">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all active:scale-[0.98] font-inter text-sm font-medium ${
                isActive
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:translate-x-1 transition-transform'
              }`}
            >
              <span className={`material-symbols-outlined ${isActive ? 'text-primary' : ''}`} style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>
                {link.icon}
              </span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto p-4 bg-white dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-800/50">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[#d2e4ff] text-[#001c37] flex items-center justify-center font-bold">
            JD
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-semibold truncate text-slate-900 dark:text-white">John Doe</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Active Intern</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
