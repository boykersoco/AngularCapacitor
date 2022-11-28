import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'angular-capacitor',
  webDir: 'dist/angular-capacitor',
  bundledWebRuntime: false,
  server:
  {
    url: 'http://192.168.1.2:4200',
    cleartext: true
  }
};

export default config;
