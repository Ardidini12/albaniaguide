// app/admin/packages/page.tsx
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { PackageCard } from './PackageCard'

// ---------------------------------------------------------
// 1. SERVER ACTIONS
// ---------------------------------------------------------
async function createPackage(formData: FormData) {
  'use server'

  // A. Extract data from the form
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const price = formData.get('price') as string
  const location = formData.get('location') as string // "South Albania"
  const region = formData.get('region') as string     // "South" (for filter)
  const type = formData.get('type') as string         // "Beach" (for filter)
  
  // Duration Logic
  const duration = formData.get('duration') as string         // "7"
  const durationText = formData.get('durationText') as string // "7 days / 6 nights"

  // B. Logic: Convert "Wifi, Breakfast" into ["Wifi", "Breakfast"]
  const featuresRaw = formData.get('features') as string
  const featuresList = featuresRaw.split(',').map((f) => f.trim()).filter(f => f !== '')

  // C. Logic: Image Link
  const imageUrl = formData.get('imageUrl') as string

  // D. Save to Database
  await prisma.package.create({
    data: {
      title,
      description,
      price: parseFloat(price),      // Convert text to number
      duration: parseInt(duration),  // Convert text to number
      durationText,
      location,
      region,
      type,
      features: featuresList,        // Save the list
      images: [imageUrl],            // Store as a list of strings
      isPopular: true                // Default to true for now
    }
  })

  // E. Refresh the page
  revalidatePath('/admin/packages')
}

async function updatePackage(id: string, formData: FormData) {
  'use server'

  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const price = formData.get('price') as string
  const location = formData.get('location') as string
  const region = formData.get('region') as string
  const type = formData.get('type') as string
  const duration = formData.get('duration') as string
  const durationText = formData.get('durationText') as string
  const featuresRaw = formData.get('features') as string
  const featuresList = featuresRaw.split(',').map((f) => f.trim()).filter(f => f !== '')
  const imageUrl = formData.get('imageUrl') as string

  await prisma.package.update({
    where: { id },
    data: {
      title,
      description,
      price: parseFloat(price),
      duration: parseInt(duration),
      durationText,
      location,
      region,
      type,
      features: featuresList,
      images: [imageUrl],
    }
  })

  revalidatePath('/admin/packages')
}

async function deletePackage(id: string) {
  'use server'

  await prisma.package.delete({
    where: { id }
  })

  revalidatePath('/admin/packages')
}

// ---------------------------------------------------------
// 2. THE VISUALS (The Admin Form)
// ---------------------------------------------------------
export default async function PackagesManagementPage() {
  const packages = await prisma.package.findMany({
    orderBy: { createdAt: 'desc' }
  })
  
  type Package = Awaited<ReturnType<typeof prisma.package.findMany>>[0]
  
  // Serialize packages: convert Decimal to number for client component
  const serializedPackages = packages.map((pkg: Package) => ({
    ...pkg,
    price: Number(pkg.price)
  }))

  return (
    <div className="min-h-screen bg-gray-50 p-10 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <a href="/admin" className="text-blue-600 hover:underline mb-2 inline-block">← Back to Dashboard</a>
          <h1 className="text-3xl font-bold text-gray-800">Package Management</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* --- LEFT: THE FORM --- */}
          <div className="bg-white p-8 rounded-xl shadow border border-gray-100 h-fit lg:col-span-1">
            <h2 className="text-xl font-bold mb-6 text-blue-600">Create New Package</h2>
            
            <form action={createPackage} className="space-y-4">
              
              {/* Title & Price */}
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Package Title</label>
                <input name="title" placeholder="e.g. Albanian Riviera Escape" className="w-full p-2 border rounded mt-1" required />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Price (€)</label>
                <input name="price" type="number" step="0.01" placeholder="899" className="w-full p-2 border rounded mt-1" required />
              </div>

              {/* Location Data */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">Region (Filter)</label>
                  <select name="region" className="w-full p-2 border rounded mt-1">
                    <option value="South">South</option>
                    <option value="North">North</option>
                    <option value="Central">Central</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">Type (Filter)</label>
                  <select name="type" className="w-full p-2 border rounded mt-1">
                    <option value="Beach">Beach</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Cultural">Cultural</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Location Label</label>
                <input name="location" placeholder="e.g. South Albania" className="w-full p-2 border rounded mt-1" required />
              </div>

              {/* Duration Logic */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">Days (Num)</label>
                  <input name="duration" type="number" placeholder="7" className="w-full p-2 border rounded mt-1" required />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">Duration Text</label>
                  <input name="durationText" placeholder="7 days / 6 nights" className="w-full p-2 border rounded mt-1" required />
                </div>
              </div>

              {/* Image & Description */}
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Image Link</label>
                <input name="imageUrl" placeholder="/images/riviera.jpg" className="w-full p-2 border rounded mt-1" required />
                <p className="text-xs text-gray-400 mt-1">Use a public link or local path</p>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Description</label>
                <textarea name="description" rows={3} placeholder="Short description..." className="w-full p-2 border rounded mt-1" required />
              </div>

              {/* The Bullet Points */}
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">Features (Comma Separated)</label>
                <textarea name="features" rows={3} placeholder="Breakfast included, Boat tour, 5-star hotel" className="w-full p-2 border rounded mt-1" />
                <p className="text-xs text-gray-400 mt-1">Separate with commas!</p>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-bold shadow-lg transition transform active:scale-95">
                Create Package
              </button>
            </form>
          </div>

          {/* --- RIGHT: THE PREVIEW --- */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-6 text-gray-700">Existing Packages ({packages.length})</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serializedPackages.map((pkg: Package) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  onUpdate={updatePackage}
                  onDelete={deletePackage}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

