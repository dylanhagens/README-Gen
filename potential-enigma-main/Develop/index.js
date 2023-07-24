// require file system
const fs = require('fs');

// inquirer prompt
const inquirer = require('inquirer');

inquirer    
    .prompt([
        {
            type: 'input',
            message: 'What is your project name?',
            name: 'projectname',
          },
          {
            type: 'input',
            message: 'Please provide a description of your project.',
            name: 'description',
          },
          {
            type: 'input',
            message: 'Please provide installation instructions, if any.',
            name: 'installation',
          },
          {
            type: 'input',
            message: 'Let others know how to use your project.',
            name: 'usage',
          },
          {
            type: 'input',
            message: 'List any collaborators or links to code you used.',
            name: 'credits'
          },
          {
            type: 'input',
            message: 'Would you like others to contribute? Please enter guidlines on how to do so.',
            name: 'contributing',
          },
          {
            type: 'input',
            message: 'If available, provide tests for your application.',
            name: 'tests',
          },
          {
            type: 'list',
            message: 'Choose a license.',
            name: 'license',
            choices: [
              { name: 'MIT', value: mit }, 
              { name: 'Apache 2.0', value: apache }, 
              { name: 'ISC', value: isc }, 
              { name: 'BSD', value: bsd }
            ]
          },
          {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
          },
          {
            type: 'input',
            message: 'Finally, please provide your email address.',
            name: 'email',
          }
    ])
//takes input and creates readme file with user-provided information
    .then(({projectname, description, installation, usage, credits, contributing, tests, license, username, email}) => fs.writeFile("README.md",
//README template
`# ${projectname}

## Description

${description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Contribute](#contribute)
- [Tests](#tests)

## Installation

${installation}

## Usage

${usage}

To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ![alt text](assets/images/screenshot.png)
(remove the tab before the '!' above)

## Credits

${credits}

If you followed tutorials, include links to those here as well.

## License

${license}

## Features

If your project has a lot of features, list them here.

## Contribute

${contributing}

## Tests

${tests}

## Questions

Got any? Contact me!

Email: ${email}
Github: https://github.com/${username}

`, err => err ? console.log(err) : console.log("success"))
);
// Log error if thrown ^ 