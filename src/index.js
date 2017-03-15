const Cookies = require("./js/vendor/js.cookie.js");

// getset
// Cookies.set('name', 'value');
// console.log(Cookies.get('name'));

let ck = {
    get: function(name) {
      return Cookies.get(name);
    },
    set: function(name, value, attr) {
      return Cookies.set(name, value, attr);
    }
};

ck.set("name1", "value1");
console.log(ck.get("name1"));





// set with expire
// Cookies.set('name', 'value', {
//   expires: 7
// });
// console.log(Cookies.get('name'));
// console.log(Cookies.get());

// set with expire + path
// Cookies.set('name', 'value', { expires: 7, path: '' });
// console.log(Cookies.get());

// delete
// Cookies.remove('name');
// console.log(Cookies.get());

// delete with path
// Cookies.set('name', 'value', { path: '' });
// console.log(Cookies.remove('name')); // undefined
// console.log(Cookies.remove('name', { path: '' }));
// console.log(Cookies.get());











// (function () {
//   var clickHandlers = function () {
//     alert(Cookies.get('name'))
//   };
//   if (document.readyState !== "loading") clickHandlers();
//   else if (document.addEventListener) document.addEventListener("DOMContentLoaded", clickHandlers);
//   else document.attachEvent("onreadystatechange", function () {
//     if (document.readyState === "complete") clickHandlers();
//   });
// })();