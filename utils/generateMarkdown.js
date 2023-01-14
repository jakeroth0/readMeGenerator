// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userAnswers) {
  return `# ${userAnswers.title}

  License Badge

  ## Description
  ${userAnswers.description}

  ## Table of Contents
  - Installation
  - Usage
  - License
  - Contributing
  - Tests
  - [Questions](#Questions)
  
  ## Installation
  ${userAnswers.instal}

  ## Usage
  ${userAnswers.usage}

  ## License
  ${userAnswers.license}

  ## Contributing
  ${userAnswers.contributing}

  ## Tests
  ${userAnswers.tests}

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${userAnswers.email}. You can find more of my work at ${userAnswers.userName}.
`;
}

module.exports = {
  generateMarkdown,
};