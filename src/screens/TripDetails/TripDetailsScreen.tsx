// src/screens/TripDetails/TripDetailsScreen.tsx
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Theme from '../../styles/theme';
import {commonStyles} from '../../styles/commonStyles'; // Import commonStyles

const TripDetailsScreen = () => {
  return (
    <SafeAreaView style={commonStyles.safeAreaContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>Trip Details Screen</Text>
        <Text style={styles.subText}>
          Detailed leg information will be shown here.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Theme.Spacing.medium,
  },
  text: {
    fontFamily: Theme.Fonts.RobotoMedium,
    fontSize: Theme.FontSizes.extraLarge,
    color: Theme.Colors.primaryText,
    marginBottom: Theme.Spacing.small,
  },
  subText: {
    fontFamily: Theme.Fonts.RobotoRegular,
    fontSize: Theme.FontSizes.medium,
    color: Theme.Colors.secondaryText,
  },
});

export default TripDetailsScreen;