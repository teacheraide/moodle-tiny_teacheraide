import { getTinyMCE } from "editor_tiny/loader";
import { getPluginMetadata } from "editor_tiny/utils";

import { component, pluginName } from "./common";
import * as Configuration from "./configuration";
import * as Commands from "./commands";

// eslint-disable-next-line no-async-promise-executor
export default new Promise(async (resolve) => {
  const [tinyMCE, pluginMetadata, setupCommands] = await Promise.all([
    getTinyMCE(),
    getPluginMetadata(component, pluginName),
    Commands.getSetup(),
  ]);

  tinyMCE.PluginManager.add(pluginName, (editor) => {
    setupCommands(editor);

    return pluginMetadata;
  });

  resolve([pluginName, Configuration]);
});
