## React-ES6-Express App with Docker

_**Get your React application up and running in 1 minute**_

### Instruction

#### To run the app locally

1. Make sure you have `node` and `npm` installed, if not refer to below
    - Mac users: https://changelog.com/posts/install-node-js-with-homebrew-on-os-x
    - Windows users: http://blog.teamtreehouse.com/install-node-js-npm-windows
2. Alternatively, use `yarn` for faster dependency installation and more stable dependency management
    - Instructions for installation: https://yarnpkg.com/lang/en/docs/install/
3. Clone the repository
    - Using SSH (recommended):
    ```
    $ git clone git@github.com:MisaOgura/react-express-docker-boilerplate.git
    ```
    - Using HTTPS:
    ```
    $ git clone https://github.com/MisaOgura/react-express-docker-boilerplate.git
    ```
4. Move into the cloned directory: `$ cd react-express-docker-boilerplate`
5. Install dependencies: `$ npm install` or `$ yarn install`
6. `$ npm run dev` or `$ yarn run dev`: Run the app locally in a development mode
    - The development mode comes with a "watch" functionality. Changes made either to the client side
    and the server side are immediately detected and the app is re-bundled / re-started automatically.
7. `$ npm start` or `$ yarn start`: Run the app locally in a production mode
8. Visit `http://localhost:8080/`: you should see a `hello world` message from the React component
9. Use the repo as a starting point of your app!


#### To run the app in docker

This project comes with `Dockerfile` and `docker-compose.yml` out of the box. Being **Docker ready**
makes it extremely easy to make sure that your app runs in any platform, without worrying about installing
any dependencies, as long as Docker is installed on the machine.

1. Install Docker: https://docs.docker.com/engine/installation/
2. Clone the repo and move into the directory (see above)
3. `$ ./run-app-in-docker.sh`: Run the app in Docker
4. Visit `http://localhost:8080/` to checkout the app.

Yes. That's it!


#### To run tests
The project uses `jest` as a test runner.

1. Install dependencies, if you haven't done yet.
2. `$ npm test` or `$ yarn test`: Run all the tests once
    - Also runs `standard` ([JS style guide](https://standardjs.com/)) at the end to highlight any
    linting errors.
3. `$ npm test:watch` or `$ yarn test:watch`: Run tests in a watch mode.

Happy TDD!


#### Authour
Misa Ogura