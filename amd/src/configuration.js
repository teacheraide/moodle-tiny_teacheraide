import { teacherAideMenuItemName } from "./common";
import { addMenubarItem } from "editor_tiny/utils";

export const configure = (instanceConfig) => {
  // Start with the existing menu configuration
  let updatedMenu = instanceConfig.menu;

  // Add our item to the 'tools' section if it exists, or to 'insert' as a fallback
  updatedMenu = addMenubarItem(updatedMenu, "tools", teacherAideMenuItemName);

  // If 'tools' doesn't exist, it might not have been added, so try 'insert'
  if (JSON.stringify(updatedMenu) === JSON.stringify(instanceConfig.menu)) {
    updatedMenu = addMenubarItem(
      updatedMenu,
      "insert",
      teacherAideMenuItemName
    );
  }

  // Return the updated configuration
  return {
    menu: updatedMenu,
  };
};
