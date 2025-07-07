module.exports = {
  default: {
    require: ["tests/cucumber/step_definitions/**/*.js"],
    format: ["progress"],
    strict: true,
    paths: ["tests/cucumber/features/**/*.feature"],
  },
};
