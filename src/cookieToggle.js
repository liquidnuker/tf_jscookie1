const Cookies = require("./js/vendor/js.cookie.js");

const cookieToggle = {
    get: function(name) {
      return Cookies.get(name);
    },
    getJSON: function(name) {
      return Cookies.getJSON(name);
    },
    set: function(name, value, attr) {
      return Cookies.set(name, value, attr);
    },
    remove: function(name, attr) {
      return Cookies.remove(name, attr);
    }
};

export {cookieToggle};

