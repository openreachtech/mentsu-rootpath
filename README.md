# mentsu-rootpath

# Overview

This provides the class for resolving paths relative to the project root into absolute paths in ECMAScript Modules development environments.

# Installation

Node.js is required. If you haven't installed it yet, please install it first.

| Tool | Version |
| :-- | :-- |
| Node.js | ^20.14.0 |
| npm | ^10.9.2 |

## Command

You can install `mentsu-rootpath` with the following command:

```
npm install @openreachtech/mentsu-rootpath
```

# Usage

The default export is an instance of `RootPath` that resolves against `process.cwd()`, taken when the package is first imported. The same instance is also exported as `rootPath`.

When your project root path is `/User/your-name/project-name/`:

```
import rootPath from '@openreachtech/mentsu-rootpath'

console.log(
  rootPath.to('app/tools/')
)
// '/User/your-name/project-name/app/tools'
```

To resolve against another directory, create an instance with `base`:

```
import { RootPath } from '@openreachtech/mentsu-rootpath'

const alphaRootPath = RootPath.create({
  base: '/User/your-name/another-project/',
})

console.log(
  alphaRootPath.to('app/tools/target.js')
)
// '/User/your-name/another-project/app/tools/target.js'
```

# License

This project is released under the Apache License 2.0.

For more details, please see [in the LICENSE file](./LICENSE).

# Contribution

Bug reports, feature requests, and code contributions are welcome.

Feel free to contact us through GitHub Issues.

```sh
git clone https://github.com/openreachtech/mentsu-rootpath.git
cd mentsu-rootpath
npm install
npm run lint
npm test
```

# Developer

[Open Reach Tech Inc.](https://openreach.tech)

# Copyright

© 2025 Open Reach Tech Inc.
