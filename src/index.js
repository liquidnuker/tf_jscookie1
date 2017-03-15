const Cookies = require("./js/vendor/jscookie.js");

// getset
// Cookies.set('name', 'value');
// console.log(Cookies.get('name'));

// set with expire
Cookies.set('name', 'value', { expires: 7 });
// console.log(Cookies.get('name'));
// console.log(Cookies.get());

