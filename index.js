const Bcrypt = require('bcrypt-nodejs');

const salt = Bcrypt.genSaltSync(13);

generateHashedPassword = (password) => {
   return password = Bcrypt.hashSync(password, salt);
}
const pwds = ["ExamplePass1", "ExamplePass2", "ExamplePass3", "etc"]

for (const pwd in pwds){
console.log("Hashing Password:", pwds[pwd] )
console.log(generateHashedPassword(pwds[pwd]))
console.log("")
console.log("Done!")
}

// Sample hashed password: $2a$13$41tcxJSGOc4ZJCvDoNDzwuW3PEb4YYbKAHaMeUyYGrAccDX5lz5Ty
// Note I'm using salt level 13

/*
- To test, clone this repo. Run npm install, then node index.js
*/