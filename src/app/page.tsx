"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download, Monitor, Globe, HardDrive, Shield, CheckCircle2, 
  ChevronRight, Cpu, Zap, Star, Github, ArrowRight, Play,
  Users, MapPin, TrendingUp, Terminal, FileCode, Sparkles,
  Windows, BadgeCheck, Rocket, Target, FireIcon
} from "lucide-react";
import { Button } from "@/components/ui/button"; 
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const stats = [
  { value: "2.5M+", label: "Downloads", icon: Download, color: "from-cyan-400 to-blue-500" },
  { value: "850K+", label: "Active Users", icon: Users, color: "from-green-400 to-emerald-500" },
  { value: "150+", label: "Countries", icon: MapPin, color: "from-purple-400 to-violet-500" },
  { value: "+45%", label: "FPS Gain", icon: TrendingUp, color: "from-orange-400 to-red-500" },
];

const platforms = [
  {
    id: "windows",
    name: "Windows App",
    subtitle: "Windows 7/8/10/11",
    icon: Monitor,
    description: "Full desktop application with all features unlocked",
    downloadSize: "355 MB",
    recommended: true,
    gradient: "from-blue-600 via-blue-500 to-cyan-400",
    glow: "shadow-blue-500/30",
    features: ["Full desktop app", "All features unlocked", "Works offline", "Auto-updates"],
  },
  {
    id: "app",
    name: "Browser App",
    subtitle: "Any Operating System",
    icon: Globe,
    description: "Run instantly in any browser without installation as a native app only for preview app",
    downloadSize: "15 KB",
    recommended: false,
    gradient: "from-violet-600 via-purple-500 to-fuchsia-400",
    glow: "shadow-purple-500/30",
    features: ["No installation", "Cross-platform", "Instant use", "Lightweight"],
  },
];

const additionalOptions = [
  { name: "Portable Edition", desc: "Run from USB", size: "355 MB", icon: HardDrive, format: "windows", color: "text-orange-400" },
  { name: "Standalone HTML", desc: "Single file", size: "15 KB", icon: FileCode, format: "app", color: "text-green-400" },
  { name: "Source Code", desc: "Build yourself", size: "~5 MB", icon: Github, link: "https://github.com/brutal-45/GAME-FPS-BOOSTER", color: "text-blue-400" },
];

const features = [
  { icon: Zap, title: "One-Click Boost", desc: "Increase FPS by 30-60% instantly", stat: "+45%", gradient: "from-yellow-400 to-orange-500" },
  { icon: Shield, title: "Anti-Cheat Safe", desc: "Works with all major anti-cheats", stat: "100%", gradient: "from-green-400 to-emerald-500" },
  { icon: Cpu, title: "Emulator Optimized", desc: "BlueStacks, LDPlayer, Nox", stat: "6+", gradient: "from-blue-400 to-cyan-500" },
  { icon: Monitor, title: "Live Monitoring", desc: "Real-time FPS & system stats", stat: "LIVE", gradient: "from-purple-400 to-pink-500" },
];

const steps = [
  { num: "01", title: "Download", desc: "Get the Windows App or Browser version", icon: Download },
  { num: "02", title: "Launch", desc: "Open BRUTAL-FPS on your device", icon: Rocket },
  { num: "03", title: "Boost!", desc: "Click BOOST and enjoy higher FPS!", icon: Target },
];

const testimonials = [
  { quote: "Went from 45 FPS to 120 FPS on my old laptop. This is incredible!", author: "ProGamer_X", rating: 5 },
  { quote: "Finally a booster that actually works and is completely free!", author: "CasualPlayer", rating: 5 },
  { quote: "Best gaming tool I've ever used. Simple and effective.", author: "StreamKing", rating: 5 },
];

