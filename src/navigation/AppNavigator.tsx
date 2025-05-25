// src/navigation/AppNavigator.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PlanJourneyScreen from '../screens/PlanJourney/PlanJourneyScreen';
import TripDetailsScreen from '../screens/TripDetails/TripDetailsScreen';
import Theme from '../styles/theme';

export type RootStackParamList = {
  PlanJourney: undefined; // No parameters expected for PlanJourneyScreen
  TripDetails: {tripId: string}; // Example: Expects a tripId parameter
  // Add other screens and their parameters here
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Theme.Colors.primaryBackground,
        },
        headerTintColor: Theme.Colors.primaryText,
        headerTitleStyle: {
          fontFamily: Theme.Fonts.RobotoMedium,
        },
        headerShadowVisible: false, // Removes the default header shadow/border
      }}>
      <Stack.Screen
        name="PlanJourney"
        component={PlanJourneyScreen}
        options={{headerShown: false}} // Hiding header as per mock-up design for this screen
      />
      <Stack.Screen
        name="TripDetails"
        component={TripDetailsScreen}
        options={{title: 'Trip Details'}} // Title for the TripDetails screen header
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;