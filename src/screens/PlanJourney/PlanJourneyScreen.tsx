// src/screens/PlanJourney/PlanJourneyScreen.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Using MaterialIcons
import Theme from '../../styles/theme';

type DateTimeMode = 'LeaveAt' | 'ArriveBy';

const PlanJourneyScreen = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [dateTimeMode, setDateTimeMode] = useState<DateTimeMode>('LeaveAt');

  const handleFindRoutes = () => {
    console.log('Find Routes Pressed:', {origin, destination, dateTimeMode});
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Theme.Colors.primaryBackground}
      />
      <ScrollView
        style={styles.scrollView}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContentContainer}>
        <View style={styles.container}>
          <Text style={styles.headerTitle}>Plan Your Journey</Text>

          {/* Origin and Destination Inputs */}
          <View style={styles.inputOuterContainer}>
            <Icon
              name="location-pin"
              size={24}
              color={Theme.Colors.accentGreen}
              style={styles.inputIconLeading}
            />
            <TextInput
              style={styles.input}
              placeholder="Origin: Current Location or Address"
              placeholderTextColor={Theme.Colors.inputPlaceholder}
              value={origin}
              onChangeText={setOrigin}
              accessibilityLabel="Origin input"
              accessibilityHint="Enter your starting location or use current location"
            />
          </View>
          <View style={styles.dottedLine} />
          <View style={styles.inputOuterContainer}>
            <Icon
              name="location-pin"
              size={24}
              color={Theme.Colors.accentRed}
              style={styles.inputIconLeading}
            />
            <TextInput
              style={styles.input}
              placeholder="Destination: Address or Stop"
              placeholderTextColor={Theme.Colors.inputPlaceholder}
              value={destination}
              onChangeText={setDestination}
              accessibilityLabel="Destination input"
              accessibilityHint="Enter your destination address or stop name"
            />
          </View>

          {/* Date Time Selection */}
          <View style={styles.dateTimeContainer}>
            <View style={styles.dateTimeModeToggle}>
              <TouchableOpacity
                style={[
                  styles.toggleButton,
                  dateTimeMode === 'LeaveAt' && styles.toggleButtonActive,
                ]}
                onPress={() => setDateTimeMode('LeaveAt')}
                accessibilityRole="button"
                accessibilityState={{selected: dateTimeMode === 'LeaveAt'}}
                accessibilityLabel="Select Leave At time mode">
                <Text
                  style={[
                    styles.toggleButtonText,
                    dateTimeMode === 'LeaveAt' &&
                      styles.toggleButtonTextActive,
                  ]}>
                  Leave at
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.toggleButton,
                  dateTimeMode === 'ArriveBy' && styles.toggleButtonActive,
                ]}
                onPress={() => setDateTimeMode('ArriveBy')}
                accessibilityRole="button"
                accessibilityState={{selected: dateTimeMode === 'ArriveBy'}}
                accessibilityLabel="Select Arrive By time mode">
                <Text
                  style={[
                    styles.toggleButtonText,
                    dateTimeMode === 'ArriveBy' &&
                      styles.toggleButtonTextActive,
                  ]}>
                  Arrive by
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.dateTimeButtons}>
              <TouchableOpacity
                style={styles.smallButton}
                accessibilityRole="button"
                accessibilityLabel="Set journey date to today">
                <Icon
                  name="calendar-today"
                  size={18}
                  color={Theme.Colors.primaryText}
                />
                <Text style={styles.smallButtonText}>Today</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.smallButton}
                accessibilityRole="button"
                accessibilityLabel="Set journey time to now">
                <Icon
                  name="access-time"
                  size={18}
                  color={Theme.Colors.primaryText}
                />
                <Text style={styles.smallButtonText}>Now</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Find Routes Button and Action Icons */}
          <View style={styles.actionsRowContainer}>
            <TouchableOpacity
              style={styles.findRoutesButton}
              onPress={handleFindRoutes}
              accessibilityRole="button"
              accessibilityLabel="Find routes based on selected origin, destination, and time">
              <Text style={styles.findRoutesButtonText}>Find Routes</Text>
            </TouchableOpacity>
            <View style={styles.iconActionsGroup}>
              <TouchableOpacity
                style={styles.actionIconTouchable}
                accessibilityRole="button"
                accessibilityLabel="Open favourites">
                <Icon
                  name="star-outline"
                  size={28}
                  color={Theme.Colors.iconDefault}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionIconTouchable}
                accessibilityRole="button"
                accessibilityLabel="Open saved trips or bookmarks">
                <Icon
                  name="bookmark-outline"
                  size={28}
                  color={Theme.Colors.iconDefault}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Available Routes Placeholder */}
          <View style={styles.routesPlaceholder}>
            <Text style={styles.routesPlaceholderText}>
              Available routes will appear here...
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Theme.Colors.primaryBackground,
  },
  scrollView: {
    flex: 1,
  },
  scrollContentContainer: {
    flexGrow: 1, // Ensures the container can grow to allow scrolling if content exceeds screen
  },
  container: {
    flex: 1,
    padding: Theme.Spacing.medium,
    backgroundColor: Theme.Colors.primaryBackground,
  },
  headerTitle: {
    fontFamily: Theme.Fonts.RobotoBold,
    fontSize: Theme.FontSizes.header,
    color: Theme.Colors.primaryText,
    textAlign: 'center',
    marginBottom: Theme.Spacing.large,
  },
  // Renamed inputContainer to inputOuterContainer for clarity
  inputOuterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.Colors.secondaryBackground,
    borderRadius: Theme.BorderRadius.medium,
    paddingHorizontal: Theme.Spacing.medium,
    marginBottom: Theme.Spacing.extraSmall,
    height: 50,
  },
  inputIconLeading: {
    marginRight: Theme.Spacing.small,
  },
  // Removed iconCircleGreen and iconCircleRed styles
  dottedLine: {
    height: Theme.Spacing.medium,
    borderLeftColor: Theme.Colors.borderColor,
    borderLeftWidth: 2,
    borderStyle: 'dashed',
    // Adjusted marginLeft to align with the body of the pin icon, not its absolute edge.
    // The pin icon itself has some internal padding/spacing.
    // This might need slight adjustment based on the specific icon's visual center.
    marginLeft: Theme.Spacing.medium + Theme.FontSizes.medium / 2 - 1, // Approximation
    marginBottom: Theme.Spacing.extraSmall,
  },
  input: {
    flex: 1,
    fontFamily: Theme.Fonts.RobotoRegular,
    fontSize: Theme.FontSizes.medium,
    color: Theme.Colors.primaryText,
    height: '100%',
  },
  dateTimeContainer: {
    marginTop: Theme.Spacing.medium,
    marginBottom: Theme.Spacing.medium, // Reduced margin a bit
    backgroundColor: Theme.Colors.secondaryBackground,
    borderRadius: Theme.BorderRadius.medium,
    padding: Theme.Spacing.medium,
  },
  dateTimeModeToggle: {
    flexDirection: 'row',
    backgroundColor: Theme.Colors.primaryBackground,
    borderRadius: Theme.BorderRadius.small,
    marginBottom: Theme.Spacing.medium,
    overflow: 'hidden',
  },
  toggleButton: {
    flex: 1,
    paddingVertical: Theme.Spacing.small + 2, // Slightly more padding
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleButtonActive: {
    backgroundColor: Theme.Colors.accentBlue,
  },
  toggleButtonText: {
    fontFamily: Theme.Fonts.RobotoMedium,
    fontSize: Theme.FontSizes.medium,
    color: Theme.Colors.disabledText,
  },
  toggleButtonTextActive: {
    color: Theme.Colors.primaryText,
  },
  dateTimeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between', // This will push Today and Now to the edges within their container
  },
  smallButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.Colors.primaryBackground,
    paddingHorizontal: Theme.Spacing.medium,
    paddingVertical: Theme.Spacing.small + 2, // Slightly more padding
    borderRadius: Theme.BorderRadius.small,
    flex: 0.48, // Assign almost half width to each, adjust as needed for spacing
    justifyContent: 'center', // Center content within the button
  },
  smallButtonText: {
    fontFamily: Theme.Fonts.RobotoRegular,
    fontSize: Theme.FontSizes.medium,
    color: Theme.Colors.primaryText,
    marginLeft: Theme.Spacing.small,
  },
  actionsRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Key change for layout
    marginBottom: Theme.Spacing.large,
    marginTop: Theme.Spacing.small, // Added some top margin
  },
  findRoutesButton: {
    backgroundColor: Theme.Colors.accentBlue,
    paddingVertical: Theme.Spacing.medium,
    borderRadius: Theme.BorderRadius.medium,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    flex: 1, // Allow button to take available space
    marginRight: Theme.Spacing.medium, // Space between button and icons
  },
  findRoutesButtonText: {
    fontFamily: Theme.Fonts.RobotoBold,
    fontSize: Theme.FontSizes.large,
    color: Theme.Colors.primaryText,
  },
  iconActionsGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIconTouchable: {
    padding: Theme.Spacing.small, // Add padding for easier touch
    marginLeft: Theme.Spacing.small, // Space between icons
  },
  routesPlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Theme.Spacing.extraLarge,
    minHeight: 100,
  },
  routesPlaceholderText: {
    fontFamily: Theme.Fonts.RobotoRegular,
    fontSize: Theme.FontSizes.medium,
    color: Theme.Colors.disabledText,
  },
});

export default PlanJourneyScreen;