import React from 'react'
import BackButton from '@/components/BackButton'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const TerritoryManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <BackButton />
      <Card>
        <CardHeader>
          <CardTitle>Territory Management</CardTitle>
          <CardDescription>Assign and organize territories for distributors and sales teams.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">
            This module is coming soon. You will be able to manage areas, assign sales reps, and track coverage.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default TerritoryManagement
