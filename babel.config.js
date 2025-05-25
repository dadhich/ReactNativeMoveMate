// babel.config.js
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true, // Set to true if you want to allow undefined variables, false will throw an error. For API keys, false might be safer in the long run.
      },
    ],
  ],
};
