#!/usr/bin/env node
import { createInterface } from 'readline';
import { spawn } from 'child_process';

console.log('--- END-TO-END TEST HELPER ---');

const answers = {
  browser: ''
};

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(
  '1) What browser do you wish to use for the test? [C]hrome or [F]irefox. ',
  answer => {
    if (answer.toLowerCase() !== 'c' && answer.toLowerCase() !== 'f') {
      console.log('Invalid input.');
      rl.close();
      return;
    }

    if (answer.toLowerCase() === 'c') {
      answers.browser = 'Chrome';
    } else {
      answers.browser = 'Firefox';
    }

    console.log(`You have selected ${answers.browser}.`);

    const cmd = spawn('testcafe', [
      answers.browser.toLowerCase(),
      './tests/e2e'
    ]);

    cmd.stdout.on('data', data => {
      console.log(data);
    });

    rl.close();
  }
);
