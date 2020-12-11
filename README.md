# Typescript npm package example

## Getting started

First you need to adjust `tsconfig.json` to your preferred settings. For most cases, what you mostly you want to check is the compiler `"compilerOptions"` > `"target"` and `"lib"`.  
For packages destined for browsers, if you want maximum compatibility, you want to go with `"es5"`.  
For pure NodeJS (back-end) packages you'll need to decide based on the NodeJS version of the environment you will run it in. For instance for NodeJS 12.x, use `"es2019"` (all features of `"es2019"` are supported by NodeJS `12.0.0`).  
[This answer](https://stackoverflow.com/a/59787575) in stackoverflow can help you decide which target to choose for back-end packages, there's a lot more to it. For instance, starting at NodeJS `12.10.0` most of `"es2020"`'s features are also supported, but not all.


## TSLint rules

By default, this package uses `"tslint:recommended"` and `"tslint-config-prettier"`. Feel free to investigate and use your preferred existing set of rules or to create your own ruleset or even add your custom rules.  
[This guide](https://palantir.github.io/tslint/usage/configuration/) demonstrates how to do your own ruleset or custom rules.

## Publishing

If you want to publish the package to npm.org, you will want to add the `lib/` folder to .gitignore, as it won't be needed in the source git repository.  

If instead you want to use the source git repository as the publishing method, you can't .gitignore the lib folder.  
You will probably also want to set-up a pre-commit hook that builds and tests the package for you via `npm run build`.

## Testing

This example uses [Jest](https://facebook.github.io/jest/) for testing. You're free to replace that with your preferred testing framework. Just remember to clean-up the remainders of Jest after you uninstall it, i.e. `jestconfig.json`.
