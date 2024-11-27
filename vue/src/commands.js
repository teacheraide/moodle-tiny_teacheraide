import { getString } from "core/str";
import ModalFactory from 'core/modal_factory';
import { component, teacherAideMenuItemName, icon } from "./common";




export const getSetup = async () => {
  const modal = await ModalFactory.create({
    id: "chat-modal",
    body: '<teacheraide-simple-chat id="teacheraide-modal-chatbox"/>',
  });
  

  const [buttonTooltip] = await Promise.all([
    getString("pluginname", component),
  ]);

  return (editor) => {
    editor.ui.registry.addMenuItem(teacherAideMenuItemName, {
      icon,
      text: buttonTooltip,
      onAction: (event) => {

        const button = event.currentTarget || document.activeElement;
        console.log("Teacher Aide Button Clicked",button);

        //const modalBody = button.closest('.modal-body');

        let iframeTargetId = '';
        const modalContent = button.closest('[data-fieldtype="editor"]');

        if(modalContent!=undefined){

          console.log(`modal Content`,modalContent);
          console.log(`modal Content id`,modalContent.id);

          const iframe = modalContent.querySelector("iframe");

          console.log(`modal iframe`,iframe);
          console.log(`modal iframe id`,iframe.id);
          iframeTargetId = iframe.id;

        }
        //const modalChat = document.getElementById("modal-teacheraide-chat");
        //if(modalChat==undefined){
        //  const newElement = document.createElement('teacheraide-simple-chat');
        //  newElement.style.height = '80%';
        //  newElement.id = "modal-teacheraide-chat"
//
        //  if (modalBody.nextSibling) {
        //    modalBody.parentNode.insertBefore(newElement, modalBody.nextSibling);
        //  } else {
        //    modalBody.parentNode.appendChild(newElement);
        //  }
        //}
        
        modal.show();
        const teachermodal = document.getElementById("teacheraide-modal-chatbox");
        const teacherModalParent = teachermodal.closest('.modal-content');
        teacherModalParent.style.position = 'fixed';
        teacherModalParent.style.right = '0px';
        teacherModalParent.style.top = '0px';
        teacherModalParent.style.width = '400px';
        teachermodal.setAttribute('data-iframe-target', iframeTargetId);
      },
    });
  };
};

