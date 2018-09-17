// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(name => name.toLowerCase());
}

function nameToAttributes(array) {
  return arra.map(function(fullName){
    const first, last = fullName.split("");
    return Object.assign({}, {firstName: first}, {lastName: last});
  })
}
