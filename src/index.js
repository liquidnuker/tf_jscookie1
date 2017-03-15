const Cookies = require("./js/vendor/jscookie.js");

// getset
// Cookies.set('name', 'value');
// console.log(Cookies.get('name'));

// set with expire
Cookies.set('name', 'value', {
  expires: 7
});
// console.log(Cookies.get('name'));
// console.log(Cookies.get());

// delete
Cookies.remove('name');
console.log(Cookies.get());











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