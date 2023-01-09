# Errors encountered during development

This file contains some of the errors we went through during development, and our fixes for them

## AndroidSdk version error between React Native and Unity integration

The error when running `run-android`:

```
BUILD FAILED in 9s

error Failed to install the app. Make sure you have the Android development environment set up: https://reactnative.dev/docs/environment-setup.
Error: Command failed: gradlew.bat app:installDebug -PreactNativeDevServerPort=8081
D:\GitHub Cloning Folder\ehps-ar-movies-catalog\android\app\src\debug\AndroidManifest.xml Error:
        uses-sdk:minSdkVersion 21 cannot be smaller than version 24 declared in library [:unityLibrary] D:\GitHub Cloning Folder\ehps-ar-movies-catalog\unity\builds\android\unityLibrary\build\intermediates\merged_manifest\debug\AndroidManifest.xml as the library might be using APIs not available in 21
        Suggestion: use a compatible library with a minSdk of at most 21,
                or increase this project's minSdk version to at least 24,
                or use tools:overrideLibrary="com.unity3d.player" to force usage (may lead to runtime failures)

FAILURE: Build completed with 2 failures.
```

The diagnostic:

- Basic React Native app
- Integration attempt with the UnityARHorrorPictureShow project
- Issue happens while merging manifests
- SDKs used cannot be found in the AndroidManifest.xml files of either project so far
- **It turns out that the Unity AR project settings had the minSDK of 24 and maxSDK of 30

Attemped workarounds:

- Using a minSdk of 21 in the Unity project **does not work**, minimum API of 24 is required for AR
  - When building for Android, go to player settings and search for Minimum API level
  - Selecting Android 5.0 Lollipop (API level 21) always fails the build
  
Fix:

- Change buildscript.ext.minSdkVersion to 24 in `[project root]/android/build.gradle`

## NDK error when integrating Unity and using Android Studio in Windows

The error:

```
1: Task failed with an exception.
-----------
* Where:
Build file 'D:\GitHub Cloning Folder\ehps-ar-movies-catalog\unity\builds\android\unityLibrary\build.gradle' line: 67

* What went wrong:
Execution failed for task ':unityLibrary:BuildIl2CppTask'.
> NDK is not installed
```

The diagnostic:

- [According to this Stackoverflow link](https://stackoverflow.com/questions/29122903/ndk-is-not-configured-issue-in-android-studio), this is related to development on Android Studio with Windows
  - A possible fix is to supply a path for an installed NDK
- **It seems like Unity has a local NDK, which does not match the NDK used with Android Studio!**

Attempts to fix:

[As explained on this comment of a GitHub thread](https://github.com/juicycleff/flutter-unity-view-widget/issues/440#issuecomment-939385585):

```
Upon further investigation it seems this is related to a mismatch of the Unity NDK version and the version installed with Android Studio, once the two version matched I was able to build fine.

Steps:

Go to the location of Unity's NDK. In my case it was under /Applications/Unity/Hub/Editor/2020.3.15f2/PlaybackEngines/AndroidPlayer/NDK like in @roberto-donext case. Your location may vary based on OS.
Open the source.properties file and look for the NDK version used, for example Pkg.Revision = 21.3.6528147
Go to Android Studio and under the SDK manager download the same NDK version unity is using. (Don't forget to check "Show package details" to see a list of all NDK versions.
Once the download is complete go to unityLibrary/build.gradle and configure that version inside the top android { }. For example ndkVersion "21.3.6528147"
Build
```
  
In my case, content of the `source.properties` of the Unity NDK:

```
Pkg.Desc = Android NDK
Pkg.Revision = 19.0.5232133
```

I then downloaded the corresponding NDK in Android Studio. I then edited the `../unityLibrary/build.gradle` to add `ndkVersion "19.0.5232133"` as specified.

However, this did not solve the issue.

[This comment from the same thread](https://github.com/juicycleff/flutter-unity-view-widget/issues/440#issuecomment-900176811) instead indicates it is possible to give a path for NDK in the `local.properties` file.

I did this, modifying the `` file with the following path: ``

## Unknown error with permissions and out folder

The error:

```
1: Task failed with an exception.
-----------
* What went wrong:
Execution failed for task ':app:mergeDebugNativeLibs'.
> Unable to delete directory 'D:\GitHub Cloning Folder\ehps-ar-movies-catalog\android\app\build\intermediates\merged_native_libs\debug\out\lib' after 10 attempts
```