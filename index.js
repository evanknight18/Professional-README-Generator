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

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Enter your project title:",
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description:",
    },
    {
      type: "input",
      name: "installation",
      message: "Enter installation instructions:",
    },
    {
      type: "input",
      name: "usage",
      message: "Enter usage information:",
    },
    {
      type: "input",
      name: "contributing",
      message: "Enter contribution guidelines:",
    },
    {
      type: "input",
      name: "tests",
      message: "Enter test instructions:",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license for your application:",
      choices: ["MIT", "GPLv3"],
    },
    {
      type: "input",
      name: "username",
      message: "Enter your GitHub username:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address:",
    },
  ])
  .then((answers) => {
    const readmeContent = generateReadme(answers);
    fs.writeFile("README.md", readmeContent, (err) =>
      err ? console.log(err) : console.log("README.md generated successfully!")
    );
  });
