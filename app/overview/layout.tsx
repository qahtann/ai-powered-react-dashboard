import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

export default function OverviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DashboardLayout>{children}</DashboardLayout>
}
