import Cookies from "./js/vendor/js.cookie.js";

const cookieToggle = {
    get: function(name) {
      return Cookies.get(name);
    },
    set: function(name, value, attr) {
      return Cookies.set(name, value, attr);
    }
};

export {cookieToggle};