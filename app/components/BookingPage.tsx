"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Calendar } from './ui/calendar';
import { Plane, Hotel, Calendar as CalendarIcon, Users, MapPin, Search } from 'lucide-react';

export function BookingPage() {
  const [flightDate, setFlightDate] = useState<Date | undefined>(new Date());
  const [hotelCheckIn, setHotelCheckIn] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl mb-4">Flight & Hotel Booking</h1>
          <p className="text-xl max-w-2xl">
            Search and book the best flights and accommodations for your Albanian adventure
          </p>
        </div>
      </div>

      {/* Booking Forms */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="flights" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="flights" className="flex items-center gap-2">
              <Plane className="w-4 h-4" />
              Flights
            </TabsTrigger>
            <TabsTrigger value="hotels" className="flex items-center gap-2">
              <Hotel className="w-4 h-4" />
              Hotels
            </TabsTrigger>
          </TabsList>

          <TabsContent value="flights">
            <Card>
              <CardHeader>
                <CardTitle>Search Flights to Albania</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="trip-type" defaultChecked />
                      <span>Round Trip</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="trip-type" />
                      <span>One Way</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="trip-type" />
                      <span>Multi-City</span>
                    </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">From</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Departure city"
                          className="w-full pl-10 pr-4 py-3 border rounded-lg"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm mb-2">To</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select className="w-full pl-10 pr-4 py-3 border rounded-lg appearance-none">
                          <option>Tirana International Airport (TIA)</option>
                          <option>Kukës International Airport (KFZ)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm mb-2">Departure Date</label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          className="w-full pl-10 pr-4 py-3 border rounded-lg"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Return Date</label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          className="w-full pl-10 pr-4 py-3 border rounded-lg"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Passengers</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select className="w-full pl-10 pr-4 py-3 border rounded-lg appearance-none">
                          <option>1 Adult</option>
                          <option>2 Adults</option>
                          <option>3 Adults</option>
                          <option>4+ Adults</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">Class</label>
                      <select className="w-full px-4 py-3 border rounded-lg">
                        <option>Economy</option>
                        <option>Premium Economy</option>
                        <option>Business</option>
                        <option>First Class</option>
                      </select>
                    </div>
                    <div className="flex items-end">
                      <Button className="w-full py-3" size="lg">
                        <Search className="w-5 h-5 mr-2" />
                        Search Flights
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm">
                    <strong>💡 Tip:</strong> Book flights at least 3 weeks in advance for the best deals. Peak season in Albania is June-September.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hotels">
            <Card>
              <CardHeader>
                <CardTitle>Search Hotels in Albania</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Destination</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select className="w-full pl-10 pr-4 py-3 border rounded-lg appearance-none">
                        <option>Tirana</option>
                        <option>Saranda</option>
                        <option>Berat</option>
                        <option>Gjirokastër</option>
                        <option>Vlorë</option>
                        <option>Durrës</option>
                        <option>Shkodër</option>
                        <option>Ksamil</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm mb-2">Check-in</label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          className="w-full pl-10 pr-4 py-3 border rounded-lg"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Check-out</label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          className="w-full pl-10 pr-4 py-3 border rounded-lg"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Guests</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select className="w-full pl-10 pr-4 py-3 border rounded-lg appearance-none">
                          <option>1 Guest</option>
                          <option>2 Guests</option>
                          <option>3 Guests</option>
                          <option>4+ Guests</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm mb-2">Hotel Type</label>
                      <select className="w-full px-4 py-3 border rounded-lg">
                        <option>All Types</option>
                        <option>Hotels</option>
                        <option>Resorts</option>
                        <option>Guesthouses</option>
                        <option>Apartments</option>
                        <option>Villas</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Star Rating</label>
                      <select className="w-full px-4 py-3 border rounded-lg">
                        <option>All Ratings</option>
                        <option>5 Star</option>
                        <option>4 Star</option>
                        <option>3 Star</option>
                        <option>Budget</option>
                      </select>
                    </div>
                    <div className="flex items-end">
                      <Button className="w-full py-3" size="lg">
                        <Search className="w-5 h-5 mr-2" />
                        Search Hotels
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <label className="block text-sm mb-3">Amenities</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        <span className="text-sm">Free WiFi</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        <span className="text-sm">Pool</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        <span className="text-sm">Parking</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        <span className="text-sm">Beach Access</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        <span className="text-sm">Restaurant</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        <span className="text-sm">Spa</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        <span className="text-sm">Gym</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        <span className="text-sm">Pet Friendly</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm">
                    <strong>💡 Tip:</strong> Hotels in coastal areas fill up quickly during summer. Book 2-3 months in advance for best availability.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Featured Hotels */}
        <div className="mt-12 max-w-5xl mx-auto">
          <h2 className="text-3xl mb-6">Featured Hotels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Luxury Beach Resort Saranda', stars: 5, price: 150, location: 'Saranda' },
              { name: 'Berat Historic Hotel', stars: 4, price: 85, location: 'Berat' },
              { name: 'Tirana Boutique Hotel', stars: 4, price: 95, location: 'Tirana' }
            ].map((hotel, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg">{hotel.name}</h3>
                    <div className="flex gap-1">
                      {[...Array(hotel.stars)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {hotel.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">From</div>
                      <div className="text-2xl text-red-700">€{hotel.price}/night</div>
                    </div>
                    <Button variant="outline">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
