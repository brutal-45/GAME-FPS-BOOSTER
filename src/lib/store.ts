import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Types
export type BoostMode = 'balanced' | 'performance' | 'brutal' | 'extreme' | 'potato' | 'silent';
export type Theme = 'dark-brutality' | 'cyber-wave' | 'inferno' | 'arctic' | 'military';
export type OverlayPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface GameProfile {
  id: string;
  name: string;
  icon?: string;
  category: string;
  boostMode: BoostMode;
  timesPlayed: number;
  avgFpsBefore?: number;
  avgFpsAfter?: number;
  isFavorite: boolean;
  isEmulator: boolean;
  emulatorType?: string;
}

export interface Achievement {
  id: string;
  key: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  requirement: number;
  xpReward: number;
  isUnlocked: boolean;
  progress: number;
}

export interface SystemStats {
  cpuUsage: number;
  ramUsage: number;
  ramTotal: number;
  ramUsed: number;
  gpuUsage: number;
  gpuTemp: number;
  cpuTemp: number;
  fps: number;
  fpsMin: number;
  fpsMax: number;
  fpsAvg: number;
  networkPing: number;
  networkDownload: number;
  networkUpload: number;
  diskUsage: number;
}

export interface BoostResult {
  fpsBefore: number;
  fpsAfter: number;
  ramFreed: number;
  processesKilled: number;
  tweaksApplied: number;
  duration: number;
}

// Default achievements
const defaultAchievements: Achievement[] = [
  { id: '1', key: 'first_blood', name: 'First Blood', description: 'Complete your first optimization', icon: '🥉', category: 'general', requirement: 1, xpReward: 100, isUnlocked: false, progress: 0 },
  { id: '2', key: 'frame_hunter', name: 'Frame Hunter', description: 'Boost FPS by 50%', icon: '🥈', category: 'performance', requirement: 50, xpReward: 250, isUnlocked: false, progress: 0 },
  { id: '3', key: 'brutality', name: 'Brutality', description: 'Boost FPS by 100%', icon: '🥇', category: 'performance', requirement: 100, xpReward: 500, isUnlocked: false, progress: 0 },
  { id: '4', key: 'overkill', name: 'Overkill', description: 'Boost FPS by 200%', icon: '💀', category: 'performance', requirement: 200, xpReward: 1000, isUnlocked: false, progress: 0 },
  { id: '5', key: 'streak_master', name: 'Streak Master', description: '7 days of daily optimizations', icon: '🔥', category: 'dedication', requirement: 7, xpReward: 300, isUnlocked: false, progress: 0 },
  { id: '6', key: 'speed_demon', name: 'Speed Demon', description: 'Optimize in under 5 seconds', icon: '⚡', category: 'general', requirement: 1, xpReward: 150, isUnlocked: false, progress: 0 },
  { id: '7', key: 'neat_freak', name: 'Neat Freak', description: 'Cleared 10GB+ temp files', icon: '🧹', category: 'cleanup', requirement: 10000, xpReward: 200, isUnlocked: false, progress: 0 },
  { id: '8', key: 'safe_player', name: 'Safe Player', description: 'Never triggered anti-cheat warning', icon: '🛡️', category: 'safety', requirement: 100, xpReward: 400, isUnlocked: false, progress: 0 },
  { id: '9', key: 'community_hero', name: 'Community Hero', description: 'Shared 10 profiles', icon: '🌍', category: 'community', requirement: 10, xpReward: 350, isUnlocked: false, progress: 0 },
  { id: '10', key: 'data_nerd', name: 'Data Nerd', description: 'Viewed statistics 50 times', icon: '📊', category: 'general', requirement: 50, xpReward: 100, isUnlocked: false, progress: 0 },
  { id: '11', key: 'perfectionist', name: 'Perfectionist', description: 'All optimizations at 100%', icon: '🎯', category: 'performance', requirement: 100, xpReward: 500, isUnlocked: false, progress: 0 },
  { id: '12', key: 'brutal_master', name: 'Brutal Master', description: 'Unlocked all achievements', icon: '👑', category: 'mastery', requirement: 11, xpReward: 2000, isUnlocked: false, progress: 0 },
];

