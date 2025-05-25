// MoveMate/App.tsx
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen'; // Standard import from new app template

// Main App component
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1, // Make sure SafeAreaView takes full height
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            ...styles.container, // Add custom container styles
          }}>
          {/* Test text with Roboto font */}
          <Text style={styles.regularText}>
            This text should be Roboto Regular.
          </Text>
          <Text style={styles.mediumText}>
            This text should be Roboto Medium.
          </Text>
          <Text style={styles.boldText}>
            This text should be Roboto Bold.
          </Text>
          <Text style={styles.defaultText}>
            This text uses the default system font.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles for the App component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // Add some padding
  },
  regularText: {
    fontFamily: 'Roboto-Regular', // Use the PostScript name of your font file
    fontSize: 18,
    marginBottom: 10,
    color: '#333333', // Example color
  },
  mediumText: {
    fontFamily: 'Roboto-Medium', // Use the PostScript name of your font file
    fontSize: 18,
    marginBottom: 10,
    color: '#333333',
  },
  boldText: {
    fontFamily: 'Roboto-Bold', // Use the PostScript name of your font file
    fontSize: 18,
    fontWeight: 'bold', // fontWeight can still be useful for emphasis or if specific font variant isn't picked up
    marginBottom: 10,
    color: '#333333',
  },
  defaultText: {
    fontSize: 18,
    color: '#333333',
  },
});

export default App;