// should take two command line arguments: a URL and a local file path
const request = require("request");
const fs = require("fs");

if (process.argv.length === 4) {
  // ex. http://www.example.edu/ (website) ./index.html (filepath)
  let website = process.argv.slice(2)[0];
  let fp = process.argv.slice(2)[1];

  // here we make an http request in Node using Node's request library
  request(website, (error, response, body) => {
    if (error) {
      throw error;
    }
  });
  // using Node's api to write the file
  fs.writeFile(fp, body, (error) => {
    if (error) {
      throw error;
    }

    console.log(`\nDownloaded and saved ${body.length} bytes to ${fp}.`);
  });
}
