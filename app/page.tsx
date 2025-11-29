import { HomePage } from "./components/HomePage";
import { prisma } from "@/lib/prisma";

export default async function Page() {
  // Fetch featured packages (isPopular: true, limit 4)
  const featuredPackages = await prisma.package.findMany({
    where: {
      isPopular: true
    },
    take: 4,
    orderBy: {
      createdAt: 'desc'
    }
  });

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

