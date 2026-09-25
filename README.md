# mentsu-rootpath

This provides the class for resolving paths relative to the project root into absolute paths in ECMAScript Modules development environments.

## Installation

Requires Node.js 20.x (the version the CI builds against).

```sh
npm install @openreachtech/mentsu-rootpath
```

It is an ES module (`"type": "module"`); import it with ESM `import` syntax.

## Usage

The default export is an instance of `RootPath` that resolves against `process.cwd()`, taken when the package is first imported. The same instance is also exported as `rootPath`.

When your project root path is `/User/your-name/project-name/`:

```js
import rootPath from '@openreachtech/mentsu-rootpath'

console.log(
  rootPath.to('app/tools/')
)
// '/User/your-name/project-name/app/tools'
```

To resolve against another directory, create an instance with `base`:

```js
import { RootPath } from '@openreachtech/mentsu-rootpath'

const alphaRootPath = RootPath.create({
  base: '/User/your-name/another-project/',
})

console.log(
  alphaRootPath.to('app/tools/target.js')
)
// '/User/your-name/another-project/app/tools/target.js'
```

## API

Class members are written with the following notation.

| notation | members |
| :-- | :-- |
| `#instanceProperty` | instance property |
| `#instanceMethod()` | instance method |
| `#get:instanceGetter` | instance getter |
| `#set:instanceSetter` | instance setter |
| `.staticProperty` | static property |
| `.staticMethod()` | static method |
| `.get:staticGetter` | static getter |
| `.set:staticSetter` | static setter |

### Exports

| export | description |
| :-- | :-- |
| `default` | The instance of `RootPath` created by `RootPath.create()` when the package is first imported. |
| `rootPath` | The same instance as `default`. |
| `RootPath` | The class. |

### `.create()`

Factory method that returns a new instance.

```js
RootPath.create({ base })
```

| parameter | type | default | description |
| :-- | :-- | :-- | :-- |
| `base` | `string` | `process.cwd()` | The directory paths are resolved against. |

Returns a `RootPath` instance.

### `#to()`

Resolves a path against `base` with [`path.resolve()`](https://nodejs.org/api/path.html#pathresolvepaths).

```js
rootPath.to(targetPath)
```

| parameter | type | description |
| :-- | :-- | :-- |
| `targetPath` | `string` | The path to resolve. An absolute path is returned as it is, normalized. |

Returns the absolute path as a `string`, without a trailing slash.

## Contribution

Bug reports, feature requests, and code contributions are welcome.

Feel free to contact us through GitHub Issues.

```sh
git clone https://github.com/openreachtech/mentsu-rootpath.git
cd mentsu-rootpath
npm install
npm run lint
npm test
```

## License

This project is released under the Apache License 2.0.

For more details, please see [in the LICENSE file](./LICENSE).

## Developer

[Open Reach Tech Inc.](https://openreach.tech)

## Copyright

© 2025 Open Reach Tech Inc.
