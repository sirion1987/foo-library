# Foo Library

Just for testing

# Alternative settings

```
/* package.json */

"scripts": {
  ...
  "start": "esbuild --bundle src/index.js --outfile=public/index.js --loader:.js=jsx --global-name=fooLibrary --servedir=public",
  "watch": "esbuild --bundle src/index.js --outfile=public/index.js --loader:.js=jsx --global-name=fooLibrary --servedir=public --watch",
  ...
}
```
