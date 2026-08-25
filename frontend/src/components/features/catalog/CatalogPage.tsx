'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Internship {
  id: string;
  title: string;
  domain: string;
  domainLabel: string;
  duration: string;
  difficulty: string;
  startingPrice: number;
  priceRange: string;
  description: string;
  tags: string[];
  featured?: boolean;
  trending?: boolean;
  open?: boolean;
  iconName: string;
}

const internshipsData: Internship[] = [
  {
    id: 'mern-stack',
    title: 'Enterprise MERN Stack Architect',
    domain: 'Full Stack',
    domainLabel: 'Full Stack Development',
    duration: '8 Weeks',
    difficulty: 'Intermediate',
    startingPrice: 149,
    priceRange: '₹149 - ₹299',
    description: 'MERN stack, responsive design, and scalable architecture.',
    tags: ['Next.js', 'MongoDB', 'Express', 'Node.js'],
    open: true,
    iconName: 'code',
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot & NLP Engineering',
    domain: 'Artificial Intelligence',
    domainLabel: 'Artificial Intelligence',
    duration: '4 Weeks',
    difficulty: 'Advanced',
    startingPrice: 119,
    priceRange: '₹119 - ₹249',
    description: 'Prompt engineering, LLMs, and AI application building.',
    tags: ['Python', 'OpenAI', 'LangChain', 'FastAPI'],
    open: true,
    featured: true,
    trending: true,
    iconName: 'psychology',
  },
  {
    id: 'ui-ux-design',
    title: 'Next-Gen Interface Systems',
    domain: 'UI/UX Design',
    domainLabel: 'Creative Design',
    duration: '6 Weeks',
    difficulty: 'Beginner',
    startingPrice: 99,
    priceRange: '₹99 - ₹199',
    description: 'Figma principles, typography scales, spacing tokens, and custom animation design.',
    tags: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems'],
    open: true,
    iconName: 'design_services',
  },
  {
    id: 'data-science',
    title: 'Predictive Analytics & Big Data',
    domain: 'Data Science',
    domainLabel: 'Data Science',
    duration: '12 Weeks',
    difficulty: 'Advanced',
    startingPrice: 149,
    priceRange: '₹149 - ₹299',
    description: 'Python, Pandas, and professional predictive modeling.',
    tags: ['Python', 'Pandas', 'Scikit-Learn', 'SQL'],
    open: true,
    iconName: 'monitoring',
  },
];

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [selectedPricing, setSelectedPricing] = useState<string>('All');
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  // Toggle domain filter
  const handleDomainChange = (domain: string) => {
    setSelectedDomains((prev) =>
      prev.includes(domain) ? prev.filter((d) => d !== domain) : [...prev, domain]
    );
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedDomains([]);
    setSelectedPricing('All');
    setSelectedDuration(null);
    setSelectedDifficulty(null);
  };

  // Filtered internships logic
  const filteredInternships = useMemo(() => {
    return internshipsData.filter((item) => {
      // Search text match
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Domain match
      const matchesDomain =
        selectedDomains.length === 0 || selectedDomains.includes(item.domain);

      // Pricing track match
      let matchesPricing = true;
      if (selectedPricing === 'Basic') {
        matchesPricing = item.startingPrice <= 149;
      } else if (selectedPricing === 'Pro') {
        matchesPricing = item.startingPrice >= 149;
      }

      // Duration match
      const matchesDuration = !selectedDuration || item.duration === selectedDuration;

      // Difficulty match
      const matchesDifficulty = !selectedDifficulty || item.difficulty === selectedDifficulty;

      return matchesSearch && matchesDomain && matchesPricing && matchesDuration && matchesDifficulty;
    });
  }, [searchQuery, selectedDomains, selectedPricing, selectedDuration, selectedDifficulty]);

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] min-h-screen font-sans flex flex-col antialiased">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm shadow-slate-900/5">
        <nav className="flex justify-between items-center px-8 h-16 max-w-full mx-auto">
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
            <Link href="/" className="text-slate-500 hover:text-slate-900 transition-colors">
              Home
            </Link>
            <Link href="/catalog" className="text-slate-900 border-b-2 border-slate-900 pb-1">
              Catalog
            </Link>
            <Link href="/dashboard/certificates" className="text-slate-500 hover:text-slate-900 transition-colors">
              Success Stories
            </Link>
            <Link href="/login" className="text-slate-500 hover:text-slate-900 transition-colors">
              Dashboard
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="font-bold text-sm text-slate-900 hover:opacity-80 transition-all active:scale-95 duration-200">
              Login
            </Link>
            <Link href="/register" className="bg-[#0a2540] hover:opacity-90 text-white px-6 py-2 rounded-lg font-bold text-sm transition-all active:scale-95 duration-200">
              Join
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-20 pb-16 px-4 md:px-8 max-w-7xl mx-auto flex-1 w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#000f22] tracking-tight mb-4">
            Internships Catalog
          </h1>
          <p className="text-slate-600 max-w-2xl text-lg">
            Curated high-performance internships designed for the next generation of industry leaders. Choose between Basic or Pro tracks to match your career goals.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-[#f3f4f5] rounded-xl p-6 sticky top-24 border border-slate-200/40">
              <h2 className="text-lg font-bold text-[#000f22] mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-700">tune</span>
                Filters
              </h2>

              <div className="space-y-8">
                {/* Domain */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Domain</label>
                  <div className="space-y-2">
                    {['Full Stack', 'Artificial Intelligence', 'UI/UX Design', 'Data Science'].map((domain) => (
                      <label key={domain} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedDomains.includes(domain)}
                          onChange={() => handleDomainChange(domain)}
                          className="rounded border-slate-300 text-[#000f22] focus:ring-[#f0c110]"
                        />
                        <span className="text-sm font-medium text-slate-700 group-hover:text-[#000f22] transition-colors">
                          {domain}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Pricing Track */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Track Pricing</label>
                  <select
                    value={selectedPricing}
                    onChange={(e) => setSelectedPricing(e.target.value)}
                    className="w-full bg-[#e1e3e4] border-none rounded-lg text-sm font-medium p-3 focus:ring-2 focus:ring-[#f0c110] transition-all bg-white"
                  >
                    <option value="All">All Prices</option>
                    <option value="Basic">Basic Track (₹99 - ₹149)</option>
                    <option value="Pro">Pro Track (₹199 - ₹299)</option>
                  </select>
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Duration</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['4 Weeks', '6 Weeks', '8 Weeks', '12 Weeks'].map((dur) => (
                      <button
                        key={dur}
                        onClick={() => setSelectedDuration(selectedDuration === dur ? null : dur)}
                        className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                          selectedDuration === dur
                            ? 'bg-[#000f22] text-white'
                            : 'bg-[#e7e8e9] text-[#000f22] hover:bg-[#e1e3e4]'
                        }`}
                      >
                        {dur}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Difficulty */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Difficulty</label>
                  <div className="flex flex-col gap-2">
                    {['Beginner', 'Intermediate', 'Advanced'].map((diff) => (
                      <button
                        key={diff}
                        onClick={() => setSelectedDifficulty(selectedDifficulty === diff ? null : diff)}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedDifficulty === diff
                            ? 'bg-[#000f22]/10 border border-[#000f22]'
                            : 'hover:bg-slate-200/50'
                        }`}
                      >
                        <span>{diff}</span>
                        <span
                          className={`w-3 h-3 rounded-full ${
                            diff === 'Beginner'
                              ? 'bg-[#2fd9f4]'
                              : diff === 'Intermediate'
                              ? 'bg-[#f0c110]'
                              : 'bg-red-500'
                          }`}
                        ></span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleResetFilters}
                  className="w-full py-3 bg-[#e1e3e4] text-[#43474d] font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-slate-300 transition-all active:scale-[0.98]"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </aside>

          {/* Grid & Search */}
          <section className="flex-1">
            {/* Search Bar */}
            <div className="mb-8 relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                search
              </span>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-[#f3f4f5] border border-slate-200/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#f0c110] transition-all text-slate-900 placeholder:text-slate-400 font-medium"
                placeholder="Search internships (e.g. MERN, AI Chatbot...)"
                type="text"
              />
            </div>

            {/* Catalog Grid */}
            {filteredInternships.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredInternships.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white rounded-2xl overflow-hidden hover:bg-[#f3f4f5] border border-slate-100 transition-all duration-300 relative flex flex-col justify-between"
                  >
                    <div>
                      <div className="aspect-video bg-[#0a2540] relative overflow-hidden flex items-center justify-center">
                        <span className="material-symbols-outlined text-white/5 text-9xl absolute -bottom-8 -right-8">
                          {item.iconName}
                        </span>
                        <span className="relative z-10 text-white font-headline font-bold text-xl px-4 text-center">
                          {item.title}
                        </span>
                        <div className="absolute top-4 left-4 flex gap-2">
                          {item.open && (
                            <span className="bg-[#a2eeff] text-[#001f25] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                              Open
                            </span>
                          )}
                          {item.featured && (
                            <span className="bg-[#ffe08b] text-[#241a00] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                              Featured
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-[11px] font-bold text-slate-500 tracking-widest uppercase">
                            {item.domainLabel}
                          </span>
                          <div className="flex flex-col items-end">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                              Starting from
                            </span>
                            <span className="text-lg font-extrabold text-[#000f22]">
                              ₹{item.startingPrice}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-[#000f22] mb-3">{item.title}</h3>
                        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{item.description}</p>

                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-sm text-slate-400">schedule</span>
                            <span className="text-xs text-slate-600 font-medium">{item.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-sm text-slate-400">equalizer</span>
                            <span className="text-xs text-slate-600 font-medium">{item.difficulty}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-bold bg-[#edeeef] text-[#43474d] px-2 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Tracks Available Badge */}
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#d2e4ff]/30 border border-[#d2e4ff] rounded-lg mb-4">
                          <span className="material-symbols-outlined text-sm text-[#000f22]">layers</span>
                          <span className="text-[10px] font-bold text-[#314865] uppercase tracking-wider">
                            Basic & Pro Tracks Available
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <Link
                        href={`/catalog/${item.id}`}
                        className="block w-full text-center py-3 bg-gradient-to-r from-[#000f22] to-[#0a2540] text-white rounded-xl font-bold text-sm tracking-tight hover:opacity-90 active:scale-[0.98] transition-all"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-100 p-8">
                <span className="material-symbols-outlined text-5xl text-slate-300 mb-4">search_off</span>
                <p className="text-slate-600 font-medium text-lg">No internships found matching your filters.</p>
                <button
                  onClick={handleResetFilters}
                  className="mt-4 px-6 py-2 bg-[#000f22] text-white rounded-lg font-semibold text-sm hover:opacity-90 transition-all"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 bg-[#f8f9fa] mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-8 gap-4 max-w-7xl mx-auto">
          <div className="flex flex-col gap-1">
            <span className="text-base font-bold text-slate-900">Glorious Labs</span>
            <span className="font-inter text-xs text-slate-500">© 2026 Glorious Labs. All rights reserved.</span>
          </div>
          <div className="flex gap-8">
            <Link href="#" className="font-inter text-xs text-slate-500 hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="font-inter text-xs text-slate-500 hover:text-slate-900 transition-colors">Terms of Service</Link>
            <Link href="#" className="font-inter text-xs text-slate-500 hover:text-slate-900 transition-colors">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
