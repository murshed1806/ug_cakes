// src/components/category-specific/KidsSpecial.jsx
import React from "react";
import AllCards from './../../Cards/AllCards';
import {
  Baby,
  Rocket,
  Gamepad2,
  Palette,
  Star,
  PartyPopper,
} from "lucide-react";

export default function KidsSpecial({ category, products, specificData }) {
  const kidsSpecials = products.filter(
    (p) =>
      p.cakeDetails.category === "Kids Cakes" ||
      p.cakeDetails.tags?.includes("kids"),
  );

  return (
    <div className="mt-12 space-y-8">
      {/* Kids Banner */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-white">
        <div className="absolute top-0 right-0 opacity-10">
          <PartyPopper className="h-32 w-32" />
        </div>
        <div className="relative z-10">
          <div className="mb-4 flex items-center gap-4">
            <Baby className="h-8 w-8" />
            <h2 className="text-2xl font-bold">
              🎈 Magical Cakes for Little Ones
            </h2>
          </div>
          <p className="mb-6 max-w-2xl">
            Bring their favorite characters to life with our fun and colorful
            kids' cakes!
          </p>
          <button className="rounded-lg bg-white px-6 py-2 font-semibold text-blue-500 transition-colors hover:bg-gray-100">
            Explore Kids Collection
          </button>
        </div>
      </div>

      {/* Character Selection */}
      <div>
        <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
          <Rocket className="h-5 w-5 text-blue-500" />
          Popular Characters
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {specificData?.characters?.map((character) => (
            <div
              key={character}
              className="group cursor-pointer rounded-lg border-2 border-blue-100 bg-white p-4 text-center transition-all hover:border-blue-300 hover:shadow-md"
            >
              <div className="mb-2 text-3xl">
                {character === "Spider-Man"
                  ? "🕷️"
                  : character === "Frozen"
                    ? "❄️"
                    : character === "Paw Patrol"
                      ? "🐾"
                      : character === "Superman"
                        ? "🦸"
                        : character === "Batman"
                          ? "🦇"
                          : "🐭"}
              </div>
              <span className="text-xs font-medium">{character}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Age Ranges */}
      <div className="rounded-lg bg-blue-50 p-6">
        <h3 className="mb-4 text-lg font-semibold">Cakes by Age</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {specificData?.ageRanges?.map((age) => (
            <div
              key={age}
              className="flex items-center gap-3 rounded-lg bg-white p-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <span className="font-bold text-blue-500">
                  {age.split("-")[0]}
                </span>
              </div>
              <div>
                <p className="font-semibold">Age {age}</p>
                <p className="text-xs text-gray-500">
                  Perfect for {age} year olds
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Theme Categories */}
      <div>
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
          <Palette className="h-4 w-4 text-purple-500" />
          Fun Themes
        </h3>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6">
          {specificData?.themes?.map((theme) => (
            <div
              key={theme}
              className="rounded-lg border p-3 text-center transition-colors hover:bg-purple-50"
            >
              <div className="mb-1 text-2xl">
                {theme === "Superhero"
                  ? "🦸"
                  : theme === "Princess"
                    ? "👸"
                    : theme === "Cartoon"
                      ? "📺"
                      : theme === "Animal"
                        ? "🐯"
                        : theme === "Dinosaur"
                          ? "🦖"
                          : "🚀"}
              </div>
              <span className="text-xs">{theme}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Kids Products */}
      {kidsSpecials.length > 0 && (
        <AllCards
          title="🧸 Popular Kids Cakes"
          subtitle="Most loved by children"
          badge="KIDS FAVORITE"
          cakes={kidsSpecials}
          initialDesktop={4}
          initialLaptop={3}
          initialMobile={2}
          left={true}
        />
      )}

      {/* Party Ideas */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="group relative overflow-hidden rounded-lg">
          <img
            src="https://media.ugcakes.com/kids/party-1.webp"
            alt="Birthday party"
            className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4">
            <p className="font-semibold text-white">First Birthday</p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg">
          <img
            src="https://media.ugcakes.com/kids/party-2.webp"
            alt="Kids party"
            className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4">
            <p className="font-semibold text-white">Superhero Theme</p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg">
          <img
            src="https://media.ugcakes.com/kids/party-3.webp"
            alt="Princess party"
            className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4">
            <p className="font-semibold text-white">Princess Theme</p>
          </div>
        </div>
      </div>
    </div>
  );
}
