// src/components/category-specific/CookieSpecial.jsx
import React, { useState } from "react";
import AllCards from './../../Cards/AllCards';
import { Cookie, Gift, Coffee, Heart, Star, Check, Timer } from "lucide-react"; // Added Timer here

export default function CookieSpecial({ category, products, specificData }) {
  const [selectedVariety, setSelectedVariety] = useState(null);
  const cookieProducts = products.filter(
    (p) =>
      p.cakeDetails.category === "Cookies" ||
      p.cakeDetails.tags?.includes("cookies"),
  );

  return (
    <div className="mt-12 space-y-8">
      {/* Cookie Banner */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-amber-700 to-amber-500 p-8 text-white">
        <div className="absolute top-0 right-0 opacity-10">
          <Cookie className="h-32 w-32" />
        </div>
        <div className="relative z-10">
          <div className="mb-4 flex items-center gap-4">
            <Heart className="h-8 w-8" />
            <h2 className="text-2xl font-bold">🍪 Fresh Baked Cookies</h2>
          </div>
          <p className="mb-6 max-w-2xl">
            Crunchy on the outside, chewy on the inside - cookies made with love
            and the finest ingredients.
          </p>
          <button className="rounded-lg bg-white px-6 py-2 font-semibold text-amber-700 transition-colors hover:bg-gray-100">
            Shop Cookies
          </button>
        </div>
      </div>

      {/* Cookie Varieties */}
      <div>
        <h3 className="mb-4 text-xl font-semibold">Cookie Varieties</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {specificData?.varieties?.map((variety) => (
            <div
              key={variety}
              className={`cursor-pointer rounded-lg border-2 p-4 text-center transition-all ${
                selectedVariety === variety
                  ? "border-amber-500 bg-amber-50"
                  : "border-gray-200 hover:border-amber-300"
              }`}
              onClick={() => setSelectedVariety(variety)}
            >
              <div className="mb-2 text-3xl">
                {variety === "Chocolate Chip"
                  ? "🍪"
                  : variety === "Oatmeal"
                    ? "🌾"
                    : variety === "Butter"
                      ? "🧈"
                      : variety === "Almond"
                        ? "🥜"
                        : variety === "Double Chocolate"
                          ? "🍫"
                          : "🍬"}
              </div>
              <span className="text-xs font-medium">{variety}</span>
              {selectedVariety === variety && (
                <Check className="mx-auto mt-1 h-3 w-3 text-amber-500" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Gift Packs */}
      <div className="rounded-lg bg-amber-50 p-6">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
          <Gift className="h-5 w-5 text-amber-600" />
          Cookie Gift Packs
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {specificData?.giftPackSizes?.map((size) => (
            <div
              key={size}
              className="rounded-lg bg-white p-4 transition-shadow hover:shadow-md"
            >
              <div className="mb-2 text-2xl">📦</div>
              <h4 className="font-semibold">{size}</h4>
              <p className="mt-1 text-sm text-gray-600">
                {size === "6 pcs"
                  ? "Perfect for personal gifting"
                  : size === "12 pcs"
                    ? "Great for family"
                    : size === "24 pcs"
                      ? "Ideal for parties"
                      : "Best for events"}
              </p>
              <p className="mt-2 font-bold text-amber-600">
                $
                {size === "6 pcs"
                  ? "12"
                  : size === "12 pcs"
                    ? "22"
                    : size === "24 pcs"
                      ? "40"
                      : "58"}
                .99
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dietary Options */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Dietary Options</h3>
        <div className="flex flex-wrap gap-3">
          {specificData?.dietary?.map((option) => (
            <span
              key={option}
              className="rounded-full bg-green-100 px-4 py-2 text-sm text-green-700"
            >
              {option}
            </span>
          ))}
        </div>
      </div>

      {/* Perfect Pairings */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex items-center gap-4 rounded-lg border bg-white p-4">
          <Coffee className="h-12 w-12 text-amber-600" />
          <div>
            <h4 className="font-semibold">Perfect with Coffee</h4>
            <p className="text-sm text-gray-600">Start your morning right</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-lg border bg-white p-4">
          <Heart className="h-12 w-12 text-amber-600" />
          <div>
            <h4 className="font-semibold">Made with Love</h4>
            <p className="text-sm text-gray-600">Homemade taste, every time</p>
          </div>
        </div>
      </div>

      {/* Cookie Products */}
      {cookieProducts.length > 0 && (
        <AllCards
          title="🍪 Our Cookie Collection"
          subtitle="Freshly baked daily"
          badge="FRESH"
          cakes={cookieProducts}
          initialDesktop={4}
          initialLaptop={3}
          initialMobile={2}
          left={true}
        />
      )}

      {/* Cookie Care Instructions */}
      <div className="rounded-lg border bg-white p-6">
        <h3 className="mb-4 font-semibold">Cookie Care Tips</h3>
        <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-4">
          <div className="text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
              <Timer className="h-6 w-6 text-amber-600" />
            </div>
            <p className="font-medium">Fresh for 7 days</p>
            <p className="text-xs text-gray-500">In airtight container</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
              <Cookie className="h-6 w-6 text-amber-600" />
            </div>
            <p className="font-medium">Room temperature</p>
            <p className="text-xs text-gray-500">No refrigeration needed</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
              <Gift className="h-6 w-6 text-amber-600" />
            </div>
            <p className="font-medium">Gift ready</p>
            <p className="text-xs text-gray-500">Beautifully packaged</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
              <Star className="h-6 w-6 text-amber-600" />
            </div>
            <p className="font-medium">Premium quality</p>
            <p className="text-xs text-gray-500">Best ingredients</p>
          </div>
        </div>
      </div>
    </div>
  );
}