const phoneBook = {
  anat: "+44981513462",
  sam: "+44981513419",
  shaq: "+4498674321",
};

const name = "anat";
const anatPhoneNo = phoneBook.name;

console.log(anatPhoneNo);

// What will happen when this file is executed with Node?
// print undefined
// What is the problem with this code?
// name should be in square brackets