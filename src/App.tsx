import { type ReactElement } from 'react';
import 'modern-normalize';
import '@/App.styl';
import 'non.geist';

import { Footer } from '@/components/banners/Footer.tsx';
import { Header } from '@/components/banners/Header.tsx';
import { Preview } from '@/features/Preview.tsx';

export const App = (): ReactElement => (
  <>
    <Header />
    <Preview />
    <Footer />
  </>
);

// Easter Egg
console.log(
  '"Hard work never killed anybody, but why take a chance?" - Edgar Bergen'
);
