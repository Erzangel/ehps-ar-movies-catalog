# React-native AR Movie Catalog for mobile devices

This repository contains the **mobile application** prototype for the *ECE Horror Picture Show* engineering school project.

## App goal

The AR Movie Catalog is meant to provide a platform for both consumers and creators:

- For consumers: a catalog to choose AR movies from, launched in the [Unity AR Movie player in a separate repository](https://github.com/Erzangel/ece-horror-picture-show);
- For AR creators: a way to upload their AR movies directly to their platform.

## How to use

### First runs

1. Install prerequisites [for Windows & Android target as explained here](#windows-and-android-target-installation-details), or [go to the official documentation for other platforms](https://reactnative.dev/docs/environment-setup);
2. Clone this repository using either [GitHub Desktop](https://desktop.github.com/) or Git CLI: `git clone git@github.com:Erzangel/ece-horror-picture-show.git`;
3. (Optional) If using Windows, you may install [Git Bash](https://git-scm.com/downloads) for a nicer terminal. Otherwise, use Powershell (right-click on the Windows icon on the bottom-left, and choose `Windows PowerShell`).
4. Using one of the two terminals described above, navigate to the project folder: `cd {path where you cloned this project}`;
5. Run `npm install`.

### Run the project

1. Open an Android Emulator with Android Studio (alternatively, use a physical device):
   1. Open the `android/` folder of this project in Android Studio
   2. Click on a button on the top right spelling `Device Manager` (the icon is a phone with the Android logo on it)
   3. Click on the Play button next to a phone if there is one in the list, otherwise create a virtual device
   4. Once the phone is started, move on
2. Open **two** terminal windows (using Git Bash or PowerShell on Windows) and navigate to the project folder: `cd {path where you cloned this project}`
3. Open Metro in the first terminal with `npx react-native start` and keep it open;
4. In the other terminal tab, run `npx react-native run-android`;
5. Preview the app in the emulator/physical device;
6. Open an IDE such as VSCode and edit the `.js` React files as needed.

> Tip: When using an emulator, double-tab R to refresh the app and display changes

## Windows and Android target Installation details

Instructions derived from [here](https://reactnative.dev/docs/environment-setup) with Windows & Android selected. Refer to this link if you encounter issues.

1. Install [Chocolatey](https://chocolatey.org/install) following the steps for PowerShell (right-click the Windows icon on the bottom left, and click on Windows PowerShell, and type instructions there)
2. Install node.js and OpenJDK with Chocolatey: `choco install -y nodejs-lts openjdk11`
3. Install [Android Studio](https://developer.android.com/studio/index.html). During installation, make sure that `Android SDK`, `Android SDK Platform` and `Android Virtual Device` are selected
4. In Android Studio main page, go to More Actions -> SDK Manager -> Install Android Studio 12 (S) SDK
  - Select the "SDK Platforms" tab from within the SDK Manager, look for and expand the Android 12 (S) entry, make sure the following is checked: `Android SDK Platform 31`, and `Intel x86 Atom_64 System Image` or `Google APIs Intel x86 Atom System Image`;
  - Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the Android SDK Build-Tools entry, then make sure that 31.0.0 is selected.
5. Configure the ANDROID_HOME environment variable:
  - Open the Windows Control Panel.
  - Click on User Accounts, then click User Accounts again
  - Click on Change my environment variables
  - Click on New... to create a new ANDROID_HOME user variable that points to the path to your Android SDK. It must look like `...\AppData\Local\Android\Sdk`
6. Also set the platform-tools to path:
  - Open the Windows Control Panel.
  - Click on User Accounts, then click User Accounts again
  - Click on Change my environment variables
  - Select the Path variable.
  - Click Edit.
  - Click New and add the path to platform-tools to the list. Is is `...\AppData\Local\Android\Sdk\platform-tools`
7. Congrats! Now follow the steps above to get started

## Project contributors

| Name                 | Contact                         | Role                          | Active             |
| -------------------- | ------------------------------- | ----------------------------- | ------------------ |
| Virgile Lefebvre     | virgile.lefebvre@edu.ece.fr     |  Project Lead                 | :heavy_check_mark: |
| Luka Bigot           | luka.bigot@edu.ece.fr           |  Co-Technical Lead            | :heavy_check_mark: |
| Lilian Pousset       | lilian.pousset@edu.ece.fr       | Co-Technical Lead             | :heavy_check_mark: |
| Alexandre Fillinger  |  alexandre.fillinger@edu.ece.fr | Design Lead                   | :heavy_check_mark: |
| Celina Taiabi        | celina.taiabi@edu.ece.fr        | Cognitive Studies Lead        | :heavy_check_mark: |
| Gabriel Vigne        |  gabriel.vigne@edu.ece.fr       | Business Lead                 | :heavy_check_mark: |
| Valentin Malomsoki   | valentin.malomsoki@edu.ece.fr   | Former Technical Lead         |    |
| Joseph Louville      | joseph.louville@edu.ece.fr      | Former Cognitive Studies Lead |    |
| Cécile Dehan         | cecile.dehan@edu.ece.fr         | Former Technical Team Member  |    |
| Marc Fichaux         | marc.fichaux@edu.ece.fr         | Former Technical Team Member  |    |
