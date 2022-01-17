Codding challenge

# Coding Chalenge

# repository

-https://github.com/aviiamelia/codding-challenge

Apllication developed to emulated a shopping cart system

## Introduction

This application was developed with intention to be a codding challenge. The application is based on a cart flow which you can add and remove items from the cart

# How to install the project dependencies

-Project was developed in reactJs, so you will need
node to run this project.
I reccomend the v16.13.1
which is the one that I used
-If you using linux the cli to install node will be: sudo apt install nodejs
-if you are on windows you have to download the exe file from the website and manually install

- Havin node installed, you will need to be in the root of the project, the same folder which the 'src' folder is located, and then you will use the command: yarn
  or npm install
  This will install all the libraries and dependecies necessary to the application work

# How to use localy

After installing the dependencies, still in the root of the project you will use the command:
yarn start
This will open the project in the 'localhost:3000'

# How to run the tests

-I used to types of tests, unity test and E2E. To run the unity test you will just need to use the command:
yarn test or npm test
-Now for the E2E tests, you will notice a folder called cypress in the root of the project, the tests are there, the path to the test is cypress/integration/products.spec.js
-Now how to run the tests the E2E tests, you will need to be running the aplication with 'yarn start', with that in mind you will use the command 'yarn run cypress open', this will open a screen which you will see the 'integration' folder with all the tests, after that you will just need to click on the file products.spec.js, and the cypress will run the automated tests

# Follow-up questions

1. How long did you spend on the test?
   -It took me about 4 days to do it
2. What would you add if you had more time?
   -I would make a figma sketch and work more in the styles, make it look better and more professional, maybe add some animations
3. How would you improve the product APIs that you had to consume?
   -I would add and image to each product and add more products. I could also make a register and login route, so that the bought products would be saved in the cart
4. What did you find most difficult?
   -I think was to implement the tests
5. How did you find the overall experience, any feedback for us?
   -It was really productive I learned a lot, i'm more confident in my skills now, and I was abble to learn new things, like automated tests and some other features that I used and will definitively use in the future