export default function DownloadPage() {
  const [downloading, setDownloading] = useState<string | null>(null);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const version = "1.0.0";

  const handleDownload = async (type: string) => {
    setDownloading(type);
    try {
      const response = await fetch('/api/download?format=' + type);
      if (!response.ok) throw new Error('Failed');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = type === 'windows' ? 'BRUTAL-FPS-Windows-Portable.zip' : 'BRUTAL-FPS.html';
      a.click();
      window.URL.revokeObjectURL(url);
      toast.success("🚀 Download started!", { description: "Enjoy your boosted FPS!" });
    } catch {
      toast.error("Download failed", { description: "Please try again" });
    } finally {
      setTimeout(() => setDownloading(null), 500);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-red-600/20 to-orange-600/20 blur-[100px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-violet-600/15 to-purple-600/15 blur-[80px]"
          animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-cyan-600/10 to-blue-600/10 blur-[120px]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-orange-500/30">
                ⚡
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-950 animate-pulse" />
            </div>
            <div>
              <h1 className="font-bold text-lg tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">BRUTAL-FPS</h1>
              <p className="text-[10px] text-zinc-500 -mt-0.5">Gaming Booster</p>
            </div>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-1">
            <a href="#features" className="px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition">Features</a>
            <a href="#requirements" className="px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition">Requirements</a>
            <a href="https://github.com/brutal-45/GAME-FPS-BOOSTER" target="_blank" rel="noreferrer" className="px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition flex items-center gap-2">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button onClick={() => handleDownload('windows')} className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg shadow-orange-500/25 gap-2">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download</span>
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-900 border border-zinc-700 mb-8"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-zinc-300">Version {version} Released</span>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 border text-xs">FREE</Badge>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative inline-block mb-8"
          >
            <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 flex items-center justify-center text-6xl shadow-2xl shadow-orange-500/40 relative overflow-hidden">
              <span className="relative z-10">⚡</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent"
                animate={{ y: ['100%', '-100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            <motion.div 
              className="absolute -top-3 -right-3 flex items-center gap-1 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <BadgeCheck className="w-3 h-3" /> VERIFIED
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black mb-4 tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              GET
            </span>
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent ml-2">
              BRUTAL-FPS
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-zinc-400 mb-2 max-w-2xl mx-auto"
          >
            The ultimate <span className="text-white font-semibold">100% FREE</span> gaming performance booster
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent font-bold mb-10"
          >
            Unleash Every Frame. No Mercy.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                onClick={() => handleDownload('windows')}
                disabled={downloading === 'windows'}
                className="h-14 px-10 text-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-xl shadow-orange-500/30 rounded-xl gap-2 group"
              >
                {downloading === 'windows' ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    Download for Windows
                    <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </>
                )}
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleDownload('app')}
                disabled={downloading === 'app'}
                className="h-14 px-10 text-lg border-zinc-700 hover:bg-zinc-800 rounded-xl gap-2"
              >
                <Globe className="w-5 h-5" />
                Browser Version
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all cursor-default"
              >
                <s.icon className={`w-5 h-5 mx-auto mb-2 bg-gradient-to-r ${s.color} bg-clip-text`} style={{ color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
                <div className={`text-3xl font-bold bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>{s.value}</div>
                <div className="text-sm text-zinc-500">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section id="downloads" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Choose Your <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Platform</span>
            </h2>
            <p className="text-zinc-500">Select the version that fits your needs</p>
          </motion.div>

          {/* Platform Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {platforms.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setActiveCard(p.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <Card className={`relative p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border transition-all duration-300 overflow-hidden ${
                  p.recommended 
                    ? 'border-orange-500/50 ring-1 ring-orange-500/20' 
                    : 'border-zinc-800 hover:border-zinc-700'
                }`}>
                  {/* Glow effect */}
                  <AnimatePresence>
                    {activeCard === p.id && (
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${p.gradient} opacity-5`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.05 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </AnimatePresence>
                  
                  {p.recommended && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500" />
                  )}
                  
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-5 relative">
                    <motion.div 
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center shadow-lg ${p.glow} shrink-0`}
                      whileHover={{ scale: 1.05, rotate: 5 }}
                    >
                      <p.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold">{p.name}</h3>
                        {p.recommended && (
                          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-xs gap-1">
                            <Star className="w-3 h-3" /> Recommended
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-zinc-500">{p.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-zinc-400 mb-5">{p.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {p.features.map((f, j) => (
                      <motion.div 
                        key={j} 
                        className="flex items-center gap-2 text-sm text-zinc-400"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {f}
                      </motion.div>
                    ))}
                  </div>

                  {/* Info */}
                  <div className="flex items-center gap-4 text-xs text-zinc-500 mb-5 pb-5 border-b border-zinc-800">
                    <span className="flex items-center gap-1.5"><HardDrive className="w-3.5 h-3.5" /> {p.downloadSize}</span>
                    <span>v{version}</span>
                  </div>

                  {/* Button */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      className={`w-full h-12 rounded-xl gap-2 ${
                        p.recommended 
                          ? `bg-gradient-to-r ${p.gradient} text-white shadow-lg ${p.glow}` 
                          : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                      }`}
                      onClick={() => handleDownload(p.id)}
                      disabled={downloading === p.id}
                    >
                      {downloading === p.id ? (
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          Download {p.name}
                        </>
                      )}
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Options */}
          <div className="grid sm:grid-cols-3 gap-3">
            {additionalOptions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card 
                  className="p-4 rounded-xl bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50 cursor-pointer transition-all group"
                  onClick={() => item.link ? window.open(item.link, '_blank') : handleDownload(item.format!)}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <div className="flex-1">
                      <div className="font-medium text-sm">{item.name}</div>
                      <div className="text-xs text-zinc-500">{item.desc} • {item.size}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gradient-to-b from-zinc-900/50 to-transparent">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Why <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">BRUTAL-FPS</span>?
            </h2>
            <p className="text-zinc-500">Powerful features for maximum gaming performance</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 rounded-2xl bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all h-full group">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <f.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold text-zinc-600 group-hover:text-zinc-400 transition-colors">{f.stat}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
                  <p className="text-sm text-zinc-500">{f.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">System Requirements</h2>
            <p className="text-zinc-500">Minimal requirements, maximum performance</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Windows App", icon: Monitor, gradient: "from-blue-500 to-cyan-500", items: ["Windows 7/8/10/11 (64-bit)", "500 MB free disk space", "2 GB RAM minimum", "No installation required"] },
              { title: "Browser App", icon: Globe, gradient: "from-violet-500 to-purple-500", items: ["Any modern web browser", "Windows, Mac, Linux, Mobile", "1 MB free disk space", "Works completely offline"] }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-6 rounded-2xl bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {item.items.map((r, j) => (
                      <motion.li 
                        key={j} 
                        className="flex items-center gap-3 text-sm text-zinc-400"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {r}
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gradient-to-b from-zinc-900/50 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">How It Works</h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 rounded-2xl bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-all text-center group">
                  <div className="text-5xl font-black text-zinc-800 group-hover:text-zinc-700 transition-colors mb-2">{item.num}</div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-orange-400" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              What <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Gamers</span> Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-6 rounded-2xl bg-zinc-900/50 border-zinc-800 h-full">
                  <div className="flex gap-1 mb-3">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-zinc-300 mb-4 text-sm italic">"{t.quote}"</p>
                  <p className="text-xs text-zinc-500">— {t.author}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 border-zinc-800 overflow-hidden">
              {/* Glow effects */}
              <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-red-500/5" />
              
              <div className="relative text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-3xl mx-auto mb-6 shadow-xl shadow-orange-500/30"
                >
                  ⚡
                </motion.div>
                
                <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                  Ready to <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Boost</span>?
                </h2>
                <p className="text-zinc-400 mb-8">Join 2.5 million+ gamers worldwide</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      onClick={() => handleDownload('windows')}
                      disabled={downloading === 'windows'}
                      className="h-14 px-10 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-xl shadow-orange-500/30 rounded-xl gap-2"
                    >
                      {downloading === 'windows' ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Download className="w-5 h-5" />
                          Download for Windows
                        </>
                      )}
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => handleDownload('app')}
                      disabled={downloading === 'app'}
                      className="h-14 px-10 border-zinc-700 hover:bg-zinc-800 rounded-xl gap-2"
                    >
                      <Globe className="w-5 h-5" />
                      Browser Version
                    </Button>
                  </motion.div>
                </div>

                <div className="mt-8 flex items-center justify-center gap-6 text-xs text-zinc-500">
                  <span className="flex items-center gap-1">💰 Free</span>
                  <span className="flex items-center gap-1">🚫 No Ads</span>
                  <span className="flex items-center gap-1">🔓 No Paywalls</span>
                  <span className="flex items-center gap-1">📖 Open Source</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-sm">⚡</div>
            <span className="font-bold">BRUTAL-FPS</span>
            <span className="text-zinc-600 text-sm">v{version}</span>
          </div>
          <div className="flex items-center gap-5 text-sm text-zinc-500">
            <a href="https://github.com/brutal-45/GAME-FPS-BOOSTER" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <span className="text-orange-400 font-medium">Brutal Tools</span>
            <span className="text-zinc-700">MIT License</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
