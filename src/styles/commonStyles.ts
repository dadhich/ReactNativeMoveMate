// src/styles/commonStyles.ts
import {StyleSheet} from 'react-native';
import Theme from './theme';

export const commonStyles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: Theme.Colors.primaryBackground,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Theme.Colors.primaryBackground,
  },
  screenPadding: {
    paddingHorizontal: Theme.Spacing.medium,
    paddingVertical: Theme.Spacing.large,
  },
  // Add more common styles as needed
});