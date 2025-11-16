import { GeneralError } from '@/features/errors/general'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(errors)/500')({
  component: GeneralError,
})
