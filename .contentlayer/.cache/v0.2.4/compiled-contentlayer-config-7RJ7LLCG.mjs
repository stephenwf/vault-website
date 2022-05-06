// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";
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
    filename: {
      type: "string",
      resolve: (doc) => {
        const parsed = parse(doc._raw.sourceFileName);
        const [, name] = parsed.name.match(/\d\d\-(.*)/) || [];
        return name;
      }
    },
    url: {
      type: "string",
      resolve: (doc) => {
        const parsed = parse(doc._raw.sourceFileName);
        const [, name] = parsed.name.match(/\d\d\-(.*)/) || [];
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
  documentTypes: [Docs],
  markdown: { rehypePlugins: [highlight] }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-7RJ7LLCG.mjs.map
