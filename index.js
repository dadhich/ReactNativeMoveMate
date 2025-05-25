// index.js
import {AppRegistry} from 'react-native';
import App from './App'; // Ensure this points to your App.tsx or App.js
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
