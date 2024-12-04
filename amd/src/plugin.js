define(["editor_tiny/loader", "editor_tiny/utils", "core/str", "core/modal_factory"], function(loader, utils, str, ModalFactory) {
  "use strict";
  const pluginName = "tiny_teacheraide/plugin";
  const component = "tiny_teacheraide";
  const teacherAideMenuItemName = `${component}_menuitem`;
  const icon = "";
  const getToolbarConfiguration = (instanceConfig) => {
    let toolbar = instanceConfig.toolbar;
    toolbar = utils.addToolbarButtons(toolbar, "content", [teacherAideMenuItemName]);
    return toolbar;
  };
  const getMenuConfiguration = (instanceConfig) => {
    let menu = instanceConfig.menu;
    menu = utils.addMenubarItem(menu, "tools", [teacherAideMenuItemName].join(" "));
    return menu;
  };
  const configure = (instanceConfig) => {
    return {
      toolbar: getToolbarConfiguration(instanceConfig),
      menu: getMenuConfiguration(instanceConfig)
    };
  };
  const Configuration = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    configure
  }, Symbol.toStringTag, { value: "Module" }));
  const getSetup = async () => {
    const modal = await ModalFactory.create({
      id: "chat-modal",
      body: '<teacheraide-simple-chat id="teacheraide-modal-chatbox" class="teacheraide-simple-chat"/>'
    });
    const [buttonTooltip] = await Promise.all([
      str.getString("pluginname", component)
    ]);
    return (editor) => {
      editor.ui.registry.addMenuItem(teacherAideMenuItemName, {
        icon,
        text: buttonTooltip,
        onAction: (event) => {
          const button = event.currentTarget || document.activeElement;
          console.log("Teacher Aide Button Clicked", button);
          let iframeTargetId = "";
          let modalContent = button.closest('[data-fieldtype="editor"]') || button.closest(".form-textarea");
          if (modalContent != void 0) {
            console.log(`modal Content`, modalContent);
            console.log(`modal Content id`, modalContent.id);
            const iframe = modalContent.querySelector("iframe");
            console.log(`modal iframe`, iframe);
            console.log(`modal iframe id`, iframe.id);
            iframeTargetId = iframe.id;
          }
          modal.show();
          const teachermodal = document.getElementById("teacheraide-modal-chatbox");
          const teacherModalParent = teachermodal.closest(".modal-content");
          teacherModalParent.style.position = "fixed";
          teacherModalParent.style.right = "0px";
          teacherModalParent.style.top = "0px";
          teacherModalParent.style.width = "400px";
          teachermodal.setAttribute("data-iframe-target", iframeTargetId);
        }
      });
    };
  };
  const plugin = new Promise(async (resolve) => {
    const [tinyMCE, pluginMetadata, setupCommands] = await Promise.all([
      loader.getTinyMCE(),
      utils.getPluginMetadata(component, pluginName),
      getSetup()
    ]);
    tinyMCE.PluginManager.add(pluginName, (editor) => {
      setupCommands(editor);
      return pluginMetadata;
    });
    resolve([pluginName, Configuration]);
  });
  return plugin;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLmpzIiwic291cmNlcyI6WyIuLi8uLi92dWUvc3JjL2NvbW1vbi5qcyIsIi4uLy4uL3Z1ZS9zcmMvY29uZmlndXJhdGlvbi5qcyIsIi4uLy4uL3Z1ZS9zcmMvY29tbWFuZHMuanMiLCIuLi8uLi92dWUvc3JjL3BsdWdpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcGx1Z2luTmFtZSA9IFwidGlueV90ZWFjaGVyYWlkZS9wbHVnaW5cIjtcbmV4cG9ydCBjb25zdCBjb21wb25lbnQgPSBcInRpbnlfdGVhY2hlcmFpZGVcIjtcbmV4cG9ydCBjb25zdCB0ZWFjaGVyQWlkZU1lbnVJdGVtTmFtZSA9IGAke2NvbXBvbmVudH1fbWVudWl0ZW1gO1xuZXhwb3J0IGNvbnN0IGljb24gPSBcIlwiO1xuIiwiaW1wb3J0IHsgdGVhY2hlckFpZGVNZW51SXRlbU5hbWUgfSBmcm9tIFwiLi9jb21tb25cIjtcbmltcG9ydCB7IGFkZE1lbnViYXJJdGVtLCBhZGRUb29sYmFyQnV0dG9ucyB9IGZyb20gXCJlZGl0b3JfdGlueS91dGlsc1wiO1xuXG5jb25zdCBnZXRUb29sYmFyQ29uZmlndXJhdGlvbiA9IChpbnN0YW5jZUNvbmZpZykgPT4ge1xuICBsZXQgdG9vbGJhciA9IGluc3RhbmNlQ29uZmlnLnRvb2xiYXI7XG4gIHRvb2xiYXIgPSBhZGRUb29sYmFyQnV0dG9ucyh0b29sYmFyLCBcImNvbnRlbnRcIiwgW3RlYWNoZXJBaWRlTWVudUl0ZW1OYW1lXSk7XG5cbiAgcmV0dXJuIHRvb2xiYXI7XG59O1xuXG5jb25zdCBnZXRNZW51Q29uZmlndXJhdGlvbiA9IChpbnN0YW5jZUNvbmZpZykgPT4ge1xuICBsZXQgbWVudSA9IGluc3RhbmNlQ29uZmlnLm1lbnU7XG4gIG1lbnUgPSBhZGRNZW51YmFySXRlbShtZW51LCBcInRvb2xzXCIsIFt0ZWFjaGVyQWlkZU1lbnVJdGVtTmFtZV0uam9pbihcIiBcIikpO1xuXG4gIHJldHVybiBtZW51O1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyZSA9IChpbnN0YW5jZUNvbmZpZykgPT4ge1xuICByZXR1cm4ge1xuICAgIHRvb2xiYXI6IGdldFRvb2xiYXJDb25maWd1cmF0aW9uKGluc3RhbmNlQ29uZmlnKSxcbiAgICBtZW51OiBnZXRNZW51Q29uZmlndXJhdGlvbihpbnN0YW5jZUNvbmZpZyksXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgZ2V0U3RyaW5nIH0gZnJvbSBcImNvcmUvc3RyXCI7XG5pbXBvcnQgTW9kYWxGYWN0b3J5IGZyb20gJ2NvcmUvbW9kYWxfZmFjdG9yeSc7XG5pbXBvcnQgeyBjb21wb25lbnQsIHRlYWNoZXJBaWRlTWVudUl0ZW1OYW1lLCBpY29uIH0gZnJvbSBcIi4vY29tbW9uXCI7XG5cblxuXG5cbmV4cG9ydCBjb25zdCBnZXRTZXR1cCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBhd2FpdCBNb2RhbEZhY3RvcnkuY3JlYXRlKHtcbiAgICBpZDogXCJjaGF0LW1vZGFsXCIsXG4gICAgYm9keTogJzx0ZWFjaGVyYWlkZS1zaW1wbGUtY2hhdCBpZD1cInRlYWNoZXJhaWRlLW1vZGFsLWNoYXRib3hcIiBjbGFzcz1cInRlYWNoZXJhaWRlLXNpbXBsZS1jaGF0XCIvPicsXG4gIH0pO1xuICBcblxuICBjb25zdCBbYnV0dG9uVG9vbHRpcF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZ2V0U3RyaW5nKFwicGx1Z2lubmFtZVwiLCBjb21wb25lbnQpLFxuICBdKTtcblxuICByZXR1cm4gKGVkaXRvcikgPT4ge1xuICAgIGVkaXRvci51aS5yZWdpc3RyeS5hZGRNZW51SXRlbSh0ZWFjaGVyQWlkZU1lbnVJdGVtTmFtZSwge1xuICAgICAgaWNvbixcbiAgICAgIHRleHQ6IGJ1dHRvblRvb2x0aXAsXG4gICAgICBvbkFjdGlvbjogKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uID0gZXZlbnQuY3VycmVudFRhcmdldCB8fCBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRlYWNoZXIgQWlkZSBCdXR0b24gQ2xpY2tlZFwiLGJ1dHRvbik7XG5cbiAgICAgICAgLy9jb25zdCBtb2RhbEJvZHkgPSBidXR0b24uY2xvc2VzdCgnLm1vZGFsLWJvZHknKTtcblxuICAgICAgICBsZXQgaWZyYW1lVGFyZ2V0SWQgPSAnJztcbiAgICAgICAgbGV0IG1vZGFsQ29udGVudCA9IGJ1dHRvbi5jbG9zZXN0KCdbZGF0YS1maWVsZHR5cGU9XCJlZGl0b3JcIl0nKXx8YnV0dG9uLmNsb3Nlc3QoJy5mb3JtLXRleHRhcmVhJyk7XG5cbiAgICAgICAgaWYobW9kYWxDb250ZW50IT11bmRlZmluZWQpe1xuXG4gICAgICAgICAgY29uc29sZS5sb2coYG1vZGFsIENvbnRlbnRgLG1vZGFsQ29udGVudCk7XG4gICAgICAgICAgY29uc29sZS5sb2coYG1vZGFsIENvbnRlbnQgaWRgLG1vZGFsQ29udGVudC5pZCk7XG5cbiAgICAgICAgICBjb25zdCBpZnJhbWUgPSBtb2RhbENvbnRlbnQucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiKTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKGBtb2RhbCBpZnJhbWVgLGlmcmFtZSk7XG4gICAgICAgICAgY29uc29sZS5sb2coYG1vZGFsIGlmcmFtZSBpZGAsaWZyYW1lLmlkKTtcbiAgICAgICAgICBpZnJhbWVUYXJnZXRJZCA9IGlmcmFtZS5pZDtcblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL2NvbnN0IG1vZGFsQ2hhdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtdGVhY2hlcmFpZGUtY2hhdFwiKTtcbiAgICAgICAgLy9pZihtb2RhbENoYXQ9PXVuZGVmaW5lZCl7XG4gICAgICAgIC8vICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVhY2hlcmFpZGUtc2ltcGxlLWNoYXQnKTtcbiAgICAgICAgLy8gIG5ld0VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzgwJSc7XG4gICAgICAgIC8vICBuZXdFbGVtZW50LmlkID0gXCJtb2RhbC10ZWFjaGVyYWlkZS1jaGF0XCJcbi8vXG4gICAgICAgIC8vICBpZiAobW9kYWxCb2R5Lm5leHRTaWJsaW5nKSB7XG4gICAgICAgIC8vICAgIG1vZGFsQm9keS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdFbGVtZW50LCBtb2RhbEJvZHkubmV4dFNpYmxpbmcpO1xuICAgICAgICAvLyAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgbW9kYWxCb2R5LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG4gICAgICAgIC8vICB9XG4gICAgICAgIC8vfVxuICAgICAgICBcbiAgICAgICAgbW9kYWwuc2hvdygpO1xuICAgICAgICBjb25zdCB0ZWFjaGVybW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlYWNoZXJhaWRlLW1vZGFsLWNoYXRib3hcIik7XG4gICAgICAgIGNvbnN0IHRlYWNoZXJNb2RhbFBhcmVudCA9IHRlYWNoZXJtb2RhbC5jbG9zZXN0KCcubW9kYWwtY29udGVudCcpO1xuICAgICAgICB0ZWFjaGVyTW9kYWxQYXJlbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICB0ZWFjaGVyTW9kYWxQYXJlbnQuc3R5bGUucmlnaHQgPSAnMHB4JztcbiAgICAgICAgdGVhY2hlck1vZGFsUGFyZW50LnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICB0ZWFjaGVyTW9kYWxQYXJlbnQuc3R5bGUud2lkdGggPSAnNDAwcHgnO1xuICAgICAgICB0ZWFjaGVybW9kYWwuc2V0QXR0cmlidXRlKCdkYXRhLWlmcmFtZS10YXJnZXQnLCBpZnJhbWVUYXJnZXRJZCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xufTtcblxuIiwiaW1wb3J0IHsgZ2V0VGlueU1DRSB9IGZyb20gXCJlZGl0b3JfdGlueS9sb2FkZXJcIjtcbmltcG9ydCB7IGdldFBsdWdpbk1ldGFkYXRhIH0gZnJvbSBcImVkaXRvcl90aW55L3V0aWxzXCI7XG5cbmltcG9ydCB7IGNvbXBvbmVudCwgcGx1Z2luTmFtZSB9IGZyb20gXCIuL2NvbW1vblwiO1xuaW1wb3J0ICogYXMgQ29uZmlndXJhdGlvbiBmcm9tIFwiLi9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgKiBhcyBDb21tYW5kcyBmcm9tIFwiLi9jb21tYW5kc1wiO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXN5bmMtcHJvbWlzZS1leGVjdXRvclxuZXhwb3J0IGRlZmF1bHQgbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcbiAgY29uc3QgW3RpbnlNQ0UsIHBsdWdpbk1ldGFkYXRhLCBzZXR1cENvbW1hbmRzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBnZXRUaW55TUNFKCksXG4gICAgZ2V0UGx1Z2luTWV0YWRhdGEoY29tcG9uZW50LCBwbHVnaW5OYW1lKSxcbiAgICBDb21tYW5kcy5nZXRTZXR1cCgpLFxuICBdKTtcblxuICB0aW55TUNFLlBsdWdpbk1hbmFnZXIuYWRkKHBsdWdpbk5hbWUsIChlZGl0b3IpID0+IHtcbiAgICBzZXR1cENvbW1hbmRzKGVkaXRvcik7XG5cbiAgICByZXR1cm4gcGx1Z2luTWV0YWRhdGE7XG4gIH0pO1xuXG4gIHJlc29sdmUoW3BsdWdpbk5hbWUsIENvbmZpZ3VyYXRpb25dKTtcbn0pO1xuIl0sIm5hbWVzIjpbImFkZFRvb2xiYXJCdXR0b25zIiwiYWRkTWVudWJhckl0ZW0iLCJnZXRTdHJpbmciLCJnZXRUaW55TUNFIiwiZ2V0UGx1Z2luTWV0YWRhdGEiLCJDb21tYW5kcy5nZXRTZXR1cCJdLCJtYXBwaW5ncyI6Ijs7QUFBTyxRQUFNLGFBQWE7QUFDbkIsUUFBTSxZQUFZO0FBQ2xCLFFBQU0sMEJBQTBCLEdBQUcsU0FBUztBQUM1QyxRQUFNLE9BQU87QUNBcEIsUUFBTSwwQkFBMEIsQ0FBQyxtQkFBbUI7QUFDbEQsUUFBSSxVQUFVLGVBQWU7QUFDN0IsY0FBVUEsTUFBaUIsa0JBQUMsU0FBUyxXQUFXLENBQUMsdUJBQXVCLENBQUM7QUFFekUsV0FBTztBQUFBLEVBQ1Q7QUFFQSxRQUFNLHVCQUF1QixDQUFDLG1CQUFtQjtBQUMvQyxRQUFJLE9BQU8sZUFBZTtBQUMxQixXQUFPQyxNQUFBQSxlQUFlLE1BQU0sU0FBUyxDQUFDLHVCQUF1QixFQUFFLEtBQUssR0FBRyxDQUFDO0FBRXhFLFdBQU87QUFBQSxFQUNUO0FBRU8sUUFBTSxZQUFZLENBQUMsbUJBQW1CO0FBQzNDLFdBQU87QUFBQSxNQUNMLFNBQVMsd0JBQXdCLGNBQWM7QUFBQSxNQUMvQyxNQUFNLHFCQUFxQixjQUFjO0FBQUEsSUFDN0M7QUFBQSxFQUNBOzs7OztBQ2ZPLFFBQU0sV0FBVyxZQUFZO0FBQ2xDLFVBQU0sUUFBUSxNQUFNLGFBQWEsT0FBTztBQUFBLE1BQ3RDLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxJQUNWLENBQUc7QUFHRCxVQUFNLENBQUMsYUFBYSxJQUFJLE1BQU0sUUFBUSxJQUFJO0FBQUEsTUFDeENDLElBQVMsVUFBQyxjQUFjLFNBQVM7QUFBQSxJQUNyQyxDQUFHO0FBRUQsV0FBTyxDQUFDLFdBQVc7QUFDakIsYUFBTyxHQUFHLFNBQVMsWUFBWSx5QkFBeUI7QUFBQSxRQUN0RDtBQUFBLFFBQ0EsTUFBTTtBQUFBLFFBQ04sVUFBVSxDQUFDLFVBQVU7QUFFbkIsZ0JBQU0sU0FBUyxNQUFNLGlCQUFpQixTQUFTO0FBQy9DLGtCQUFRLElBQUksK0JBQThCLE1BQU07QUFJaEQsY0FBSSxpQkFBaUI7QUFDckIsY0FBSSxlQUFlLE9BQU8sUUFBUSwyQkFBMkIsS0FBRyxPQUFPLFFBQVEsZ0JBQWdCO0FBRS9GLGNBQUcsZ0JBQWMsUUFBVTtBQUV6QixvQkFBUSxJQUFJLGlCQUFnQixZQUFZO0FBQ3hDLG9CQUFRLElBQUksb0JBQW1CLGFBQWEsRUFBRTtBQUU5QyxrQkFBTSxTQUFTLGFBQWEsY0FBYyxRQUFRO0FBRWxELG9CQUFRLElBQUksZ0JBQWUsTUFBTTtBQUNqQyxvQkFBUSxJQUFJLG1CQUFrQixPQUFPLEVBQUU7QUFDdkMsNkJBQWlCLE9BQU87QUFBQSxVQUV6QjtBQWVELGdCQUFNLEtBQUk7QUFDVixnQkFBTSxlQUFlLFNBQVMsZUFBZSwyQkFBMkI7QUFDeEUsZ0JBQU0scUJBQXFCLGFBQWEsUUFBUSxnQkFBZ0I7QUFDaEUsNkJBQW1CLE1BQU0sV0FBVztBQUNwQyw2QkFBbUIsTUFBTSxRQUFRO0FBQ2pDLDZCQUFtQixNQUFNLE1BQU07QUFDL0IsNkJBQW1CLE1BQU0sUUFBUTtBQUNqQyx1QkFBYSxhQUFhLHNCQUFzQixjQUFjO0FBQUEsUUFDL0Q7QUFBQSxNQUNQLENBQUs7QUFBQSxJQUNMO0FBQUEsRUFDQTtBQzdEQSxRQUFBLFNBQWUsSUFBSSxRQUFRLE9BQU8sWUFBWTtBQUM1QyxVQUFNLENBQUMsU0FBUyxnQkFBZ0IsYUFBYSxJQUFJLE1BQU0sUUFBUSxJQUFJO0FBQUEsTUFDakVDLGtCQUFZO0FBQUEsTUFDWkMsTUFBaUIsa0JBQUMsV0FBVyxVQUFVO0FBQUEsTUFDdkNDLFNBQW1CO0FBQUEsSUFDdkIsQ0FBRztBQUVELFlBQVEsY0FBYyxJQUFJLFlBQVksQ0FBQyxXQUFXO0FBQ2hELG9CQUFjLE1BQU07QUFFcEIsYUFBTztBQUFBLElBQ1gsQ0FBRztBQUVELFlBQVEsQ0FBQyxZQUFZLGFBQWEsQ0FBQztBQUFBLEVBQ3JDLENBQUM7OzsifQ==
