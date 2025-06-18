// id, secretKey, expirtInfo

import jwt from "jsonwebtoken";

let infoObj = {
  id: "1234",
};

let secretKey = "n9solution";

// expiryInfo and expires must be sam
let expiryInfo = {
  expiresIn: "1h",
};

let token = await jwt.sign(infoObj, secretKey, expiryInfo); // generate token
// console.log(token);

let token1 = token;
let verifiedToken = await jwt.verify(token1, secretKey);
console.log(verifiedToken);

// id,iat, exp
