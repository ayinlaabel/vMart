const version = "0.0.1";
const buildNumber = 1;

export default ({ config }) => {
  // Define the flavor parameters so apps in dev, uat and production can be easily identified
  const flavorMap = {
    development: {
      androidBundleId: "com.vmart.dev",
      iosBundleId: "com.techie.vmart.dev",
      bundleName: "vMart (dev)",
      icon: "./assets/icon_dev.png",
      adaptiveIcon: "./assets/adaptive-logo.png",
      scheme: "vMart-dev",
    },
    uat: {
      androidBundleId: "com.vmart.uat",
      iosBundleId: "com.techie.vmart.uat",
      bundleName: "vMart (uat)",
      icon: "./assets/icon_uat.png",
      adaptiveIcon: "./assets/adaptive-logo.png",
      scheme: "vMart-uat",
    },
    production: {
      androidBundleId: "com.vmart",
      iosBundleId: "com.techie.vmart",
      bundleName: "vMart",
      icon: "./assets/icon.png",
      adaptiveIcon: "./assets/adaptive-logo.png",
      scheme: "vMart",
    },
  };

  return {
    ...config,
    owner: "vmart-by-techie",
    version: version,
    name: flavorMap?.[process.env.APP_ENV]?.bundleName,
    icon: flavorMap?.[process.env.APP_ENV]?.icon,
    ...(process.env.NODE_ENV === "development"
      ? {}
      : { scheme: flavorMap?.[process.env.APP_ENV]?.scheme }),
    ios: {
      bundleIdentifier: flavorMap?.[process.env.APP_ENV]?.iosBundleId,
      buildNumber: `${buildNumber}`,
    },
    android: {
      ...config.android,
      package: flavorMap?.[process.env.APP_ENV]?.androidBundleId,
      versionCode: buildNumber,
      adaptiveIcon: {
        ...config.android.adaptiveIcon,
        foregroundImage: flavorMap?.[process.env.APP_ENV]?.adaptiveIcon,
      },
    },
    extra: {
      eas: {
        projectId: "9ef70330-678b-4ef7-8640-3a08e6b8e1db",
      },
    },
    // ... other config here
  };
};
