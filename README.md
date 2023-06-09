# react-native-demo
Using pnpm with React Native

## init project

ref: [Using pnpm with React Native](https://runreactnative.dev/posts/pnpm-react-native)

```bash
pnpx react-native init ReactNativeDemo --skip-install
```

update dependencies

```json
  "dependencies": {
    "jsc-android": "^250231.0.0",
    "react": "18.2.0",
    "react-native": "0.71.4"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@babel/preset-env": "^7.20.0",
    "@babel/runtime": "^7.20.0",
    "@react-native-community/cli-platform-android": "^10.2.0",
    "@react-native-community/cli-platform-ios": "^10.2.1",
    "@react-native-community/eslint-config": "^3.2.0",
    "@rnx-kit/metro-config": "^1.3.5",
    "@rnx-kit/metro-resolver-symlinks": "^0.1.27",
    "@tsconfig/react-native": "^2.0.3",
    "@types/jest": "^29.2.1",
    "@types/react": "^18.0.24",
    "@types/react-test-renderer": "^18.0.0",
    "babel-jest": "^29.2.1",
    "eslint": "^8.19.0",
    "jest": "^29.2.1",
    "metro-react-native-babel-preset": "0.73.8",
    "prettier": "^2.4.1",
    "react-native-gradle-plugin": "^0.71.16",
    "react-test-renderer": "18.2.0",
    "typescript": "4.8.4"
  },
```

## rename to your project

```bash
pnpx react-native-rename "MyReactNativeDemo" -b "com.myreactnative.demo"
```
