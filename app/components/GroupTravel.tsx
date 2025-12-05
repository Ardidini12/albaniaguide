import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Users, Calendar, DollarSign, Gift, Check, Phone, Mail,} from 'lucide-react';
import Link from 'next/link';


const groupTypes = [
  {
    title: 'School & Student Groups',
    icon: Users,
    description: 'Educational tours with cultural and historical focus',
    minSize: '15 students',
    benefits: ['Private group transport', 'Educational materials', 'Interactive workshops', 'Safe accommodation']
  },
  {
    title: 'Corporate Groups',
    icon: Users,
    description: 'Team building and corporate retreat packages',
    minSize: '10 participants',
    benefits: ['Meeting facilities', 'Team activities', 'Corporate rates', 'Flexible scheduling']
  },
  {
    title: 'Friends & Family',
    icon: Users,
    description: 'Multi-generational and friend group vacations',
    minSize: '8 people',
    benefits: ['Group discount', 'Flexible itineraries', 'Private transport', 'Family-friendly hotels']
  },
  {
    title: 'Special Interest',
    icon: Users,
    description: 'Photography, hiking, culinary, or other themed groups',
    minSize: '12 people',
    benefits: ['Expert guides', 'Specialized activities', 'Like-minded travelers', 'Unique experiences']
  }
];

const benefits = [
  { icon: DollarSign, title: 'Group Discounts', description: 'Exclusive group tier pricing' },
  { icon: Calendar, title: 'Flexible Dates', description: 'Choose dates that work for your group' },
  { icon: Gift, title: 'Free Upgrades', description: 'Complimentary perks for larger groups' },
  { icon: Users, title: 'Private Guide', description: 'Dedicated guide for groups 15+' }
];

export function GroupTravel() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-12 h-12" />
            <h1 className="text-5xl">Group Travel Services</h1>
          </div>
          <p className="text-xl max-w-2xl">
            Special rates and tailored experiences for groups. Travel together and save!
          </p>
        </div>
      </div>

      {/* Group Types */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Group Travel Options</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We specialize in creating memorable experiences for all types of groups
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {groupTypes.map((type, idx) => {
            const Icon = type.icon;
            return (
              <Card key={idx} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-teal-700" />
                    </div>
                    <div>
                      <h3 className="text-2xl mb-2">{type.title}</h3>
                      <p className="text-gray-700 mb-3">{type.description}</p>
                      <p className="text-sm text-teal-700">
                        Minimum: {type.minSize}
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="text-sm mb-3">Included Benefits:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, bidx) => (
                        <li key={bidx} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-teal-700 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-3xl mb-8 text-center">Group Travel Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-teal-700" />
                  </div>
                  <h3 className="text-xl mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

         
        {/* Group Sizes & Pricing */}
        
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-2">8-14</div>
              <div className="text-gray-600 mb-4">People</div>
              <div className="text-2xl text-teal-700 mb-4">10% Off</div>
              <ul className="space-y-2 text-sm text-left">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-700" />
                  <span>Group coordinator discount</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-700" />
                  <span>Shared transport</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-700" />
                  <span>Flexible payment</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-teal-700 border-2">
            <CardContent className="p-6 text-center">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-700 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <div className="text-4xl mb-2 mt-2">15-24</div>
              <div className="text-gray-600 mb-4">People</div>
              <div className="text-2xl text-teal-700 mb-4">18% Off</div>
              <ul className="space-y-2 text-sm text-left">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-700" />
                  <span>Private guide included</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-700" />
                  <span>Private transport</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-700" />
                  <span>Welcome dinner</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-700" />
                  <span>1 free place</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-2">25+</div>
              <div className="text-gray-600 mb-4">People</div>
              <div className="text-2xl text-teal-700 mb-4">25% Off</div>
              <ul className="space-y-2 text-sm text-left">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-700" />
                  <span>Dedicated coordinator</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-700" />
                  <span>Premium transport</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-700" />
                  <span>2 free places</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-700" />
                  <span>Custom itinerary</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>    */}

        {/* How It Works */}
        {/* <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-3xl mb-8 text-center">How Group Booking Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-teal-700 text-white rounded-full flex items-center justify-center text-xl">
                1
              </div>
              <h3 className="text-lg mb-2">Inquiry</h3>
              <p className="text-gray-600 text-sm">
                Contact us with your group size, dates, and interests
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-teal-700 text-white rounded-full flex items-center justify-center text-xl">
                2
              </div>
              <h3 className="text-lg mb-2">Proposal</h3>
              <p className="text-gray-600 text-sm">
                Receive a customized itinerary and quote within 48 hours
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-teal-700 text-white rounded-full flex items-center justify-center text-xl">
                3
              </div>
              <h3 className="text-lg mb-2">Deposit</h3>
              <p className="text-gray-600 text-sm">
                Secure your booking with a 25% deposit
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-teal-700 text-white rounded-full flex items-center justify-center text-xl">
                4
              </div>
              <h3 className="text-lg mb-2">Travel</h3>
              <p className="text-gray-600 text-sm">
                Final payment 30 days before departure
              </p>
            </div>
          </div>
        </div> */}

        {/* Popular Group Tours */}
        {/* <div className="mb-12">
          <h2 className="text-3xl mb-8 text-center">Popular Group Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl mb-3">Albanian Highlights (7 Days)</h3>
                <p className="text-gray-700 mb-4">
                  Perfect introduction to Albania covering Tirana, Berat, Albanian Riviera, and more
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">From</div>
                    <div className="text-2xl text-teal-700">€679/person</div>
                  </div>
                  <Button>Request Quote</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl mb-3">Adventure Albania (10 Days)</h3>
                <p className="text-gray-700 mb-4">
                  Action-packed tour with hiking, rafting, and cultural experiences
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">From</div>
                    <div className="text-2xl text-teal-700">€899/person</div>
                  </div>
                  <Button>Request Quote</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div> */}

        {/* CTA */}
        <div className="bg-gradient-to-r from-teal-700 to-teal-900 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl mb-4">Plan Your Group Adventure</h2>
          <p className="text-xl mb-6">
            Get a free, no-obligation quote for your group today
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-white text-teal-700 hover:bg-gray-100" asChild>
                <Link href="/booking">Book Now</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 flex-wrap text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+355 4 222 3456</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>groups@discoveralbania.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
