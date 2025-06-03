import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './contexts/AuthProvider.tsx'
import { RouterProvider } from 'react-router'
import { routes } from './router/routes.tsx'
import FirestoreProvider from './contexts/FirestoreProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirestoreProvider>
      <AuthProvider>
        <RouterProvider router={routes}></RouterProvider>
      </AuthProvider>
    </FirestoreProvider>
  </StrictMode>,
)
