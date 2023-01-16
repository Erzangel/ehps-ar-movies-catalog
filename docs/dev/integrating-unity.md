# Integrating an Unity app to a React Native application

This document contains everything we noted about integrating Unity with our React Native application.

## Considerations

- The Unity embed requires an NDK on the computer for the dev environment:
  - This NDK must be specified in the Unity project's `local.properties`
  - It is unknown if it has an impact outside of the dev environment, when the whole app is running on the phone
- Only one Unity app can be loaded at a time, in the `unity/builds/android` folder:
  - When changing movies, maybe the Unity app can be moved at runtime? Needs testing
  - Changing movies is debatably mandatory for a prototype
- The Unity projects need to be in an exported format and with a few settings tweaked:
  - Thankfully, this is a one-time task to do and the Unity AR content simply has to be "prepared" for use with React Native before we store it in our DB.
  
## Exporting an Unity project

1. Open the Unity project with Unity;
2. Go to Build & Run, check the `Export Project` tick, and export it;
3. Wait for export;
4. When finished, modify the `android/local.properties` file and add a reference to the NDK on your computer. Example: `ndk.dir=D\:/Unity/Unity Editor/2020.3.23f1/Editor/Data/PlaybackEngines/AndroidPlayer/NDK`;
5. Move the exported folder to `[project root]/unity/builds`.

## Modifications to the settings of the React Native app itself

Modifications from [the react-native-unity package repository](https://github.com/azesmway/react-native-unity#android) were followed, along with other tweaks resulting from [the errors we encountered](./errors-encountered.md).

## Testing notice

Installs were performed for testing the Unity integration. Those were:

```
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
```

and a line added to the `MainActivity.java` file of the `android/` folder [as explained here](https://reactnavigation.org/docs/getting-started/#installing-dependencies-into-a-bare-react-native-project).