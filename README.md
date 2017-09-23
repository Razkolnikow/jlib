# jlib
Small JavaScript library

Modal dialog: jlib.modal(idOfWrapperElement, idOfButton);
Tooltip: jlib.tooltip(wrapperElement, optionsObject);
optionsObjectExample = {
  zIndex: '999',
  border: '1px solid black',
  borderRadius: '5px',
  color: 'black',
  padding: '5px',
  width: '200px',
  backgroundColor: 'darkgrey'
}

Click Event: jlib.click(element, function (ev) {...});
Generate Dropdown: jlib.generateDropdown(className: optional, id: optional) - returns SELECT element;
Add option to dropdown: jlib.addOptionToDropdown(dropdownElement, value, text);
