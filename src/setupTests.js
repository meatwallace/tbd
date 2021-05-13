// CodeSandbox appears to execute tests in an environment where Jest's `expect` helper
// is not available on the `global` object, instead being found on `self` (presumably
// a web worker?). if we detect this, add a reference manually so that `jest-extended`
// can add it's matchers successfully.
if (global.expect === undefined && self.expect) {
  global.expect = self.expect;
}

require('jest-extended');
