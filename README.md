# jlib
## Small JavaScript library

- Modal dialog: jlib.modal(idOfWrapperElement, idOfButton);
- Tooltip: jlib.tooltip(wrapperElement, optionsObject);
- optionsObjectExample = {
  zIndex: '999',
  border: '1px solid black',
  borderRadius: '5px',
  color: 'black',
  padding: '5px',
  width: '200px',
  backgroundColor: 'darkgrey',
  boxShadow: '0px 0xp 5px grey'
}

- Click Event: jlib.click(element, function (ev) {...});
- Generate Dropdown: jlib.generateDropdown(className: optional, id: optional) - returns SELECT element;
- Add option to dropdown: jlib.addOptionToDropdown(dropdownElement, value, text);
- Notify: jlib.notify(message, time, options: optional);
- Notify options example: options = { top: '', right: '', color: '', backgroundColor: '', borderRadius: '', fontFamily: '',  }
- ChatBox: jlib.chatBox(id, fromName, messageAreaId, options);
- ChatBox options example: options = 
{ top: '', right: '', color: '', backgroundColor: '', borderRadius: '', 
  width: '', padding: '', fontFamily: '', border: '', sendBtnId: '', sendFunction: function () { // do something in click event of send button} }
- ChatInviteBox: jlib.chatInviteBox(id, fromName, fromId, options);
- fromId param is set as value of hiddenInput with id 'senderId'
- ChatInviteBox options example: options = 
{ top: '', right: '', color: '', backgroundColor: '', borderRadius: '', 
  width: '', padding: '', fontFamily: '', border: '', acceptBtnId: '', rejectBtnId: '', receiverId: '' }
