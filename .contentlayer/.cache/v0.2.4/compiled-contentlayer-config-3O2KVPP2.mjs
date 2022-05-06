// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { parse } from "node:path";
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
      required: false
    },
    future: {
      type: "boolean",
      description: "Wether this feature a future feature",
      required: false,
      default: false
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => {
        const parsed = parse(doc._raw.flattenedPath);
        const [, name] = parsed.name.match(/\d\d\-(.*)/) || [];
        if (!name) {
          return "";
        }
        if (!doc.folder) {
          return `/doc/${name}`;
        }
        return `/docs/${doc.folder}/${name}`;
      }
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
//# sourceMappingURL=compiled-contentlayer-config-3O2KVPP2.mjs.map
