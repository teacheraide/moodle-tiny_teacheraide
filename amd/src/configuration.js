import { teacherAideButtonName } from "./common";
import { addMenubarItem } from "editor_tiny/utils";

export const configure = (instanceConfig) => {
  // Update the instance configuration to add the Tools menu.
  return {
    menu: addMenubarItem(instanceConfig.menu, "tools", teacherAideButtonName),
  };
};
