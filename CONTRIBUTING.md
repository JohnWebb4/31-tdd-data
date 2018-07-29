# Contributing
## Basics
- This repo follows TSLint's recommended styling guide
- Please lint and test any code before submitting

## If contributing a problem
- Create issue on [upstream](https://github.com/The31/31-tdd-data/tree/master) for problem you are writting
- Create folder with problem
- Create README.md detailing problem goal, tasks to complete, and link to available resources (Ex. [bitmask](/bitmask/README.md))
- Create link in [Main README's](/README.md) table of contents to you problem's README.md (See [Main Table of Contents](/README.md))
- Create [structure].ts file and create/export stub functions for testing (Ex. [bitmask](/bitmask/bitmask.ts))
- Create [structure].test.ts file and implement testing in Jest (Ex. [bitmask](/bitmask/bitmask.test.ts))
  - It is highly recommended to solve (but do not commit) a solution while writing tests
- After writting tests create pull request to [upstream master](https://github.com/The31/31-tdd-data/tree/master) detailing what you did

## If contributing a solution
- Solve solution in [structure].ts file
- Create branch at our [upstream](https://github.com/The31/31-tdd-data/tree/master) with your Github handle as the name
- Push solution to your specific branch
