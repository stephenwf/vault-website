// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Docs = defineDocumentType(() => ({
  name: "Docs",
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/docs/${doc._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "docs",
  documentTypes: [Docs]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-URLWASKA.mjs.map
