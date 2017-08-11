## React-ES6-Express App with Docker

_**Get your React application up and running in 1 minute**_

## Instruction

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
8. Visit `http://localhost:8080/`: you should see a `hello world` message.
9. Use the repo as a starting point of your app!


### To run the app in docker

This project comes with `Dockerfile` and `docker-compose.yml` out of the box. Being
**Docker ready** makes it extremely easy to ensure that your app runs in any platform,
without worrying about installing any dependencies, as long as Docker is installed
on the machine.

1. Install Docker: https://docs.docker.com/engine/installation/
2. Clone the repo and move into the directory (see above)
3. Run the app in Docker.
    ```
    $ ./run-app-in-docker.sh
    ```
4. Visit `http://localhost:8080/` to checkout the app.

Yes. That's it!


### To run tests

The project uses [Jest](https://facebook.github.io/jest/]) as a test runner.
It comes with useful features such as parallel testing, intelligent test watching
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


## Contrinutions

Please feel free to raise PR to help improve the boilerplate.

## Authour

Misa Ogura