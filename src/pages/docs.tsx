import { Routes, Route, Link } from 'react-router-dom';
import { allDocs, Docs } from 'contentlayer/generated';
import { ViewDoc } from './view-doc';

function parseDocs() {
  const folders = [];
  const folderMap: Record<string, Docs[]> = { _none: [] };

  for (const doc of allDocs) {
    const folder = doc.folder || '_none';
    if (doc.folder && folders.indexOf(doc.folder) === -1) {
      folders.push(doc.folder);
    }
    if (doc.filename && !doc.hide_navigation) {
      folderMap[folder] = folderMap[folder] ? folderMap[folder] : [];
      folderMap[folder].push(doc);
    }
  }

  return [folders, folderMap] as const;
}

const [allFolders, folderMap] = parseDocs();

export function DocsPage() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: 330 }}>
        <ul>
          {folderMap._none.map((item) => (
            <li>
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
          {allFolders.map((folder) => {
            const items = folderMap[folder];
            return (
              <li>
                <Link to={`/docs/${folder}`}>{folder}</Link>
                <ul>
                  {items.map((item) => (
                    <li>
                      <Link to={item.url}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
      <div style={{ flex: 1 }}>
        <Routes>
          <Route index element={<ViewDoc />} />
          <Route path=":folder">
            <Route index element={<ViewDoc />} />
            <Route path=":file" element={<ViewDoc />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
