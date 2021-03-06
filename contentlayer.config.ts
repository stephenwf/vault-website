import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import highlight from 'rehype-highlight';
import { parse } from 'node:path';

const Docs = defineDocumentType(() => ({
  name: 'Docs',
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the documentation',
      required: true,
    },
    folder: {
      type: 'string',
      description: 'The folder the documentation is in',
      required: false,
    },
    future: {
      type: 'boolean',
      description: 'Wether this feature a future feature',
      required: false,
      default: false,
    },
    hide_navigation: {
      type: 'boolean',
      description: 'Should this be hidden from the side navigation',
      required: false,
      default: false,
    },
  },
  computedFields: {
    filename: {
      type: 'string',
      resolve: (doc) => {
        const parsed = parse(doc._raw.sourceFileName);
        const [, name] = parsed.name.match(/\d\d\-(.*)/) || [];

        return name;
      },
    },
    url: {
      type: 'string',
      resolve: (doc) => {
        const parsed = parse(doc._raw.sourceFileName);
        const [, name] = parsed.name.match(/\d\d\-(.*)/) || [];

        if (!doc.folder) {
          return `/docs/${name}`;
        }

        return `/docs/${doc.folder}/${name}`;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: '.',
  contentDirInclude: ['docs'],
  documentTypes: [Docs],
  markdown: { rehypePlugins: [highlight] },
});
