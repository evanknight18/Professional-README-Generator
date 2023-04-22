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