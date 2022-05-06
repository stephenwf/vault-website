import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { allDocs } from 'contentlayer/generated';
import { IndexPage } from './pages';
import { DocsPage } from './pages/docs';
import { App } from './app';

console.log({ allDocs });

const $root = document.getElementById('root');
if ($root) {
  const root = createRoot($root);

  root.render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<App />}>
            <Route index element={<IndexPage />} />
            <Route path="/docs*" element={<DocsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}
