# Implementing Data Structures
This repo provides a description and corresponding tests for implementing data structures.

## Getting Started
Clone and install the repo.

``` batch
git clone https://github.com/The31/31-tdd-data.git
cd 31-tdd-data
npm install
```

Begin solving.

Note: A script _npm run test:new_ has been provided
This may be used to only run tests imported in new.test.ts

Example new.test.ts
```
import "./linkedlist/linkedlist.test";
import "./linkedlist/queue.test";
import "./linkedlist/singlenode.test";
import "./linkedlist/stack.test";
```

## Building
### Common JS (Node)
See steps above for getting started first.
Typescript is setup to compile for commonJS (Node) style
imports and exports by running:

``` batch
npm run build
```

You may then import the files using commonJS style

```
const bitmask = require('./build/[path to file]/[filename].js)
```

### Global Variable in Browser
It may be desirable to export the libraries to the browser
as a global variable. Follow the instructions in [build.ts](build.ts)
for more information. Afterwards, run the following:

``` batch
npm run build:browser
```

### Customizing build
To customize what is exported see [build.ts](build.ts).

To customize how it is exported see [tsconfig.json](tsconfig.json).

It may be desirable to customize the Webpack bundler at [webpack.config.js](webpack.config.js).
The provided bundler runs the TypeScript Compiler and exports to bundle.js.

## [Contributing](CONTRIBUTING.md)
Contributing is encouraged and happily welcomed.
Please read [Contributing](CONTRIBUTING.md) for more details.

## Table of Contents
- [bitmask](/bitmask/README.md)
- [linked list](/linkedlist/README.md)

## [License](LICENSE)
[MIT](LICENSE)
