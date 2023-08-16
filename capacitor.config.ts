import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.rematech.app',
  appName: 'rematech',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    allowNavigation: ['https://docs.google.com'], // Permite la navegación a Google Docs
  },
  plugins: {
    GoogleAuth: {
      scopes: ['email', 'profile'],
      serverClientId: '763541469753-v6nh2hc5flgi16nten0jdrusg0js52al.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#488AFF",
      sound: "beep.wav",
    },
  },
};

export default config;
