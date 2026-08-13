export type HackerBadgeFormat = 'A' | 'B';

export type AccessLevel = 'OMEGA' | 'ALPHA' | 'LEVEL 7 CLASSIFIED' | 'CYBER-VIP' | 'ROOT ADMIN';

export interface HackerBadgeData {
  id: string;
  name: string;
  handle: string;
  role: string;
  builderTitle: string;
  accessLevel: AccessLevel;
  themeColor: string; // hex string e.g. '#00f5ff' or '#e10181'
  photoUrl: string;
  format: HackerBadgeFormat;
  createdAt: number;
  team?: string;
  likesCount: number;
  verified: boolean;
}

export interface PresetAvatar {
  id: string;
  name: string;
  url: string;
}
