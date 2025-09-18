const { add, subtract } = require("./utils/math");
const { capitalize } = require("./utils/string");
const feature = require("./feature/feature");

console.log("Git Demo Project");
console.log("2 + 3 =", add(2, 3));
console.log("5 - 2 =", subtract(5, 2));
console.log("capitalize('git') =", capitalize("git"));
console.log("Feature says:", feature());
