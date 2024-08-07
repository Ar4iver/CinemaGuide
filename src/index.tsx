import React from 'react'
import { createRoot } from 'react-dom/client'
import './app/styles/index.scss'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider'
import { StoreProvider } from 'app/providers/StoreProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const container = document.getElementById('root')!

const root = createRoot(container)

const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <StoreProvider>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </StoreProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)
