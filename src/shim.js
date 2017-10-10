// for fixing requestAnimationFrame error during tests
// Information on it in the React Docs here https://reactjs.org/docs/javascript-environment-requirements.html
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0)
}
