// Enum 
/* enum Roles {
    user = 1,
    Admin = 2,
    SuperAdmin = 3
}

console.log(Roles.Admin);
console.log(Roles.user); */
enum Roles {
    User = "USER",
    Admin = "ADMIN",
    SuperAdmin = "SUPERADMIN"
}

console.log(Roles.Admin);
console.log(Roles.User);



// Objects
const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};

console.log(roles.User);