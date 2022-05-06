// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Docs = defineDocumentType(() => ({
  name: "Docs",
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the documentation",
      required: true
    },
    folder: {
      type: "string",
      description: "The folder the documentation is in",
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
  contentDirPath: ".",
  contentDirInclude: ["docs"],
  documentTypes: [Docs]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-VJUA33UU.mjs.map
