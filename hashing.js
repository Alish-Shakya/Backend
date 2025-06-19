import bcrypt from "bcryptjs";

let password = "Password@123";
let hashedPassword = await bcrypt.hash(password, 10); //salt 10
// console.log(hashedPassword);

let loginPassword = "Password@123";
let comparePassword = await bcrypt.compare(loginPassword, hashedPassword);
console.log(comparePassword);
