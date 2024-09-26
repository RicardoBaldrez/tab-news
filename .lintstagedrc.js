const path = require("path");

/** may be a future implementation, but it is necessary to ignore certain files like package-lock.json
const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;
*/

const buildSecretLintCommand = (filenames) =>
  `npx secretlint --maskSecrets ${filenames.map((f) => path.relative(process.cwd(), f)).join(" ")}`;

module.exports = {
  "*": [buildSecretLintCommand],
};
