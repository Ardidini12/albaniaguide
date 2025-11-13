import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { FileText, Globe, CheckCircle, AlertCircle, Info, Mail, Phone } from 'lucide-react';

const visaRequirements = [
  { country: 'EU Citizens', requirement: 'No visa required - Stay up to 90 days', icon: CheckCircle },
  { country: 'US/Canada/UK/Australia', requirement: 'No visa required - Stay up to 90 days', icon: CheckCircle },
  { country: 'Other Countries', requirement: 'Check specific requirements', icon: Info }
];

const documents = [
  {
    title: 'Passport',
    description: 'Must be valid for at least 3 months beyond your stay',
    required: true
  },
  {
    title: 'Travel Insurance',
    description: 'Recommended but not mandatory for most nationalities',
    required: false
  },
  {
    title: 'Proof of Accommodation',
    description: 'Hotel booking or invitation letter',
    required: false
  },
  {
    title: 'Return Ticket',
    description: 'Proof of onward/return travel',
    required: false
  }
];

export function TravelDocuments() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-12 h-12" />
            <h1 className="text-5xl">Travel Documents Assistance</h1>
          </div>
          <p className="text-xl max-w-2xl">
            Everything you need to know about visas, passports, and entry requirements for Albania
          </p>
        </div>
      </div>

      {/* Visa Requirements */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Visa Requirements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Albania has visa-free agreements with many countries
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-4">
            {visaRequirements.map((req, idx) => {
              const Icon = req.icon;
              return (
                <Card key={idx}>
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-1">{req.country}</h3>
                      <p className="text-gray-600">{req.requirement}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Required Documents */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-3xl mb-8 text-center">Required Travel Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {documents.map((doc, idx) => (
              <Card key={idx} className={doc.required ? 'border-blue-700 border-2' : ''}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl">{doc.title}</h3>
                    {doc.required ? (
                      <span className="px-2 py-1 bg-blue-700 text-white rounded text-xs">Required</span>
                    ) : (
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs">Recommended</span>
                    )}
                  </div>
                  <p className="text-gray-600">{doc.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div className="mb-12">
          <h2 className="text-3xl mb-8 text-center">How We Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-xl mb-3">Visa Verification</h3>
                <p className="text-gray-600 mb-4">
                  We'll check your specific visa requirements based on your nationality
                </p>
                <Button variant="outline" className="w-full">Check Requirements</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-xl mb-3">Document Assistance</h3>
                <p className="text-gray-600 mb-4">
                  Help with invitation letters and accommodation confirmations
                </p>
                <Button variant="outline" className="w-full">Request Help</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Info className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-xl mb-3">Travel Advice</h3>
                <p className="text-gray-600 mb-4">
                  Expert guidance on customs, regulations, and entry procedures
                </p>
                <Button variant="outline" className="w-full">Get Advice</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Important Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl mb-4">Entry Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Valid passport (at least 3 months validity)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Proof of sufficient funds for your stay</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Return/onward ticket</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Travel insurance (recommended)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl mb-4">Customs Regulations</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Duty-free allowance: 200 cigarettes or 50 cigars</span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>1 liter of spirits or 2 liters of wine</span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Declare amounts over €10,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Prohibited: Illegal drugs, weapons, protected artifacts</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Country-Specific Information */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl mb-6 text-center">Extended Stay or Special Cases</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-2">Staying Longer than 90 Days</h4>
                <p className="text-gray-700 text-sm">
                  If you wish to stay longer than the visa-free period, you must apply for a residence permit at the Albanian border police. We can provide support documentation for your application.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-2">Work or Study in Albania</h4>
                <p className="text-gray-700 text-sm">
                  Different visa requirements apply for work or study purposes. Contact us for guidance on obtaining the necessary permits and documentation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-2">Traveling with Minors</h4>
                <p className="text-gray-700 text-sm">
                  Children traveling without both parents may need additional documentation such as notarized parental consent letters. We can help prepare the required documents.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-2">Do I need a visa to visit Albania?</h4>
                <p className="text-gray-600 text-sm">
                  Most visitors from EU, US, Canada, UK, and Australia do not need a visa for stays up to 90 days. However, requirements vary by nationality, so please check with us.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-2">How long does my passport need to be valid?</h4>
                <p className="text-gray-600 text-sm">
                  Your passport must be valid for at least 3 months beyond your intended departure date from Albania.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-2">Can I extend my stay in Albania?</h4>
                <p className="text-gray-600 text-sm">
                  Yes, you can apply for an extension at the Albanian border police office before your visa-free period expires. We can assist with this process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-lg p-12 text-center">
          <FileText className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl mb-4">Need Help with Travel Documents?</h2>
          <p className="text-xl mb-6">
            Our team is here to assist you with all your documentation needs
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-6">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
              Download Checklist
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 flex-wrap text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+355 4 222 3456</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>documents@discoveralbania.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