// Default game profiles
const defaultGameProfiles: GameProfile[] = [
  { id: '1', name: 'Counter-Strike 2', category: 'fps', boostMode: 'brutal', timesPlayed: 45, avgFpsBefore: 120, avgFpsAfter: 165, isFavorite: true, isEmulator: false },
  { id: '2', name: 'Valorant', category: 'fps', boostMode: 'performance', timesPlayed: 32, avgFpsBefore: 150, avgFpsAfter: 200, isFavorite: true, isEmulator: false },
  { id: '3', name: 'PUBG Mobile', category: 'battle-royale', boostMode: 'brutal', timesPlayed: 28, avgFpsBefore: 45, avgFpsAfter: 75, isFavorite: false, isEmulator: true, emulatorType: 'bluestacks' },
  { id: '4', name: 'Free Fire', category: 'battle-royale', boostMode: 'performance', timesPlayed: 15, avgFpsBefore: 55, avgFpsAfter: 85, isFavorite: false, isEmulator: true, emulatorType: 'ldplayer' },
  { id: '5', name: 'Genshin Impact', category: 'rpg', boostMode: 'balanced', timesPlayed: 22, avgFpsBefore: 35, avgFpsAfter: 55, isFavorite: true, isEmulator: false },
  { id: '6', name: 'Apex Legends', category: 'battle-royale', boostMode: 'brutal', timesPlayed: 18, avgFpsBefore: 90, avgFpsAfter: 130, isFavorite: false, isEmulator: false },
  { id: '7', name: 'Fortnite', category: 'battle-royale', boostMode: 'performance', timesPlayed: 12, avgFpsBefore: 100, avgFpsAfter: 144, isFavorite: false, isEmulator: false },
  { id: '8', name: 'Call of Duty Mobile', category: 'fps', boostMode: 'brutal', timesPlayed: 35, avgFpsBefore: 50, avgFpsAfter: 90, isFavorite: true, isEmulator: true, emulatorType: 'gameloop' },
];

// Simulated system stats generator
const generateSystemStats = (): SystemStats => ({
  cpuUsage: Math.floor(Math.random() * 30 + 20),
  ramUsage: Math.floor(Math.random() * 20 + 40),
  ramTotal: 16384,
  ramUsed: Math.floor(Math.random() * 2048 + 6144),
  gpuUsage: Math.floor(Math.random() * 25 + 15),
  gpuTemp: Math.floor(Math.random() * 10 + 55),
  cpuTemp: Math.floor(Math.random() * 10 + 45),
  fps: Math.floor(Math.random() * 30 + 100),
  fpsMin: Math.floor(Math.random() * 20 + 80),
  fpsMax: Math.floor(Math.random() * 20 + 140),
  fpsAvg: Math.floor(Math.random() * 25 + 110),
  networkPing: Math.floor(Math.random() * 10 + 10),
  networkDownload: Math.floor(Math.random() * 20 + 100),
  networkUpload: Math.floor(Math.random() * 5 + 5),
  diskUsage: Math.floor(Math.random() * 10 + 30),
});

// Calculate level from XP
const calculateLevel = (xp: number): number => {
  return Math.floor(Math.sqrt(xp / 100)) + 1;
};

interface BrutalFPSState {
  // Theme & UI
  theme: Theme;
  setTheme: (theme: Theme) => void;
  
  // Boost State
  isBoostActive: boolean;
  boostMode: BoostMode;
  setBoostMode: (mode: BoostMode) => void;
  lastBoostResult: BoostResult | null;
  
  // System Stats
  stats: SystemStats;
  updateStats: (stats: Partial<SystemStats>) => void;
  statsHistory: { timestamp: number; fps: number; cpu: number; ram: number }[];
  addStatsHistory: (entry: { timestamp: number; fps: number; cpu: number; ram: number }) => void;
  
