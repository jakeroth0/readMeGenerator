// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const licenseDict = {
  MIT : {
    badge :'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    section: `
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`},
  GPL : {
    badge :'[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
    section : `
    This program is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.
    
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    
    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.`
  },
  Apache : {
    badge : '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    section : `
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
    http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`,
  },
  default : {
    badge: '',
    section : '',
  },
}
function renderLicenseBadge(license) {
  return licenseDict[license].badge || licenseDict['default'].badge;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, username) {
  let prefix = `Copyright ${new Date(Date.now()).getFullYear()} ${username}\n`
  let section = licenseDict[license].section || licenseDict['default'].section;
  section = section !== '' ? prefix + section : section;
  return section;
}

// TODO: Create a function to generate markdown for README
const codeBlock = '`';
function generateMarkdown(userAnswers) {
  // let badge = userAnswers.license === "MIT" ? licenseDic.MIT : licenseDict.default;

  // let badge;
  // if (licenseDict[userAnswers.license]) badge = licenseDict[userAnswers.license];
  // else badge = licenseDict.default;
  
  return `# ${userAnswers.title}

  ${renderLicenseBadge(userAnswers.license)}

  ## Description
  ${userAnswers.description}

  ## Table of Contents
  - [Link](#Link)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ![Thumbnail](insert relitive path to img here)

  ## Link
  [Link](insert link to deployed app or video here)
  
  ## Installation
  To install necessary dependencies, run the following command:

  ${codeBlock} ${userAnswers.instal} ${codeBlock}

  ## Usage
  ${userAnswers.usage}

  ## License
  ${userAnswers.license}
  ${renderLicenseSection(userAnswers.license, userAnswers.userName)};

  ## Contributing
  ${userAnswers.contributing}

  ## Tests
  To run tests, run the following command:

  ${codeBlock} ${userAnswers.tests} ${codeBlock}

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${userAnswers.email}. You can find more of my work on GitHub at [${userAnswers.userName}](https://github.com/${userAnswers.userName}).
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
};