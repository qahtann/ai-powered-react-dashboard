import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default function PredictionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DashboardLayout>{children}</DashboardLayout>
}
