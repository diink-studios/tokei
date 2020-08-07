import { app, BrowserWindow } from 'electron';
import { TrayMenu } from '@/electron/TrayMenu';

const appElements: any = {
  tray: null,
  windows: []
};

app.on('ready', () => {
  appElements.tray = new TrayMenu();
});