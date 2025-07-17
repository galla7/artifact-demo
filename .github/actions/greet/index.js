const core = require('@actions/core');

try {
  const name = core.getInput('name');
  console.log(`Hello, ${name}!`);
  const time = new Date().toTimeString();
  core.setOutput('time', time);
} catch (error) {
  core.setFailed(error.message);
}
