---
title: Loading annotations
folder: vault
---

### Loading annotations

Annotations can either be embedded inside the IIIF, or load externally. Vault does not determine if an Annotation page
is embedded or not. You can check if it has been loaded previously (or attempted). An Annotation Page can be loaded
like other resources, with the same rules of loading.

```js
const annotationPage = await vault.load('https://example.org/annotation-page-1');

for (const annotation of annotationPage.items) {
    // ...
}
```

When you load an Annotation Page, it will be merged with the "snippet" that was in the Manifest or other resources from
where it was loaded. This merging can cause some information to be lost. For example, a transcription may appear in a 
Manifest as:

```json
{
  "seeAlso": [
    {
      "id": "https://example.org/annotation-page-1"
      "type": "AnnotationPage",
      "label": { "en": ["Transcribed lines"] }
    }
  ]
}
```

However, when you load the annotation, it may have a different label - or a missing label. Vault will treat this 
resolved version of the resource as the ground truth. This may result in lost labels from the snippet.
```json
{
  "id": "https://example.org/annotation-page-1"
  "type": "AnnotationPage",
  "label": { "en": ["Transcribed lines of Manifest 123"] }
}
```

We are looking at how best to resolve this, and if this will affect other properties that may exist only in a snippet 
or change.

Solving this problem is in the [Roadmap](/docs/vault/roadmap);

Similar to Manifests/Collections you can check if an Annotation Collection is previously loaded

```js
const status = vault.requestStatus('https://example.org/annotation-page-1');

if (status.loadingState !== 'RESOURCE_LOADING') {
  // Do something.
}
```

### Paged annotations

Vault does not currently have any helpers for managing many pages of annotations. Also, it does not currently support
loading in Presentation 2.0 annotation lists, such as search results. These are open problems that may be solved with
a combination of changes to Vault and Vault helpers.

Check the [Annotation pages](/docs/helpers/annotation-pages) page for more information.
