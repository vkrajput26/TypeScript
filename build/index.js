let First_name = "virat";
let age = 23;
//array of number
let arr = [1, 2, 3, 4, 5];
let arrofstring = ["virat", "kholi"];
//tupels
let tuples = ["virat", true];
//enum
var group;
(function (group) {
    group[group["User"] = 0] = "User";
    group[group["SuperUser"] = 1] = "SuperUser";
    group[group["Admin"] = 2] = "Admin";
    group[group["SuperAdmin"] = 3] = "SuperAdmin";
})(group || (group = {}));
;
function product(x, y) {
    return x * y;
}
console.log(product(7, 5));
function divide(x, y) {
    return Math.floor(x / y);
}
const printName = ({ First_name }) => {
    console.log(`${First_name}`);
};
//# sourceMappingURL=index.js.map