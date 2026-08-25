'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarLink {
  label: string;
  href: string;
  icon: string;
}

const adminLinks: SidebarLink[] = [
  { label: 'Stats', href: '/admin', icon: 'dashboard' },
  { label: 'Students', href: '/admin/students', icon: 'group' },
  { label: 'Internships', href: '/admin/internships', icon: 'category' },
  { label: 'Project Assignments', href: '/admin/assignments', icon: 'assignment' },
  { label: 'Reviews', href: '/admin/reviews', icon: 'rate_review' },
  { label: 'Certificates', href: '/admin/certificates', icon: 'verified' },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 z-40 bg-slate-950 flex flex-col p-6 gap-4 border-r border-slate-800">
      <div className="mb-8">
        <Link href="/" className="inline-block">
          <h1 className="text-lg font-black text-white font-headline tracking-tighter">Admin Portal</h1>
          <p className="text-xs text-slate-400 font-medium">Management Console</p>
        </Link>
      </div>

      <nav className="flex flex-col gap-1 flex-1">
        {adminLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={isActive ? '#' : link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all active:opacity-90 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <span className="material-symbols-outlined text-base">
                {link.icon}
              </span>
              <span className="font-semibold text-sm">{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 border border-slate-700">
            AR
          </div>
          <div>
            <p className="text-sm font-bold text-white">Alex Rivera</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">Super Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
