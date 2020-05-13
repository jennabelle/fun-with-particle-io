# Fun With Particle IO API

A web portal for Particle.io users to manage their IoT devices.

### Getting Started

    npm install

    bower install

### To Start Dev Server

    npm start

Go to:

    http://localhost:8080

### Notes on Process

Firstly, this was a very fun project and I appreciate getting the chance to work on it. That said, what I found easy was
getting the app set up, making GET/POST requests, using react-router, setting up NavBar with Bootstrap, and writing React and ES6. The Particle API documentation was excellent and fun to read.

What I found challenging was the overall architecture...in the render() methods, there are ternary operators to make sure state is not null before rendering- that can be improved and I believe refactoring with Redux would help. However, I really wanted to make sure app is functioning first before I add anything more. Another challenging aspect was how to render images in JSX. I did preliminary research however did not want to spend _too_ much time as my first priority was to get a functioning app. If given more time, I am certain I can resolve this issue. Other challenging items include using react-router with parameters
as I have not done that before. I am more familiar and know how to do server-side rendering with Express.js and EJS (template
rendering engine), but had to learn how to use routing parameters for this project. Lastly, I had a challenging time getting
the test_helper.js more set up and getting more familiar with Chai assertion library. Unit testing is very important and feel
I could spend more time on the unit tests.

### Tech Stack

    React
    React Router
    ES6
    Webpack
    Webpack-dev-server
    Axios
    Bootstrap
    Mocha
    Chai
    (planned) - SASS
    (planned) - Redux
    (planned) - Pagination
    (planned) - User Authentication (need MongoDB, Mongoose.js, Express.js)
    (planned) - Deploy on Heroku
