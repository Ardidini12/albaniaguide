import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Mountain, Leaf, Waves, Camera, TreePine, Footprints } from 'lucide-react';

const tours = [
  {
    name: 'Albanian Alps Trek',
    duration: '8 days',
    difficulty: 'Moderate to Challenging',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1634033855284-4cb96c9fdd66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbGJhbmlhJTIwbW91bnRhaW5zJTIwaGlraW5nfGVufDF8fHx8MTc2Mjg3NzQ1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    highlights: ['Theth to Valbona trek', 'Traditional guesthouses', 'Mountain villages', 'Stunning vistas'],
    activities: ['Hiking', 'Wildlife watching', 'Photography', 'Cultural immersion']
  },
  {
    name: 'Coastal Adventure',
    duration: '6 days',
    difficulty: 'Easy to Moderate',
    price: 899,
    image: 'https://images.unsplash.com/photo-1696765906526-c839897180a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbGJhbmlhJTIwYmVhY2glMjBjb2FzdHxlbnwxfHx8fDE3NjI4Nzc0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    highlights: ['Sea kayaking', 'Snorkeling', 'Beach camping', 'Coastal hiking'],
    activities: ['Kayaking', 'Snorkeling', 'Hiking', 'Swimming']
  },
  {
    name: 'Multi-Sport Adventure',
    duration: '10 days',
    difficulty: 'Moderate to Challenging',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1634033855284-4cb96c9fdd66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbGJhbmlhJTIwbW91bnRhaW5zJTIwaGlraW5nfGVufDF8fHx8MTc2Mjg3NzQ1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    highlights: ['Rafting', 'Canyoning', 'Mountain biking', 'Rock climbing'],
    activities: ['Rafting', 'Canyoning', 'Biking', 'Climbing']
  }
];

const ecoInitiatives = [
  {
    icon: Leaf,
    title: 'Sustainable Tourism',
    description: 'We partner with local communities and use eco-friendly accommodations'
  },
  {
    icon: TreePine,
    title: 'Conservation Focus',
    description: 'Part of tour proceeds support Albanian national park conservation'
  },
  {
    icon: Footprints,
    title: 'Leave No Trace',
    description: 'All tours follow strict environmental guidelines and practices'
  },
  {
    icon: Mountain,
    title: 'Local Communities',
    description: 'Supporting family-run guesthouses and local guides'
  }
];

export function AdventureEco() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-700 to-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Mountain className="w-12 h-12" />
            <h1 className="text-5xl">Adventure & Eco-Tourism</h1>
          </div>
          <p className="text-xl max-w-2xl">
            Explore Albania's wilderness responsibly with our sustainable adventure tours
          </p>
        </div>
      </div>

      {/* Adventure Tours */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Adventure Tours</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the thrill of Albanian nature while preserving its beauty for future generations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tours.map((tour, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <ImageWithFallback
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 rounded-full text-sm">
                  {tour.difficulty}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl mb-2">{tour.name}</h3>
                <p className="text-gray-600 mb-4">{tour.duration}</p>

                <div className="mb-4">
                  <h4 className="text-sm mb-2">Highlights:</h4>
                  <ul className="space-y-1 text-sm">
                    {tour.highlights.map((highlight, hidx) => (
                      <li key={hidx} className="flex items-center gap-2">
                        <span className="text-green-700">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm mb-2">Activities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tour.activities.map((activity, aidx) => (
                      <span key={aidx} className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className="text-sm text-gray-600">From</div>
                    <div className="text-2xl text-green-700">€{tour.price}</div>
                  </div>
                  <Button>Book Tour</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Activities Grid */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Adventure Activities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Hiking', icon: '🥾' },
              { name: 'Rafting', icon: '🚣' },
              { name: 'Kayaking', icon: '🛶' },
              { name: 'Canyoning', icon: '🏞️' },
              { name: 'Rock Climbing', icon: '🧗' },
              { name: 'Mountain Biking', icon: '🚵' },
              { name: 'Paragliding', icon: '🪂' },
              { name: 'Snorkeling', icon: '🤿' },
              { name: 'Wildlife Watching', icon: '🦅' },
              { name: 'Photography', icon: '📸' },
              { name: 'Camping', icon: '⛺' },
              { name: 'Village Tours', icon: '🏘️' }
            ].map((activity, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">{activity.icon}</div>
                  <div className="text-sm">{activity.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Eco-Tourism Initiatives */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Leaf className="w-8 h-8 text-green-700" />
            <h2 className="text-3xl">Our Commitment to Sustainability</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecoInitiatives.map((initiative, idx) => {
              const Icon = initiative.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-xl mb-2">{initiative.title}</h3>
                  <p className="text-gray-600">{initiative.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Destination Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl mb-4 flex items-center gap-2">
                <Mountain className="w-6 h-6 text-green-700" />
                Albanian Alps
              </h3>
              <p className="text-gray-700 mb-4">
                The "Accursed Mountains" offer some of Europe's most pristine trekking. Ancient stone villages, dramatic peaks, and warm hospitality await.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-700">✓</span>
                  <span>Theth National Park</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-700">✓</span>
                  <span>Valbona Valley</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-700">✓</span>
                  <span>Blue Eye (Syri i Kaltër)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-700">✓</span>
                  <span>Traditional guesthouses</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl mb-4 flex items-center gap-2">
                <Waves className="w-6 h-6 text-blue-600" />
                Coastal Adventures
              </h3>
              <p className="text-gray-700 mb-4">
                The Albanian coastline offers incredible opportunities for water sports, from sea kayaking to snorkeling in crystal-clear waters.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-700">✓</span>
                  <span>Karaburun Peninsula</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-700">✓</span>
                  <span>Gjipe Canyon</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-700">✓</span>
                  <span>Marine protected areas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-700">✓</span>
                  <span>Sea caves exploration</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* What to Bring */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl mb-6 text-center">Essential Gear & Packing List</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="mb-3">Clothing</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Hiking boots (broken in)</li>
                <li>• Layers (temperature varies)</li>
                <li>• Rain jacket</li>
                <li>• Quick-dry clothing</li>
                <li>• Sun hat</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3">Equipment</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Daypack (25-30L)</li>
                <li>• Water bottles/hydration</li>
                <li>• Trekking poles (optional)</li>
                <li>• Headlamp/flashlight</li>
                <li>• First aid kit</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3">Essentials</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Sunscreen (high SPF)</li>
                <li>• Insect repellent</li>
                <li>• Camera & batteries</li>
                <li>• Power bank</li>
                <li>• Reusable water bottle</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-700 to-emerald-800 text-white rounded-lg p-12 text-center">
          <Mountain className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl mb-4">Ready for Your Adventure?</h2>
          <p className="text-xl mb-6">
            Join us for an unforgettable eco-friendly adventure in Albania's wilderness
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              Book Adventure Tour
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
              Download Itineraries
            </Button>
          </div>
          <p className="mt-6 text-sm">
            🌱 Carbon-neutral tours • Support local communities • Preserve nature
          </p>
        </div>
      </div>
    </div>
  );
}
