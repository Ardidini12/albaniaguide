import { HomePage } from "./components/HomePage";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic'

export default async function Page() {
  type Package = Awaited<ReturnType<typeof prisma.package.findMany>>[0]
  
  // Fetch featured packages (isPopular: true, limit 4)
  let featuredPackages: Package[]
  try {
    featuredPackages = await prisma.package.findMany({
      where: {
        isPopular: true
      },
      take: 4,
      orderBy: {
        createdAt: 'desc'
      }
    });
  } catch (error) {
    console.error('Failed to fetch featured packages:', error)
    featuredPackages = []
  }

  // Map Prisma data to the format expected by HomePage
  const featuredDestinations = featuredPackages.map((pkg) => ({
    id: pkg.id,
    name: pkg.title,
    description: pkg.description,
    image: pkg.images[0] || '/placeholder.jpg',
    price: `€${pkg.price.toString()}`
  }));

  return <HomePage featuredDestinations={featuredDestinations} />;
}

