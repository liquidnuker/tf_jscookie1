import {cookieToggle} from "./cookieToggle.js"

cookieToggle.set("name1", "value1");
console.log(cookieToggle.get());

// cookieToggle.remove("name1", "value1");
console.log(cookieToggle.get("name1"));