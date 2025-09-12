import React from 'react'
import BackButton from '@/components/BackButton'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const BrandProductManager: React.FC = () => {
  return (
    <div className="space-y-6">
      <BackButton />
      <Card>
        <CardHeader>
          <CardTitle>Brand Product Manager</CardTitle>
          <CardDescription>Manage brand-specific products, price lists, and availability.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">
            This module is coming soon. You will be able to configure brand catalogs and channel rules here.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default BrandProductManager
