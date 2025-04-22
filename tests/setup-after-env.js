import {
  jest as jestCore,
} from '@jest/globals'

import {
  ConstructorSpy,
} from '@openreachtech/jest-constructor-spy'

/*
 * Set global variables.
 */
globalThis.jest = jestCore
globalThis.constructorSpy = ConstructorSpy.create({
  jest: jestCore,
})

/*
 * Set global hooks.
 */
afterEach(() => { // eslint-disable-line jest/require-top-level-describe
  jest.restoreAllMocks()
})
