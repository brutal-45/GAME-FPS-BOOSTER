"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Download, Monitor, Globe, Cpu, HardDrive, 
  Shield, CheckCircle2, ChevronRight, ExternalLink,
  Terminal, Zap, Star, Play, ArrowRight, 
  FileCode, Package, Sparkles, Users, MapPin, TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const platforms = [
  {
    id: "windows",
    name: "Bare Metal",
    subtitle: "Windows 7/8/10/11",
    icon: Monitor,
    description: "Install directly on your PC for maximum performance",
    downloadSize: "355 MB",
    version: "1.0.0",
    recommended: true,
    gradient: "from-blue-600 to-cyan-500",
    features: ["Full desktop app", "All features unlocked", "Works offline", "Auto-updates"],
  },
  {
    id: "app",
    name: "Browser App",
    subtitle: "Any Operating System",
    icon: Globe,
    description: "Run in any browser, no installation needed",
    downloadSize: "15 KB",
    version: "1.0.0",
    recommended: false,
    gradient: "from-purple-600 to-pink-500",
    features: ["No installation", "Cross-platform", "Instant use", "Lightweight"],
  },
];

const additionalOptions = [
  { id: "portable", name: "Portable Edition", subtitle: "USB Drive", icon: HardDrive, downloadSize: "355 MB", format: "windows", gradient: "from-orange-500 to-amber-500" },
  { id: "standalone", name: "Standalone HTML", subtitle: "Single File", icon: FileCode, downloadSize: "15 KB", format: "app", gradient: "from-emerald-500 to-green-500" },
  { id: "source", name: "Source Code", subtitle: "GitHub", icon: Terminal, downloadSize: "~5 MB", format: null, gradient: "from-slate-500 to-gray-500", link: "https://github.com/brutal-tools/brutal-fps" },
];

const features = [
  { icon: Zap, title: "Instant Boost", description: "30-60% FPS increase with one click", gradient: "from-yellow-500 to-orange-500", stat: "+45%" },
  { icon: Shield, title: "Anti-Cheat Safe", description: "Compatible with all major anti-cheats", gradient: "from-green-500 to-emerald-500", stat: "100%" },
  { icon: Cpu, title: "Emulator Ready", description: "Optimized for BlueStacks, LDPlayer", gradient: "from-blue-500 to-cyan-500", stat: "6+" },
  { icon: Monitor, title: "Live Monitoring", description: "Real-time FPS, CPU, GPU stats", gradient: "from-purple-500 to-pink-500", stat: "Live" },
];

const stats = [
  { value: "2.5M+", label: "Downloads", icon: Download, color: "text-blue-400" },
  { value: "850K+", label: "Active Users", icon: Users, color: "text-green-400" },
  { value: "150+", label: "Countries", icon: MapPin, color: "text-purple-400" },
  { value: "+45%", label: "FPS Gain", icon: TrendingUp, color: "text-orange-400" },
];

const antiCheats = ["Vanguard", "Easy Anti-Cheat", "BattlEye", "VAC", "FACEIT", "RICOCHET"];

