import { getString } from "core/str";
//import ModalFactory from 'core/modal_factory';
import { component, teacherAideMenuItemName, icon } from "./common";




export const getSetup = async () => {
  // const modal = await ModalFactory.create({
  //   body: '<teacheraide-simple-chat />',
  // });
  

  const [buttonTooltip] = await Promise.all([
    getString("pluginname", component),
  ]);

  return (editor) => {
    editor.ui.registry.addMenuItem(teacherAideMenuItemName, {
      icon,
      text: buttonTooltip,
      onAction: (event) => {
        // eslint-disable-next-line no-console
        const button = event.currentTarget || document.activeElement;
        console.log("Teacher Aide Button Clicked");
        const modalBody = button.closest('.modal-body');
        const modalChat = document.getElementById("modal-teacheraide-chat");
        if(modalChat==undefined){
          const newElement = document.createElement('teacheraide-simple-chat');
          newElement.style.height = '80%';
          newElement.id = "modal-teacheraide-chat"

          if (modalBody.nextSibling) {
            modalBody.parentNode.insertBefore(newElement, modalBody.nextSibling);
          } else {
            modalBody.parentNode.appendChild(newElement);
          }
        }
        
        //modal.show();
      },
    });
  };
};

