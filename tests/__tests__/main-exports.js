import { default as RootPathActual } from '../../lib/RootPath.js'

import {
  RootPath,
  rootPath,
  default as rootPathDefault,
} from '../../index.js'

describe('main exports', () => {
  describe('class exports', () => {
    test('to be RootPath', () => {
      expect(RootPath)
        .toBe(RootPathActual) // same reference
    })
  })

  describe('instance exports', () => {
    test('to be instance of RootPath', () => {
      expect(rootPath)
        .toBeInstanceOf(RootPathActual)
    })
  })

  describe('default exports', () => {
    test('to be rootPath', () => {
      expect(rootPathDefault)
        .toBe(rootPath) // same reference
    })
  })
})
