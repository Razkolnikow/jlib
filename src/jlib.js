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
    }
}
