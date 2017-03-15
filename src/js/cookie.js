import "./vendor/jscookie.js";

const cookieTrigger = function() {
  InternalCookies = Cookies.noConflict();
  return {
    get: function(name) {
      return InternalCookies.get(name);
    },
    set: function(name, value, attributes) {
      InternalCookies.set(name, value, attributes);
    },
    remove: function(name, attributes) {
      InternalCookies.remove(name, attributes);
    }
  };
};

export {cookieTrigger};

