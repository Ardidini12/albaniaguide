import { VacationPackages } from "../components/VacationPackages";
import { prisma } from "@/lib/prisma";

export default async function PackagesPage() {
  // Fetch all packages from database
  const packages = await prisma.package.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });

  // Convert Prisma data to serializable format (handle Decimal)
  type Package = Awaited<ReturnType<typeof prisma.package.findMany>>[0]
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

