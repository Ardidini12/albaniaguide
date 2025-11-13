import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Heart, Sparkles, Wine, Waves, MapPin, Star } from 'lucide-react';

const packages = [
  {
    name: 'Riviera Romance',
    duration: '5 nights',
    price: 1349,
    image: 'https://images.unsplash.com/photo-1738248000857-7760b1e8333d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbGJhbmlhbiUyMHJpdmllcmF8ZW58MXx8fHwxNzYyODc3NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Saranda & Ksamil',
    inclusions: ['5-star beachfront resort', 'Private beach cabana', 'Couples spa treatment', 'Romantic sunset dinner', 'Champagne & flowers', 'Private boat tour'],
    rating: 4.9
  },
  {
    name: 'Mountain & Coast',
    duration: '7 nights',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1634033855284-4cb96c9fdd66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbGJhbmlhJTIwbW91bnRhaW5zJTIwaGlraW5nfGVufDF8fHx8MTc2Mjg3NzQ1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Theth & Albanian Riviera',
    inclusions: ['Luxury mountain lodge', 'Beachfront hotel', 'Private guide', 'Scenic transfers', 'All meals included', 'Photography session'],
    rating: 5.0
  },
  {
    name: 'Ultimate Romance',
    duration: '10 nights',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1708876953466-9d47b2b7cda3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHRyYXZlbHxlbnwxfHx8fDE3NjI4Nzc0NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Full Albania Experience',
    inclusions: ['Premium 5-star hotels', 'Private driver', 'Romantic dinners', 'Spa experiences', 'Helicopter tour', 'All-inclusive'],
    rating: 5.0
  }
];

const experiences = [
  {
    icon: Waves,
    title: 'Private Beach Experiences',
    description: 'Exclusive beach cabanas, sunset cruises, and seaside dining'
  },
  {
    icon: Wine,
    title: 'Romantic Dining',
    description: 'Candlelit dinners on the beach, rooftop restaurants, private chef'
  },
  {
    icon: Sparkles,
    title: 'Spa & Wellness',
    description: 'Couples massages, wellness treatments, thermal springs'
  },
  {
    icon: Heart,
    title: 'Special Touches',
    description: 'Room decorations, champagne, flowers, and surprise arrangements'
  }
];

export function Honeymoon() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-12 h-12" />
            <h1 className="text-5xl">Honeymoon & Romantic Getaways</h1>
          </div>
          <p className="text-xl max-w-2xl">
            Create unforgettable memories in Albania's most romantic destinations
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1708876953466-9d47b2b7cda3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHRyYXZlbHxlbnwxfHx8fDE3NjI4Nzc0NTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Romantic getaway"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12 text-white text-center">
          <h2 className="text-4xl mb-4">Begin Your Forever in Paradise</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Pristine beaches, stunning sunsets, and unforgettable romance await
          </p>
        </div>
      </div>

      {/* Honeymoon Packages */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Honeymoon Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Carefully crafted packages designed for romance and relaxation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <ImageWithFallback
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{pkg.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {pkg.location}
                </p>

                <ul className="space-y-2 mb-6 text-sm">
                  {pkg.inclusions.map((inclusion, iidx) => (
                    <li key={iidx} className="flex items-start gap-2">
                      <Heart className="w-4 h-4 text-pink-600 flex-shrink-0 mt-0.5" />
                      <span>{inclusion}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className="text-sm text-gray-600">{pkg.duration}</div>
                    <div className="text-2xl text-pink-600">€{pkg.price}</div>
                  </div>
                  <Button>Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Romantic Experiences */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-3xl mb-8 text-center">Romantic Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl mb-2">{exp.title}</h3>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Albania */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl mb-4">Why Albania for Your Honeymoon?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <div>Pristine, Uncrowded Beaches</div>
                    <p className="text-sm text-gray-600">Enjoy privacy and intimacy on untouched coastlines</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <div>Exceptional Value</div>
                    <p className="text-sm text-gray-600">Luxury experiences at a fraction of typical costs</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <div>Stunning Natural Beauty</div>
                    <p className="text-sm text-gray-600">Mountains, beaches, and sunsets like nowhere else</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <div>Perfect Weather</div>
                    <p className="text-sm text-gray-600">300+ days of sunshine per year</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl mb-4">What's Included</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-pink-600" />
                  <span>Luxury accommodation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-pink-600" />
                  <span>Private airport transfers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-pink-600" />
                  <span>Welcome champagne & treats</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-pink-600" />
                  <span>Room upgrades (when available)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-pink-600" />
                  <span>Romantic dinners</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-pink-600" />
                  <span>Couples spa treatments</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-pink-600" />
                  <span>24/7 concierge service</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-pink-600" />
                  <span>Professional photography</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial */}
        <Card className="mb-12 bg-gradient-to-br from-pink-50 to-rose-50">
          <CardContent className="p-8 text-center">
            <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
            <p className="text-xl italic mb-4">
              "Albania was the perfect honeymoon destination! The beaches were stunning, the hotels luxurious, and the whole experience felt so intimate and special. We can't thank Discover Albania enough for making our dream honeymoon come true."
            </p>
            <div>
              <div>Michael & Emma Weber</div>
              <div className="text-sm text-gray-600">Munich, Germany</div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="bg-gradient-to-r from-pink-600 to-rose-700 text-white rounded-lg p-12 text-center">
          <Heart className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl mb-4">Start Planning Your Dream Honeymoon</h2>
          <p className="text-xl mb-6">
            Let our romance specialists create a personalized itinerary just for you
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
              Get Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
              Download Brochure
            </Button>
          </div>
          <p className="mt-6 text-sm">
            💝 Special Offer: Book before December 31st and receive a complimentary couples photoshoot!
          </p>
        </div>
      </div>
    </div>
  );
}
