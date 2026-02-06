import React, { useState, FormEvent } from "react";
import { Mail, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // TODO: yahan baad me signup API (FastAPI) integrate karna hai.
    // Abhi ke liye dummy success: agar sab field bhari hain to /search pe bhej do.
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      alert("Please fill all fields");
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Signup success ke baad search page pe le jao
    navigate("/search");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2C3531] via-[#116466] to-[#2C3531] text-[#D1E8E2]">
      <div className="mx-4 grid w-full max-w-5xl overflow-hidden rounded-3xl bg-[#071317]/90 shadow-[0_0_40px_rgba(0,0,0,0.7)] md:grid-cols-2">
        {/* Left marketing / brand panel */}
        <div className="relative hidden flex-col justify-between bg-gradient-to-b from-[#116466] via-[#0b292b] to-[#2C3531] px-8 py-10 text-[#D1E8E2] md:flex">
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0b292b]/70 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <span className="text-2xl text-[#FFCB9A]">⌕</span>
              </div>
              <span>
                Bay<span className="text-[#FFCB9A]">Patent</span>Search
              </span>
            </div>

            <div className="mt-10 space-y-4">
              <h1 className="text-3xl font-semibold leading-tight">
                Create your
                <span className="block text-[#FFCB9A]">
                  AI-powered patent workspace.
                </span>
              </h1>
              <p className="text-sm text-[#D1E8E2]/85">
                Start a free account to explore global patent data with
                intelligent ranking, semantic understanding and deep claims
                analysis.
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-3 text-xs text-[#D1E8E2]/80">
            <p>
              ✓ Semantic search across title, abstract, claims & description
            </p>
            <p>✓ Monitor assignees and inventors in a single dashboard</p>
            <p>✓ No credit card required to get started</p>
          </div>
        </div>

        {/* Right signup form */}
        <div className="flex flex-col justify-center px-6 py-10 md:px-10">
          <div className="mb-6 text-center md:text-left">
            <h2 className="text-2xl font-semibold">Create your account</h2>
            <p className="mt-1 text-sm text-[#D1E8E2]/75">
              Sign up for free to start searching AI-powered patents.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full name */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block font-medium">
                Full name
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#D1E8E2]/60">
                  <User className="h-4 w-4" />
                </span>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#20393c] bg-[#071317] py-2.5 pl-10 pr-3 text-sm text-[#D1E8E2] placeholder:text-[#D1E8E2]/40 outline-none transition focus:border-[#116466] focus:ring-2 focus:ring-[#116466]/60"
                  placeholder="Your name"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block font-medium">
                Work email
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#D1E8E2]/60">
                  <Mail className="h-4 w-4" />
                </span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#20393c] bg-[#071317] py-2.5 pl-10 pr-3 text-sm text-[#D1E8E2] placeholder:text-[#D1E8E2]/40 outline-none transition focus:border-[#116466] focus:ring-2 focus:ring-[#116466]/60"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block font-medium">
                Password
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#D1E8E2]/60">
                  <Lock className="h-4 w-4" />
                </span>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#20393c] bg-[#071317] py-2.5 pl-10 pr-3 text-sm text-[#D1E8E2] placeholder:text-[#D1E8E2]/40 outline-none transition focus:border-[#116466] focus:ring-2 focus:ring-[#116466]/60"
                  placeholder="Create a strong password"
                />
              </div>
            </div>

            {/* Confirm password */}
            <div className="space-y-1 text-sm">
              <label htmlFor="confirmPassword" className="block font-medium">
                Confirm password
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#D1E8E2]/60">
                  <Lock className="h-4 w-4" />
                </span>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#20393c] bg-[#071317] py-2.5 pl-10 pr-3 text-sm text-[#D1E8E2] placeholder:text-[#D1E8E2]/40 outline-none transition focus:border-[#116466] focus:ring-2 focus:ring-[#116466]/60"
                  placeholder="Repeat your password"
                />
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 pt-1 text-xs text-[#D1E8E2]/70">
              <input
                id="terms"
                type="checkbox"
                className="mt-0.5 h-3.5 w-3.5 rounded border-[#20393c] bg-[#071317] text-[#116466] focus:ring-[#116466]"
              />
              <label htmlFor="terms">
                I agree to the{" "}
                <span className="text-[#FFCB9A]">Terms of Service</span> and{" "}
                <span className="text-[#FFCB9A]">Privacy Policy</span>.
              </label>
            </div>

            <button
              type="submit"
              className="mt-3 w-full rounded-xl bg-[#116466] py-2.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(17,100,102,0.9)] transition hover:bg-[#0e4e52]"
            >
              Create account
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-[#D1E8E2]/75">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold text-[#FFCB9A] hover:text-[#FFD9B9]"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