export default function DownloadPage() {
  const [mounted, setMounted] = useState(false);
  const [downloading, setDownloading] = useState<string | null>(null);
  const version = "1.0.0";

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDownload = async (type: string) => {
    setDownloading(type);
    try {
      const response = await fetch('/api/download?format=' + type);
      if (!response.ok) throw new Error('Download failed');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = type === 'windows' ? 'BRUTAL-FPS-Windows-Portable.zip' : 'BRUTAL-FPS.html';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      toast.success("Download Complete!", { description: type === 'windows' ? "Extract and run BRUTAL-FPS.exe!" : "Open the HTML file in your browser!" });
    } catch {
      toast.error("Download Failed", { description: "Please try again" });
    } finally {
      setTimeout(() => setDownloading(null), 500);
    }
  };

  return (
    <div className="min-h-screen bg-[#050508] text-white relative">
      {/* Clean Gradient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-[#050508]" />
        
        {/* Subtle gradient orbs */}
        <div className="absolute top-0 left-1/3 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[150px] translate-y-[-50%]" />
        <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[120px] translate-y-[30%]" />
        
        {/* Clean grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050508]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-xl shadow-lg shadow-red-500/20">
                ⚡
              </div>
              <div>
                <h1 className="text-lg font-bold tracking-tight">BRUTAL-FPS</h1>
              </div>
            </div>
            
            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#downloads" className="text-sm text-white/60 hover:text-white transition-colors">Downloads</a>
              <a href="#features" className="text-sm text-white/60 hover:text-white transition-colors">Features</a>
              <a href="#requirements" className="text-sm text-white/60 hover:text-white transition-colors">Requirements</a>
              <a href="https://github.com/brutal-tools/brutal-fps" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1">
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => handleDownload('windows')}
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-lg shadow-red-500/20"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </nav>

      <main className="relative">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Version Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-white/80">Version {version} • Released 2025 • 100% Free</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                GET
              </span>
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent ml-3">
                BRUTAL-FPS
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-white/50 mb-3 max-w-2xl mx-auto"
            >
              The most powerful, <span className="text-white font-medium">100% FREE</span> gaming performance booster
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg text-red-400 font-medium mb-10"
            >
              Unleash Every Frame. No Mercy.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white text-base px-8 py-6 h-auto shadow-xl shadow-red-500/25 rounded-xl"
                onClick={() => handleDownload('windows')}
                disabled={downloading === 'windows'}
              >
                {downloading === 'windows' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Download for Windows
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </>
                )}
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 h-auto border-white/10 hover:bg-white/5 rounded-xl"
                onClick={() => handleDownload('app')}
                disabled={downloading === 'app'}
              >
                <Globe className="w-5 h-5 mr-2" />
                Browser Version
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              {stats.map((stat, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-2`} />
                  <div className={`text-2xl sm:text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs sm:text-sm text-white/40">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Anti-Cheat Compatibility */}
        <section className="py-10 px-6 lg:px-8 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-xs text-white/30 uppercase tracking-wider mb-5">Compatible with all major anti-cheats</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {antiCheats.map((name) => (
                <div key={name} className="text-sm font-medium text-white/30 hover:text-white/50 transition-colors">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Downloads Section */}
        <section id="downloads" className="py-20 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                Choose Your <span className="text-red-400">Platform</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">Select the version that fits your needs</p>
            </motion.div>

            {/* Platform Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {platforms.map((platform, i) => (
                <motion.div
                  key={platform.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className={`relative bg-white/[0.02] border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden rounded-2xl ${platform.recommended ? 'ring-1 ring-red-500/30' : ''}`}>
                    {platform.recommended && (
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500" />
                    )}
                    
                    <CardContent className="p-6 sm:p-8">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-5">
                        <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center shadow-lg shrink-0`}>
                          <platform.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg sm:text-xl font-bold">{platform.name}</h3>
                            {platform.recommended && (
                              <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 text-xs">
                                ★ Recommended
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-white/40">{platform.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-white/60 mb-5 text-sm sm:text-base">{platform.description}</p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-2 mb-5">
                        {platform.features.map((feature, j) => (
                          <div key={j} className="flex items-center gap-2 text-sm text-white/50">
                            <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                            <span className="text-xs sm:text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Info */}
                      <div className="flex items-center gap-4 text-xs text-white/40 mb-5 pb-5 border-b border-white/5">
                        <span className="flex items-center gap-1.5">
                          <HardDrive className="w-3.5 h-3.5" />
                          {platform.downloadSize}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Package className="w-3.5 h-3.5" />
                          v{platform.version}
                        </span>
                      </div>

                      {/* Button */}
                      <Button
                        size="lg"
                        className={`w-full rounded-xl ${platform.recommended ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 shadow-lg shadow-red-500/20' : 'bg-white/10 hover:bg-white/20'}`}
                        disabled={downloading === platform.id}
                        onClick={() => handleDownload(platform.id)}
                      >
                        {downloading === platform.id ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            Downloading...
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4 mr-2" />
                            Download {platform.name}
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Additional Options */}
            <h3 className="text-lg font-semibold mb-4 text-white/70">Additional Options</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {additionalOptions.map((platform, i) => (
                <motion.div
                  key={platform.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card 
                    className="bg-white/[0.02] border-white/5 hover:border-white/10 transition-colors cursor-pointer rounded-xl group"
                    onClick={() => platform.link ? window.open(platform.link, '_blank') : handleDownload(platform.format!)}
                  >
                    <CardContent className="p-4 sm:p-5">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center shrink-0`}>
                          <platform.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm sm:text-base">{platform.name}</h4>
                          <p className="text-xs text-white/40">{platform.subtitle} • {platform.downloadSize}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/40 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6 lg:px-8 bg-white/[0.01]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                Why <span className="text-red-400">BRUTAL-FPS</span>?
              </h2>
              <p className="text-white/50">Powerful features for maximum performance</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="bg-white/[0.02] border-white/5 hover:border-white/10 transition-colors h-full rounded-xl group">
                    <CardContent className="p-5 sm:p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-lg font-bold text-white/60">{feature.stat}</span>
                      </div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-white/50">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section id="requirements" className="py-20 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                System <span className="text-red-400">Requirements</span>
              </h2>
              <p className="text-white/50">Minimal requirements, maximum performance</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Windows App", icon: Monitor, gradient: "from-blue-500 to-cyan-500", requirements: ["Windows 7/8/10/11 (64-bit)", "500 MB free disk space", "2 GB RAM minimum", "No installation required"] },
                { title: "Browser App", icon: Globe, gradient: "from-purple-500 to-pink-500", requirements: ["Any modern web browser", "Windows, Mac, Linux, Mobile", "1 MB free disk space", "Works completely offline"] }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="bg-white/[0.02] border-white/5 rounded-xl h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold">{item.title}</h3>
                      </div>
                      <ul className="space-y-3">
                        {item.requirements.map((req, j) => (
                          <li key={j} className="flex items-center gap-3 text-sm text-white/60">
                            <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6 lg:px-8 bg-white/[0.01]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">How It Works</h2>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Download", desc: "Get the Windows App or Browser version", icon: Download, gradient: "from-blue-500 to-cyan-500" },
                { step: "02", title: "Run", desc: "Double-click EXE or open HTML", icon: Play, gradient: "from-purple-500 to-pink-500" },
                { step: "03", title: "Boost!", desc: "Click BOOST and enjoy higher FPS!", icon: Zap, gradient: "from-orange-500 to-yellow-500" },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="bg-white/[0.02] border-white/5 hover:border-white/10 transition-colors text-center rounded-xl group">
                    <CardContent className="p-6 sm:p-8">
                      <div className="text-5xl font-black text-white/[0.03] mb-2">{item.step}</div>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform`}>
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-white/50">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Card className="relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] border-white/10 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5" />
                <CardContent className="relative p-8 sm:p-10 text-center">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                    Ready to <span className="text-red-400">Boost</span>?
                  </h2>
                  <p className="text-white/50 mb-8 max-w-md mx-auto">
                    Join 2.5 million+ gamers who trust BRUTAL-FPS
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-6 h-auto shadow-xl shadow-red-500/25 rounded-xl"
                      onClick={() => handleDownload('windows')}
                      disabled={downloading === 'windows'}
                    >
                      {downloading === 'windows' ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      ) : (
                        <Download className="w-5 h-5 mr-2" />
                      )}
                      Download for Windows
                    </Button>
                    
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-8 py-6 h-auto border-white/10 hover:bg-white/5 rounded-xl"
                      onClick={() => handleDownload('app')}
                      disabled={downloading === 'app'}
                    >
                      <Globe className="w-5 h-5 mr-2" />
                      Browser Version
                    </Button>
                  </div>

                  <p className="mt-8 text-xs text-white/30 flex items-center justify-center gap-4 flex-wrap">
                    <span>💰 Free</span>
                    <span>🚫 No Ads</span>
                    <span>🔓 No Paywalls</span>
                    <span>📖 Open Source</span>
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-sm">
              ⚡
            </div>
            <span className="font-semibold">BRUTAL-FPS</span>
            <span className="text-white/30 text-sm">v{version}</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-white/40">
            <a href="https://github.com/brutal-tools/brutal-fps" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              GitHub <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-red-400">Brutal Tools</span>
            <span className="text-white/20">MIT License</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
