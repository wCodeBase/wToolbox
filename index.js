#!/usr/bin/env node

const supportedCommands = ["wfinder"]
const cmd = process.argv[2]?.toLocaleLowerCase();
if(cmd === "-v"){
    console.log(require("./package.json").version);
}
else if(!cmd || cmd==="-h"||!supportedCommands.includes(cmd)){
    console.log(
`
Supported commands: ${supportedCommands.join(", ")}${supportedCommands.length===1?" only":''}.

Usage:

Just run supported command.
or run like "wtoolbox wfinder"
`)
}else{
    process.argv.splice(2,1);
    require(cmd);
}
