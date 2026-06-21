const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueId = () => {
   if(IS_DEV) return "com.b2kumar03.intro_to_expo_application_service.dev";
   if(IS_PREVIEW) return "com.b2kumar03.intro_to_expo_application_service.preview";
   return "com.b2kumar03.intro_to_expo_application_service.app";
};
const getAppName= () => {
   if(IS_DEV) return "intro_to_expo_application_service-dev";
   if(IS_PREVIEW) return "intro_to_expo_application_service-preview";
   return "intro_to_expo_application_service";
}


export default {
  "expo": {
    "name":getAppName(),
    "slug": "intro_to_expo_application_service",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "introtoexpoapplicationservice",
    "userInterfaceStyle": "automatic",
    "ios": {
      "icon": "./assets/expo.icon"
    },
    "android": {
      "adaptiveIcon": {
        "backgroundColor": "#E6F4FE",
        "foregroundImage": "./assets/images/android-icon-foreground.png",
        "backgroundImage": "./assets/images/android-icon-background.png",
        "monochromeImage": "./assets/images/android-icon-monochrome.png"
      },
      "predictiveBackGestureEnabled": false,
      "package": getUniqueId()
    },
    "web": {
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "backgroundColor": "#208AEF",
          "android": {
            "image": "./assets/images/splash-icon.png",
            "imageWidth": 76
          }
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true,
      "reactCompiler": true
    },
    "extra": {
      "router": {},
      "eas": {
        "projectId": "7c109f95-8e09-41b0-9c31-d94c27691435"
      }
    }
  }
}
