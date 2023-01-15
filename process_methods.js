// const { arch, argv, cwd } = require("process");

import { arch, argv, cwd } from "node:process";
console.log(arch);

argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

console.log(`Current directory: ${cwd()}`);
