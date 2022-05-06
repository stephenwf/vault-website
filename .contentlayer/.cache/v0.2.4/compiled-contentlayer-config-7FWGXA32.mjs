// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Demos = defineDocumentType(() => ({
  name: "Demos",
  filePathPattern: "**/*.js",
  fields: {},
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/demo/${doc._raw.flattenedPath}`
    }
  }
}));
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
  contentDirPath: ".",
  contentDirInclude: ["docs", "demos"],
  documentTypes: [Docs, Demos]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-7FWGXA32.mjs.map
