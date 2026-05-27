/** @type {import('jest').Config} */
export default {
 testEnvironment: "node",
 transform: { "^.+\\.js$": "babel-jest" },
 testPathIgnorePatterns: ["/node_modules/", "/test/e2e/"],
};