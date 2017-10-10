## React/Redux + Express Boilerplate in ES6/7 & Docker

_**Get your React application up and running under 2 minutes!**_

I wrote a [blog post](https://medium.com/@misaogura/hello-world-once-more-4d262286f138) on why I created this boilerplate and thoughts that went into it.

## Updates
- The React and related libraries are updated to the latest version as of 10/10/2017
- The client side is hooked up with Redux! 09/10/2017
- The app runs in Docker! 11/08/2017

## Instructions

### To run the app locally

1. Make sure you have `node` and `npm` installed, if not refer to below.
    - Mac users: https://changelog.com/posts/install-node-js-with-homebrew-on-os-x
    - Windows users: http://blog.teamtreehouse.com/install-node-js-npm-windows
    
2. Alternatively, use [yarn](https://yarnpkg.com/en/) for faster dependency installation
    and more stable dependency management. You can use `yarn` in the place of `npm`.
    ```
    $ yarn install
    ```
    instead of
    ```
    $ npm install
    ```
    - Instructions for installation: https://yarnpkg.com/lang/en/docs/install/
    
3. Clone the repository.
    - Using SSH (recommended):
    ```
    $ git clone git@github.com:MisaOgura/react-express-docker-boilerplate.git
    ```
    - Using HTTPS:
    ```
    $ git clone https://github.com/MisaOgura/react-express-docker-boilerplate.git
    ```
    
4. Move into the cloned directory.
    ```
    $ cd react-express-docker-boilerplate
    ```

5. Install dependencies.
    ```
    $ npm/yarn install
    ```
    
6. Run the app locally in a _development_ mode.
    ```
    $ npm/yarn run dev
    ```
    - The development mode comes with a "watch" functionality. Changes made either
    to the client side and the server side are immediately detected and the app is
    re-bundled / re-started automatically.
    
7. Run the app locally in a _production_ mode.
    ```
    $ npm/yarn start
    ```
    - The production mode bundles the app into a much smaller size.
    
8. Visit `http://localhost:8080/`: you should see a `hello world` message.

9. Use the repo as a starting point of your app!


### To run the app in Docker

This project comes **Docker ready** out of the box. [Docker](https://www.docker.com/)
is a software container platform. A Docker image contains information on everything
required to make an app run. This self-contained system makes it extremely easy to
ensure that your app runs on any OS without worrying about the dependency compatibility.

Regardless of where it’s deployed, _your app will always run the same_ as long as
Docker is installed on the machine.

1. Install Docker: https://docs.docker.com/engine/installation/

2. Clone the repo and move into the directory (see above)

3. Run the app in Docker.
    ```
    $ ./run-app-in-docker.sh
    ```
    
4. Yep, that's it. Visit `http://localhost:8080/` to checkout the app.


### To run tests

The project uses [Jest](https://facebook.github.io/jest/) as a test runner.
It comes with useful features like parallel testing, intelligent test watching
and coverage report.

1. Install dependencies, if you haven't done yet.

2. Run all the tests once.
    ```
    $ npm/yarn test
    ``` 
    - Also runs `standard` ([JavaScript Standard Style](https://standardjs.com/)) at the end to highlight any
    linting errors.

3. Run tests in a watch mode.
    ```
    $ npm/yarn test:watch
    ```

Happy TDD!


## Contributions

Please feel free to raise PRs or open issues to help improve the boilerplate.

#### Many thanks to:
- [sammorrow](https://github.com/sammorrow)
- [Joseph Goodwin](https://github.com/jcgoodwin86)

## Authour

Misa Ogura
