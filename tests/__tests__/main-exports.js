import { default as RootPathActual } from '../../lib/RootPath.js'

import {
  RootPath,
} from '../../index.js'

describe('main exports', () => {
  const cases = [
    { ExportedClass: RootPath, ActualClass: RootPathActual },
  ]

  describe('to have property', () => {
    test.each(cases)('Class: $ExportedClass.name', ({ ExportedClass, ActualClass }) => {
      expect(ExportedClass)
        .toBe(ActualClass)
    })
  })
})
