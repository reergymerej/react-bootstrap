module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "jest": true,
    "browser": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  "settings": {
    "react": {
      "version": "detect",
    },
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
    "sourceType": "module"
  },
  "plugins": [ "react" ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "no-shadow": [
      "warn",
    ],
    "complexity": [
      "warn", 3
    ],
  },
}

