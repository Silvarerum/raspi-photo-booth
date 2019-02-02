const { app, BrowserWindow } = require('electron');

/**
 * Main application class.
 */
class PhotoBooth {

  /**
   * Default PhotoBooth constructor. 
   * Defines constants and runs init() method.
   * @param {BrowserWindow} [window=global.win] - BrowserWindow object to work with
   */
  constructor(window = win) {
    this.win = window;

    /**
     * Constant representing 'index.html' file path.
     * @constant {string}
     * @default
     */
    this.HTML_INDEX_PATH = 'index.html';

    this.init();
  }

  /**
   * Init method called by constructor to set up .
   */
  init() {
    
  }

  /**
   * Method used to start application after initialization.
   */
  start() {
    this.win.loadFile(this.HTML_INDEX_PATH);
    this.win.webContents.openDevTools();
  }
};

module.exports = { PhotoBooth };