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
        let tinyChat = document.getElementById("chat-screen");
        const modal = document.querySelector('[title="TeacherAide TinyMCE Plugin"]').closest('.modal-content');
        
        if (modal) {
          if(!tinyChat || tinyChat == undefined || tinyChat == null ){
            tinyChat = document.createElement('div');
            tinyChat.id = 'chat-screen';
            tinyChat.classList.add('position-fixed');
            tinyChat.style.cssText = 'height:100%; top:61px; right:0; z-index:100000; display:block;';
            
            const chatComponent = document.createElement('teacheraide-simple-chat');
            chatComponent.style.height = '80%';
            
            tinyChat.appendChild(chatComponent);
            
          }
          modal.appendChild(tinyChat);
        } 
          //document.querySelector('[title="TeacherAide TinyMCE Plugin"]').closest('[data-region="modal"]').appendChild( `
          //  <div id="TinyChatScreen" class="position-fixed" style="height:100%; top:61px; right:0; z-index:100000; display:block;">
          //      <teacheraide-simple-chat style="height:80%;"></teacheraide-simple-chat>
          //  </div>
          //`);
        //else{
        //  tinyChat.remove();
        //} 
        //console.log(`Tiny Chat Screen: `,modalElement);
      },
    });
  };
};
