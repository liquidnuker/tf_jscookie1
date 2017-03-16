import {cookieToggle} from "./cookieToggle.js"

cookieToggle.set("name1", "value1");
cookieToggle.set("name2", "value2");
// cookieToggle.set('name1', 'value1', { expires: 7 });
// Cookies.set('name', 'value', { expires: 7, path: '' });
// cookieToggle.remove("name1", "value1");

// console.log(cookieToggle.get());
// console.log(cookieToggle.get("name1"));

// cookieToggle.set('name', 'value', { path: '' });
// cookieToggle.remove('name'); // undef
// cookieToggle.remove('name', { path: '' }); // removed!

// console.log(cookieToggle.getJSON()); // => { name: { foo: 'bar' } }
// console.log(cookieToggle.getJSON("name1")); // => { foo: 'bar' }
let x = cookieToggle.getJSON();
console.log(x);

document.body.innerHTML = x.name1; // value1
// document.body.innerHTML = x.value1; // undef


