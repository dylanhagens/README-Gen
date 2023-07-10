const fs = require("fs");
const inquirer = require("inquirer");

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md file generated!')
  );
}

function getLicenseBadgeUrl(license) {
    let licenseUrl = "";
    switch (license) {
      case "MIT":
        licenseUrl = "https://img.shields.io/badge/License-MIT-yellow.svg";
        break;
      case "GPLv2":
        licenseUrl = "https://img.shields.io/badge/License-GPL%20v2-blue.svg";
        break;
      case "Apache":
        licenseUrl = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
        break;
      default:
        break;
    }
    return licenseUrl;
  }

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "README title:",
        name: "title",
      },
      {
        type: "input",
        message: "Description of project:",
        name: "description",
      },
      {
        type: "input",
        message: "Installation instructions:",
        name: "installation",
      },
      {
        type: "input",
        message: "Usage information:",
        name: "usage",
      },
      {
        type: "input",
        message: "Contribution guidelines:",
        name: "contribution",
      },
      {
        type: "input",
        message: "Test instructions:",
        name: "test",
      },
      {
        type: "list",
        message: "License?",
        choices: ["MIT", "GPLv2", "Apache"],
        name: "license",
      },
      {
        type: "input",
        message: "Github Username:",
        name: "question1",
      },
      {
        type: "input",
        message: "Email:",
        name: "question2",
      },
    ])
    .then((response) => {
        const licenseBadgeUrl = getLicenseBadgeUrl(response.license);
      const readmeData = `
        # ${response.title} \n
        [![License](${licenseBadgeUrl})](${getLicenseLink(response.license)})\n
        ## Description \n
        ${response.description}\n
        ## Table of Contents\n
        - [Installation](#installation)\n
        - [Usage](#usage)\n
        - [Contribution](#contribution)\n
        - [Test Instructions](#test)\n
        - [License](#license)\n
        - [Questions](#questions)\n
        ## Installation\n
        ${response.installation}\n
        ## Usage\n
        ${response.usage}\n
        ## Contribution\n
        ${response.contribution}\n
        ## Test\n
        ${response.test}\n
        ## Questions\n
        Reach me via:\n
        githug username: ${response.question1}\n
        email: ${response.question2}\n
        ## License\n
        This application is covered under the ${response.license} license\n
      `;
      writeToFile("README.md", readmeData);
    })
    .catch((error) => console.log(error));
}
function getLicenseLink(license) {
    let licenseLink = "";
    switch (license) {
      case "MIT":
        licenseLink = "https://opensource.org/licenses/MIT";
        break;
      case "GPLv2":
        licenseLink = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
        break;
      case "Apache":
        licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
        break;
      default:
        break;
    }
    return licenseLink;
  }
init();