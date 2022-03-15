module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "\\.tsx?$": "@swc/jest",
  },
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
