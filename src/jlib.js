var jlib = {
    getFirstByClass: function (className) {
      return document.getElementsByClassName(className)[0];
    },
    getById: function (id) {
      return document.getElementById(id);
    },
    click: function (element, callback) {
      element.addEventListener('click', callback);
    },
    toggle: function (element) {
      if (element.style.display === 'none') {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    },
    generateDropdown: function (className, id) {
      var dropdown = document.createElement('SELECT');
      if (className) dropdown.className = className;
      if (id) dropdown.id = id;
      return dropdown;
    },
    addOptionToDropdown: function (dropdown, val, text) {
      var option = document.createElement('OPTION');
      option.value = val;
      option.textContent = text;
      dropdown.appendChild(option);
    },
    getAll: function (selector) {
      return document.querySelectorAll(selector);
    },
    addTo: function (parent, child) {
      parent.appendChild(child);
    },
    createTable: function (headers) {
      if (typeof(headers) !== 'object') {
          throw new Error('function expects object');
      }

      var table = document.createElement('TABLE');
      var row = document.createElement('TR');
      for (var header of headers) {
        var th = document.createElement('TH');
        th.textContent = header;
        row.appendChild(th);
      }
      table.appendChild(row);
      return table;
    },
    tooltip: function (element, options) {
      if (options && typeof(options) !== 'object') {
        console.log(options)
        throw new Error('Option should be object!');
      }

      element.style.position = 'relative';
      element.style.cursor = 'pointer';
      var child = element.children[0];
      child.style.display = 'none';
      if (options && options.zIndex) {
        child.style.zIndex = options.zIndex;
      } else {
        child.style.zIndex = 900;
      }

      if (options && options.border) {
        child.style.border = options.border;
      } else {
        child.style.border = '1px solid black';
      }

      if (options && options.borderRadius) {
        child.style.borderRadius = options.borderRadius;
      } else {
        child.style.borderRadius = '5px';
      }

      child.style.position = 'absolute';

      if (options && options.color) {
        child.style.color = options.color;
      } else {
        child.style.color = 'black';
      }

      if (options && options.padding) {
        child.style.padding = '5px';
      } else {
        child.style.padding = '5px';
      }

      if (options && options.width) {
        child.style.width = options.width;
      } else {
        child.style.width = '150px';
      }

      if (options && options.backgroundColor) {
        child.style.backgroundColor = options.backgroundColor;
      } else {
        child.style.backgroundColor = 'darkgrey';
      }

      if (options && options.boxShadow) {
        child.style.boxShadow = options.boxShadow;
      } else {
        child.style.boxShadow = '0px 0px 5px grey';
      }

      element.addEventListener('mouseover', function (ev) {
        child.style.display = 'block';
      });

      element.addEventListener('mouseout', function (ev) {
        child.style.display = 'none';
      });
    },
    modal: function (wrapperId, buttonId) {
      var modal = this.getById(wrapperId);
      modal.style.display = 'none';
      var button = this.getById(buttonId);
      var modalContent = modal.children[0];
      button.addEventListener('click', function (ev) {
        modal.style.display = 'block';
        modal.className = 'jlib-modal';
        modalContent.className = 'jlib-modal-content';
        var close = document.getElementsByClassName('jlib-close-modal')[0];
        close.addEventListener('click', function (ev) {
          modal.className = '';
          modalContent.className = '';
          modal.style.display = 'none'
        });
      });
    },
    notify: function (message, time, options) {
      if (options && typeof(options) !== 'object') {
        throw new Error('Options should be an object!');
      }

      var noty = document.createElement('SPAN');
      noty.style.position = 'absolute';
      if (options && options.top) {
        noty.style.top = options.top;
      } else {
        noty.style.top = '30px';
      }

      if (options && options.right) {
        noty.style.right = options.right;
      } else {
        noty.style.right = '30px';
      }

      noty.textContent = message;

      if (options && options.backgroundColor) {
        noty.style.backgroundColor = options.backgroundColor;
      } else {
        noty.style.backgroundColor = 'rgb(127, 227, 74)';
      }

      if (options && options.borderRadius) {
        noty.style.borderRadius = options.borderRadius;
      } else {
        noty.style.borderRadius = '5px';
      }

      if (options && options.width) {
        noty.style.width = options.width;
      } else {
        noty.style.width = '150px';
      }

      if (options && options.padding) {
        noty.style.padding = options.padding;
      } else {
        noty.style.padding = '10px';
      }

      if (options && options.fontFamily) {
        noty.style.fontFamily = options.fontFamily;
      } else {
        noty.style.fontFamily = 'Sans-Serif';
      }

      noty.style.zIndex = 999;
      if (options && options.color) {
        noty.style.color = options.color;
      }  else {
        noty.style.color = 'white';
      }

      noty.style.wordWrap = 'break-word';
      noty.style.boxShadow = '0px 0px 5px darkgrey';
      noty.style.cursor = 'pointer';
      document.body.appendChild(noty);

      if (!time) {
        time = 4000;
      }

      noty.addEventListener('click', function (ev) {
        ev.target.remove();
      })
      setTimeout(function () {
        noty.remove();
      }, time);
    },
    chatBox: function (id, options) {
      if (options && typeof(options) !== 'object') {
        throw new Error('Options should be an object.')
      }

      var chat = document.createElement('span');
      chat.id = id;
      chat.style.position = 'absolute';
      if (options && options.top) {
        chat.style.top = options.top;
      } else {
        chat.style.bottom = '30px';
      }

      if (options && options.right) {
        chat.style.right = options.right;
      } else {
        chat.style.right = '30px';
      }

      if (options && options.backgroundColor) {
        chat.style.backgroundColor = options.backgroundColor;
      } else {
        // chat.style.backgroundColor = 'rgb(127, 227, 74)';
        chat.style.backgroundColor = 'white';
      }

      if (options && options.borderRadius) {
        chat.style.borderRadius = options.borderRadius;
      } else {
        chat.style.borderRadius = '5px';
      }

      if (options && options.width) {
        chat.style.width = options.width;
      } else {
        chat.style.width = '350px';
      }

      if (options && options.padding) {
        chat.style.padding = options.padding;
      } else {
        chat.style.padding = '10px';
      }

      if (options && options.fontFamily) {
        chat.style.fontFamily = options.fontFamily;
      } else {
        chat.style.fontFamily = 'Sans-Serif';
      }

      if (options && options.border) {
        chat.style.border = options.border
      } else  {
        chat.style.border = '1px solid black';
      }

      chat.style.zIndex = 999;

      if (options && options.color) {
        chat.style.color = options.color;
      }  else {
        chat.style.color = 'black';
      }

      // chat.style.lineHight = '3';
      chat.style.wordWrap = 'break-word';
      chat.style.boxShadow = '0px 0px 5px darkgrey';

      var inputMessage = document.createElement('INPUT');
      inputMessage.setAttribute('type', 'text');
      var displayedText = document.createElement('DIV');
      var sendButton = document.createElement('INPUT');
      sendButton.setAttribute('type', 'button');
      sendButton.setAttribute('value', 'send');

      sendButton.addEventListener('click', function (ev) {
        var message = document.createTextNode('Me: ' + inputMessage.value);
        displayedText.appendChild(message);
        var newLine = document.createElement('br');
        displayedText.appendChild(newLine);
        inputMessage.value = '';
      });

      var closeButton = document.createElement('INPUT');
      closeButton.setAttribute('type', 'button');
      closeButton.setAttribute('value', 'close');
      closeButton.addEventListener('click', function (ev) {
        chat.remove();
      });

      inputMessage.addEventListener('keyup', function (ev) {
        ev.preventDefault();
        if (ev.keyCode === 13) {
          sendButton.click();
        }
      });

      var headerElement = document.createElement('div');
      headerElement.style.marginTop = '-10px';
      headerElement.style.marginBottom = '15px';
      headerElement.style.marginLeft = '-10px';
      headerElement.style.textAlign = 'center';
      headerElement.style.borderTopLeftRadius = '5px';
      headerElement.style.borderTopRightRadius = '5px';
      headerElement.style.backgroundColor = 'gray';
      headerElement.style.width = '102.9%';
      headerElement.style.padding = '5px';
      if (options && options.headerContent) {
        headerElement.textContent = options.headerContent;
      } else {
        headerElement.textContent = 'Test';
      }      

      chat.appendChild(headerElement);
      chat.appendChild(displayedText);
      chat.appendChild(inputMessage);
      chat.appendChild(sendButton);
      chat.appendChild(closeButton);

      document.body.appendChild(chat);
    }
}
