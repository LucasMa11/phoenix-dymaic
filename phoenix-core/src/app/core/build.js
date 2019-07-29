var fs = require('fs');
const { exec } = require('child_process');
var configFile = fs.readFileSync('config.json','utf-8');
var config = JSON.parse(configFile);
console.log(config)
config.beta.forEach(element => {
    var name = element.name;
    exec(`ng g module beta-wrapper-${name}`);
});
config.prod.forEach(element => {
    var name = element.name;
    exec(`ng g module prod-wrapper-${name}`);
});
