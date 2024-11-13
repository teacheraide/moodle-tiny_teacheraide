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
        onAction: () => {
          console.log("Teacher Aide Button Clicked");
          let tinyChat = document.getElementById("chat-screen");
          const modal = document.querySelector('[title="TeacherAide TinyMCE Plugin"]').closest('[data-region="modal"]');
          if (modal) {
            if (!tinyChat || tinyChat == void 0 || tinyChat == null) {
              tinyChat = document.createElement("div");
              tinyChat.id = "chat-screen";
              tinyChat.classList.add("position-fixed");
              tinyChat.style.cssText = "height:100%; top:61px; right:0; z-index:100000; display:block;";
              const chatComponent = document.createElement("teacheraide-simple-chat");
              chatComponent.style.height = "80%";
              tinyChat.appendChild(chatComponent);
            }
            modal.appendChild(tinyChat);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLmpzIiwic291cmNlcyI6WyIuLi8uLi92dWUvc3JjL2NvbW1vbi5qcyIsIi4uLy4uL3Z1ZS9zcmMvY29uZmlndXJhdGlvbi5qcyIsIi4uLy4uL3Z1ZS9zcmMvY29tbWFuZHMuanMiLCIuLi8uLi92dWUvc3JjL3BsdWdpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcGx1Z2luTmFtZSA9IFwidGlueV90ZWFjaGVyYWlkZS9wbHVnaW5cIjtcbmV4cG9ydCBjb25zdCBjb21wb25lbnQgPSBcInRpbnlfdGVhY2hlcmFpZGVcIjtcbmV4cG9ydCBjb25zdCB0ZWFjaGVyQWlkZU1lbnVJdGVtTmFtZSA9IGAke2NvbXBvbmVudH1fbWVudWl0ZW1gO1xuZXhwb3J0IGNvbnN0IGljb24gPSBcIlwiO1xuIiwiaW1wb3J0IHsgdGVhY2hlckFpZGVNZW51SXRlbU5hbWUgfSBmcm9tIFwiLi9jb21tb25cIjtcbmltcG9ydCB7IGFkZE1lbnViYXJJdGVtLCBhZGRUb29sYmFyQnV0dG9ucyB9IGZyb20gXCJlZGl0b3JfdGlueS91dGlsc1wiO1xuXG5jb25zdCBnZXRUb29sYmFyQ29uZmlndXJhdGlvbiA9IChpbnN0YW5jZUNvbmZpZykgPT4ge1xuICBsZXQgdG9vbGJhciA9IGluc3RhbmNlQ29uZmlnLnRvb2xiYXI7XG4gIHRvb2xiYXIgPSBhZGRUb29sYmFyQnV0dG9ucyh0b29sYmFyLCBcImNvbnRlbnRcIiwgW3RlYWNoZXJBaWRlTWVudUl0ZW1OYW1lXSk7XG5cbiAgcmV0dXJuIHRvb2xiYXI7XG59O1xuXG5jb25zdCBnZXRNZW51Q29uZmlndXJhdGlvbiA9IChpbnN0YW5jZUNvbmZpZykgPT4ge1xuICBsZXQgbWVudSA9IGluc3RhbmNlQ29uZmlnLm1lbnU7XG4gIG1lbnUgPSBhZGRNZW51YmFySXRlbShtZW51LCBcInRvb2xzXCIsIFt0ZWFjaGVyQWlkZU1lbnVJdGVtTmFtZV0uam9pbihcIiBcIikpO1xuXG4gIHJldHVybiBtZW51O1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyZSA9IChpbnN0YW5jZUNvbmZpZykgPT4ge1xuICByZXR1cm4ge1xuICAgIHRvb2xiYXI6IGdldFRvb2xiYXJDb25maWd1cmF0aW9uKGluc3RhbmNlQ29uZmlnKSxcbiAgICBtZW51OiBnZXRNZW51Q29uZmlndXJhdGlvbihpbnN0YW5jZUNvbmZpZyksXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgZ2V0U3RyaW5nIH0gZnJvbSBcImNvcmUvc3RyXCI7XG5pbXBvcnQgeyBjb21wb25lbnQsIHRlYWNoZXJBaWRlTWVudUl0ZW1OYW1lLCBpY29uIH0gZnJvbSBcIi4vY29tbW9uXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXR1cCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgW2J1dHRvblRvb2x0aXBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGdldFN0cmluZyhcInBsdWdpbm5hbWVcIiwgY29tcG9uZW50KSxcbiAgXSk7XG5cbiAgcmV0dXJuIChlZGl0b3IpID0+IHtcbiAgICBlZGl0b3IudWkucmVnaXN0cnkuYWRkTWVudUl0ZW0odGVhY2hlckFpZGVNZW51SXRlbU5hbWUsIHtcbiAgICAgIGljb24sXG4gICAgICB0ZXh0OiBidXR0b25Ub29sdGlwLFxuICAgICAgb25BY3Rpb246ICgpID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5sb2coXCJUZWFjaGVyIEFpZGUgQnV0dG9uIENsaWNrZWRcIik7XG4gICAgICAgIGxldCB0aW55Q2hhdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdC1zY3JlZW5cIik7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3RpdGxlPVwiVGVhY2hlckFpZGUgVGlueU1DRSBQbHVnaW5cIl0nKS5jbG9zZXN0KCdbZGF0YS1yZWdpb249XCJtb2RhbFwiXScpO1xuICAgICAgICBcbiAgICAgICAgaWYgKG1vZGFsKSB7XG4gICAgICAgICAgaWYoIXRpbnlDaGF0IHx8IHRpbnlDaGF0ID09IHVuZGVmaW5lZCB8fCB0aW55Q2hhdCA9PSBudWxsICl7XG4gICAgICAgICAgICB0aW55Q2hhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGlueUNoYXQuaWQgPSAnY2hhdC1zY3JlZW4nO1xuICAgICAgICAgICAgdGlueUNoYXQuY2xhc3NMaXN0LmFkZCgncG9zaXRpb24tZml4ZWQnKTtcbiAgICAgICAgICAgIHRpbnlDaGF0LnN0eWxlLmNzc1RleHQgPSAnaGVpZ2h0OjEwMCU7IHRvcDo2MXB4OyByaWdodDowOyB6LWluZGV4OjEwMDAwMDsgZGlzcGxheTpibG9jazsnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjaGF0Q29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVhY2hlcmFpZGUtc2ltcGxlLWNoYXQnKTtcbiAgICAgICAgICAgIGNoYXRDb21wb25lbnQuc3R5bGUuaGVpZ2h0ID0gJzgwJSc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRpbnlDaGF0LmFwcGVuZENoaWxkKGNoYXRDb21wb25lbnQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKHRpbnlDaGF0KTtcbiAgICAgICAgfSBcbiAgICAgICAgICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t0aXRsZT1cIlRlYWNoZXJBaWRlIFRpbnlNQ0UgUGx1Z2luXCJdJykuY2xvc2VzdCgnW2RhdGEtcmVnaW9uPVwibW9kYWxcIl0nKS5hcHBlbmRDaGlsZCggYFxuICAgICAgICAgIC8vICA8ZGl2IGlkPVwiVGlueUNoYXRTY3JlZW5cIiBjbGFzcz1cInBvc2l0aW9uLWZpeGVkXCIgc3R5bGU9XCJoZWlnaHQ6MTAwJTsgdG9wOjYxcHg7IHJpZ2h0OjA7IHotaW5kZXg6MTAwMDAwOyBkaXNwbGF5OmJsb2NrO1wiPlxuICAgICAgICAgIC8vICAgICAgPHRlYWNoZXJhaWRlLXNpbXBsZS1jaGF0IHN0eWxlPVwiaGVpZ2h0OjgwJTtcIj48L3RlYWNoZXJhaWRlLXNpbXBsZS1jaGF0PlxuICAgICAgICAgIC8vICA8L2Rpdj5cbiAgICAgICAgICAvL2ApO1xuICAgICAgICAvL2Vsc2V7XG4gICAgICAgIC8vICB0aW55Q2hhdC5yZW1vdmUoKTtcbiAgICAgICAgLy99IFxuICAgICAgICAvL2NvbnNvbGUubG9nKGBUaW55IENoYXQgU2NyZWVuOiBgLG1vZGFsRWxlbWVudCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xufTtcbiIsImltcG9ydCB7IGdldFRpbnlNQ0UgfSBmcm9tIFwiZWRpdG9yX3RpbnkvbG9hZGVyXCI7XG5pbXBvcnQgeyBnZXRQbHVnaW5NZXRhZGF0YSB9IGZyb20gXCJlZGl0b3JfdGlueS91dGlsc1wiO1xuXG5pbXBvcnQgeyBjb21wb25lbnQsIHBsdWdpbk5hbWUgfSBmcm9tIFwiLi9jb21tb25cIjtcbmltcG9ydCAqIGFzIENvbmZpZ3VyYXRpb24gZnJvbSBcIi4vY29uZmlndXJhdGlvblwiO1xuaW1wb3J0ICogYXMgQ29tbWFuZHMgZnJvbSBcIi4vY29tbWFuZHNcIjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFzeW5jLXByb21pc2UtZXhlY3V0b3JcbmV4cG9ydCBkZWZhdWx0IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gIGNvbnN0IFt0aW55TUNFLCBwbHVnaW5NZXRhZGF0YSwgc2V0dXBDb21tYW5kc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZ2V0VGlueU1DRSgpLFxuICAgIGdldFBsdWdpbk1ldGFkYXRhKGNvbXBvbmVudCwgcGx1Z2luTmFtZSksXG4gICAgQ29tbWFuZHMuZ2V0U2V0dXAoKSxcbiAgXSk7XG5cbiAgdGlueU1DRS5QbHVnaW5NYW5hZ2VyLmFkZChwbHVnaW5OYW1lLCAoZWRpdG9yKSA9PiB7XG4gICAgc2V0dXBDb21tYW5kcyhlZGl0b3IpO1xuXG4gICAgcmV0dXJuIHBsdWdpbk1ldGFkYXRhO1xuICB9KTtcblxuICByZXNvbHZlKFtwbHVnaW5OYW1lLCBDb25maWd1cmF0aW9uXSk7XG59KTtcbiJdLCJuYW1lcyI6WyJhZGRUb29sYmFyQnV0dG9ucyIsImFkZE1lbnViYXJJdGVtIiwiZ2V0U3RyaW5nIiwiZ2V0VGlueU1DRSIsImdldFBsdWdpbk1ldGFkYXRhIiwiQ29tbWFuZHMuZ2V0U2V0dXAiXSwibWFwcGluZ3MiOiI7O0FBQU8sUUFBTSxhQUFhO0FBQ25CLFFBQU0sWUFBWTtBQUNsQixRQUFNLDBCQUEwQixHQUFHLFNBQVM7QUFDNUMsUUFBTSxPQUFPO0FDQXBCLFFBQU0sMEJBQTBCLENBQUMsbUJBQW1CO0FBQ2xELFFBQUksVUFBVSxlQUFlO0FBQzdCLGNBQVVBLE1BQWlCLGtCQUFDLFNBQVMsV0FBVyxDQUFDLHVCQUF1QixDQUFDO0FBRXpFLFdBQU87QUFBQSxFQUNUO0FBRUEsUUFBTSx1QkFBdUIsQ0FBQyxtQkFBbUI7QUFDL0MsUUFBSSxPQUFPLGVBQWU7QUFDMUIsV0FBT0MsTUFBQUEsZUFBZSxNQUFNLFNBQVMsQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLEdBQUcsQ0FBQztBQUV4RSxXQUFPO0FBQUEsRUFDVDtBQUVPLFFBQU0sWUFBWSxDQUFDLG1CQUFtQjtBQUMzQyxXQUFPO0FBQUEsTUFDTCxTQUFTLHdCQUF3QixjQUFjO0FBQUEsTUFDL0MsTUFBTSxxQkFBcUIsY0FBYztBQUFBLElBQzdDO0FBQUEsRUFDQTs7Ozs7QUNuQk8sUUFBTSxXQUFXLFlBQVk7QUFDbEMsVUFBTSxDQUFDLGFBQWEsSUFBSSxNQUFNLFFBQVEsSUFBSTtBQUFBLE1BQ3hDQyxJQUFTLFVBQUMsY0FBYyxTQUFTO0FBQUEsSUFDckMsQ0FBRztBQUVELFdBQU8sQ0FBQyxXQUFXO0FBQ2pCLGFBQU8sR0FBRyxTQUFTLFlBQVkseUJBQXlCO0FBQUEsUUFDdEQ7QUFBQSxRQUNBLE1BQU07QUFBQSxRQUNOLFVBQVUsTUFBTTtBQUVkLGtCQUFRLElBQUksNkJBQTZCO0FBQ3pDLGNBQUksV0FBVyxTQUFTLGVBQWUsYUFBYTtBQUNwRCxnQkFBTSxRQUFRLFNBQVMsY0FBYyxzQ0FBc0MsRUFBRSxRQUFRLHVCQUF1QjtBQUU1RyxjQUFJLE9BQU87QUFDVCxnQkFBRyxDQUFDLFlBQVksWUFBWSxVQUFhLFlBQVksTUFBTTtBQUN6RCx5QkFBVyxTQUFTLGNBQWMsS0FBSztBQUN2Qyx1QkFBUyxLQUFLO0FBQ2QsdUJBQVMsVUFBVSxJQUFJLGdCQUFnQjtBQUN2Qyx1QkFBUyxNQUFNLFVBQVU7QUFFekIsb0JBQU0sZ0JBQWdCLFNBQVMsY0FBYyx5QkFBeUI7QUFDdEUsNEJBQWMsTUFBTSxTQUFTO0FBRTdCLHVCQUFTLFlBQVksYUFBYTtBQUFBLFlBRW5DO0FBQ0Qsa0JBQU0sWUFBWSxRQUFRO0FBQUEsVUFDM0I7QUFBQSxRQVVGO0FBQUEsTUFDUCxDQUFLO0FBQUEsSUFDTDtBQUFBLEVBQ0E7QUNyQ0EsUUFBQSxTQUFlLElBQUksUUFBUSxPQUFPLFlBQVk7QUFDNUMsVUFBTSxDQUFDLFNBQVMsZ0JBQWdCLGFBQWEsSUFBSSxNQUFNLFFBQVEsSUFBSTtBQUFBLE1BQ2pFQyxrQkFBWTtBQUFBLE1BQ1pDLE1BQWlCLGtCQUFDLFdBQVcsVUFBVTtBQUFBLE1BQ3ZDQyxTQUFtQjtBQUFBLElBQ3ZCLENBQUc7QUFFRCxZQUFRLGNBQWMsSUFBSSxZQUFZLENBQUMsV0FBVztBQUNoRCxvQkFBYyxNQUFNO0FBRXBCLGFBQU87QUFBQSxJQUNYLENBQUc7QUFFRCxZQUFRLENBQUMsWUFBWSxhQUFhLENBQUM7QUFBQSxFQUNyQyxDQUFDOzs7In0=
