import { type ReactElement } from 'react';

import 'modern-normalize';
import '@/App.styl';
import { Footer } from '@/components/banners/Footer.tsx';
import { Editor } from '@/features/Editor.tsx';

export const App = (): ReactElement => (
  <>
    <Editor />
    <Footer />
  </>
);

// Easter Egg
console.log(
  '"Hard work never killed anybody, but why take a chance?" - Edgar Bergen'
);
