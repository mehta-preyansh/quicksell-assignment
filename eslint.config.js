module.exports = {
  rules: {
    // other rules...
    "no-warn-as-error": process.env.CI ? "off" : "warn",
  },
};
