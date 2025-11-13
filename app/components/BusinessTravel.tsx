import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Briefcase, Plane, Hotel, Users, Calendar, FileText, Phone, Mail } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Corporate Flight Booking',
    description: 'Discounted business class fares and flexible booking options'
  },
  {
    icon: Hotel,
    title: 'Hotel Accommodations',
    description: 'Preferred rates at business hotels across Albania'
  },
  {
    icon: Users,
    title: 'Group Bookings',
    description: 'Conference and team travel coordination'
  },
  {
    icon: Calendar,
    title: 'Event Planning',
    description: 'Corporate events, meetings, and incentive trips'
  },
  {
    icon: FileText,
    title: 'Travel Management',
    description: 'Comprehensive expense reporting and account management'
  },
  {
    icon: Briefcase,
    title: '24/7 Support',
    description: 'Dedicated account manager and emergency assistance'
  }
];

export function BusinessTravel() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-12 h-12" />
            <h1 className="text-5xl">Business Travel Solutions</h1>
          </div>
          <p className="text-xl max-w-2xl">
            Streamlined corporate travel management for businesses of all sizes
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Corporate Travel Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything your business needs for efficient, cost-effective travel to Albania
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card key={idx} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-slate-700" />
                  </div>
                  <h3 className="text-xl mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-3xl mb-8 text-center">Why Choose Our Business Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-4">Cost Savings</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-slate-700 mt-1">✓</span>
                  <span className="text-gray-700">Negotiated corporate rates with airlines and hotels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-700 mt-1">✓</span>
                  <span className="text-gray-700">Volume discounts for frequent travelers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-700 mt-1">✓</span>
                  <span className="text-gray-700">Consolidated billing and expense reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-700 mt-1">✓</span>
                  <span className="text-gray-700">Transparent pricing with no hidden fees</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-4">Efficiency</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-slate-700 mt-1">✓</span>
                  <span className="text-gray-700">Online booking portal for your team</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-700 mt-1">✓</span>
                  <span className="text-gray-700">Automated approval workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-700 mt-1">✓</span>
                  <span className="text-gray-700">Real-time itinerary changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-700 mt-1">✓</span>
                  <span className="text-gray-700">Mobile app for on-the-go management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Meeting & Event Services */}
        <div className="mb-12">
          <h2 className="text-3xl mb-8 text-center">Meetings & Events in Albania</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Conference Facilities</h3>
                <p className="text-gray-700 mb-4">
                  Access to modern conference centers and meeting rooms in Tirana and coastal locations.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-slate-700">•</span>
                    <span>State-of-the-art AV equipment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-slate-700">•</span>
                    <span>High-speed WiFi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-slate-700">•</span>
                    <span>Catering services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-slate-700">•</span>
                    <span>Breakout rooms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-slate-700">•</span>
                    <span>Translation services</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Team Building</h3>
                <p className="text-gray-700 mb-4">
                  Combine business with unique team-building experiences in stunning locations.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-slate-700">•</span>
                    <span>Outdoor adventure activities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-slate-700">•</span>
                    <span>Cultural experiences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-slate-700">•</span>
                    <span>Beach resort venues</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-slate-700">•</span>
                    <span>Custom programs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-slate-700">•</span>
                    <span>Professional facilitators</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Business Hotels */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-3xl mb-8 text-center">Preferred Business Hotels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Tirana International Hotel', location: 'Tirana', rating: '5-star', amenities: 'Business center, Meeting rooms, Airport shuttle' },
              { name: 'Grand Hotel Tirana', location: 'Tirana', rating: '5-star', amenities: 'Conference facilities, Restaurant, Gym' },
              { name: 'Durrës Beach Business Hotel', location: 'Durrës', rating: '4-star', amenities: 'Boardrooms, WiFi, Parking' }
            ].map((hotel, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2">{hotel.name}</h3>
                  <div className="text-sm text-gray-600 mb-3">
                    <div>{hotel.location} • {hotel.rating}</div>
                  </div>
                  <p className="text-sm text-gray-700">{hotel.amenities}</p>
                  <Button className="w-full mt-4" variant="outline">Corporate Rates</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Travel Policy Support */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl mb-4">Travel Policy Compliance</h3>
              <p className="text-gray-700 mb-4">
                We work with your travel policies to ensure compliance and control costs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-slate-700 mt-1">✓</span>
                  <span className="text-sm">Policy setup and integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-700 mt-1">✓</span>
                  <span className="text-sm">Automated policy enforcement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-700 mt-1">✓</span>
                  <span className="text-sm">Exception handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-700 mt-1">✓</span>
                  <span className="text-sm">Regular compliance reporting</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl mb-4">Reporting & Analytics</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive insights into your travel spending and patterns.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-slate-700 mt-1">✓</span>
                  <span className="text-sm">Monthly travel reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-700 mt-1">✓</span>
                  <span className="text-sm">Cost savings analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-700 mt-1">✓</span>
                  <span className="text-sm">Traveler behavior insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-700 mt-1">✓</span>
                  <span className="text-sm">Custom dashboards</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-lg p-12 text-center">
          <Briefcase className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl mb-4">Ready to Optimize Your Business Travel?</h2>
          <p className="text-xl mb-6">
            Let's discuss how we can support your corporate travel needs
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-6">
            <Button size="lg" className="bg-white text-slate-700 hover:bg-gray-100">
              Request Proposal
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-700">
              Schedule Demo
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+355 4 222 3456</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>corporate@discoveralbania.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
