---
title: Loading collections
folder: vault
---

### Fetching collections

Similar to [loading manifests](/docs/vault/loading-manifests) you can use a helper to load a Collection with code
assistance / types.
```js
import { Vault } from '@iiif/vault';

const vault = new Vault();
const collection = await vault.loadCollection('https://example.org/collection-1');
```

You can also use the normal `vault.load()` too.

All the same rules apply as manifests.

### Paginated collections

Vault does not treat paginated collections as special. They are treated as independent collections. You could create
a [Vault Helper](/docs/helpers) to make this seamless. If you do, please let us know!

### Streaming large collections

Vault does not support streaming large collections, but it is an area that may be useful
for some of the largest IIIF collections. In principle the actions to create this type of loader are available.

```js
import { importEntities } from '@iiif/vault/actions';
import { actionListFromResource } from '@iiif/vault/utility';

const loader = someLibrary('https://example.org/big-collection-1', async (manifest) => {
    // Create actions from resource
    const actions = actionListFromResource(manifest.id, manifest);
    // Dispatch events (loading in a single manifest at a time, as it streams)
    vault.store.dispatch(batchActions({ actions }));
});


loader.take(100); // Just an example - laod the first 100.
```
