import { JupyterFrontEndPlugin } from '@jupyterlab/application';

import { defaultFileBrowser } from './filebrowser';
import {
  userMenuPlugin,
  menuBarPlugin,
  rtcGlobalAwarenessPlugin,
  rtcPanelPlugin
} from './collaboration';

/**
 * Export the plugins as default.
 */
const plugins: JupyterFrontEndPlugin<any>[] = [
  defaultFileBrowser,
  userMenuPlugin,
  menuBarPlugin,
  rtcGlobalAwarenessPlugin,
  rtcPanelPlugin
];

export default plugins;
