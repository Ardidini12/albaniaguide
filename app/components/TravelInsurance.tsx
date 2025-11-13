import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Shield, Check, X, Phone, Mail } from 'lucide-react';

const plans = [
  {
    name: 'Basic Coverage',
    price: 49,
    coverage: 50000,
    features: [
      { included: true, text: 'Medical emergencies up to €50,000' },
      { included: true, text: 'Trip cancellation coverage' },
      { included: true, text: 'Lost luggage up to €1,000' },
      { included: true, text: '24/7 emergency assistance' },
      { included: false, text: 'Adventure sports coverage' },
      { included: false, text: 'Trip interruption' },
      { included: false, text: 'Rental car coverage' }
    ]
  },
  {
    name: 'Standard Coverage',
    price: 89,
    coverage: 100000,
    popular: true,
    features: [
      { included: true, text: 'Medical emergencies up to €100,000' },
      { included: true, text: 'Trip cancellation coverage' },
      { included: true, text: 'Lost luggage up to €2,500' },
      { included: true, text: '24/7 emergency assistance' },
      { included: true, text: 'Adventure sports coverage' },
      { included: true, text: 'Trip interruption' },
      { included: false, text: 'Rental car coverage' }
    ]
  },
  {
    name: 'Premium Coverage',
    price: 149,
    coverage: 250000,
    features: [
      { included: true, text: 'Medical emergencies up to €250,000' },
      { included: true, text: 'Trip cancellation coverage' },
      { included: true, text: 'Lost luggage up to €5,000' },
      { included: true, text: '24/7 emergency assistance' },
      { included: true, text: 'Adventure sports coverage' },
      { included: true, text: 'Trip interruption' },
      { included: true, text: 'Rental car coverage' }
    ]
  }
];

export function TravelInsurance() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-700 to-green-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-12 h-12" />
            <h1 className="text-5xl">Travel Insurance</h1>
          </div>
          <p className="text-xl max-w-2xl">
            Travel with peace of mind. Comprehensive coverage for your Albanian adventure.
          </p>
        </div>
      </div>

      {/* Insurance Plans */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Choose Your Coverage</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the plan that best fits your travel needs. All plans include 24/7 emergency support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, idx) => (
            <Card 
              key={idx} 
              className={`relative ${plan.popular ? 'border-green-700 border-2 shadow-xl' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-700 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="text-4xl text-green-700 mb-2">€{plan.price}</div>
                <p className="text-sm text-gray-600">per person / per trip</p>
                <p className="text-sm text-gray-600 mt-2">
                  Coverage up to €{plan.coverage.toLocaleString()}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-gray-900' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  Select Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What's Covered */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-3xl mb-8 text-center">What's Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-700" />
                </div>
                Medical Emergencies
              </h3>
              <p className="text-gray-600">
                Hospital stays, doctor visits, emergency medical evacuation, and repatriation
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-700" />
                </div>
                Trip Cancellation
              </h3>
              <p className="text-gray-600">
                Reimbursement for prepaid expenses if you need to cancel before departure
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-700" />
                </div>
                Lost Luggage
              </h3>
              <p className="text-gray-600">
                Compensation for lost, stolen, or delayed baggage and personal belongings
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-700" />
                </div>
                Trip Interruption
              </h3>
              <p className="text-gray-600">
                Coverage if you need to cut your trip short due to covered emergencies
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-700" />
                </div>
                Flight Delays
              </h3>
              <p className="text-gray-600">
                Reimbursement for additional expenses due to significant flight delays
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-700" />
                </div>
                Personal Liability
              </h3>
              <p className="text-gray-600">
                Protection against legal liability for injury to others or property damage
              </p>
            </div>
          </div>
        </div>

        {/* Adventure Sports Coverage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Adventure Sports Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Planning adventure activities in Albania? Our Standard and Premium plans include coverage for:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {['Hiking & Trekking', 'Kayaking', 'Rafting', 'Snorkeling', 'Mountain Biking', 'Paragliding', 'Rock Climbing', 'Canyoning'].map((sport, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-700" />
                    <span className="text-sm">{sport}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How to File a Claim</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-700 text-white rounded-full flex items-center justify-center text-sm">1</span>
                  <span>Contact our 24/7 emergency hotline immediately</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-700 text-white rounded-full flex items-center justify-center text-sm">2</span>
                  <span>Gather all relevant documentation (receipts, medical reports)</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-700 text-white rounded-full flex items-center justify-center text-sm">3</span>
                  <span>Submit your claim online or via email</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-700 text-white rounded-full flex items-center justify-center text-sm">4</span>
                  <span>Receive claim decision within 10 business days</span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-700 text-white rounded-lg p-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl mb-4">24/7 Emergency Assistance</h2>
          <p className="text-xl mb-6">
            Our emergency support team is available around the clock to help you
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="text-xl">+355 800 911 911</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span className="text-xl">emergency@discoveralbania.com</span>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-3xl mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">When should I purchase travel insurance?</h3>
                <p className="text-gray-600">
                  We recommend purchasing insurance as soon as you book your trip to maximize coverage, especially for trip cancellation benefits.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Does insurance cover pre-existing conditions?</h3>
                <p className="text-gray-600">
                  Pre-existing conditions may be covered if insurance is purchased within 14 days of your initial trip deposit and you meet other criteria.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Can I extend my coverage if I extend my trip?</h3>
                <p className="text-gray-600">
                  Yes, contact us before your original return date to extend coverage. Additional fees may apply.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
