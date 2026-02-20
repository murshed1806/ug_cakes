// src/components/category-specific/CupcakeSpecial.jsx
import React, { useState } from "react";
import AllCards from "./../../Cards/AllCards";
import {
  Cake,
  IceCream,
  Sparkles,
  ShoppingBag,
  Check,
  Heart,
  Star,
} from "lucide-react";

export default function CupcakeSpecial({ category, products, specificData }) {
  const [selectedFlavor, setSelectedFlavor] = useState(null);
  const [quantity, setQuantity] = useState(12);

  const cupcakeProducts = products.filter(
    (p) =>
      p.cakeDetails.category === "Cupcakes" ||
      p.cakeDetails.tags?.includes("cupcakes"),
  );

  const quantities = [6, 12, 24, 48];

  return (
    <div className="mt-12 space-y-8">
      {/* Cupcake Banner */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-pink-400 to-orange-400 p-8 text-white">
        <div className="absolute top-0 right-0 opacity-10">
          <Cake className="h-32 w-32" /> {/* Changed from Cupcake to Cake */}
        </div>
        <div className="relative z-10">
          <div className="mb-4 flex items-center gap-4">
            <IceCream className="h-8 w-8" />
            <h2 className="text-2xl font-bold">
              🧁 Sweet Treats for Every Occasion
            </h2>
          </div>
          <p className="mb-6 max-w-2xl">
            Delicious cupcakes in a variety of flavors, perfect for parties,
            events, or just because!
          </p>
          <button className="rounded-lg bg-white px-6 py-2 font-semibold text-pink-500 transition-colors hover:bg-gray-100">
            Build Your Box
          </button>
        </div>
      </div>

      {/* Flavor Selection */}
      <div>
        <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
          <Sparkles className="h-5 w-5 text-pink-500" />
          Choose Your Flavors
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {specificData?.flavors?.map((flavor) => (
            <div
              key={flavor}
              className={`cursor-pointer rounded-lg border-2 p-3 text-center transition-all ${
                selectedFlavor === flavor
                  ? "border-pink-500 bg-pink-50"
                  : "border-gray-200 hover:border-pink-300"
              }`}
              onClick={() => setSelectedFlavor(flavor)}
            >
              <div className="mb-2 text-3xl">
                {flavor === "Vanilla"
                  ? "🍦"
                  : flavor === "Chocolate"
                    ? "🍫"
                    : flavor === "Red Velvet"
                      ? "🔴"
                      : flavor === "Strawberry"
                        ? "🍓"
                        : flavor === "Lemon"
                          ? "🍋"
                          : "☕"}
              </div>
              <span className="text-sm font-medium">{flavor}</span>
              {selectedFlavor === flavor && (
                <Check className="mx-auto mt-1 h-4 w-4 text-pink-500" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="rounded-lg bg-pink-50 p-6">
        <h3 className="mb-4 text-lg font-semibold">Select Quantity</h3>
        <div className="flex flex-wrap gap-3">
          {quantities.map((qty) => (
            <button
              key={qty}
              onClick={() => setQuantity(qty)}
              className={`rounded-lg px-6 py-3 font-semibold transition-all ${
                quantity === qty
                  ? "bg-pink-500 text-white"
                  : "bg-white text-gray-700 hover:bg-pink-100"
              }`}
            >
              {qty} pcs
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-600">
          Price: ${(quantity * 2.5).toFixed(2)} (${(2.5).toFixed(2)} per
          cupcake)
        </p>
      </div>

      {/* Frosting Types */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Frosting Options</h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {specificData?.frostingTypes?.map((frosting) => (
            <div
              key={frosting}
              className="cursor-pointer rounded-lg border p-4 transition-colors hover:border-pink-300"
            >
              <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-gradient-to-b from-white to-pink-200"></div>
              <p className="text-center font-medium">{frosting}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Occasion Tags */}
      <div className="rounded-lg border bg-white p-6">
        <h3 className="mb-4 text-lg font-semibold">Perfect for</h3>
        <div className="flex flex-wrap gap-2">
          {specificData?.occasions?.map((occasion) => (
            <span
              key={occasion}
              className="rounded-full bg-gradient-to-r from-pink-100 to-orange-100 px-4 py-2 text-sm"
            >
              {occasion}
            </span>
          ))}
        </div>
      </div>

      {/* Cupcake Products */}
      {cupcakeProducts.length > 0 && (
        <AllCards
          title="🧁 Our Cupcake Collection"
          subtitle="Freshly baked daily"
          badge="BESTSELLER"
          cakes={cupcakeProducts}
          initialDesktop={4}
          initialLaptop={3}
          initialMobile={2}
          left={true}
        />
      )}

      {/* Custom Box Builder */}
      <div className="rounded-lg bg-gradient-to-r from-pink-100 to-orange-100 p-6">
        <div className="mb-4 flex items-center gap-4">
          <ShoppingBag className="h-8 w-8 text-pink-500" />
          <div>
            <h3 className="text-xl font-semibold">Custom Cupcake Box</h3>
            <p className="text-sm text-gray-600">
              Mix and match your favorite flavors
            </p>
          </div>
        </div>
        <div className="mb-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-lg border-2 border-dashed border-pink-300 bg-white text-pink-400"
            >
              +
            </div>
          ))}
        </div>
        <button className="w-full rounded-lg bg-pink-500 py-3 font-semibold text-white transition-colors hover:bg-pink-600">
          Create Your Box
        </button>
      </div>
    </div>
  );
}
