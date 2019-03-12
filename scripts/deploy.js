const shell = require("shelljs");
const minimist = require("minimist");

const { stage = "dev" } = minimist(process.argv.slice(2));

shell.exec("npx lerna bootstrap");
shell.exec(
  `npx lerna --scope=@tomfischer/backend exec "yarn deploy --stage ${stage}"`
);
shell.exec(
  `npx lerna --scope=@tomfischer/client exec "yarn deploy --stage ${stage}"`
);
