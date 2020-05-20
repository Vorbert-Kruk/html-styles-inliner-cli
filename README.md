# html-styles-inliner-cli

CLI tool, that makes it possible to inline the styles in the html file. <br />
html-styles-inliner-cli inlines the styles with the usage of both `<link>` and `<style/>` tags.

**Table of contents**

- [Instalation](#instalation)
- [Usage](#usage)
- [Options](#options)
- [Examples](#examples)
- [Current support](#current-support)
- [Future changes](#future-changes)

# Instalation

using npm:

```shell
npm install html-css-inliner-cli
```

# Usage

```shell
inline --input <path to html file> --output <path, where the file will be generated>
```

### **Example**

```shell
inline --input ./index.html --output ./build/another-directory/inlinedIndex.html
```

### **Note**

You can eiter use command using either the `inline` and `html-styles-inliner-cli` as the name of the command.
eg.:

```shell
inline --input ./index.html --output ./inlined.html
```

```shell
html-styles-inliner-cli --input ./index.html --output ./inlined.html
```

The execution of those 2 commands will have the **exact** same results.

# Options

### **--input <path> (required)**

path to the html file, that you need to have with the inlined styles.

### **--output <path> (optional)**

path, where the html file, with inlined styles, will be generated.

If no path is specified, then the file will be generated in the same directory as the original file.
Generated file will have the same name as the original file, but with the prefix of "inlined-". <br /> <br />
Eg.: If the input file path is `./public/index.html` then the file will be generated in `./public/inlined-index.html`

So the following command:

```shell
inline --input ./public/index.html
```

has the same results as

```shell
inline --input ./public/index.html --output ./public/inlined-index.html
```

# Examples

# Current support

Currently html-css-inliner-cli does not supports inlining styles, that are imported with the url, not local path.

For example, if the file has link tag like that: `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">`, then it won't work

But if the link tag looks like that: `<link rel="stylesheet" href="styles/bootstrap/4.3.1/css/bootstrap.min.css">`, then it should work

# Future changes

- Allowing inlining the styles with the URL import,
- Bbetter error detection,
- Optimization of the args reading,
- Shorter substitute for the CLI options. Eg.: `--input` would be also allowed as `-i`,
- Tests for the development purposes.

# License

html-css-inliner-cli is released under the [MIT License](https://github.com/Vorbert-Kruk/html-styles-inliner-cli/blob/master/LICENSE).
