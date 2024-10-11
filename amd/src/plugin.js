import {getTinyMCE} from 'editor_tiny/loader';
import {getPluginMetadata} from 'editor_tiny/utils';

import {component, pluginName} from './common';
import {register as registerOptions} from './options';
import {getSetup as getCommandSetup} from './commands';
import * as Configuration from './configuration';

// eslint-disable-next-line no-async-promise-executor
export default new Promise(async(resolve) => {
    const [
        tinyMCE,
        pluginMetadata,
        setupCommands,
    ] = await Promise.all([
        getTinyMCE(),
        getPluginMetadata(component, pluginName),
        getCommandSetup(),
    ]);

    tinyMCE.PluginManager.add(pluginName, (editor) => {
        registerOptions(editor);

        setupCommands(editor);

        return pluginMetadata;
    });

    resolve([pluginName, Configuration]);
});