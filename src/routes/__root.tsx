import { createRootRoute, Outlet } from '@tanstack/react-router'

import Header from '@/components/Header'
import { GeneralError } from '@/features/errors/general'
import { NotFoundError } from '@/features/errors/not-found'
import { lazy, Suspense } from 'react'

const Devtool = lazy(() => import('@/components/devtool'))

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <Suspense fallback={null}>
        <Devtool />
      </Suspense>
    </>
  ),
  notFoundComponent: NotFoundError,
  errorComponent: GeneralError,
})
