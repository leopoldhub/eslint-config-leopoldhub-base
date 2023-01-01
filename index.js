module.exports = {
  extends: [
    './rules/env',
    './rules/errors',
    './rules/styles',
    './rules/formatting',
  ].map(require.resolve),
  rules: {},
};
