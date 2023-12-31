# Dart Date Formatter

Dart Date Formatter is a React project that helps you find the DateFormat you're looking for in your Dart/Flutter projects.

### Dart Bridge

The actual formatting functionality is handled by Dart bridge, transpiled/compiled to Javascript. Built source file is imported as a module on [index.html](index.html), and adds the public API to window. For better type-safety, [DartBridge.tsx](src/DartBridge.tsx) has type definitions and function definitions that cast window. It isn't safe to call an exported API from window directly as typescript doesn't/can't know about the exposed API.

----

## Getting Started

### Install

Clone the project

```bash
git clone https://github.com/emirhalici/dartdateformatter.git
```

Go to project directory

```bash
cd dartcodeformatter
```

Make sure pnpm is [installed](https://pnpm.io/installation).
```bash
pnpm -v
```

Install dependencies.

```bash
pnpm install
```

Serve with hot reload at <http://localhost:5173>.

```bash
pnpm run dev
```

## Available Commands

```bash
pnpm run dev # Runs with hot reload
pnpm run build # Builds/bundles react project statically
pnpm run serve # Previews project
pnpm run lint # Runs ESlint for entire project
pnpm run typecheck # Runs typecheck for entire project
pnpm run dart-get-packages # Gets packages for Dart bridge (requires Dart to be installed)
pnpm run dart-compile # Compile Dart bridge and outputs to public directory
pnpm run dart-test # Runs tests for Dart bridge project
```

## License

This project is licensed under the MIT License.

## Inspirations

- [NSDateFormatter](https://nsdateformatter.com/#examples)
- [For a Good Strftime](https://foragoodstrftime.com/#)
- [Flutter DateFormat Cheat Sheet](https://andreygordeev.com/flutter-dateformat-cheat-sheet/#)
