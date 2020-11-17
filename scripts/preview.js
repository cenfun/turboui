const child_process = require("child_process");

const runCmd = function(command) {

    const worker = child_process.exec(command, {
        //10M
        maxBuffer: 10 * 1024 * 1024
    });

    worker.stdout.on("data", function(data) {
        console.log(data.toString());
    });

    worker.stderr.on("data", function(data) {
        console.log(data.toString());
    });

    worker.on("close", function(code) {
        console.log(`close with code: ${code}`);
    });

};

//--display=minimal
const cmd = "npx webpack ./preview/src/index.js -o preview/dist/ --mode=development --color";

runCmd(cmd);

