const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

const name = "TJ";
const id = 10;


let template = `
<h1> name: {{ name }} </h1>
<h2> Id: {{ id }} </h2>
`;

template = template.replace("{{ name }}", name);
template = template.replace("{{ id }}", id);

console.log(template);