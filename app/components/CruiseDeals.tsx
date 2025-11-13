import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Ship, Calendar, MapPin, Users, Utensils, Star } from 'lucide-react';

const cruises = [
  {
    id: 1,
    name: 'Adriatic & Ionian Discovery',
    duration: '7 nights',
    ship: 'MS Mediterranean Explorer',
    departure: 'Durrës, Albania',
    ports: ['Durrës', 'Vlorë', 'Saranda', 'Corfu', 'Dubrovnik', 'Split', 'Venice'],
    price: 1299,
    image: 'https://images.unsplash.com/photo-1712309405552-309c389a44cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwTWVkaXRlcnJhbmVhbnxlbnwxfHx8fDE3NjI4Nzc0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    inclusions: ['All meals', 'Entertainment', 'Shore excursions', 'Onboard activities'],
    rating: 4.8
  },
  {
    id: 2,
    name: 'Albanian Coast Explorer',
    duration: '4 nights',
    ship: 'SS Coastal Dream',
    departure: 'Saranda, Albania',
    ports: ['Saranda', 'Ksamil', 'Himarë', 'Vlorë', 'Durrës'],
    price: 799,
    image: 'https://images.unsplash.com/photo-1712309405552-309c389a44cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwTWVkaXRlcnJhbmVhbnxlbnwxfHx8fDE3NjI4Nzc0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    inclusions: ['Breakfast & dinner', 'Beach stops', 'Water sports', 'Local guides'],
    rating: 4.9
  },
  {
    id: 3,
    name: 'Balkan Heritage Cruise',
    duration: '10 nights',
    ship: 'MS Heritage Voyager',
    departure: 'Tirana Port, Albania',
    ports: ['Durrës', 'Montenegro', 'Croatia', 'Bosnia', 'Greece', 'Albania'],
    price: 1899,
    image: 'https://images.unsplash.com/photo-1712309405552-309c389a44cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwTWVkaXRlcnJhbmVhbnxlbnwxfHx8fDE3NjI4Nzc0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    inclusions: ['All-inclusive dining', 'Premium drinks', 'Cultural excursions', 'WiFi'],
    rating: 4.7
  }
];

export function CruiseDeals() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Ship className="w-12 h-12" />
            <h1 className="text-5xl">Cruise Deals</h1>
          </div>
          <p className="text-xl max-w-2xl">
            Explore the stunning Albanian coastline and the Mediterranean from the comfort of luxury cruise ships
          </p>
        </div>
      </div>

      {/* Cruise Listings */}
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          {cruises.map((cruise) => (
            <Card key={cruise.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="relative h-64 md:h-auto">
                  <ImageWithFallback
                    src={cruise.image}
                    alt={cruise.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-700">
                    {cruise.duration}
                  </Badge>
                </div>

                <CardContent className="md:col-span-2 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-3xl mb-2">{cruise.name}</h2>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{cruise.rating}</span>
                        </div>
                        <span className="text-gray-600">Cruise Rating</span>
                      </div>
                      <p className="text-gray-700 flex items-center gap-2">
                        <Ship className="w-4 h-4" />
                        {cruise.ship}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">From</div>
                      <div className="text-3xl text-blue-700">€{cruise.price}</div>
                      <div className="text-sm text-gray-600">per person</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 text-gray-700 mb-2">
                        <MapPin className="w-5 h-5 text-blue-700" />
                        <span>Departure Port: {cruise.departure}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Calendar className="w-5 h-5 text-blue-700" />
                        <span>Duration: {cruise.duration}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-600 mb-2">Ports of Call:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cruise.ports.map((port, idx) => (
                          <Badge key={idx} variant="outline">{port}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm text-gray-600 mb-2">Inclusions:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {cruise.inclusions.map((inclusion, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-blue-700">✓</span>
                          <span className="text-sm">{inclusion}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button size="lg">Book Now</Button>
                    <Button size="lg" variant="outline">View Itinerary</Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Why Cruise Albania */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl mb-6 text-center">Why Cruise the Albanian Coast?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-xl mb-2">Pristine Beaches</h3>
              <p className="text-gray-600">
                Discover hidden coves and crystal-clear waters along the Albanian Riviera
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Utensils className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-xl mb-2">Authentic Cuisine</h3>
              <p className="text-gray-600">
                Experience Mediterranean flavors with fresh seafood and local specialties
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-xl mb-2">Cultural Excursions</h3>
              <p className="text-gray-600">
                Visit UNESCO World Heritage sites and charming coastal villages
              </p>
            </div>
          </div>
        </div>

        {/* Cruise Planning Tips */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl mb-4">Best Time to Cruise</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">•</span>
                  <span><strong>May-June:</strong> Mild weather, fewer crowds, great value</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">•</span>
                  <span><strong>July-August:</strong> Peak season, warmest water, vibrant atmosphere</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">•</span>
                  <span><strong>September:</strong> Perfect weather, less crowded, good prices</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl mb-4">What to Pack</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">•</span>
                  <span>Lightweight, breathable clothing for warm days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">•</span>
                  <span>Comfortable walking shoes for shore excursions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">•</span>
                  <span>Sunscreen, hat, and sunglasses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">•</span>
                  <span>Evening wear for formal dining nights</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
