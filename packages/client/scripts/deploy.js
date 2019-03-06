const shell = require("shelljs");
const minimist = require("minimist");

const { stage = "prod" } = minimist(process.argv.slice(2));

shell.exec(`npx serverless deploy --stage ${stage} --verbose`);
shell.exec("npx serverless client build");
shell.exec("npx serverless client deploy --no-confirm");
