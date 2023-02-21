<!-- @format -->

# super-readme-generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This app will automatically create a README file by using a comand-line application to generate one. In this way, the project creator can devote more time to working on the project.

### User Story

- As a developer, I want a README generator so that I can quickly create a professional README for a new project

### Acceptance Criteria

- Create a command-line application that accepts user input.
  - When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
    - The title of my project
    - Sections entitled:
      - Description
      - Table of Contents
      - Installation
      - Usage
      - License
      - Contributing
      - Tests
      - Questions
    - When a user enters the project title then it is displayed as the title of the README
    - When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    - When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
    - When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
    - When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    - When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README

## Installation

I have created a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer), the file system module and the following the best practices from the [Good README Guide](../../01-HTML-Git-CSS/04-Important/Good-README-Guide/README.md).

The application will be invoked by using the following command:

```bash
node index.js
```

- the application will accept the user's input;
- the markdown file will be generated using the fs.writeFile module after the user completed the questionnaire
- the markdown file will contain:

  - project's title
  - project's description
  - table of contents
  - Installation
  - Usage
  - License
  - Contributing
  - Tests
  - Questions

## Usage

- When a user enters the project title then it is displayed as the title of the README
- When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
- When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
- When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
- When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
- When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README

## Credits

N/A

## License

MIT License

## Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

N/A

## Contribution

N/A

## Tests

Node tests
