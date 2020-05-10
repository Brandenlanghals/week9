var fs = require("fs");

fs.appendFile("log.txt", process.argv[2], function(err) {

  if (err) {
    console.log(err);
  }
  else {
  console.log("Success!");
  }

  
  });
