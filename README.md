# Welcome to the Foodu project

https://github.com/jaovito/foodu-mobile/assets/61637710/09fd6946-5291-4a02-9914-045d1e44d8e3

Foodu is a project developed by me, alone, I used it to study some interesting things about maps, geolocation, Haversine calculation, and other things. It's only a repository project and you can contribute or analyze it yourself, I use many different technologies to build this project, but I don't complicated things because it's a small project, and sometimes the complicated things complicate the codes haha.

In this project I tried to use the best things that I could learn from my job experience, studies and the companies that I've been working on.

## Topics
- [Welcome to the Foodu project](#welcome-to-the-foodu-project)
  - [Topics](#topics)
  - [About the project](#about-the-project)
  - [Technologies 🚀](#technologies-)
  - [Other Methodologies](#other-methodologies)
  - [Installation 💻](#installation-)
    - [Android](#android)
    - [iOS](#ios)


## About the project
In this project you can buy some food, add to your cart, favorite the food, and set your location, based on your location, the server will return the restaurants near you, you can choose the distance to find the restaurant near you setting the distance in kilometers. The server will calculate the distance based on the Haversine Formula and then return the restaurants.

About the app, initialy you see the onboarding screen, it's a simpatical screen with some description, after you can do the login with your credentials. When you are logged in, you need to configure your location, because we need this to find the restaurants, when you type the location and click on the search button, will appear some cards location, that the app searches for you. Select some card and will appear a MAP 🤩🤩🤩. The map is to confirm your location, you can swipe or move it to another location.

Saving the location, you are already done, now you can see the restaurants results (if have some result into the server).

## Technologies 🚀
- React Native
- Flipper (Debugger)
- Mobx State Tree (Global State Tree)
- GraphQL (With URQL)
- Unit/Component Testing (Testing Library + Jest)
- Testing Coverage (With Jest)
- React Native Maps 🗺️
- Mapbox API
- Internationalization for english and portuguese (i18n)

## Other Methodologies
- Atomic Design
- Clean Architecture (Some things only)

## Installation 💻
First you need to clone the server repository and configure then, if you don't know how configure or you don't understand, you can use the following test server url: `foodu-server-production.up.railway.app` (you need to put it in the .env.json file, I will explain later).

Now you can clone this repository with the following command:

```sh
$ git clone https://github.com/jaovito/f](https://github.com/jaovito/foodu-mobile.git
```

After cloning the repository, you need to run the following command to install the packages inside the project directory:

```sh
$ npm install # or yarn install
```

After installing the packages, we need to configure the environment variables for the application, you will need to clone the file [.env.example](./.env.example.json) or rename it to `.env.json`. You can run this command if you are using the linux or macOS environment.
```sh
cp .env.example.json .env.json
```

After you've created the file, you need to open the file and insert your variables, if you don't want to run the server in your machine, you can just ignore this step. But you will need a mapbox API KEY.

After that, you can follow the instructions below for installing configure the project into your environment (iOS or Android).

### Android
For android you will need to get the Google Maps API Key, because we use the Google Maps to render the map. After you have done that, you can insert the Google Maps API Key into [AndroidManifest.xml](./android/app/src/main/AndroidManifest.xml), in the line 21, you change the string from `INSERT YOUR API KEY HERE` to your Google maps API key.

After you have done that, you can run your emulator and the following command to run the app:
```sh
$ npm run android # or yarn android
```

### iOS
For iOS, you can only install the pods, running these commands:

```sh
$ cd ios && pod install
```

After you have done that, you can run your emulator and use the following command:

```sh
$ npm run ios # or yarn ios
```

Congratulations 👏🎉, the app was successfully installed.
