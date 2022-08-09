export const htmlFontSize = 18;

export const baselinePx = 20;

export const base = (multiplier = 1): string => `${(baselinePx / htmlFontSize) * multiplier}rem`;
