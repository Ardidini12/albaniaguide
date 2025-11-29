import Link from 'next/link';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { 
  Users, 
  Briefcase, 
  Shield, 
  Star,
  Calendar,
  Award,
  Car
} from 'lucide-react';

const services = [
  { icon: Users, title: 'Group Travel', description: 'Special group rates', link: '/group-travel' },
  { icon: Briefcase, title: 'Business Travel', description: 'Corporate solutions', link: '/business' },
  { icon: Car, title: 'Airport Pickup', description: 'Pick up from Tirana Airport', link: '/booking' },
];

interface FeaturedDestination {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
}

interface HomePageProps {
  featuredDestinations: FeaturedDestination[];
}

export function HomePage({ featuredDestinations }: HomePageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1738248000857-7760b1e8333d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbGJhbmlhbiUyMHJpdmllcmF8ZW58MXx8fHwxNzYyODc3NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Albanian Riviera"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-6 font-serif">
            Discover the Beauty of Albania
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Explore pristine beaches, ancient cities, and breathtaking mountains in the Balkans' best-kept secret
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/packages">Explore Packages</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900" asChild>
              <Link href="/guides">Destination Guides</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Search */}
      <section className="bg-white py-8 shadow-lg -mt-16 relative z-10 mx-4 md:mx-auto max-w-6xl rounded-lg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm mb-2">Destination</label>
              <select className="w-full px-4 py-2 border rounded-lg">
                <option>All Destinations</option>
                <option>Albanian Riviera</option>
                <option>Tirana</option>
                <option>Berat</option>
                <option>Saranda</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2">Travel Type</label>
              <select className="w-full px-4 py-2 border rounded-lg">
                <option>All Types</option>
                <option>Beach</option>
                <option>Adventure</option>
                <option>Cultural</option>
                <option>Honeymoon</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2">Duration</label>
              <select className="w-full px-4 py-2 border rounded-lg">
                <option>Any Duration</option>
                <option>3-5 days</option>
                <option>6-10 days</option>
                <option>11+ days</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button className="w-full" asChild>
                <Link href="/packages">Search Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Featured Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore Albania's most breathtaking locations, from ancient UNESCO sites to pristine beaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-red-700 text-white px-3 py-1 rounded-full">
                    From {destination.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/packages">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete travel solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={index} href={service.link}>
                  <Card className="h-full hover:shadow-lg transition-shadow group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors">
                        <Icon className="w-8 h-8 text-red-700 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Why Choose Discover Albania</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-700 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl mb-2">15+ Years Experience</h3>
              <p className="text-gray-400">Expert knowledge of Albanian tourism</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-700 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl mb-2">5-Star Rated</h3>
              <p className="text-gray-400">Thousands of happy travelers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-700 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl mb-2">24/7 Support</h3>
              <p className="text-gray-400">Emergency assistance anytime</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-700 rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl mb-2">Best Price Guarantee</h3>
              <p className="text-gray-400">Competitive rates on all packages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">What Our Travelers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Albania exceeded all expectations! The Albanian Riviera was stunning, and the service was impeccable."
                </p>
                <div>
                  <div>Sarah Johnson</div>
                  <div className="text-sm text-gray-600">United Kingdom</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Perfect honeymoon destination! Beautiful beaches, amazing food, and rich history. Highly recommend!"
                </p>
                <div>
                  <div>Michael & Emma</div>
                  <div className="text-sm text-gray-600">Germany</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "The adventure tour in the Albanian Alps was unforgettable. Professional guides and stunning scenery!"
                </p>
                <div>
                  <div>Marco Rossi</div>
                  <div className="text-sm text-gray-600">Italy</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-4">Ready to Start Your Albanian Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our travel experts help you plan the perfect trip
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-red-700 hover:bg-gray-100" asChild>
              <Link href="/agents">Talk to an Agent</Link>
            </Button>
            <Button size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-red-700" asChild>
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
