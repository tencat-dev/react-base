import { createRootRoute, Outlet } from '@tanstack/react-router'

import Header from '@/components/Header'
import { GeneralError } from '@/features/errors/general'
import { NotFoundError } from '@/features/errors/not-found'
import { lazy } from 'react'

const Devtool =
  process.env.NODE_ENV !== 'production'
    ? lazy(() => import('@/components/devtool'))
    : () => null

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <Devtool />
    </>
  ),
  notFoundComponent: NotFoundError,
  errorComponent: GeneralError,
})
