/** @format */

// function to generate markdown for README
function generateMarkdown(data) {
  let logo;
  if (data.license === "GNU GPL") {
    logo = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (data.license === "MIT License") {
    logo = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (data.license === "Boost Software License 1.0") {
    logo = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (data.license === "Creative Commons Zero") {
    logo = `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
  } else if (data.license === "Eclipse Public License") {
    logo = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  } else if (data.license === "The Unlicense") {
    logo = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }

  return `# ${data.title}

  ${logo}

  ## Description
   ${data.description}

  ## Table of contents

  [ 1. Installation ](#installation)

  [ 2. Usage ](#usage)

  [ 3. License ](#license)

  [ 4. Contributing ](#contributing)

  [ 5. Tests ](#tests)

  [ 6. Questions ](#questions)


  ## Installation <div id="installation"/>
  ${data.installation}

 ## Usage  <div id="usage"/>
  ${data.usage}

  ## License  <div id="license"/>
  ${data.license}

  ## Contributing   <div id="contributing"/>
  ${data.contributing}

  ## Tests - node tests <div id="tests"/>
  ${data.tests}

  ## Questions  <div id="questions"/>
    
  *For further questions regarding this project, do not hesitate to reach out by email at ${data.email} or on my [GitHub profile](https://github.com/${data.username})! Thank you!*

`;
}

module.exports = generateMarkdown;
