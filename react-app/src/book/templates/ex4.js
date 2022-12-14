const ex4 = `
# Notes Application

### Click <a href="https://young-inlet-99889.herokuapp.com/notes" target="_blank">**here**<a> to check out the app (hosted by Heroku)

# Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Questions](#questions)
* [License](#license)

## Description
This project is a note application that allows a user to write notes and give them a title, save these notes, and also read or delete old notes. To save data, this application is equipped with its own server and json database. This project was my first time setting up a server using the Express framework, and also my first time handling data by writing to a local file. All url requests are routed to responses, including the rendering of different html pages, but also responses that interact with application's database to save, delete, or render data. This was also an exercise in working with insomnia to create the routes as well using Heroku to deploy an app.

### Installation
You can use this application through its heroku url (listed above), or by first installing it on your machine. To install locally, first clone this repository onto your machine. Install the necessary node modules by navigating to the main directory and running the command "npm install". Once the packages have downloaded, the application is now ready to use. Run the command "node server.js" to be able to view the app from your localhost. 

### Usage
Navigate to the notepad by selecting "get started" from the home page. Write a new note, beginning with the title and then filling our the main body. Once there is content in the main body, a save button will appear. Click this button when you are ready to save and the note will be saved and displayed on the list to the left. Select any note on the list to load it in the main form. Select the delete button to delete any note on the list. Hit the "+" button to clear the form in order to add a new note. 

### Credits
This was a solo project meant to build off of starter code provided by the staff at the UC Berkeley full-stack coding bootcamp.

#### Questions
Click <a href="https://github.com/jkwalsh127" target="_blank">**here**<a> to go to my GitHub profile

If you have any questions about this project or would just like to get in touch, you can email me at <a href="mailto:jkwalsh127@gmail.com" target="_blank">jkwalsh127@gmail.com</a>

##### License
The contents of this repository are protected under the <a href="https://opensource.org/licenses/MIT">MIT license.</a>
`

export default ex4;