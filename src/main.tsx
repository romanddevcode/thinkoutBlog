import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import router from './routes/index.ts';
import { ThemeProvider } from './components/ThemeProvider';
import App from './App.tsx';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
      <Toaster richColors />
    </ThemeProvider>
  </StrictMode>,
);
