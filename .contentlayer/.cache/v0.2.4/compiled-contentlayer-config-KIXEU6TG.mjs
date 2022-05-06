// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Demos = defineDocumentType(() => ({
  name: "Demos",
  filePathPattern: "**/*.js",
  fields: {}
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
  contentDirInclude: [""],
  contentDirPath: "docs",
  documentTypes: [Docs]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-KIXEU6TG.mjs.map
