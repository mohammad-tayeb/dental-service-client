import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from '../src/Route/Route';
import AuthProvider from './Provider/AuthProvider';
// tanstack query
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { DateProvider } from './Provider/DateProvider';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <DateProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />{/* router/routes provider */}
          </div>
        </QueryClientProvider>
        </HelmetProvider>
        </DateProvider>
        </AuthProvider>
      </StrictMode>,
      )
