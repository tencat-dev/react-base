import { MaintenanceError } from '@/features/errors/maintenance'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(errors)/503')({
  component: MaintenanceError,
})
