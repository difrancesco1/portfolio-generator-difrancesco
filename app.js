const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

const [name, github] = profileDataArgs;

console.log(name, github);

const pageHTML = generatePage(name, github);

fs.writeFile('./index.html', pageHTML, err => { //Name of the file, data that will be written on that file 
  if (err) throw err; //callback function for error handeling

  console.log('Portfolio complete! Check out index.html to see the output!');
});   // `` backticks reference
