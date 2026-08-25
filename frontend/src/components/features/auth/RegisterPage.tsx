'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    college: '',
    semester: '',
    branch: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          semester: formData.semester ? parseInt(formData.semester) : undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      // Store token
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('user', JSON.stringify(data.data.user));

      // Redirect to dashboard
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0A2540] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#22D3EE] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#F5C518] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22D3EE] rounded-full blur-[120px] opacity-20"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-between p-12 text-white w-full">
          {/* Logo */}
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 w-fit">
            <Image
              src="/GL_Name_logo.png"
              alt="Glorious Labs"
              width={200}
              height={40}
              className="object-contain w-auto h-10 brightness-0 invert"
            />
          </div>

          {/* Hero Content */}
          <div className="space-y-8 max-w-lg">
            <h1 className="text-5xl font-bold leading-tight">
              Start your{' '}
              <span className="text-[#22D3EE]">professional</span> journey today.
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Join thousands of students building real-world projects and gaining industry experience.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#22D3EE] mt-1 flex-shrink-0" size={20} />
                <div>
                  <div className="font-semibold">Industry-Standard Projects</div>
                  <div className="text-sm text-gray-400">Build real applications with professional guidance</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#22D3EE] mt-1 flex-shrink-0" size={20} />
                <div>
                  <div className="font-semibold">Verified Certificates</div>
                  <div className="text-sm text-gray-400">Get recognized for your achievements</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#22D3EE] mt-1 flex-shrink-0" size={20} />
                <div>
                  <div className="font-semibold">Performance-Based Offers</div>
                  <div className="text-sm text-gray-400">Stand out with official offer letters</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-16">
            <div>
              <div className="text-4xl font-bold">500+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Partner Labs</div>
            </div>
            <div>
              <div className="text-4xl font-bold">12k</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Active Interns</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8 bg-[#F8F9FA] overflow-y-auto">
        <div className="w-full max-w-md my-8">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center mb-6 bg-[#0A2540] rounded-xl px-4 py-3 w-fit">
            <Image
              src="/GL_Name_logo.png"
              alt="Glorious Labs"
              width={160}
              height={32}
              className="object-contain w-auto h-8 brightness-0 invert"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-gray-200">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2540] mb-2">Create your account</h2>
              <p className="text-sm sm:text-base text-gray-600">
                Start your journey to professional excellence.
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-[#0A2540] mb-1.5">
                  FULL NAME
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:border-transparent transition-all"
                  placeholder="Rahul Sharma"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-[#0A2540] mb-1.5">
                  EMAIL ADDRESS
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:border-transparent transition-all"
                  placeholder="name@university.edu"
                />
              </div>

              {/* College Field */}
              <div>
                <label htmlFor="college" className="block text-xs sm:text-sm font-medium text-[#0A2540] mb-1.5">
                  COLLEGE / UNIVERSITY
                </label>
                <input
                  id="college"
                  type="text"
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:border-transparent transition-all"
                  placeholder="IIT Delhi"
                />
              </div>

              {/* Branch and Semester Row */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="branch" className="block text-xs sm:text-sm font-medium text-[#0A2540] mb-1.5">
                    BRANCH
                  </label>
                  <input
                    id="branch"
                    type="text"
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:border-transparent transition-all"
                    placeholder="CSE"
                  />
                </div>
                <div>
                  <label htmlFor="semester" className="block text-xs sm:text-sm font-medium text-[#0A2540] mb-1.5">
                    SEMESTER
                  </label>
                  <select
                    id="semester"
                    value={formData.semester}
                    onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                      <option key={sem} value={sem}>
                        {sem}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-xs sm:text-sm font-medium text-[#0A2540] mb-1.5">
                  PASSWORD
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:border-transparent transition-all pr-12"
                    placeholder="••••••••"
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <p className="mt-1.5 text-xs text-gray-500">Minimum 6 characters</p>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0A2540] text-white py-2.5 sm:py-3 px-4 rounded-lg font-medium hover:bg-[#0d2f52] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group mt-5 text-sm sm:text-base"
              >
                {loading ? (
                  'Creating account...'
                ) : (
                  <>
                    Create Account
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Terms */}
              <p className="text-xs text-gray-500 text-center mt-3">
                By creating an account, you agree to our{' '}
                <Link href="/terms" className="text-[#F5C518] hover:text-[#d4a814]">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-[#F5C518] hover:text-[#d4a814]">
                  Privacy Policy
                </Link>
              </p>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link
                  href="/login"
                  className="text-[#F5C518] hover:text-[#d4a814] font-medium transition-colors"
                >
                  Sign In
                </Link>
              </p>
            </div>

            {/* Footer Links */}
            <div className="mt-6 flex items-center justify-center gap-4 sm:gap-6 text-xs text-gray-500 flex-wrap">
              <div className="flex items-center gap-2">
                <Lock size={12} />
                <span className="text-[10px] sm:text-xs">END-TO-END ENCRYPTED</span>
              </div>
              <Link href="/privacy" className="hover:text-gray-700 transition-colors text-[10px] sm:text-xs">
                PRIVACY
              </Link>
              <Link href="/security" className="hover:text-gray-700 transition-colors text-[10px] sm:text-xs">
                SECURITY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
