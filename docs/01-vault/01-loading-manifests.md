---
title: Loading manifests
folder: vault
---

### Loading using URLs
There are 3 APIs available for loading resources.

* Load
* Load manifest
* Load collection

These are functionally identical, but the [Typescript](/docs/types) types returned are more specific for `loadManifest`
and `loadCollection`. The remaining examples will all use `.loadManifest()`.

When you call a load function a promise will always be returned, even if the data is cached and available. 

```js
import { Vault } from '@iiif/vault';

const vault = new Vault();
vault.loadManifest(`https://example.org/manifest`).then(manifest => {
    // Do something with manifest.
});
```

If you are using in a context that supports

#### Status object
When you call a loader a status object will be created.

```typescript
interface ResourceStatus {
  loadingState: 'RESOURCE_ERROR' | 'RESOURCE_LOADING' | 'RESOURCE_READY';
  uriMismatch: boolean;
  requestUri: string;
  resourceUri: string;
  error?: string;
}
```

As soon as you call a load function the resource will transition to `RESOURCE_LOADING` if it has not already been
fetched. It will then either progress to `RESOURCE_ERROR` with `status.error` populated with the text representation of
the exception, or it will progress to `RESOURCE_READY`.

If the URL requested does not match the `@id` or `id` in the returned JSON then a mapping will be kept. In the status 
there are 2 urls noted.
* `requestUri` - the string passed to `load()` and the one requested
* `resourceUri` - the Identifier present in the resource  (`id` or `@id`)
* `uriMismatch` - True if the two Uris above do not match

Internally this allows vault to get a handle on the Manifest using either the URI or the Identifier of the resource. For
all internal maps the Identifier is preferred, not the Uri.

Currently, there is no way to "evict" a resource from Vault. 

Two helpers relating to status

* `vault.requestStatus(id)` - returns the current status, or undefined
* `vault.ensureLoaded(id)` - similar to load, but does not return anything. Only calls fetcher if there is no status. Additionally it will not retry errors. Useful for `prefetch` or similar scenarios.

```js
const status = vault.requestStatus('https://example.org/manifest');
if (status) {
  switch (status.loadingState) {
    case 'RESOURCE_READY':
    // ...
    case 'RESOURCE_LOADING':
    // ...
    case 'RESOURCE_ERROR':
    // ...
  }
}
```

#### Upgrading resources

When you load a IIIF resource into Vault, a check will be made to see if conforms to the IIIF Presentation 2.1 specification. If
the v2 context is found, the IIIF resource will be sent through an upgrade path. This aims to upgrade all 2.1 resource to IIIF
Presentation 3.0 and in the future will upgrade to whichever is the latest version. You can read in detail how this works in the [Upgrading](/docs/parser/upgrading) section.

When reading IIIF resources loaded by vault, you can safely assume that they will be well-formed Presentation 3. This should
reduce that code required to support features while still supporting as wide a range of IIIF as possible.

<!-- this is paragraph rough -->
Currently, if you load Presentation 3 resources into Vault, no attempt will be made to fix any common mistakes or irregular IIIF. In the
future this will change, with the current behaviour being an optional [Strict Mode](/docs/vault/roadmap#strict-mode) and a new compatibility mode will be introduced. This
will allow Vault and the associated tools and types to be used as a way to validate IIIF for those implementing it. If Vault only
had this loose/compatibility mode it could run the risk of incorrectly validating bugs from those creating IIIF implementations
themselves.

### Providing JSON

There are some cases where you may want to load IIIF JSON before it goes to Vault. This could be for Authenticated resources
or resources that may not have been saved yet - or may not ever be saved. For each of the `load()` methods on Vault there is 
an optional second argument for the JSON to be provided.

```js
const manifest = await vault.load('https://example.org/manifest-1', {
    '@context': 'http://iiif.io/api/presentation/3/context.json'
    id: 'https://example.org/manifest-1',
    type: 'Manifest',
    ... 
})
```

This will still return a promise, for consistency. Check the [advanced](/docs/vault/advanced) docs if you need to 
load data into Vault synchronously.

### Node JS

When calling a load function in the browser, the native `fetch()` api is used. You will need to provide a polyfill for this
if you need to target browser that do not support this.

Starting from Node 18+ you can use the built-in `fetch()` api. Prior versions of Node will include the `node-fetch` library
for fetching resources.

### Custom fetchers

When you create a Vault you can optionally pass in a custom fetcher function.
```js
import { Vault } from '@iiif/vault';

const customVault = new Vault({
  customFetcher: async (url) => {
    // custom loading logic.
  }, 
})
```

This can either return a promise or just the javascript object for the resource.

If you need to completely replace the fetching mechanism, but retain the loading statuses provided by Vault, you can create
a custom loader. This is included as a separate export.

```js
import { createFetchHelper } from '@iiif/vault/utility';

const vault = new Vault();

const newFetch = createFetchHelper(vault.store, async (url, options) => {
    // custom logic..
});

await newFetch('htts://example.org/manifest-1', { some: 'custom option' });
```

This custom fetcher will be tied to the store you created. Like the custom fetcher in Vault it should return the loaded
resource as a JS object. You can create as many of these custom fetch helpers for a single vault. Creating these fetchers
will **not** replace the `vault.load()` functions, they continue to work. 


### CORS

In the browser, `fetch()` is used without any arguments or CORS settings. This may be a common use-case for overwriting
the default fetcher if you required cookies to be sent to authenticate resources. Vault will not retry resources that run
into CORS errors. The most common cause of CORS errors is 5xx errors with Vault.
