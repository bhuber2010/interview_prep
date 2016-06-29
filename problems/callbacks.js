let clientData = {
    id: 123,
    fullName: "Not Set",
    setUserName: function(firstName, lastName){
      this.fullName = firstName + " " + lastName;
    }
}
function getUserInput(firstName, lastName, callback, cbObj){
  // do some stuff

  callback.apply(cbObj, [firstName, lastName]);
}

getUserInput("Brian", "Huber", clientData.setUserName, clientData)

console.log(clientData.fullName);
