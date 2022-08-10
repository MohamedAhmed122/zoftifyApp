module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.jsx',
          '.json',
        ],
        alias: {
          tests: ['./tests/'],
          '@Store': './src/store',
          '@Screens': './src/screens',
          '@Navigation': './src/navigation',
          '@Shared': './src/shared',
        },
      },
    ],
  ],
};
