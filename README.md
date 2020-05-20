# html-styles-inliner-cli

Opis

# Instalation

using npm:

```shell
npm install html-css-inliner-cli
```

# Usage

```shell
inline --input <path to html file> --output <path, where the file will be generated>
```

#### Example

```shell
inline --input ./index.html --output ./build/another-directory/inlinedIndex.html
```

#### NOTE

You can eiter use command using either the `inline` and `html-styles-inliner-cli` as the name of the command.
eg.:

```shell
inline --input ./index.html --output ./inlined.html
```

```shell
html-styles-inliner-cli --input ./index.html --output ./inlined.html
```

The execution of those 2 commands will have the **exact** same results.

# Parameters / Options

## --input <path> (required)

---

path to the html file, that you need to have with the inlined styles.

## --output <path> (optional)

---

path, where the html file, with inlined styles, will be generated.

If no path is specified, then the file will be generated in the same directory as the original file.
Generated file will have the same name as the original file, but with the prefix of "inlined-". <br /> <br />
Eg.: If the input path is

```shell
    inline --input ./public/index.html
```

then the file will be generated in

```shell
    ./public/inlined-index.html
```

So the following command:

```shell
    inline --input ./public/index.html
```

has the same results as

```shell
    inline --input ./public/index.html --output ./public/inlined-index.html
```

# Example

# Current support
