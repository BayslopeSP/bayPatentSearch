import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Search } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Login data:', data);
    setIsLoading(false);
    navigate('/');
  };

  return (
    <div className="relative flex min-h-screen">
      {/* Left Side - Marketing */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative hidden w-1/2 overflow-hidden bg-gradient-brand lg:block"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 ai-network-bg" />
        <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
        
        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/30 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-accent/20 blur-3xl"
        />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-center px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {/* Logo */}
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary shadow-glow-teal">
                <Search className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="text-3xl font-bold tracking-tight text-foreground">
                Bay<span className="text-accent">Patent</span>Search
              </span>
            </div>

            <h1 className="mb-4 text-4xl font-bold leading-tight text-foreground lg:text-5xl">
              AI‑Powered Global
              <br />
              <span className="text-gradient-brand">Patent Discovery</span>
            </h1>

            <p className="mb-8 max-w-lg text-lg text-muted-foreground">
              Search millions of patents worldwide with intelligent ranking, 
              semantic understanding, and powerful analytics.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {['Semantic Search', 'Global Coverage', 'AI Ranking'].map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground"
                >
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative Lines */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-20"
          viewBox="0 0 800 200"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0 100 Q200 50 400 100 T800 100"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
          <motion.path
            d="M0 150 Q200 100 400 150 T800 150"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.3 }}
          />
        </svg>
      </motion.div>

      {/* Right Side - Login Form */}
      <div className="relative flex w-full items-center justify-center bg-background px-4 lg:w-1/2 lg:px-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 ai-network-bg opacity-30" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 w-full max-w-md"
        >
          {/* Mobile Logo */}
          <div className="mb-8 flex items-center justify-center gap-2 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-glow-teal-sm">
              <Search className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Bay<span className="text-accent">Patent</span>Search
            </span>
          </div>

          {/* Login Card */}
          <div className="glass-card p-8">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-2xl font-bold text-foreground">Welcome back</h2>
              <p className="text-muted-foreground">
                Sign in to explore AI‑powered patents
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    {...register('email')}
                    type="email"
                    placeholder="you@example.com"
                    className="pl-11"
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    {...register('password')}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="pl-11 pr-11"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-destructive">{errors.password.message}</p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Controller
                    name="rememberMe"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        id="rememberMe"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />
                  <label htmlFor="rememberMe" className="text-sm text-muted-foreground cursor-pointer">
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary transition-colors hover:text-accent"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="brand"
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="h-5 w-5 rounded-full border-2 border-current border-t-transparent"
                  />
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-primary/20" />
              <span className="text-sm text-muted-foreground">or</span>
              <div className="h-px flex-1 bg-primary/20" />
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{' '}
              <a href="#" className="font-medium text-primary transition-colors hover:text-accent">
                Sign up for free
              </a>
            </p>
          </div>

          {/* Beta Badge */}
          {/* <div className="mt-6 flex justify-center">
            <span className="rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
              Beta
            </span>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
