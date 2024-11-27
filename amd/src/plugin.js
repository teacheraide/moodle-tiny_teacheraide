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
      body: '<teacheraide-simple-chat id="teacheraide-modal-chatbox"/>'
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
          const modalContent = button.closest('[data-fieldtype="editor"]');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLmpzIiwic291cmNlcyI6WyIuLi8uLi92dWUvc3JjL2NvbW1vbi5qcyIsIi4uLy4uL3Z1ZS9zcmMvY29uZmlndXJhdGlvbi5qcyIsIi4uLy4uL3Z1ZS9zcmMvY29tbWFuZHMuanMiLCIuLi8uLi92dWUvc3JjL3BsdWdpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcGx1Z2luTmFtZSA9IFwidGlueV90ZWFjaGVyYWlkZS9wbHVnaW5cIjtcbmV4cG9ydCBjb25zdCBjb21wb25lbnQgPSBcInRpbnlfdGVhY2hlcmFpZGVcIjtcbmV4cG9ydCBjb25zdCB0ZWFjaGVyQWlkZU1lbnVJdGVtTmFtZSA9IGAke2NvbXBvbmVudH1fbWVudWl0ZW1gO1xuZXhwb3J0IGNvbnN0IGljb24gPSBcIlwiO1xuIiwiaW1wb3J0IHsgdGVhY2hlckFpZGVNZW51SXRlbU5hbWUgfSBmcm9tIFwiLi9jb21tb25cIjtcbmltcG9ydCB7IGFkZE1lbnViYXJJdGVtLCBhZGRUb29sYmFyQnV0dG9ucyB9IGZyb20gXCJlZGl0b3JfdGlueS91dGlsc1wiO1xuXG5jb25zdCBnZXRUb29sYmFyQ29uZmlndXJhdGlvbiA9IChpbnN0YW5jZUNvbmZpZykgPT4ge1xuICBsZXQgdG9vbGJhciA9IGluc3RhbmNlQ29uZmlnLnRvb2xiYXI7XG4gIHRvb2xiYXIgPSBhZGRUb29sYmFyQnV0dG9ucyh0b29sYmFyLCBcImNvbnRlbnRcIiwgW3RlYWNoZXJBaWRlTWVudUl0ZW1OYW1lXSk7XG5cbiAgcmV0dXJuIHRvb2xiYXI7XG59O1xuXG5jb25zdCBnZXRNZW51Q29uZmlndXJhdGlvbiA9IChpbnN0YW5jZUNvbmZpZykgPT4ge1xuICBsZXQgbWVudSA9IGluc3RhbmNlQ29uZmlnLm1lbnU7XG4gIG1lbnUgPSBhZGRNZW51YmFySXRlbShtZW51LCBcInRvb2xzXCIsIFt0ZWFjaGVyQWlkZU1lbnVJdGVtTmFtZV0uam9pbihcIiBcIikpO1xuXG4gIHJldHVybiBtZW51O1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyZSA9IChpbnN0YW5jZUNvbmZpZykgPT4ge1xuICByZXR1cm4ge1xuICAgIHRvb2xiYXI6IGdldFRvb2xiYXJDb25maWd1cmF0aW9uKGluc3RhbmNlQ29uZmlnKSxcbiAgICBtZW51OiBnZXRNZW51Q29uZmlndXJhdGlvbihpbnN0YW5jZUNvbmZpZyksXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgZ2V0U3RyaW5nIH0gZnJvbSBcImNvcmUvc3RyXCI7XG5pbXBvcnQgTW9kYWxGYWN0b3J5IGZyb20gJ2NvcmUvbW9kYWxfZmFjdG9yeSc7XG5pbXBvcnQgeyBjb21wb25lbnQsIHRlYWNoZXJBaWRlTWVudUl0ZW1OYW1lLCBpY29uIH0gZnJvbSBcIi4vY29tbW9uXCI7XG5cblxuXG5cbmV4cG9ydCBjb25zdCBnZXRTZXR1cCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBhd2FpdCBNb2RhbEZhY3RvcnkuY3JlYXRlKHtcbiAgICBpZDogXCJjaGF0LW1vZGFsXCIsXG4gICAgYm9keTogJzx0ZWFjaGVyYWlkZS1zaW1wbGUtY2hhdCBpZD1cInRlYWNoZXJhaWRlLW1vZGFsLWNoYXRib3hcIi8+JyxcbiAgfSk7XG4gIFxuXG4gIGNvbnN0IFtidXR0b25Ub29sdGlwXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBnZXRTdHJpbmcoXCJwbHVnaW5uYW1lXCIsIGNvbXBvbmVudCksXG4gIF0pO1xuXG4gIHJldHVybiAoZWRpdG9yKSA9PiB7XG4gICAgZWRpdG9yLnVpLnJlZ2lzdHJ5LmFkZE1lbnVJdGVtKHRlYWNoZXJBaWRlTWVudUl0ZW1OYW1lLCB7XG4gICAgICBpY29uLFxuICAgICAgdGV4dDogYnV0dG9uVG9vbHRpcCxcbiAgICAgIG9uQWN0aW9uOiAoZXZlbnQpID0+IHtcblxuICAgICAgICBjb25zdCBidXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0IHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGVhY2hlciBBaWRlIEJ1dHRvbiBDbGlja2VkXCIsYnV0dG9uKTtcblxuICAgICAgICAvL2NvbnN0IG1vZGFsQm9keSA9IGJ1dHRvbi5jbG9zZXN0KCcubW9kYWwtYm9keScpO1xuXG4gICAgICAgIGxldCBpZnJhbWVUYXJnZXRJZCA9ICcnO1xuICAgICAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBidXR0b24uY2xvc2VzdCgnW2RhdGEtZmllbGR0eXBlPVwiZWRpdG9yXCJdJyk7XG5cbiAgICAgICAgaWYobW9kYWxDb250ZW50IT11bmRlZmluZWQpe1xuXG4gICAgICAgICAgY29uc29sZS5sb2coYG1vZGFsIENvbnRlbnRgLG1vZGFsQ29udGVudCk7XG4gICAgICAgICAgY29uc29sZS5sb2coYG1vZGFsIENvbnRlbnQgaWRgLG1vZGFsQ29udGVudC5pZCk7XG5cbiAgICAgICAgICBjb25zdCBpZnJhbWUgPSBtb2RhbENvbnRlbnQucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiKTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKGBtb2RhbCBpZnJhbWVgLGlmcmFtZSk7XG4gICAgICAgICAgY29uc29sZS5sb2coYG1vZGFsIGlmcmFtZSBpZGAsaWZyYW1lLmlkKTtcbiAgICAgICAgICBpZnJhbWVUYXJnZXRJZCA9IGlmcmFtZS5pZDtcblxuICAgICAgICB9XG4gICAgICAgIC8vY29uc3QgbW9kYWxDaGF0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC10ZWFjaGVyYWlkZS1jaGF0XCIpO1xuICAgICAgICAvL2lmKG1vZGFsQ2hhdD09dW5kZWZpbmVkKXtcbiAgICAgICAgLy8gIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZWFjaGVyYWlkZS1zaW1wbGUtY2hhdCcpO1xuICAgICAgICAvLyAgbmV3RWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnODAlJztcbiAgICAgICAgLy8gIG5ld0VsZW1lbnQuaWQgPSBcIm1vZGFsLXRlYWNoZXJhaWRlLWNoYXRcIlxuLy9cbiAgICAgICAgLy8gIGlmIChtb2RhbEJvZHkubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgLy8gICAgbW9kYWxCb2R5LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0VsZW1lbnQsIG1vZGFsQm9keS5uZXh0U2libGluZyk7XG4gICAgICAgIC8vICB9IGVsc2Uge1xuICAgICAgICAvLyAgICBtb2RhbEJvZHkucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgICAgICAgLy8gIH1cbiAgICAgICAgLy99XG4gICAgICAgIFxuICAgICAgICBtb2RhbC5zaG93KCk7XG4gICAgICAgIGNvbnN0IHRlYWNoZXJtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVhY2hlcmFpZGUtbW9kYWwtY2hhdGJveFwiKTtcbiAgICAgICAgY29uc3QgdGVhY2hlck1vZGFsUGFyZW50ID0gdGVhY2hlcm1vZGFsLmNsb3Nlc3QoJy5tb2RhbC1jb250ZW50Jyk7XG4gICAgICAgIHRlYWNoZXJNb2RhbFBhcmVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgIHRlYWNoZXJNb2RhbFBhcmVudC5zdHlsZS5yaWdodCA9ICcwcHgnO1xuICAgICAgICB0ZWFjaGVyTW9kYWxQYXJlbnQuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgIHRlYWNoZXJNb2RhbFBhcmVudC5zdHlsZS53aWR0aCA9ICc0MDBweCc7XG4gICAgICAgIHRlYWNoZXJtb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWZyYW1lLXRhcmdldCcsIGlmcmFtZVRhcmdldElkKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG59O1xuXG4iLCJpbXBvcnQgeyBnZXRUaW55TUNFIH0gZnJvbSBcImVkaXRvcl90aW55L2xvYWRlclwiO1xuaW1wb3J0IHsgZ2V0UGx1Z2luTWV0YWRhdGEgfSBmcm9tIFwiZWRpdG9yX3RpbnkvdXRpbHNcIjtcblxuaW1wb3J0IHsgY29tcG9uZW50LCBwbHVnaW5OYW1lIH0gZnJvbSBcIi4vY29tbW9uXCI7XG5pbXBvcnQgKiBhcyBDb25maWd1cmF0aW9uIGZyb20gXCIuL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCAqIGFzIENvbW1hbmRzIGZyb20gXCIuL2NvbW1hbmRzXCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hc3luYy1wcm9taXNlLWV4ZWN1dG9yXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICBjb25zdCBbdGlueU1DRSwgcGx1Z2luTWV0YWRhdGEsIHNldHVwQ29tbWFuZHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGdldFRpbnlNQ0UoKSxcbiAgICBnZXRQbHVnaW5NZXRhZGF0YShjb21wb25lbnQsIHBsdWdpbk5hbWUpLFxuICAgIENvbW1hbmRzLmdldFNldHVwKCksXG4gIF0pO1xuXG4gIHRpbnlNQ0UuUGx1Z2luTWFuYWdlci5hZGQocGx1Z2luTmFtZSwgKGVkaXRvcikgPT4ge1xuICAgIHNldHVwQ29tbWFuZHMoZWRpdG9yKTtcblxuICAgIHJldHVybiBwbHVnaW5NZXRhZGF0YTtcbiAgfSk7XG5cbiAgcmVzb2x2ZShbcGx1Z2luTmFtZSwgQ29uZmlndXJhdGlvbl0pO1xufSk7XG4iXSwibmFtZXMiOlsiYWRkVG9vbGJhckJ1dHRvbnMiLCJhZGRNZW51YmFySXRlbSIsImdldFN0cmluZyIsImdldFRpbnlNQ0UiLCJnZXRQbHVnaW5NZXRhZGF0YSIsIkNvbW1hbmRzLmdldFNldHVwIl0sIm1hcHBpbmdzIjoiOztBQUFPLFFBQU0sYUFBYTtBQUNuQixRQUFNLFlBQVk7QUFDbEIsUUFBTSwwQkFBMEIsR0FBRyxTQUFTO0FBQzVDLFFBQU0sT0FBTztBQ0FwQixRQUFNLDBCQUEwQixDQUFDLG1CQUFtQjtBQUNsRCxRQUFJLFVBQVUsZUFBZTtBQUM3QixjQUFVQSxNQUFpQixrQkFBQyxTQUFTLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQztBQUV6RSxXQUFPO0FBQUEsRUFDVDtBQUVBLFFBQU0sdUJBQXVCLENBQUMsbUJBQW1CO0FBQy9DLFFBQUksT0FBTyxlQUFlO0FBQzFCLFdBQU9DLE1BQUFBLGVBQWUsTUFBTSxTQUFTLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxHQUFHLENBQUM7QUFFeEUsV0FBTztBQUFBLEVBQ1Q7QUFFTyxRQUFNLFlBQVksQ0FBQyxtQkFBbUI7QUFDM0MsV0FBTztBQUFBLE1BQ0wsU0FBUyx3QkFBd0IsY0FBYztBQUFBLE1BQy9DLE1BQU0scUJBQXFCLGNBQWM7QUFBQSxJQUM3QztBQUFBLEVBQ0E7Ozs7O0FDZk8sUUFBTSxXQUFXLFlBQVk7QUFDbEMsVUFBTSxRQUFRLE1BQU0sYUFBYSxPQUFPO0FBQUEsTUFDdEMsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLElBQ1YsQ0FBRztBQUdELFVBQU0sQ0FBQyxhQUFhLElBQUksTUFBTSxRQUFRLElBQUk7QUFBQSxNQUN4Q0MsSUFBUyxVQUFDLGNBQWMsU0FBUztBQUFBLElBQ3JDLENBQUc7QUFFRCxXQUFPLENBQUMsV0FBVztBQUNqQixhQUFPLEdBQUcsU0FBUyxZQUFZLHlCQUF5QjtBQUFBLFFBQ3REO0FBQUEsUUFDQSxNQUFNO0FBQUEsUUFDTixVQUFVLENBQUMsVUFBVTtBQUVuQixnQkFBTSxTQUFTLE1BQU0saUJBQWlCLFNBQVM7QUFDL0Msa0JBQVEsSUFBSSwrQkFBOEIsTUFBTTtBQUloRCxjQUFJLGlCQUFpQjtBQUNyQixnQkFBTSxlQUFlLE9BQU8sUUFBUSwyQkFBMkI7QUFFL0QsY0FBRyxnQkFBYyxRQUFVO0FBRXpCLG9CQUFRLElBQUksaUJBQWdCLFlBQVk7QUFDeEMsb0JBQVEsSUFBSSxvQkFBbUIsYUFBYSxFQUFFO0FBRTlDLGtCQUFNLFNBQVMsYUFBYSxjQUFjLFFBQVE7QUFFbEQsb0JBQVEsSUFBSSxnQkFBZSxNQUFNO0FBQ2pDLG9CQUFRLElBQUksbUJBQWtCLE9BQU8sRUFBRTtBQUN2Qyw2QkFBaUIsT0FBTztBQUFBLFVBRXpCO0FBY0QsZ0JBQU0sS0FBSTtBQUNWLGdCQUFNLGVBQWUsU0FBUyxlQUFlLDJCQUEyQjtBQUN4RSxnQkFBTSxxQkFBcUIsYUFBYSxRQUFRLGdCQUFnQjtBQUNoRSw2QkFBbUIsTUFBTSxXQUFXO0FBQ3BDLDZCQUFtQixNQUFNLFFBQVE7QUFDakMsNkJBQW1CLE1BQU0sTUFBTTtBQUMvQiw2QkFBbUIsTUFBTSxRQUFRO0FBQ2pDLHVCQUFhLGFBQWEsc0JBQXNCLGNBQWM7QUFBQSxRQUMvRDtBQUFBLE1BQ1AsQ0FBSztBQUFBLElBQ0w7QUFBQSxFQUNBO0FDNURBLFFBQUEsU0FBZSxJQUFJLFFBQVEsT0FBTyxZQUFZO0FBQzVDLFVBQU0sQ0FBQyxTQUFTLGdCQUFnQixhQUFhLElBQUksTUFBTSxRQUFRLElBQUk7QUFBQSxNQUNqRUMsa0JBQVk7QUFBQSxNQUNaQyxNQUFpQixrQkFBQyxXQUFXLFVBQVU7QUFBQSxNQUN2Q0MsU0FBbUI7QUFBQSxJQUN2QixDQUFHO0FBRUQsWUFBUSxjQUFjLElBQUksWUFBWSxDQUFDLFdBQVc7QUFDaEQsb0JBQWMsTUFBTTtBQUVwQixhQUFPO0FBQUEsSUFDWCxDQUFHO0FBRUQsWUFBUSxDQUFDLFlBQVksYUFBYSxDQUFDO0FBQUEsRUFDckMsQ0FBQzs7OyJ9
