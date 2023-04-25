const fs = require("fs");
const inquirer = require("inquirer");

const generateLicenseBadge = (license) => {
  switch (license) {
    case "MIT":
      return "https://img.shields.io/badge/License-MIT-blue.svg";
    case "GPLv3":
      return "https://img.shields.io/badge/License-GPLv3-blue.svg";
    default:
      return "";
  }
};

const generateReadme = (answers) => `
# ${answers.title}

![License](${generateLicenseBadge(answers.license)})

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

This project is licensed under the terms of the ${answers.license} License.

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions

If you have any questions, please reach out:

- [GitHub Profile](https://github.com/${answers.username})
- Email: ${answers.email}
`;


