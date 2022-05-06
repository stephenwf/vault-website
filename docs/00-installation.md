---
title: Installation
---

Vault is intended to be a common dependency used by more than one tool. For this reason it's important
that you can load Vault from from prototypes to production bundlers. If you run into problems loading
Vault into your application, [please let us know on Github](https://github.com/IIIF-Commons/vault/issues/13)

## HTML / no bundler

The easiest way to work with Vault is to grab the code from a CDN and put it into a script tag - avoiding any
need to build or run a server.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Vault Example</title>
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/npm/@iiif/vault@latest/dist/index.umd.js"></script>
    <script>
      let manifestUri = 'https://digirati-co-uk.github.io/journal.json';
      const vault = new IIIFVault.Vault();

      async function demo() {
        const manifest = await vault.load(manifestUri);
        console.log(manifest);
      }

      demo();
    </script>
  </body>
</html>
```

[![Try on codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/iiif-vault-html-vkyuyk?file=/index.html)

Similarly you can access the Vault helpers by adding:

```html
<script src="https://cdn.jsdelivr.net/npm/@iiif/vault@latest/dist/index.umd.js"></script>
<script>
  const helper = IIIFVaultHelpers.createThumbnailHelper();
</script>
```

## NPM / Yarn or bundler

Using vault shouldn't add any extra steps or configuration to your existing build. Ideally the following
instructions would be unviersal:

```bash
# NPM
npm i @iiif/vault --save

# Yarn
yarn add @iiif/vault
```

And then you can use in your code:

```js
import { Vault } from '@iiif/vault';

const vault = new Vault();
```

[![Try on codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/iiif-vault-intro-e26819?file=/src/index.ts)

## NodeJS

If you are using NodeJS you can either use the `import` syntax or `require` depending on which [module type](https://blog.logrocket.com/commonjs-vs-es-modules-node-js/) you are using.

```js
const { Vault } = require('@iiif/vault');

const vault = new Vault();
```

Node 18 introduced [native fetch](https://nodejs.org/en/blog/announcements/v18-release-announce/#fetch-experimental) experimentally. This is not currently supported, and we will use an
included [polyfill](https://github.com/node-fetch/node-fetch) for browser fetching. We may introduce `@iiif/vault/node18` as an optional import, however this may be the same code as the browser is serving.
