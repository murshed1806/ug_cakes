// src/components/category-specific/PastrySpecial.jsx
import React from "react";
import AllCards from './../../Cards/AllCards';
import { Croissant, Coffee, Timer, Award, Star } from "lucide-react";

export default function PastrySpecial({ category, products, specificData }) {
  const pastryProducts = products.filter(
    (p) =>
      p.cakeDetails.category === "Pastries" ||
      p.cakeDetails.tags?.includes("pastries"),
  );

  return (
    <div className="mt-12 space-y-8">
      {/* Pastry Banner */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-amber-600 to-yellow-500 p-8 text-white">
        <div className="absolute top-0 right-0 opacity-10">
          <Croissant className="h-32 w-32" />
        </div>
        <div className="relative z-10">
          <div className="mb-4 flex items-center gap-4">
            <Coffee className="h-8 w-8" />
            <h2 className="text-2xl font-bold">🥐 Freshly Baked Pastries</h2>
          </div>
          <p className="mb-6 max-w-2xl">
            Delicate, flaky, and perfectly baked - experience the art of French
            pastry making.
          </p>
          <button className="rounded-lg bg-white px-6 py-2 font-semibold text-amber-600 transition-colors hover:bg-gray-100">
            View Collection
          </button>
        </div>
      </div>

      {/* Pastry Types */}
      <div>
        <h3 className="mb-4 text-xl font-semibold">Our Pastry Selection</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {specificData?.types?.map((type) => (
            <div key={type} className="group cursor-pointer">
              <div className="relative mb-2 aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-amber-100 to-yellow-100">
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10"></div>
                <div className="flex h-full w-full items-center justify-center text-4xl">
                  {type === "Éclairs"
                    ? "🍫"
                    : type === "Cream Puffs"
                      ? "🥯"
                      : type === "Tarts"
                        ? "🥧"
                        : type === "Danishes"
                          ? "🥐"
                          : "🍰"}
                </div>
              </div>
              <p className="text-center text-sm font-medium transition-colors group-hover:text-amber-600">
                {type}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Fillings */}
      <div className="rounded-lg bg-amber-50 p-6">
        <h3 className="mb-4 text-lg font-semibold">Delicious Fillings</h3>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {specificData?.fillings?.map((filling) => (
            <div
              key={filling}
              className="rounded-lg bg-white p-3 text-center transition-shadow hover:shadow-md"
            >
              <div className="mb-1 text-lg">✨</div>
              <span className="text-sm">{filling}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Freshness Guarantee */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex items-center gap-3 rounded-lg border bg-white p-4">
          <Timer className="h-8 w-8 text-amber-500" />
          <div>
            <h4 className="font-semibold">Fresh Daily</h4>
            <p className="text-xs text-gray-600">Baked fresh every morning</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg border bg-white p-4">
          <Award className="h-8 w-8 text-amber-500" />
          <div>
            <h4 className="font-semibold">Premium Quality</h4>
            <p className="text-xs text-gray-600">Finest ingredients only</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-lg border bg-white p-4">
          <Coffee className="h-8 w-8 text-amber-500" />
          <div>
            <h4 className="font-semibold">Perfect with Coffee</h4>
            <p className="text-xs text-gray-600">Your morning companion</p>
          </div>
        </div>
      </div>

      {/* Pastry Products */}
      {pastryProducts.length > 0 && (
        <AllCards
          title="🥐 Featured Pastries"
          subtitle="Fresh from the oven"
          badge="BAKED FRESH"
          cakes={pastryProducts}
          initialDesktop={4}
          initialLaptop={3}
          initialMobile={2}
          left={true}
        />
      )}

      {/* French Pastry Story */}
      <div className="rounded-lg border bg-white p-6">
        <div className="mb-4 flex items-center gap-4">
          <img
            src="https://media.ugcakes.com/french-flag.svg"
            alt="French flag"
            className="h-8 w-8"
          />
          <h3 className="text-lg font-semibold">
            The Art of French Patisserie
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-gray-600">
          Our pastries are crafted using traditional French techniques, with
          layers of buttery, flaky dough and rich, creamy fillings. Each pastry
          is a work of art, made with passion and precision.
        </p>
        <div className="mt-4 flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          ))}
          <span className="ml-2 text-sm">Authentic French recipe</span>
        </div>
      </div>
    </div>
  );
}
