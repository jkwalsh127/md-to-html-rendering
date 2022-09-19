const ex1 = `
# E-commerce back-end

## Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Questions](#questions)
* [License](#license)

# Description
This project was focused on building a back-end application that served routes to fetch, create, update, and delete stored data. It is mocking the tools that a store might need to maintain records of the products that they sell. The database is set up to assign "products" to "tags" in a many to many relationship through the use of "product tags", while many products are grouped under individual "categories". 
The Node.js runtime environment is used to create and seed MySQL databases. The dotenv module stores sensitive information that is used to populate and access the database locally. Sequelize models define the columns for each table, which are synced to the database upon starting the server. Express.js is used to create the routes that are served to perform manipulation of the database. 

## Installation
To install locally, first clone this repository onto your machine. Once the contents are copied, open the directory in your text-editor of choice. From your shell, install the necessary node modules by navigating to the main directory and running the command "npm install". Once the packages have downloaded, the application is now ready to use.

## Usage
First, the databse must be set up. To do this, run the command "mysql -u root -p". You will be prompted for your MySQL password. Once entered, you can run the command "source db/schema.sql;" to create the database. Now, run the command "quit" to exit mysql.
Now that the database is created, we can add the data. Running the command "npm run seed" will create the tables according to the sequelize models, and then fill the tables with seed data. From there, the command "npm start" will boot the server. Note that starting the server will create the tables if none exist. From here, insomnia can be used to interact with the data. Standard requests are set up there to query the database through the established routes. GET, POST, PUT, and DEL requests are used to manipulate data from each table. Follow the video below to see how this is done. 

## Credits
This was a solo project meant to built from scratch, the idea provided by staff at the UC Berkeley full-stack coding bootcamp.

### Questions
Click <a href="https://github.com/jkwalsh127" target="_blank">**here**<a> to go to my GitHub profile

If you have any questions about this project or would just like to get in touch, you can email me at <a href="mailto:jkwalsh127@gmail.com" target="_blank">jkwalsh127@gmail.com</a>

#### License
The contents of this repository are protected under the <a href="https://opensource.org/licenses/MIT">MIT license.</a>
`

export default ex1;