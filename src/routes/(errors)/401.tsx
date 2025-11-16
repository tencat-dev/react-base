import { UnauthorizedError } from '@/features/errors/unauthorized'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(errors)/401')({
  component: UnauthorizedError,
})
