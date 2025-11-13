import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, Star, Award, Languages } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const agents = [
  {
    name: 'Maria Kostadinova',
    title: 'Senior Travel Consultant',
    specialization: 'Coastal & Beach Holidays',
    experience: '12 years',
    languages: ['English', 'Albanian', 'Italian', 'Greek'],
    rating: 4.9,
    reviews: 234,
    phone: '+355 69 123 4567',
    email: 'maria@discoveralbania.com',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    bio: 'Specialist in Albanian Riviera destinations with extensive knowledge of coastal resorts and beach activities.'
  },
  {
    name: 'Arben Hoxha',
    title: 'Adventure Travel Expert',
    specialization: 'Mountain & Eco-Tourism',
    experience: '10 years',
    languages: ['English', 'Albanian', 'German'],
    rating: 5.0,
    reviews: 198,
    phone: '+355 69 234 5678',
    email: 'arben@discoveralbania.com',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    bio: 'Expert mountain guide and eco-tourism specialist, passionate about Albanian Alps and sustainable travel.'
  },
  {
    name: 'Elena Petro',
    title: 'Cultural Heritage Specialist',
    specialization: 'Historical & Cultural Tours',
    experience: '15 years',
    languages: ['English', 'Albanian', 'French', 'Spanish'],
    rating: 4.9,
    reviews: 312,
    phone: '+355 69 345 6789',
    email: 'elena@discoveralbania.com',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    bio: 'Historian and cultural expert specializing in UNESCO World Heritage sites and Albanian traditions.'
  },
  {
    name: 'Dritan Mema',
    title: 'Luxury Travel Advisor',
    specialization: 'Honeymoon & Romance',
    experience: '8 years',
    languages: ['English', 'Albanian', 'Russian'],
    rating: 5.0,
    reviews: 156,
    phone: '+355 69 456 7890',
    email: 'dritan@discoveralbania.com',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
    bio: 'Luxury travel specialist creating unforgettable romantic experiences and honeymoon packages.'
  },
  {
    name: 'Lindita Sula',
    title: 'Family Travel Consultant',
    specialization: 'Family Vacations',
    experience: '9 years',
    languages: ['English', 'Albanian', 'Italian'],
    rating: 4.8,
    reviews: 189,
    phone: '+355 69 567 8901',
    email: 'lindita@discoveralbania.com',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    bio: 'Family vacation expert ensuring safe, fun, and memorable experiences for travelers of all ages.'
  },
  {
    name: 'Besnik Krasniqi',
    title: 'Corporate Travel Manager',
    specialization: 'Business Travel',
    experience: '11 years',
    languages: ['English', 'Albanian', 'German', 'Turkish'],
    rating: 4.9,
    reviews: 167,
    phone: '+355 69 678 9012',
    email: 'besnik@discoveralbania.com',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    bio: 'Corporate travel specialist managing business trips, conferences, and team-building events.'
  }
];

export function AgentProfiles() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl mb-4">Meet Our Travel Experts</h1>
          <p className="text-xl max-w-2xl">
            Our experienced team of travel consultants is here to help you plan the perfect Albanian adventure
          </p>
        </div>
      </div>

      {/* Agent Profiles */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, idx) => (
            <Card key={idx} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="relative h-64 bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center overflow-hidden">
                  <ImageWithFallback
                    src={agent.image}
                    alt={agent.name}
                    className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl mb-1">{agent.name}</h3>
                    <p className="text-indigo-700 mb-2">{agent.title}</p>
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{agent.rating}</span>
                      </div>
                      <span className="text-gray-600 text-sm">({agent.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2 text-sm">
                      <Award className="w-4 h-4 text-indigo-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-gray-600">Specialization</div>
                        <div>{agent.specialization}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 text-sm">
                      <Languages className="w-4 h-4 text-indigo-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-gray-600">Languages</div>
                        <div>{agent.languages.join(', ')}</div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 border-t pt-3">
                      {agent.bio}
                    </p>
                  </div>

                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="w-4 h-4 text-indigo-700" />
                      <a href={`tel:${agent.phone}`} className="hover:text-indigo-700">
                        {agent.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="w-4 h-4 text-indigo-700" />
                      <a href={`mailto:${agent.email}`} className="hover:text-indigo-700">
                        {agent.email}
                      </a>
                    </div>
                  </div>

                  <Button className="w-full">Contact {agent.name.split(' ')[0]}</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Work With Us */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl mb-8 text-center">Why Work With Our Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-indigo-700" />
              </div>
              <h3 className="text-xl mb-2">Expert Knowledge</h3>
              <p className="text-gray-600">
                Our agents have firsthand experience and deep knowledge of Albanian destinations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-indigo-700" />
              </div>
              <h3 className="text-xl mb-2">Personalized Service</h3>
              <p className="text-gray-600">
                Every itinerary is customized to match your interests, budget, and travel style
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-indigo-700" />
              </div>
              <h3 className="text-xl mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Your dedicated agent is available throughout your journey for any assistance
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-gradient-to-r from-indigo-700 to-indigo-900 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl mb-4">Ready to Plan Your Trip?</h2>
          <p className="text-xl mb-6">
            Schedule a free consultation with one of our travel experts
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-gray-100">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-700">
              Call Us Now
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+355 4 222 3456</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>info@discoveralbania.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
