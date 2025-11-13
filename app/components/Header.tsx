"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Plane } from 'lucide-react';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-serif text-xl text-gray-900">Discover Albania</div>
              <div className="text-xs text-gray-600">Your Journey Begins Here</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" className="px-4 py-2 hover:text-red-700">
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Packages</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <Link href="/packages" className="block p-3 rounded-lg hover:bg-gray-50">
                      <div>All Vacation Packages</div>
                      <p className="text-sm text-gray-600">Browse by region and theme</p>
                    </Link>
                    <Link href="/honeymoon" className="block p-3 rounded-lg hover:bg-gray-50">
                      <div>Honeymoon Packages</div>
                      <p className="text-sm text-gray-600">Romantic getaways</p>
                    </Link>
                    <Link href="/adventure" className="block p-3 rounded-lg hover:bg-gray-50">
                      <div>Adventure & Eco-Tourism</div>
                      <p className="text-sm text-gray-600">Explore nature</p>
                    </Link>
                    <Link href="/group-travel" className="block p-3 rounded-lg hover:bg-gray-50">
                      <div>Group Travel</div>
                      <p className="text-sm text-gray-600">Travel together</p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <Link href="/booking" className="block p-3 rounded-lg hover:bg-gray-50">
                      <div>Flight & Hotel Booking</div>
                      <p className="text-sm text-gray-600">Book your stay</p>
                    </Link>
                    <Link href="/cruises" className="block p-3 rounded-lg hover:bg-gray-50">
                      <div>Cruise Deals</div>
                      <p className="text-sm text-gray-600">Mediterranean cruises</p>
                    </Link>
                    <Link href="/insurance" className="block p-3 rounded-lg hover:bg-gray-50">
                      <div>Travel Insurance</div>
                      <p className="text-sm text-gray-600">Travel protected</p>
                    </Link>
                    <Link href="/business" className="block p-3 rounded-lg hover:bg-gray-50">
                      <div>Business Travel</div>
                      <p className="text-sm text-gray-600">Corporate solutions</p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/guides" className="px-4 py-2 hover:text-red-700">
                  Destination Guides
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Support</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <Link href="/agents" className="block p-3 rounded-lg hover:bg-gray-50">
                      <div>Travel Agents</div>
                      <p className="text-sm text-gray-600">Meet our experts</p>
                    </Link>
                    <Link href="/documents" className="block p-3 rounded-lg hover:bg-gray-50">
                      <div>Travel Documents</div>
                      <p className="text-sm text-gray-600">Visa assistance</p>
                    </Link>
                    <Link href="/emergency" className="block p-3 rounded-lg hover:bg-gray-50">
                      <div>Emergency Support</div>
                      <p className="text-sm text-gray-600">24/7 assistance</p>
                    </Link>
                    <Link href="/testimonials" className="block p-3 rounded-lg hover:bg-gray-50">
                      <div>Reviews</div>
                      <p className="text-sm text-gray-600">Customer stories</p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild>
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-2">
              <Link href="/" className="px-4 py-2 hover:bg-gray-50 rounded">Home</Link>
              <Link href="/packages" className="px-4 py-2 hover:bg-gray-50 rounded">Vacation Packages</Link>
              <Link href="/booking" className="px-4 py-2 hover:bg-gray-50 rounded">Booking</Link>
              <Link href="/cruises" className="px-4 py-2 hover:bg-gray-50 rounded">Cruises</Link>
              <Link href="/insurance" className="px-4 py-2 hover:bg-gray-50 rounded">Insurance</Link>
              <Link href="/guides" className="px-4 py-2 hover:bg-gray-50 rounded">Destination Guides</Link>
              <Link href="/honeymoon" className="px-4 py-2 hover:bg-gray-50 rounded">Honeymoon</Link>
              <Link href="/adventure" className="px-4 py-2 hover:bg-gray-50 rounded">Adventure</Link>
              <Link href="/group-travel" className="px-4 py-2 hover:bg-gray-50 rounded">Group Travel</Link>
              <Link href="/business" className="px-4 py-2 hover:bg-gray-50 rounded">Business Travel</Link>
              <Link href="/agents" className="px-4 py-2 hover:bg-gray-50 rounded">Travel Agents</Link>
              <Link href="/documents" className="px-4 py-2 hover:bg-gray-50 rounded">Documents</Link>
              <Link href="/emergency" className="px-4 py-2 hover:bg-gray-50 rounded">Emergency</Link>
              <Link href="/testimonials" className="px-4 py-2 hover:bg-gray-50 rounded">Reviews</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