  // Game Profiles
  gameProfiles: GameProfile[];
  activeGame: GameProfile | null;
  setActiveGame: (game: GameProfile | null) => void;
  
  // Achievements
  achievements: Achievement[];
  unlockedAchievements: string[];
  unlockAchievement: (key: string) => void;
  
  // User Stats
  userLevel: number;
  userXp: number;
  totalBoosts: number;
  totalFpsGained: number;
  currentStreak: number;
  
  // Settings
  autoBoost: boolean;
  showOverlay: boolean;
  overlayPosition: OverlayPosition;
  overlayOpacity: number;
  notifications: boolean;
  soundEffects: boolean;
  autoRestore: boolean;
  createRestorePoint: boolean;
  
  // Actions
  toggleAutoBoost: () => void;
  toggleOverlay: () => void;
  setOverlayPosition: (position: OverlayPosition) => void;
  setOverlayOpacity: (opacity: number) => void;
  toggleNotifications: () => void;
  toggleSoundEffects: () => void;
  toggleAutoRestore: () => void;
  toggleRestorePoint: () => void;
  
  // Boost Actions
  startBoost: () => Promise<BoostResult>;
  stopBoost: () => void;
  
  // XP & Level
  addXp: (amount: number) => void;
  
  // Reset
  reset: () => void;
}

