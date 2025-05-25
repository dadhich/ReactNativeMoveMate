// src/styles/theme.ts
export const Colors = {
  primaryBackground: '#0D1B2A', // Dark blue-ish background from mockups
  secondaryBackground: '#1B263B', // Slightly lighter dark blue for cards/inputs
  primaryText: '#FFFFFF', // White text
  secondaryText: '#E0E1DD', // Light grey text
  accentBlue: '#3F88C5', // Blue for buttons and highlights
  accentGreen: '#5CB85C', // Green for "on time" or positive status
  accentRed: '#D9534F', // Red for "late" or warnings
  disabledText: '#778DA9',
  inputPlaceholder: '#A9A9A9', // Placeholder text color for inputs
  iconDefault: '#FFFFFF',
  borderColor: '#415A77', // Border color for inputs or cards
};

export const Fonts = {
  RobotoRegular: 'Roboto-Regular',
  RobotoMedium: 'Roboto-Medium',
  RobotoBold: 'Roboto-Bold',
};

export const FontSizes = {
  extraSmall: 10,
  small: 12,
  medium: 14,
  large: 16,
  extraLarge: 18,
  title: 22,
  header: 28,
};

export const Spacing = {
  extraSmall: 4,
  small: 8,
  medium: 16,
  large: 24,
  extraLarge: 32,
};

export const BorderRadius = {
  small: 4,
  medium: 8,
  large: 12,
};

export default {
  Colors,
  Fonts,
  FontSizes,
  Spacing,
  BorderRadius,
};