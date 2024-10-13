import { teacherAideMenuItemName } from "./common";
import { addMenubarItem, addToolbarButtons } from "editor_tiny/utils";

const getToolbarConfiguration = (instanceConfig) => {
  let toolbar = instanceConfig.toolbar;
  toolbar = addToolbarButtons(toolbar, "content", [teacherAideMenuItemName]);

  return toolbar;
};

const getMenuConfiguration = (instanceConfig) => {
  let menu = instanceConfig.menu;
  menu = addMenubarItem(menu, "tools", [teacherAideMenuItemName].join(" "));

  return menu;
};

export const configure = (instanceConfig) => {
  return {
    toolbar: getToolbarConfiguration(instanceConfig),
    menu: getMenuConfiguration(instanceConfig),
  };
};
