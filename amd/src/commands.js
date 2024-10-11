import { getString } from "core/str";
import { component, teacherAideButtonName, icon } from "./common";

export const getSetup = async () => {
  const [buttonTooltip] = await Promise.all([
    getString("pluginname", component),
  ]);

  return (editor) => {
    // Register the Menu Button as a toggle.
    editor.ui.registry.addButton(teacherAideButtonName, {
      icon,
      tooltip: buttonTooltip,
      onAction: () => {
        // eslint-disable-next-line no-console
        console.log("Teacher Aide Button Clicked");
      },
    });

    editor.ui.registry.addMenuItem(teacherAideButtonName, {
      icon,
      text: buttonTooltip,
      onAction: () => {
        // eslint-disable-next-line no-console
        console.log("Teacher Aide Button Clicked");
      },
    });
  };
};
