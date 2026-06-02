export const featureFlags = {
  reels: true,
  stories: false,
} as const;

export type FeatureFlag = keyof typeof featureFlags;