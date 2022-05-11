---
title: Reading resources
folder: vault
---

### How references work
When you load a resource into Vault, each level of the resource will be flattened. For example, in a Manifest, all
the Canvases will be replaced with `{id,type}` references. 
```json
{
  "id": "https://example.org/manifest-1",
  "type": "Manifest",
  "items": [
    { "id":  "https://example.org/manifest-1/c1", "type":  "Canvas" },
    { "id":  "https://example.org/manifest-1/c2", "type":  "Canvas" },
    { "id":  "https://example.org/manifest-1/c3", "type":  "Canvas" }
    ...
    { "id":  "https://example.org/manifest-1/c62", "type":  "Canvas" }
  ]
}
```

This is done for many reasons, and the full detailed transformation is detailed [here](/docs/vault/advanced#normalization).

If you want to get the resolved resource you can use one of two methods: `vault.get()` or `vault.hydrate()`. They work
in a similar way. 


Vault.get will return either the resolved resource if it exists in Vault, or undefined if not.
```js
vault.get('https://example.org/manifest-1/c1');
// > { id: '...' }

vault.get({ id: 'https://example.org/manifest-1/c1', type: 'Canvas' });
// > { id: '...' }

vault.get('https://example.org/DOES_NOT_EXIST');
// > undefined
```

Vault.hydrate will return itself if the resource does not exist, allowing for a more predictable return type - particularly
 useful in Reactive environments where a resource will eventually exist.
```js
vault.hydrate('https://example.org/manifest-1/c1');
// > { id: '...' }

vault.hydate('https://example.org/DOES_NOT_EXIST');
// > { id: 'https://example.org/DOES_NOT_EXIST', type: 'unknown' }

vault.hydate({ id: 'https://example.org/DOES_NOT_EXIST', type: 'Manifest' });
// > { id: 'https://example.org/DOES_NOT_EXIST', type: 'Manifest' }
```


Both `Vault.get()` and `Vault.hydrate()` can accept many types of input - and it will try to return the correct type. It
can accept:

* String identifiers
* {id,type} references
* List of strings
* List of {id,type} references
* List of mixed strings/references
* Also in the form: `get(id, type)`

The natural form of this is `vault.get({ id, type })` and this should be preferred if possible. 99% of the time you should
not need to manually pass an ID or reference in this form, instead just pass in existing partial resources:

```js
const manifest = vault.get('https://example.org/manifest-1'); // loaded previously.
const allCanvases = vault.get(manifest.canvases); // resolved canvases.

for (const canvas of allCanvases) {
  const annoPages = vault.get(canvas.items);
  // ...
}
```

Identifiers
Guidelines on reusability
Custom + legacy services
Annotations and variations
Language maps
