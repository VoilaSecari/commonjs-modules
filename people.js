const fullName = require("./names.js");
const hobbies = require("./hobbies.js");

const person = () => {
  const personID = {
    name: fullName,
    freetime: hobbies,
  };
  return personID;
};

console.log(person());
