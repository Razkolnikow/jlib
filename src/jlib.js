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
      document.body.appendChild(noty);

      setTimeout(function () {
        noty.remove();
      }, time);
    }
}
