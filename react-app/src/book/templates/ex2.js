const ex2 =`
# Team Profile Generator

# Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Questions](#questions)
* [License](#license)

# Description
This project uses the power of node.js to generate a webpage populated with user inputs given to the inquirer prompts provided. The content of the page will be a series of cards the contain information meant to represent that of a team of employees. Classes are used to set objects and functions that will pertain to each employee, and then subclasses are used to provide info that only pertains to the specific role of that employee. The use of classes was a main focus of this project, as well as the practice of building tests for these classes. To do this, I was using the Jest node module for the first time, which allows the user to confirm that the class conditionals, object, and functions are all behaving as expected. Beyond that, this project uses the fs.writeFile functionality to generate a new HTML file, complete with appended cards populated by the user inputs gathered and prompted by the Inquirer functionality.

## Installation
To utilize this project, first clone this repository onto your machine by running the command "git clone" followed by the contents provided in the green "code" dropdown near the top of this repository page in your command-line shell. Once the contents are copied to your machine, open the directory in your text-editor of choice. From your shell, install the necessary node modules by navigating to the main directory and running the command "npm install". Once the packages have downloaded, the application is now ready to use.

## Usage
Once everything is installed, using the application is easy. You can run the tests on the classes by executing the command "npm run test". To initiate the Inquire prompts, from the main directory, simply run the command "node index.js". You will first be prompted to fill out the info for the person in the team's Manager role. From there, you will be able to choose to next add an Engineer or an Intern, or to be done adding employees. Each time the user adds a new employee, they will be presented with these options again. Once all team members have been added, the user ends the prompts and a new html file will be generated.

Watch this run through to observe how the application is used 

## Credits
This was a solo project inspired by the staff at the UC Berkeley full-stack coding bootcamp. Thanks to those instructors and my fellow classmates for providing the knowledge and the incentive. 

### Questions
Click <a href="https://github.com/jkwalsh127" target="_blank">**here**<a> to go to my GitHub profile

If you have any questions about this project or would just like to get in touch, you can email me at <a href="mailto:jkwalsh127@gmail.com" target="_blank">jkwalsh127@gmail.com</a>

#### License
The contents of this repository are protected under the <a href="https://opensource.org/licenses/MIT">MIT license.</a>
`

export default ex2;