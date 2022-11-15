// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  function renderLicenseBadge(license) {
    let licBadge = {
      'Apache 2.0': 
         '[![licBadge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      ,
      'BSL-1.0': 
         '[![licBadge](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
      ,
      'CC': 
         '[![licBadge](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
      ,
      'ISC': 
         '[![licBadge](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
      ,
      'MIT': 
         '[![licBadge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      ,
      'Mozilla 2.0': 
         '[![licBadge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      ,
      'None': 
         ''
      
    };
    return licBadge[license];
  }
  
  // Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license !== 'None') {
      return `\n* [License](#license)\n`;
    }
    return '';
  }
  
  // Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    let section = {
      'Apache 2.0': 
         `## License
        [![licBadge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) <br /> Application is backed by ${license} license.`
      ,
      'bsl-1.0': 
         `## License
        [![licBadge](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt) <br /> Application is backed by ${license} license.`
      ,
      'CC': 
         `## License
        [![licBadge](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/) <br /> Application is backed by ${license} license.`
      ,
      'ISC': 
        `## License
        [![licBadge](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC) <br /> Application is backed by ${license} license.`
      ,
      'MIT': 
         `## License
        [![licBadge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <br /> Application is backed by ${license} license.`
      ,
      'Mozilla 2.0': 
         `## License
        [![licBadge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <br /> Application is backed by ${license} license.`
      ,
      'None': 
         ''
      
    };
    return section[license];
  }
  
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return ` 
    # <${data.title}> 
    ## <${renderLicenseBadge(data.license)}>
    ## Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributions](#contributions)
    - [Testing](#testing)
    - [Contact](#contact)
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ${renderLicenseSection(data.license)}
    ## Contributions
    ${data.contributions}
    ## Testing
    ${data.testing}
    ## Contact
    Check out my GitHub profile!
    [${data.github}](https://github.com/${data.github})
    Contact me via email @ ${data.email}
    ${data.contributions} using the [ReadMe-Generator](https://github.com/jicard/Node-Readme-Generator-Challenge)
  `;
  }
  module.exports = generateMarkdown;