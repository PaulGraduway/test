const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/components/$1",
    "^@pages(.*)$": "<rootDir>/pages/$1",
    "^@styles(.*)$": "<rootDir>/styles/$1",
  },
};
module.exports = createJestConfig(customJestConfig);
