import path from 'path'

/**
 * @class Path resolver.
 */
export default class RootPath {
  /**
   * Constructor of this class.
   *
   * @param {{
   *   base: string
   * }} params
   */
  constructor ({
    base,
  }) {
    this.base = base
  }

  /**
   * Factory method to create an instance of this class.
   *
   * @template {X extends typeof RootPath ? X : never} T, X
   * @param {{
   *   base?: string
   * }} [params] - Parameters to create an instance of this class.
   * @returns {InstanceType<T>}
   * @this {T}
   * @public
   */
  static create ({
    base = process.cwd(),
  } = {}) {
    return /** @type {InstanceType<T>} */ (
      new this({
        base,
      })
    )
  }

  /**
   * Resolve the path with the base path.
   *
   * @param {string} targetPath - The path to resolve.
   * @returns {string} - The resolved path.
   * @public
   */
  to (targetPath) {
    return path.resolve(
      this.base,
      targetPath
    )
  }
}
