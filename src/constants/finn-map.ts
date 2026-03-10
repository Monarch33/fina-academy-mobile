export type FinnRole =
  | 'banker'
  | 'professor'
  | 'wizard'
  | 'explorer'
  | 'doctor'
  | 'astronaut'
  | 'captain'
  | 'artist'
  | 'chef'
  | 'teacher'
  | 'superhero'
  | 'detective'
  | 'pirate'
  | 'firefighter'
  | 'rockstar'
  | 'wizard2'
  | 'astronaut2'
  | 'chef2';

export type FinnTier = 'orange' | 'gold' | 'silver';

export interface FinnConfig {
  role: FinnRole;
  tier: FinnTier;
}

export const COURSE_FINN_MAP: Record<string, FinnConfig> = {
  fundamentals: { role: 'doctor', tier: 'orange' },
  corporate: { role: 'banker', tier: 'orange' },
  derivatives: { role: 'wizard', tier: 'orange' },
  portfolio: { role: 'captain', tier: 'orange' },
  macro: { role: 'explorer', tier: 'orange' },
  accounting: { role: 'professor', tier: 'orange' },
  'fixed-income': { role: 'astronaut', tier: 'orange' },
  'private-equity': { role: 'banker', tier: 'gold' },
  'venture-capital': { role: 'superhero', tier: 'orange' },
  equities: { role: 'detective', tier: 'orange' },
  'technical-analysis': { role: 'artist', tier: 'orange' },
  quantitative: { role: 'astronaut', tier: 'gold' },
  esg: { role: 'explorer', tier: 'orange' },
  regulation: { role: 'captain', tier: 'orange' },
  'real-estate': { role: 'chef', tier: 'orange' },
  crypto: { role: 'wizard', tier: 'orange' },
  insurance: { role: 'doctor', tier: 'orange' },
  'personal-finance': { role: 'chef', tier: 'orange' },
};

export const ARENA_FINN_MAP: Record<string, FinnRole> = {
  mcq: 'firefighter',
  brain: 'detective',
  market: 'explorer',
  mental: 'astronaut',
  case: 'banker',
  duel: 'superhero',
  marathon: 'explorer',
  blind: 'pirate',
};

// Roles that live in the special/ folder instead of orange/gold/silver
export const SPECIAL_ROLES: FinnRole[] = [
  'teacher',
  'superhero',
  'detective',
  'pirate',
  'firefighter',
  'rockstar',
  'wizard2',
  'astronaut2',
  'chef2',
];

export function isSpecialRole(role: FinnRole): boolean {
  return SPECIAL_ROLES.includes(role);
}

export function getFinnTier(
  userLevel: number,
  courseCompleted: boolean
): FinnTier {
  if (courseCompleted && userLevel >= 20) return 'gold';
  if (userLevel >= 1) return 'orange';
  return 'silver';
}

// Finn image mapping - since we don't have actual PNG files yet,
// we'll use the SVG-based Finn component as fallback
export function getFinnImagePath(role: FinnRole, tier: FinnTier): string {
  if (isSpecialRole(role)) {
    return `assets/finn/special/${role}.png`;
  }
  return `assets/finn/${tier}/${role}.png`;
}
