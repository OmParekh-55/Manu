"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AttendanceDashboard } from "./attendance-dashboard"
import { LeaveManagement } from "./leave-management"
import { GeoFenceSetup } from "./geo-fence-setup"
import { ShiftManagement } from "./shift-management"
import { AttendanceAnalytics } from "./attendance-analytics"
import { useAuth } from "@/hooks/use-auth"

export function AttendanceMain() {
  const { user } = useAuth()
  const isOwnerOrManager = user?.role === "owner" || user?.role === "co_founder" || user?.role === "manager"

  return (
    <div className="space-y-6">
      <Tabs defaultValue="dashboard" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="leave">Leave</TabsTrigger>
          {isOwnerOrManager && (
            <>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="shifts">Shifts</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </>
          )}
        </TabsList>

        <TabsContent value="dashboard">
          <AttendanceDashboard />
        </TabsContent>

        <TabsContent value="leave">
          <LeaveManagement />
        </TabsContent>

        {isOwnerOrManager && (
          <>
            <TabsContent value="analytics">
              <AttendanceAnalytics />
            </TabsContent>

            <TabsContent value="shifts">
              <ShiftManagement />
            </TabsContent>

            <TabsContent value="settings">
              <GeoFenceSetup />
            </TabsContent>
          </>
        )}
      </Tabs>
    </div>
  )
}
