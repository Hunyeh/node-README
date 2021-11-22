// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
    if (license === 'Apache') {
      return '[![GitHub license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } 
    else if (license === 'Boost') {
      return '[![GitHub license](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    }
    else if (license === 'Eclipse') {
      return '[![GitHub license](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
    }
    else if (license === 'GNU GPL v3') {
      return '[![GitHub license: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }
    else if (license === 'MIT') {
      return '[![GitHub license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
    if (license === 'none') {
      return ''
    } 
    return '* [License](#license)'
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (license === 'none') {
    return ''
  } 
  return `## License
  ${license}`
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents  
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
${renderLicenseLink(data.license)}
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)

## Installation 
${data.installation}

## Usage
${data.usage}
![alt text](images/screenshot.JPG)

## Credits
${data.credits} 

${renderLicenseSection(data.license)}

## Contribution
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}
  <br />
  Find me on GitHub 🏆: [${data.username}](https://github.com/${data.username})
  <br />
  ✉️ If any additional questions, email me @ : ${data.email}
  `;
};
module.exports = generateMarkdown;
