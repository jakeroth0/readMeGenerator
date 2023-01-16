// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// let licenseLink = "";
// let licenseImg = "";
// let licenseType = "";
function renderLicenseBadge(userAnswers) {
  // let badge = userAnswers.license;
  // console.log(badge);
  // if (badge === 'MIT') {
  //   licenseImg = '(https://img.shields.io/badge/License-MIT-yellow.svg)]';
  //   console.log('yup');
  // } else {
  //   console.log('MIT didnt work');
  // }
  // switch (badge) {
  //   case 'MIT':
  //     // licenseType = '[![License: MIT]';
  //     // licenseImg = '(https://img.shields.io/badge/License-MIT-yellow.svg)]';
  //     // licenseLink = '(https://opensource.org/licenses/MIT)';
  //     // console.log(licenseType);
  //     console.log('MIT worked');
  //     break;
  //     case 'GPL':
  //     console.log('GPL worked');
  //     break;
  //     case 'Apache':
  //     console.log('Apache worked');
  //     break;
  //     case 'n/a':
  //     console.log('n/a');
  //     break;
  
  //   default:
  //     console.log('default logs this')
  //     break;
  // }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const codeBlock = '`';
function generateMarkdown(userAnswers,licenseType) {
  let badge = userAnswers.license;
  if (badge === 'MIT') {
    licenseImg = '(https://img.shields.io/badge/License-MIT-yellow.svg)]';
    licenseLink = '(https://opensource.org/licenses/MIT)';
    licenseType = '[![License: MIT]';
    userAnswers.license = 'This project is licensed under the MIT license.';
  } else if (badge === "GPL") {
    licenseImg = '(https://img.shields.io/badge/License-GPL_v2-blue.svg)]';
    licenseLink = '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    licenseType = '[![License: GPL v2]';
    userAnswers.license = 'This project is licensed under the GPL license.';
  } else if (badge === "Apache") {
    licenseImg = '(https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
    licenseLink = '(https://opensource.org/licenses/Apache-2.0)';
    licenseType = '[![License]';
    userAnswers.license = 'This project is licensed under the Apache license.';
  }  else if (badge === "n/a") {
    licenseImg = '';
    licenseLink = '';
    licenseType = '';
    userAnswers.license = 'This project was not licensed.';
  };
  return `# ${userAnswers.title}

  ${licenseType+licenseImg+licenseLink}

  ## Description
  ${userAnswers.description}

  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  ## Installation
  To install necessary dependencies, run the following command:

  ${codeBlock} ${userAnswers.instal} ${codeBlock}

  ## Usage
  ${userAnswers.usage}

  ## License
  ${userAnswers.license}

  ## Contributing
  ${userAnswers.contributing}

  ## Tests
  To run tests, run the following command:

  ${codeBlock} ${userAnswers.tests} ${codeBlock}

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${userAnswers.email}. You can find more of my work at [${userAnswers.userName}](https://github.com/${userAnswers.userName}).
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
};