export const SOUNDS = {
  correct: require('../../assets/sounds/correct.mp3'),
  wrong: require('../../assets/sounds/wrong.mp3'),
  xpGain: require('../../assets/sounds/xp-gain.mp3'),
  levelUp: require('../../assets/sounds/level-up.mp3'),
  streak: require('../../assets/sounds/streak.mp3'),
} as const;

export type SoundName = keyof typeof SOUNDS;
