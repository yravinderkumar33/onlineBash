const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const {spawn , exec} = require('child_process');

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
    console.log(header+body);
    fs.writeFileSync("./script.sh", header+body);
    exec("chmod 777 script.sh && ./script.sh" , (error,stdout , stderr)=>{
        
        if(error) res.status(404).json({error:"forbidden"})

        console.log(stdout);
        res.json({ result : stdout })
    })

})