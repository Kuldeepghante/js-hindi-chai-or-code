const accountId  = 1234567890;
//const never changes //
 const accountEmail="kuldeep@gmail.com"
 var accountPassword="1234567890"
  //prefer not use var because of issue in block scope and functional scope //
  accountcity="delhi"
  accountState="";

// accountId = 2 is not allowed //


console.log(accountId, accountEmail, accountPassword, accountcity, accountState);

console.table([accountId, accountEmail, accountPassword, accountcity, accountState]);

