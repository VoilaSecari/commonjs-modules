const fullName = require("./names.js");
const hobbies = require("./hobbies.js");

const person = () => {
  const personID = {
    name: fullName("Laura", "Filip"),
    freetime: hobbies("Nome hobby uno", "hobby due", "hobby tre"),
  };
  return personID;
};

console.log(person());
