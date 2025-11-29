// app/admin/page.tsx
import Link from 'next/link'
import { Button } from '../../components/ui/button'

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>
        
        <div className="bg-white p-8 rounded-xl shadow border border-gray-100">
          <h2 className="text-xl font-bold mb-6 text-blue-600">Package Management</h2>
          <p className="text-gray-600 mb-6">
            Create, edit, and manage vacation packages for your website.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/admin/packages">Manage Packages</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}