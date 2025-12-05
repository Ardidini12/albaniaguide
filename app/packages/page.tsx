import { VacationPackages } from "../components/VacationPackages";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic'

export default async function PackagesPage() {
  // Convert Prisma data to serializable format (handle Decimal)
  type Package = Awaited<ReturnType<typeof prisma.package.findMany>>[0]
  
  // Fetch all packages and filters from database
  let packages: Package[] = []
  let regions: { id: string; name: string }[] = []
  let types: { id: string; name: string }[] = []
  
  try {
    packages = await prisma.package.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
  } catch (error) {
    console.error('Failed to fetch packages:', error)
    packages = []
  }

  try {
    regions = await prisma.regionFilter.findMany({
      orderBy: { name: 'asc' }
    })
  } catch (error: any) {
    if (error.code === 'P2021') {
      console.error('RegionFilter table does not exist. Please run: npx prisma migrate deploy')
    } else {
      console.error('Failed to fetch regions:', error)
    }
    regions = []
  }

  try {
    types = await prisma.typeFilter.findMany({
      orderBy: { name: 'asc' }
    })
  } catch (error: any) {
    if (error.code === 'P2021') {
      console.error('TypeFilter table does not exist. Please run: npx prisma migrate deploy')
    } else {
      console.error('Failed to fetch types:', error)
    }
    types = []
  }
  
  const serializedPackages = packages.map((pkg: Package) => ({
    id: pkg.id,
    name: pkg.title,
    region: pkg.region,
    theme: pkg.type,
    duration: pkg.durationText,
    price: Number(pkg.price), // Convert Decimal to number
    rating: pkg.rating,
    reviews: pkg.reviewsCount,
    image: pkg.images[0] || '/placeholder.jpg',
    highlights: pkg.features
  }));

  return <VacationPackages packages={serializedPackages} regions={regions.map(r => r.name)} types={types.map(t => t.name)} />;
}

