import { VacationPackages } from "../components/VacationPackages";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic'

export default async function PackagesPage() {
  // Convert Prisma data to serializable format (handle Decimal)
  type Package = Awaited<ReturnType<typeof prisma.package.findMany>>[0]
  
  // Fetch all packages from database
  let packages: Package[]
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

  return <VacationPackages packages={serializedPackages} />;
}

