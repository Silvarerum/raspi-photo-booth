const { app, BrowserWindow } = require('electron');
const { PhotoBooth } = require('./PhotoBooth');

/**
 * Global reference to BrowserWindow object.
 * This is required to avoid deletion by garbage collector.
 * @global
 */
let win;

/**
 * Main app function used for setup and starting singletons.
 */
function main() {
  /**
  * Constant representing window height.
  * @constant {number}
  * @default
  */
  WINDOW_HEIGHT = 600;

  /**
   * Constant representing window width.
   * @constant {number}
   * @default
   */
  WINDOW_WIDTH = 800;

  // Setup main window
  win = new BrowserWindow({ WINDOW_WIDTH, height: WINDOW_HEIGHT });
  win.on('closed', () => {
    win = null;
  });

  const photoBooth = new PhotoBooth(win);

  photoBooth.start();
}

// Starts main app process when Electron in ready
app.on('ready', main);

// MacOS hacks
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    main();
  }
});
