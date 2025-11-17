"use client";

import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { cn } from "./ui/utils";

export function BookingPage() {
  const [phone, setPhone] = useState<string | undefined>("");
  const [email, setEmail] = useState<string>("");

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Book Your Trip</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Phone Number Field */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <PhoneInput
                  international
                  defaultCountry="AL"
                  value={phone}
                  onChange={(value) => setPhone(value || "")}
                  className={cn(
                    "PhoneInput flex items-center rounded-md border border-input bg-input-background h-9",
                    "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]",
                    "transition-[color,box-shadow]"
                  )}
                  numberInputProps={{
                    className: cn(
                      "PhoneInputInput flex h-9 w-full min-w-0 rounded-md border-0 bg-transparent px-3 py-1 text-base",
                      "placeholder:text-muted-foreground outline-none",
                      "md:text-sm"
                    ),
                    id: "phone",
                    placeholder: "Enter phone number",
                  }}
                  countrySelectProps={{
                    className: cn(
                      "PhoneInputCountrySelect flex items-center gap-1.5 px-2 py-1.5 border-r border-input",
                      "hover:bg-accent transition-colors cursor-pointer"
                    ),
                  }}
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Submit Booking
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

