define(["editor_tiny/loader", "editor_tiny/utils", "core/str"], function(loader, utils, str) {
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
    const [buttonTooltip] = await Promise.all([
      str.getString("pluginname", component)
    ]);
    return (editor) => {
      editor.ui.registry.addMenuItem(teacherAideMenuItemName, {
        icon,
        text: buttonTooltip,
        onAction: (event) => {
          const button = event.currentTarget || document.activeElement;
          console.log("Teacher Aide Button Clicked");
          const modalBody = button.closest(".modal-body");
          const modalChat = document.getElementById("modal-teacheraide-chat");
          if (modalChat == void 0) {
            const newElement = document.createElement("teacheraide-simple-chat");
            newElement.style.height = "80%";
            newElement.id = "modal-teacheraide-chat";
            if (modalBody.nextSibling) {
              modalBody.parentNode.insertBefore(newElement, modalBody.nextSibling);
            } else {
              modalBody.parentNode.appendChild(newElement);
            }
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLmpzIiwic291cmNlcyI6WyIuLi8uLi92dWUvc3JjL2NvbW1vbi5qcyIsIi4uLy4uL3Z1ZS9zcmMvY29uZmlndXJhdGlvbi5qcyIsIi4uLy4uL3Z1ZS9zcmMvY29tbWFuZHMuanMiLCIuLi8uLi92dWUvc3JjL3BsdWdpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcGx1Z2luTmFtZSA9IFwidGlueV90ZWFjaGVyYWlkZS9wbHVnaW5cIjtcbmV4cG9ydCBjb25zdCBjb21wb25lbnQgPSBcInRpbnlfdGVhY2hlcmFpZGVcIjtcbmV4cG9ydCBjb25zdCB0ZWFjaGVyQWlkZU1lbnVJdGVtTmFtZSA9IGAke2NvbXBvbmVudH1fbWVudWl0ZW1gO1xuZXhwb3J0IGNvbnN0IGljb24gPSBcIlwiO1xuIiwiaW1wb3J0IHsgdGVhY2hlckFpZGVNZW51SXRlbU5hbWUgfSBmcm9tIFwiLi9jb21tb25cIjtcbmltcG9ydCB7IGFkZE1lbnViYXJJdGVtLCBhZGRUb29sYmFyQnV0dG9ucyB9IGZyb20gXCJlZGl0b3JfdGlueS91dGlsc1wiO1xuXG5jb25zdCBnZXRUb29sYmFyQ29uZmlndXJhdGlvbiA9IChpbnN0YW5jZUNvbmZpZykgPT4ge1xuICBsZXQgdG9vbGJhciA9IGluc3RhbmNlQ29uZmlnLnRvb2xiYXI7XG4gIHRvb2xiYXIgPSBhZGRUb29sYmFyQnV0dG9ucyh0b29sYmFyLCBcImNvbnRlbnRcIiwgW3RlYWNoZXJBaWRlTWVudUl0ZW1OYW1lXSk7XG5cbiAgcmV0dXJuIHRvb2xiYXI7XG59O1xuXG5jb25zdCBnZXRNZW51Q29uZmlndXJhdGlvbiA9IChpbnN0YW5jZUNvbmZpZykgPT4ge1xuICBsZXQgbWVudSA9IGluc3RhbmNlQ29uZmlnLm1lbnU7XG4gIG1lbnUgPSBhZGRNZW51YmFySXRlbShtZW51LCBcInRvb2xzXCIsIFt0ZWFjaGVyQWlkZU1lbnVJdGVtTmFtZV0uam9pbihcIiBcIikpO1xuXG4gIHJldHVybiBtZW51O1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyZSA9IChpbnN0YW5jZUNvbmZpZykgPT4ge1xuICByZXR1cm4ge1xuICAgIHRvb2xiYXI6IGdldFRvb2xiYXJDb25maWd1cmF0aW9uKGluc3RhbmNlQ29uZmlnKSxcbiAgICBtZW51OiBnZXRNZW51Q29uZmlndXJhdGlvbihpbnN0YW5jZUNvbmZpZyksXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgZ2V0U3RyaW5nIH0gZnJvbSBcImNvcmUvc3RyXCI7XG4vL2ltcG9ydCBNb2RhbEZhY3RvcnkgZnJvbSAnY29yZS9tb2RhbF9mYWN0b3J5JztcbmltcG9ydCB7IGNvbXBvbmVudCwgdGVhY2hlckFpZGVNZW51SXRlbU5hbWUsIGljb24gfSBmcm9tIFwiLi9jb21tb25cIjtcblxuXG5cblxuZXhwb3J0IGNvbnN0IGdldFNldHVwID0gYXN5bmMgKCkgPT4ge1xuICAvLyBjb25zdCBtb2RhbCA9IGF3YWl0IE1vZGFsRmFjdG9yeS5jcmVhdGUoe1xuICAvLyAgIGJvZHk6ICc8dGVhY2hlcmFpZGUtc2ltcGxlLWNoYXQgLz4nLFxuICAvLyB9KTtcbiAgXG5cbiAgY29uc3QgW2J1dHRvblRvb2x0aXBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGdldFN0cmluZyhcInBsdWdpbm5hbWVcIiwgY29tcG9uZW50KSxcbiAgXSk7XG5cbiAgcmV0dXJuIChlZGl0b3IpID0+IHtcbiAgICBlZGl0b3IudWkucmVnaXN0cnkuYWRkTWVudUl0ZW0odGVhY2hlckFpZGVNZW51SXRlbU5hbWUsIHtcbiAgICAgIGljb24sXG4gICAgICB0ZXh0OiBidXR0b25Ub29sdGlwLFxuICAgICAgb25BY3Rpb246IChldmVudCkgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zdCBidXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0IHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGVhY2hlciBBaWRlIEJ1dHRvbiBDbGlja2VkXCIpO1xuICAgICAgICBjb25zdCBtb2RhbEJvZHkgPSBidXR0b24uY2xvc2VzdCgnLm1vZGFsLWJvZHknKTtcbiAgICAgICAgY29uc3QgbW9kYWxDaGF0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC10ZWFjaGVyYWlkZS1jaGF0XCIpO1xuICAgICAgICBpZihtb2RhbENoYXQ9PXVuZGVmaW5lZCl7XG4gICAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlYWNoZXJhaWRlLXNpbXBsZS1jaGF0Jyk7XG4gICAgICAgICAgbmV3RWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnODAlJztcbiAgICAgICAgICBuZXdFbGVtZW50LmlkID0gXCJtb2RhbC10ZWFjaGVyYWlkZS1jaGF0XCJcblxuICAgICAgICAgIGlmIChtb2RhbEJvZHkubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIG1vZGFsQm9keS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdFbGVtZW50LCBtb2RhbEJvZHkubmV4dFNpYmxpbmcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2RhbEJvZHkucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vbW9kYWwuc2hvdygpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbn07XG5cbiIsImltcG9ydCB7IGdldFRpbnlNQ0UgfSBmcm9tIFwiZWRpdG9yX3RpbnkvbG9hZGVyXCI7XG5pbXBvcnQgeyBnZXRQbHVnaW5NZXRhZGF0YSB9IGZyb20gXCJlZGl0b3JfdGlueS91dGlsc1wiO1xuXG5pbXBvcnQgeyBjb21wb25lbnQsIHBsdWdpbk5hbWUgfSBmcm9tIFwiLi9jb21tb25cIjtcbmltcG9ydCAqIGFzIENvbmZpZ3VyYXRpb24gZnJvbSBcIi4vY29uZmlndXJhdGlvblwiO1xuaW1wb3J0ICogYXMgQ29tbWFuZHMgZnJvbSBcIi4vY29tbWFuZHNcIjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFzeW5jLXByb21pc2UtZXhlY3V0b3JcbmV4cG9ydCBkZWZhdWx0IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gIGNvbnN0IFt0aW55TUNFLCBwbHVnaW5NZXRhZGF0YSwgc2V0dXBDb21tYW5kc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZ2V0VGlueU1DRSgpLFxuICAgIGdldFBsdWdpbk1ldGFkYXRhKGNvbXBvbmVudCwgcGx1Z2luTmFtZSksXG4gICAgQ29tbWFuZHMuZ2V0U2V0dXAoKSxcbiAgXSk7XG5cbiAgdGlueU1DRS5QbHVnaW5NYW5hZ2VyLmFkZChwbHVnaW5OYW1lLCAoZWRpdG9yKSA9PiB7XG4gICAgc2V0dXBDb21tYW5kcyhlZGl0b3IpO1xuXG4gICAgcmV0dXJuIHBsdWdpbk1ldGFkYXRhO1xuICB9KTtcblxuICByZXNvbHZlKFtwbHVnaW5OYW1lLCBDb25maWd1cmF0aW9uXSk7XG59KTtcbiJdLCJuYW1lcyI6WyJhZGRUb29sYmFyQnV0dG9ucyIsImFkZE1lbnViYXJJdGVtIiwiZ2V0U3RyaW5nIiwiZ2V0VGlueU1DRSIsImdldFBsdWdpbk1ldGFkYXRhIiwiQ29tbWFuZHMuZ2V0U2V0dXAiXSwibWFwcGluZ3MiOiI7O0FBQU8sUUFBTSxhQUFhO0FBQ25CLFFBQU0sWUFBWTtBQUNsQixRQUFNLDBCQUEwQixHQUFHLFNBQVM7QUFDNUMsUUFBTSxPQUFPO0FDQXBCLFFBQU0sMEJBQTBCLENBQUMsbUJBQW1CO0FBQ2xELFFBQUksVUFBVSxlQUFlO0FBQzdCLGNBQVVBLE1BQWlCLGtCQUFDLFNBQVMsV0FBVyxDQUFDLHVCQUF1QixDQUFDO0FBRXpFLFdBQU87QUFBQSxFQUNUO0FBRUEsUUFBTSx1QkFBdUIsQ0FBQyxtQkFBbUI7QUFDL0MsUUFBSSxPQUFPLGVBQWU7QUFDMUIsV0FBT0MsTUFBQUEsZUFBZSxNQUFNLFNBQVMsQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLEdBQUcsQ0FBQztBQUV4RSxXQUFPO0FBQUEsRUFDVDtBQUVPLFFBQU0sWUFBWSxDQUFDLG1CQUFtQjtBQUMzQyxXQUFPO0FBQUEsTUFDTCxTQUFTLHdCQUF3QixjQUFjO0FBQUEsTUFDL0MsTUFBTSxxQkFBcUIsY0FBYztBQUFBLElBQzdDO0FBQUEsRUFDQTs7Ozs7QUNmTyxRQUFNLFdBQVcsWUFBWTtBQU1sQyxVQUFNLENBQUMsYUFBYSxJQUFJLE1BQU0sUUFBUSxJQUFJO0FBQUEsTUFDeENDLElBQVMsVUFBQyxjQUFjLFNBQVM7QUFBQSxJQUNyQyxDQUFHO0FBRUQsV0FBTyxDQUFDLFdBQVc7QUFDakIsYUFBTyxHQUFHLFNBQVMsWUFBWSx5QkFBeUI7QUFBQSxRQUN0RDtBQUFBLFFBQ0EsTUFBTTtBQUFBLFFBQ04sVUFBVSxDQUFDLFVBQVU7QUFFbkIsZ0JBQU0sU0FBUyxNQUFNLGlCQUFpQixTQUFTO0FBQy9DLGtCQUFRLElBQUksNkJBQTZCO0FBQ3pDLGdCQUFNLFlBQVksT0FBTyxRQUFRLGFBQWE7QUFDOUMsZ0JBQU0sWUFBWSxTQUFTLGVBQWUsd0JBQXdCO0FBQ2xFLGNBQUcsYUFBVyxRQUFVO0FBQ3RCLGtCQUFNLGFBQWEsU0FBUyxjQUFjLHlCQUF5QjtBQUNuRSx1QkFBVyxNQUFNLFNBQVM7QUFDMUIsdUJBQVcsS0FBSztBQUVoQixnQkFBSSxVQUFVLGFBQWE7QUFDekIsd0JBQVUsV0FBVyxhQUFhLFlBQVksVUFBVSxXQUFXO0FBQUEsWUFDL0UsT0FBaUI7QUFDTCx3QkFBVSxXQUFXLFlBQVksVUFBVTtBQUFBLFlBQzVDO0FBQUEsVUFDRjtBQUFBLFFBR0Y7QUFBQSxNQUNQLENBQUs7QUFBQSxJQUNMO0FBQUEsRUFDQTtBQ25DQSxRQUFBLFNBQWUsSUFBSSxRQUFRLE9BQU8sWUFBWTtBQUM1QyxVQUFNLENBQUMsU0FBUyxnQkFBZ0IsYUFBYSxJQUFJLE1BQU0sUUFBUSxJQUFJO0FBQUEsTUFDakVDLGtCQUFZO0FBQUEsTUFDWkMsTUFBaUIsa0JBQUMsV0FBVyxVQUFVO0FBQUEsTUFDdkNDLFNBQW1CO0FBQUEsSUFDdkIsQ0FBRztBQUVELFlBQVEsY0FBYyxJQUFJLFlBQVksQ0FBQyxXQUFXO0FBQ2hELG9CQUFjLE1BQU07QUFFcEIsYUFBTztBQUFBLElBQ1gsQ0FBRztBQUVELFlBQVEsQ0FBQyxZQUFZLGFBQWEsQ0FBQztBQUFBLEVBQ3JDLENBQUM7OzsifQ==
