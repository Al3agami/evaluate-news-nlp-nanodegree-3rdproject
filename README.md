# Evaluate News NLP Project

A web tool that allow users to run natural language processing on articles or blogs from any website with URL to classify the information of the article like whether the content is objective or subjective and whether it is positive, neutral or negative in tone.

## How to install

1. Download the project from github, or Fork this repo, then clone master brnach from your forked repo down to your computer.
2. Open terminal and navigate `cd` to the project folder and run ```npm install```, or through your code editor terminal.
3. To run the project directly in browser on production mode, run ```npm run build-prod```, then go to your browser and open localhost:8081.


## Project Content

```bash
├── README.md # That is the file you are reading now :)
├── webpack.dev.js # This is a webpack configuration file includes configs for development mode.
├── webpack.prod.js # This is a webpack configuration file includes configs for production mode, how to project should served to useer.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── .babelrc # This is a file for babel's configuration, will discuss it down below.
└── __test__
    ├── utils.test.js # This is a test file use Jest functionalities to test some javascript functions in src/client/js/utils.js
    ├── validations.test.js # This is a test file use Jest functionalities to test some javascript functions in src/client/js/validations.js
└── src
    ├── client # This folder contains all source code for client side (javascript/views/styles)
        ├── js # This folder contains all javascript code that manipulate and interact with app view elements.
            ├── checkArticle.js # Where the API is being fetched
            ├── utils.js # Includes some poilerplate code in form of functions to reduce code in other files.
            ├── validations.js # Includes validation functions. 
        ├── styles # This folder contains all styles in form of scss which is this transpiled to css using loaders.
            ├── form.scss # Includes styles for the form and result sections
            ├── main.scss # Includes styles for the main page
            ├── navbar.scss # Includes styles for the page navigation bar, which is only a title in this case.
            ├── resets.scss # Includes some resets to default html elements, but never used yet.
        ├── views # contains one file html to represent app structure
            ├── index.html # Whole app structure
        ├── index.js # This is the entry point js file to webpack.
    ├── server # This folder contains all source code for server side.
        ├── server.js # Includes all the express server setup code and API functions.
        └── webAPI.js # Includes server database object to store external API responses to save time later.
```

## Technologies used in this project

- Webpack: which is a web lib provide a service of packaging and minimizing all the source code from an entry point and all its dependencies inside a folder `dist` which the express server point to, webpack does these functionalities using loaders & plugins to organize and manipulate src code from different files.

- loader: which are amazing libs to perform actions on files, like packaging all javascript files into one file using ```babel-loader```, and transpile scss files into css files using ```sass-loader```.

- babel: which is a tool helps to transpile ES6 code into vanilla javascript, and also provide its loaders like ```babel-loader```.

- node/express: which is used in this project as the server technology for handling APIs and store data.

- scss: to provide an easy way of writing styles which is then transpiled to css when run build using ```sass-loader```.




for any further questions or more explaination thanks to send me an email on `mohamed.elagami85@gmail.com`.
no copyright reserved, knowledge is for everyone.
