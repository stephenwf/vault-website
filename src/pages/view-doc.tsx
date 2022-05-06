import { allDocs } from 'contentlayer/generated';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

export function ViewDoc() {
  const { file, folder } = useParams<Record<'folder' | 'file', string>>();

  const loadedFile = useMemo(() => {
    if (!folder) {
      return allDocs.find((doc) => doc.filename === (file || 'installation'));
    }

    if (!file) {
      return (
        allDocs.find((doc) => !doc.folder && doc.filename === folder) || allDocs.find((doc) => doc.folder === folder)
      );
    }

    return allDocs.find((doc) => doc.filename === file && doc.folder === folder);
  }, [file, folder]);

  if (!loadedFile) {
    throw new Error('Page not found');
  }

  console.log(loadedFile);

  return (
    <div>
      <h1>{loadedFile.title}</h1>

      <div dangerouslySetInnerHTML={{ __html: loadedFile.body.html }} />
    </div>
  );
}
