import { HackerBadgeData, PresetAvatar } from '../types';

export const ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_YF-u3_mpYoKlcCIdA96EZsd6YLDeunuhijZmfVeNmadgqyC0AyybMheWuA9v_0rtNQcyJ5HIFcbssnoHJMsIC9u3O5Brh7hUvIiWO3iSqPaBmK4YlI4IETaTeMmheHTLvh9LR_yyk7QFoQytf2siYND3pqXeAP5wRheFAbvuBB67oav3qxckeYIITD-QxKVgyubmROZuI94KOUMRjZtr1wL9JeU-ScrhNMPgLkPYXLEWS0QltBE5vQ',
  heroBg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvfpYMh828xuVUaMxV93oFat1h4bJN8NeOREyEMXFtpUxRhAx_FqAbQxs8DYXq_Jx8cZHWy58SKAYwfgJMRzdPiS2J7NXnKauB6oXtJFinSTuLdqcNsdlnECZ8FYs6EOc3_eF3T9sJBf6YaPyBA-AVxf9Wt9TZ3tQEz6yHblxKYFszpUgm1mNIBDWgin-2GjKJLmysss7aRUQG6KltEMx0xGTrs6SgwR8cDxd_-qXKmWpDl3ultQkmpA',
  cityBg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAf8OD7n2dNeJhs103SfqJtuhm1Q9SvoenHQBOHdTq3ncH4b9rxE4vN11KAA8vUTIdJ_lAqPUjbr4wqiqDu8lLdq-ZZu1P3uv84Vy2WdGS7vVIf3xMGFsa0PvumTVCZ-WXI6jM_dHoGBENdLzZviO4Z8y2xDScLzRijTHP4p8qY3Q6WbIOb0_VoZks8tR5cfQz274HU5WC3CQUjV0Fioz1Y2bZisjW32EDcVRShXJH_tFmYFGbrgKk_xQ',
  defaultAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6-fUcur8NOE2eiJClnli2dAiaqwZjxUw7BQ5YzFZjRX8aqz9V8oeDimnqFLrlcLQ4BXB97nI6ANAwnECyd-y3wLXY8xvdInOeYeZEN1pWz69SiwYYxSc1qhFV8dvsL6Qdapx3qfPWeZVOeuhjNQ3jKAORAVHNx14bpDRRBbMoL27q0uFMdfkjUMfg36fSNasz0THZZj7MTVWfdAEWA_St3EioTJJOM6ie4g3XssygDJr07zHA2PhYlw',
};

export const PRESET_AVATARS: PresetAvatar[] = [
  {
    id: 'alex',
    name: 'Alex Chen',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6-fUcur8NOE2eiJClnli2dAiaqwZjxUw7BQ5YzFZjRX8aqz9V8oeDimnqFLrlcLQ4BXB97nI6ANAwnECyd-y3wLXY8xvdInOeYeZEN1pWz69SiwYYxSc1qhFV8dvsL6Qdapx3qfPWeZVOeuhjNQ3jKAORAVHNx14bpDRRBbMoL27q0uFMdfkjUMfg36fSNasz0THZZj7MTVWfdAEWA_St3EioTJJOM6ie4g3XssygDJr07zHA2PhYlw'
  },
  {
    id: 'elara',
    name: 'Elara Vance',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'devraj',
    name: 'Devraj Patel',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'meera',
    name: 'Meera Nair',
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'kai',
    name: 'Kai Tanaka',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'zara',
    name: 'Zara Thorne',
    url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80'
  }
];

export const INITIAL_GALLERY_ITEMS: HackerBadgeData[] = [
  {
    id: 'badge-1',
    name: 'Alex Chen',
    handle: '@ALEX_DEV',
    role: 'Fullstack Hacker',
    builderTitle: 'Pioneer Builder',
    accessLevel: 'OMEGA',
    themeColor: '#00f5ff',
    photoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6-fUcur8NOE2eiJClnli2dAiaqwZjxUw7BQ5YzFZjRX8aqz9V8oeDimnqFLrlcLQ4BXB97nI6ANAwnECyd-y3wLXY8xvdInOeYeZEN1pWz69SiwYYxSc1qhFV8dvsL6Qdapx3qfPWeZVOeuhjNQ3jKAORAVHNx14bpDRRBbMoL27q0uFMdfkjUMfg36fSNasz0THZZj7MTVWfdAEWA_St3EioTJJOM6ie4g3XssygDJr07zHA2PhYlw',
    format: 'B',
    createdAt: Date.now() - 3600000 * 2,
    likesCount: 142,
    verified: true
  },
  {
    id: 'badge-2',
    name: 'Elara Vance',
    handle: '@NEON_CYBER_DEV',
    role: 'Protocol Engineer',
    builderTitle: 'Protocol Architect',
    accessLevel: 'ALPHA',
    themeColor: '#e10181',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    format: 'A',
    createdAt: Date.now() - 3600000 * 5,
    likesCount: 218,
    verified: true
  },
  {
    id: 'badge-3',
    name: 'Devraj Patel',
    handle: '@DEVRAJ_AI',
    role: 'AI Alchemist',
    builderTitle: 'Neural Hacker',
    accessLevel: 'LEVEL 7 CLASSIFIED',
    themeColor: '#ffb687',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    format: 'B',
    createdAt: Date.now() - 3600000 * 12,
    likesCount: 97,
    verified: true
  },
  {
    id: 'badge-4',
    name: 'Meera Nair',
    handle: '@MEERA_CYBER',
    role: 'Cybernetic Operative',
    builderTitle: 'Systems Specialist',
    accessLevel: 'CYBER-VIP',
    themeColor: '#00ff66',
    photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    format: 'A',
    createdAt: Date.now() - 3600000 * 18,
    likesCount: 164,
    verified: true
  }
];

export const SUGGESTED_ROLES = [
  'Fullstack Hacker',
  'Rust Dev',
  'AI Alchemist',
  'Protocol Engineer',
  'Web3 Architect',
  'Cybernetic Operative',
  'Frontend Ninja',
  'Solidity Wizard',
  'LLM Researcher',
  'UI/UX Cyberpunk Designer'
];

export const BUILDER_TITLES = [
  'Pioneer Builder',
  'Protocol Engineer',
  'AI Alchemist',
  'Cybernetic Operative',
  'Quantum Hacker',
  'Lead Systems Architect'
];

export const COLOR_THEMES = [
  { name: 'Electric Teal', hex: '#00f5ff', secondary: '#006c71' },
  { name: 'Neon Pink', hex: '#e10181', secondary: '#8d004f' },
  { name: 'Sunset Orange', hex: '#ffb687', secondary: '#733600' },
  { name: 'Matrix Green', hex: '#00ff66', secondary: '#006622' },
  { name: 'Cyber Violet', hex: '#b55fe6', secondary: '#4a156b' }
];
