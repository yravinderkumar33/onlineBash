const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const os = require('os');
const { spawn, exec } = require('child_process');

app.listen(4000, () => {
    console.log("listening on port 4000");
})

app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post("/api/commands", (req, res) => {
    const body = req.body.body;
    const header = "#!/bin/bash \n";
    console.log(header + body);
    fs.writeFileSync("./script.sh", header + body);
    exec("chmod 777 script.sh && ./script.sh", (error, stdout, stderr) => {
        if (error) res.json({ result: "please enter a valid command" })
        if (stderr) res.json({ result: "please enter a valid command" })
        res.json({ result: stdout })
    })
})

app.get("/api/downloadMan/:command", (req, res) => {
    const command = req.params.command;
    console.log(command)
    exec(`man ${command} > man/${command}.txt`, (error, stdout, stderr) => {
        if (error) res.json({ result: "please enter a valid command" })
        if (stderr) res.json({ result: "please enter a valid command" })
        res.download(`man/${command}.txt`);
    })
})

app.get("/api/getSystemInformation", (req, res) => {

    const architecture = os.arch();
    const freeMemory = os.freemem();
    const hostName = os.hostname();
    const platform = os.platform();
    const totalMemory = os.totalmem();
    const uptime = os.uptime();
    const userInfo = os.userInfo();
    res.json({
        architecture, freeMemory, hostName, platform, totalMemory, uptime, uptime, userInfo
    })
})


