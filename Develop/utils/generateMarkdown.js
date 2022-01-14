// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==="Apache") {
    var licenseBadge= `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  }  if (license==="Boost") {
      var licenseBadge= `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
  } if (license==="MIT") {
    var licenseBadge= `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } if (license==="N/A") {
    var licenseBadge = '';
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==="Apache") {
    var licenseLink= `(https://opensource.org/licenses/Apache-2.0)`
    }  if (license==="Boost") {
      var licenseLink= `(https://www.boost.org/LICENSE_1_0.txt)`
      } if (license==="MIT") {
        var licenseLink= `(https://opensource.org/licenses/MIT)`
        } if (license==="N/A") {
    var licenseLink = '';
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license==="N/A") {
    return "";
  } else {
     return "## License "+renderLicenseBadge(license)+renderLicenseLink(license) +`
     
     This application is licensed by ${license}`;
  }
} 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 
  var license = data.license;
  return `# ${data.title}

${renderLicenseSection(license)}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [Questions](#questions)

 ## Description

The purpose of the application is to ${data.description}.
 
## Installation

${data.install}

## Usage

${data.usage}

## Tests

${data.tests}

## Contributing

${data.contributing}

## Questions

My GitHub username is: ${data.github}

Link @ https://github.com/${data.github}

Email: ${data.email}

Got Questions? 
${data.questions}

`;

}

module.exports = generateMarkdown;
