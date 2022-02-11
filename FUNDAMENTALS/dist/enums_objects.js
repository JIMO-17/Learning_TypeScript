"use strict";
// Enum 
/* enum Roles {
    user = 1,
    Admin = 2,
    SuperAdmin = 3
}

console.log(Roles.Admin);
console.log(Roles.user); */
var Roles;
(function (Roles) {
    Roles["User"] = "USER";
    Roles["Admin"] = "ADMIN";
    Roles["SuperAdmin"] = "SUPERADMIN";
})(Roles || (Roles = {}));
console.log(Roles.Admin);
console.log(Roles.User);
// Objects
const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};
console.log(roles.User);
