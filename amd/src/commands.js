import { getString } from "core/str";
import { component, teacherAideMenuItemName, icon } from "./common";

export const getSetup = async () => {
  const [buttonTooltip] = await Promise.all([
    getString("pluginname", component),
  ]);

  return (editor) => {
    editor.ui.registry.addMenuItem(teacherAideMenuItemName, {
      icon,
      text: buttonTooltip,
      onAction: () => {
        // eslint-disable-next-line no-console
        console.log("Teacher Aide Button Clicked");
      },
    });
  };
};
