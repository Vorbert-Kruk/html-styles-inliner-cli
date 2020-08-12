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

### **-i, --input &lt;path&gt; (required)**

path to the html file, which styles you need to inline.

### **-o, --output &lt;path&gt; (optional)**

path, where the html file, with inlined styles, will be generated.

### **Note**

If no path is specified, then the file will be generated in the same directory as the original file.
Generated file will have the same name as the original file, but with the prefix of "inlined-". <br />
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

### file structure:

```
- partials
    > index.html
    > styles
        > main.css
```

### index.html:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example usage of html-styles-inliner-cli</title>
    <link rel="stylesheet" href="./styles/main.css" />
  </head>
  <body>
    <div class="container">
      <p class="container--text">Example</p>
    </div>
  </body>
</html>
```

### main.css:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background-color: #192841;
  color: #fff;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0.75rem 1rem;
  transform: translate(-50%, -50%);
  background-color: #2a3f64;
  border-radius: 0.5rem;
}

.container--text {
  font-size: 1.15rem;
}
```

### Command:

```shell
inline --input partials/index.html --output public/inlined-index.html
```

### **Will result in:**

### file structure:

```
- partials
    > index.html
    > styles
        > main.css
- public
    > inlined-index.html
```

### Generated inlined-index.html:

```html
<!DOCTYPE html>
<html lang="en" style="box-sizing: border-box; margin: 0; padding: 0;">
  <head style="box-sizing: border-box; margin: 0; padding: 0;">
    <meta
      charset="UTF-8"
      style="box-sizing: border-box; margin: 0; padding: 0;"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
      style="box-sizing: border-box; margin: 0; padding: 0;"
    />
    <title style="box-sizing: border-box; margin: 0; padding: 0;">
      Example usage of html-styles-inliner-cli
    </title>
  </head>
  <body
    style="background-color: #192841; box-sizing: border-box; color: #fff; margin: 0; min-height: 100vh; padding: 0;"
  >
    <div
      class="container"
      style="background-color: #2a3f64; border-radius: 0.5rem; box-sizing: border-box; left: 50%; margin: 0; padding: 0.75rem 1rem; position: absolute; top: 50%; transform: translate(-50%, -50%);"
    >
      <p
        class="container--text"
        style="box-sizing: border-box; font-size: 1.15rem; margin: 0; padding: 0;"
      >
        Example
      </p>
    </div>
  </body>
</html>
```

# Current support

Currently html-css-inliner-cli does not supports inlining styles, that are imported with the url, not local path.

For example, if the file has link tag like that: `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">`, then it won't work

But if the link tag looks like that: `<link rel="stylesheet" href="styles/bootstrap/4.3.1/css/bootstrap.min.css">`, then it should work

# Future changes

- Allowing inlining of the styles with the URL import,
- Better error detection,
- ~~Optimization of the args reading~~ ✔️,
- ~~Shorter substitute for the CLI options. Eg.: `--input` would be also allowed as `-i`~~ ✔️,
- Tests for the development purposes.

# License

html-css-inliner-cli is released under the [MIT License](https://github.com/Vorbert-Kruk/html-styles-inliner-cli/blob/master/LICENSE).