export const useBrutalFPSStore = create<BrutalFPSState>()(
  persist(
    (set, get) => ({
      // Theme & UI
      theme: 'dark-brutality',
      setTheme: (theme) => {
        if (typeof document !== 'undefined') {
          document.documentElement.setAttribute('data-theme', theme);
        }
        set({ theme });
      },
      
      // Boost State
      isBoostActive: false,
      boostMode: 'balanced',
      setBoostMode: (boostMode) => set({ boostMode }),
      lastBoostResult: null,
      
      // System Stats
      stats: generateSystemStats(),
      updateStats: (newStats) => set((state) => ({ stats: { ...state.stats, ...newStats } })),
      statsHistory: [],
      addStatsHistory: (entry) => set((state) => {
        const history = [...state.statsHistory, entry].slice(-60);
        return { statsHistory: history };
      }),
      
      // Game Profiles
      gameProfiles: defaultGameProfiles,
      activeGame: null,
      setActiveGame: (activeGame) => set({ activeGame }),
      
      // Achievements
      achievements: defaultAchievements,
      unlockedAchievements: [],
      unlockAchievement: (key) => set((state) => {
        if (state.unlockedAchievements.includes(key)) return state;
        const achievement = state.achievements.find(a => a.key === key);
        if (!achievement) return state;
        return {
          unlockedAchievements: [...state.unlockedAchievements, key],
          achievements: state.achievements.map(a => a.key === key ? { ...a, isUnlocked: true, progress: a.requirement } : a),
          userXp: state.userXp + achievement.xpReward,
          totalXp: state.userXp + achievement.xpReward,
          userLevel: calculateLevel(state.userXp + achievement.xpReward),
        };
      }),
      
      // User Stats
      userLevel: 1,
      userXp: 0,
      totalBoosts: 0,
      totalFpsGained: 0,
      currentStreak: 0,
      
      // Settings
      autoBoost: true,
      showOverlay: true,
      overlayPosition: 'top-right',
      overlayOpacity: 80,
      notifications: true,
      soundEffects: true,
      autoRestore: true,
      createRestorePoint: true,
      
      // Toggle Actions
      toggleAutoBoost: () => set((state) => ({ autoBoost: !state.autoBoost })),
      toggleOverlay: () => set((state) => ({ showOverlay: !state.showOverlay })),
      setOverlayPosition: (overlayPosition) => set({ overlayPosition }),
      setOverlayOpacity: (overlayOpacity) => set({ overlayOpacity }),
      toggleNotifications: () => set((state) => ({ notifications: !state.notifications })),
      toggleSoundEffects: () => set((state) => ({ soundEffects: !state.soundEffects })),
      toggleAutoRestore: () => set((state) => ({ autoRestore: !state.autoRestore })),
      toggleRestorePoint: () => set((state) => ({ createRestorePoint: !state.createRestorePoint })),
      
      // Boost Actions
      startBoost: async () => {
        const state = get();
        const startTime = Date.now();
        
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const fpsBefore = state.stats.fps;
        const fpsGainPercent = {
          balanced: 0.1,
          performance: 0.2,
          brutal: 0.35,
          extreme: 0.5,
          potato: 0.6,
          silent: 0.08,
        }[state.boostMode];
        
        const fpsAfter = Math.floor(fpsBefore * (1 + fpsGainPercent));
        const ramFreed = Math.floor(Math.random() * 1000 + 500);
        const processesKilled = Math.floor(Math.random() * 20 + 10);
        const tweaksApplied = Math.floor(Math.random() * 15 + 5);
        
        const result: BoostResult = {
          fpsBefore,
          fpsAfter,
          ramFreed,
          processesKilled,
          tweaksApplied,
          duration: Date.now() - startTime,
        };
        
        set({
          isBoostActive: true,
          lastBoostResult: result,
          stats: {
            ...state.stats,
            fps: fpsAfter,
            fpsAvg: fpsAfter,
            ramUsage: state.stats.ramUsage - (ramFreed / state.stats.ramTotal * 100),
            ramUsed: state.stats.ramUsed - ramFreed,
          },
          totalBoosts: state.totalBoosts + 1,
          totalFpsGained: state.totalFpsGained + (fpsAfter - fpsBefore),
        });
        
        if (state.totalBoosts === 0) {
          get().unlockAchievement('first_blood');
        }
        
        if (result.duration < 5000) {
          get().unlockAchievement('speed_demon');
        }
        
        const fpsImprovement = ((fpsAfter - fpsBefore) / fpsBefore) * 100;
        if (fpsImprovement >= 50) get().unlockAchievement('frame_hunter');
        if (fpsImprovement >= 100) get().unlockAchievement('brutality');
        if (fpsImprovement >= 200) get().unlockAchievement('overkill');
        
        const xpGain = Math.floor(50 + (fpsAfter - fpsBefore) * 2);
        get().addXp(xpGain);
        
        return result;
      },
      
      stopBoost: () => {
        set({ isBoostActive: false });
      },
      
      // XP & Level
      addXp: (amount) => set((state) => {
        const newXp = state.userXp + amount;
        return {
          userXp: newXp,
          userLevel: calculateLevel(newXp),
        };
      }),
      
      // Reset
      reset: () => set({
        isBoostActive: false,
        lastBoostResult: null,
        stats: generateSystemStats(),
        statsHistory: [],
        achievements: defaultAchievements,
        unlockedAchievements: [],
        userLevel: 1,
        userXp: 0,
        totalBoosts: 0,
        totalFpsGained: 0,
        currentStreak: 0,
        gameProfiles: defaultGameProfiles,
      }),
    }),
    {
      name: 'brutal-fps-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        theme: state.theme,
        boostMode: state.boostMode,
        autoBoost: state.autoBoost,
        showOverlay: state.showOverlay,
        overlayPosition: state.overlayPosition,
        overlayOpacity: state.overlayOpacity,
        notifications: state.notifications,
        soundEffects: state.soundEffects,
        autoRestore: state.autoRestore,
        createRestorePoint: state.createRestorePoint,
        achievements: state.achievements,
        unlockedAchievements: state.unlockedAchievements,
        userLevel: state.userLevel,
        userXp: state.userXp,
        totalBoosts: state.totalBoosts,
        totalFpsGained: state.totalFpsGained,
        currentStreak: state.currentStreak,
        gameProfiles: state.gameProfiles,
      }),
    }
  )
);
