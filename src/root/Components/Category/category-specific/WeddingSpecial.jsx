// src/components/category-specific/WeddingSpecial.jsx
import React from "react";
import AllCards from './../../Cards/AllCards';
import { Heart, Diamond, Sparkles, Cake, Star } from "lucide-react";

export default function WeddingSpecial({ category, products, specificData }) {
  const weddingSpecials = products.filter(
    (p) =>
      p.cakeDetails.title.toLowerCase().includes("wedding") ||
      p.cakeDetails.tags?.includes("wedding"),
  );

  return (
    <div className="mt-12 space-y-8">
      {/* Wedding Banner */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-rose-400 to-pink-500 p-8 text-white">
        <div className="absolute top-0 right-0 opacity-10">
          <Heart className="h-32 w-32" />
        </div>
        <div className="relative z-10">
          <div className="mb-4 flex items-center gap-4">
            <Diamond className="h-8 w-8" />
            <h2 className="text-2xl font-bold">💍 Dream Wedding Collection</h2>
          </div>
          <p className="mb-6 max-w-2xl">
            Make your special day even more memorable with our elegant wedding
            cakes, designed to perfection.
          </p>
          <button className="rounded-lg bg-white px-6 py-2 font-semibold text-rose-500 transition-colors hover:bg-gray-100">
            Book a Consultation
          </button>
        </div>
      </div>

      {/* Tier Options */}
      <div>
        <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
          <Cake className="h-5 w-5 text-rose-500" />
          Choose Your Tier Style
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {specificData?.tierOptions?.map((tier) => (
            <div
              key={tier}
              className="group cursor-pointer rounded-lg border-2 border-rose-100 bg-white p-4 transition-all hover:border-rose-300"
            >
              <div className="mb-3 flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-rose-50 to-pink-50">
                <Cake className="h-12 w-12 text-rose-400 transition-transform group-hover:scale-110" />
              </div>
              <h4 className="text-center font-semibold">{tier}</h4>
              <p className="mt-1 text-center text-xs text-gray-500">
                Starting from $149
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Color Options */}
      <div className="rounded-lg bg-rose-50 p-6">
        <h3 className="mb-4 text-lg font-semibold">Popular Wedding Colors</h3>
        <div className="flex flex-wrap gap-3">
          {specificData?.colors?.map((color) => (
            <div
              key={color}
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"
            >
              <div
                className={`h-4 w-4 rounded-full ${
                  color === "White"
                    ? "border bg-gray-100"
                    : color === "Ivory"
                      ? "border bg-amber-50"
                      : color === "Gold"
                        ? "bg-yellow-400"
                        : color === "Rose Gold"
                          ? "bg-pink-300"
                          : color === "Blush Pink"
                            ? "bg-pink-200"
                            : "bg-blue-900"
                }`}
              ></div>
              <span>{color}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cake Toppers */}
      <div>
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
          <Sparkles className="h-4 w-4 text-rose-500" />
          Premium Cake Toppers
        </h3>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {specificData?.cakeToppers?.map((topper) => (
            <div
              key={topper}
              className="rounded-lg border p-3 text-center transition-colors hover:border-rose-300"
            >
              <div className="mb-2 text-2xl">
                {topper.includes("Bride")
                  ? "👰"
                  : topper.includes("Mr")
                    ? "💑"
                    : topper.includes("Custom")
                      ? "✨"
                      : "🌸"}
              </div>
              <span className="text-sm font-medium">{topper}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Wedding Gallery */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-rose-100 to-pink-100"
          >
            <img
              src={`https://media.ugcakes.com/wedding/gallery-${i}.webp`}
              alt={`Wedding cake design ${i}`}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Wedding Special Products */}
      {weddingSpecials.length > 0 && (
        <AllCards
          title="💕 Featured Wedding Cakes"
          subtitle="Our most popular wedding cake designs"
          badge="BESTSELLER"
          cakes={weddingSpecials}
          initialDesktop={3}
          initialLaptop={2}
          initialMobile={1}
          left={true}
        />
      )}

      {/* Testimonial */}
      <div className="rounded-r-lg border-l-4 border-rose-500 bg-white p-6 shadow-md">
        <div className="flex items-start gap-4">
          <div className="text-4xl text-rose-500">"</div>
          <div>
            <p className="mb-3 text-gray-700 italic">
              The wedding cake was absolutely stunning! It was the centerpiece
              of our reception and tasted even better than it looked. Thank you
              for making our day so special!
            </p>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
                <span className="font-bold text-rose-500">JD</span>
              </div>
              <div>
                <p className="font-semibold">Jessica & David</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-3 w-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
