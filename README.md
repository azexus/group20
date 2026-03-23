**GROUP 20 SER**
    Due to indecision in the group, a calculator app was chosen by rote from https://github.com/actionsdemos/calculator

To build, simply:

1. Runs `npm install` to install dependencies.
2. Runs `npm test` to run Mocha and execute the unit tests.
3. Runs `npm start` to start app

If needed, generate a new docker container with docker build -t calculator .
*the . is important*
After which, run with docker run -p 3000:3000 calculator