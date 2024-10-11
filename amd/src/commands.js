import {getButtonImage} from "editor_tiny/utils";
import {get_string as getString} from "core/str";
import {
  component,
  startdemoButtonName,
  startdemoMenuItemName,
  icon,
} from "./common";

const handleAction = (editor) => {
  window.console.log(editor);
};

export const getSetup = async() => {
  const [startdemoButtonNameTitle, startdemoMenuItemNameTitle, buttonImage] =
    await Promise.all([
      getString("button_startdemo", component),
      getString("menuitem_startdemo", component),
      getButtonImage("icon", component),
    ]);

  return (editor) => {
    // Register the Moodle SVG as an icon suitable for use as a TinyMCE toolbar button.
    editor.ui.registry.addIcon(icon, buttonImage.html);

    // Register the startdemo Toolbar Button.
    editor.ui.registry.addButton(startdemoButtonName, {
      icon,
      tooltip: startdemoButtonNameTitle,
      onAction: () => handleAction(editor),
    });

    // Add the startdemo Menu Item.
    // This allows it to be added to a standard menu, or a context menu.
    editor.ui.registry.addMenuItem(startdemoMenuItemName, {
      icon,
      text: startdemoMenuItemNameTitle,
      onAction: () => handleAction(editor),
    });
  };
};
