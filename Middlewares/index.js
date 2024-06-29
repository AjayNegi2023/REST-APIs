const fs = require("fs");
function logReqRes(fileName) {
  return (req, res, next) => {
    console.log("Middleware 1");

    // Add a custom property to the request object
    req.name = "Ajay";

    // Log request details with current date and URL
    const log = `New request at ${new Date().toString()} with URL: ${req.url}\n`;
    fs.appendFile(fileName, log, (err) => {
      if (err) {
        // Send a response with status 400 if there's an error writing to the file
        return res.status(400).json({
          status: "Fail",
          message: "Unable to create the file",
        });
      }

      // Proceed to the next middleware or route handler
      next();
      console.log("After next() line will execute");

      // Optional: Set custom headers 
      // res.setHeader("X-Name", "Ajay Negi");
    });
  };
}

module.exports = logReqRes;