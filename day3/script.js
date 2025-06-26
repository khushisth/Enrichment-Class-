const fs = require('fs');

function printJSON() {
  fs.readFile('./user.json', 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    try {
      const parsedJson = JSON.parse(data);
      displayData(parsedJson);
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
    }
  });
}

/**
 * Displays the parsed JSON data by logging it to the console.
 * 
 * @param {Object} data - The parsed JSON data to be displayed
 */
function displayData(data) {
  users = data.users;
  for(user in users){
    console.log(`Name: ${users[user].name}\nAge: ${users[user].age}\nE-mail: ${users[user].email}\n`);
  }
}
printJSON();