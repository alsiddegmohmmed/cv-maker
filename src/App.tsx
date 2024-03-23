import { type ReactElement } from 'react';
import 'modern-normalize';
import '@/App.styl';
import 'non.geist';

import { Footer } from '@/components/banners/Footer.tsx';
import { Header } from '@/components/banners/Header.tsx';
import { Editor } from '@/features/Editor.tsx';
import { Preview } from '@/features/Preview.tsx';

export const App = (): ReactElement => (
  <>
    <Header />
    <div id='primary-container'>
      <Editor />
      <Preview />
    </div>
    <Footer />
  </>
);

// Easter Egg
console.log(
  '"Hard work never killed anybody, but why take a chance?" - Edgar Bergen'
);
