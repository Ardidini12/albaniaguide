"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { MapPin, Calendar, Users, Star } from 'lucide-react';

interface Package {
  id: string;
  name: string;
  region: string;
  theme: string;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  highlights: string[];
}

interface VacationPackagesProps {
  packages: Package[];
}

export function VacationPackages({ packages: initialPackages }: VacationPackagesProps) {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedTheme, setSelectedTheme] = useState('All');

  const filteredPackages = initialPackages.filter(pkg => {
    const regionMatch = selectedRegion === 'All' || pkg.region === selectedRegion;
    const themeMatch = selectedTheme === 'All' || pkg.theme === selectedTheme;
    return regionMatch && themeMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl mb-4">Vacation Packages</h1>
          <p className="text-xl max-w-2xl">
            Carefully curated packages for every type of traveler. Explore Albania by region, theme, or duration.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="all" onClick={() => setSelectedTheme('All')}>All Packages</TabsTrigger>
              <TabsTrigger value="beach" onClick={() => setSelectedTheme('Beach')}>Beach</TabsTrigger>
              <TabsTrigger value="cultural" onClick={() => setSelectedTheme('Cultural')}>Cultural</TabsTrigger>
              <TabsTrigger value="adventure" onClick={() => setSelectedTheme('Adventure')}>Adventure</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-sm mb-2">Filter by Region</label>
              <select 
                className="px-4 py-2 border rounded-lg"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                <option value="All">All Regions</option>
                <option value="North">Northern Albania</option>
                <option value="Central">Central Albania</option>
                <option value="South">Southern Albania</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm mb-2">Sort by</label>
              <select className="px-4 py-2 border rounded-lg">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Highest Rated</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredPackages.length} package{filteredPackages.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <ImageWithFallback
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-red-700">{pkg.theme}</Badge>
                <Badge className="absolute top-4 right-4 bg-white text-gray-900">{pkg.region}</Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{pkg.rating}</span>
                  </div>
                  <span className="text-gray-600 text-sm">({pkg.reviews} reviews)</span>
                </div>

                <h3 className="text-2xl mb-3">{pkg.name}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{pkg.region} Albania</span>
                  </div>
                </div>

                <ul className="space-y-1 mb-6 text-sm">
                  {pkg.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-700 mt-1">✓</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className="text-sm text-gray-600">Starting from</div>
                    <div className="text-2xl text-red-700">€{pkg.price}</div>
                  </div>
                  <Button asChild>
                    <Link href="/booking">Book Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Custom Package CTA */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our travel experts can create a custom package tailored to your preferences and budget
          </p>
          <Button size="lg" asChild>
            <Link href="/agents">Contact a Travel Agent</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
