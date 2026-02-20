// src/components/category-specific/PhotoSpecial.jsx
import React, { useState } from "react";
import AllCards from './../../Cards/AllCards';
import { Camera, Image, Upload, Heart, Sparkles, Check } from "lucide-react";

export default function PhotoSpecial({ category, products, specificData }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const photoSpecials = products.filter(
    (p) =>
      p.cakeDetails.category === "Photo Cakes" ||
      p.cakeDetails.tags?.includes("photo"),
  );

  return (
    <div className="mt-12 space-y-8">
      {/* Photo Banner */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 p-8 text-white">
        <div className="absolute top-0 right-0 opacity-10">
          <Camera className="h-32 w-32" />
        </div>
        <div className="relative z-10">
          <div className="mb-4 flex items-center gap-4">
            <Image className="h-8 w-8" />
            <h2 className="text-2xl font-bold">📸 Turn Memories Into Cakes</h2>
          </div>
          <p className="mb-6 max-w-2xl">
            Upload any photo and we'll print it on a delicious cake. Perfect for
            birthdays, anniversaries, and special moments.
          </p>
          <button className="rounded-lg bg-white px-6 py-2 font-semibold text-indigo-500 transition-colors hover:bg-gray-100">
            Upload Your Photo
          </button>
        </div>
      </div>

      {/* Image Upload Preview */}
      <div className="rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
          <Upload className="h-4 w-4 text-indigo-500" />
          Try It Yourself
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div
            className={`cursor-pointer rounded-lg border-2 border-dashed p-8 text-center transition-colors ${
              selectedImage
                ? "border-green-500 bg-green-50"
                : "border-gray-300 hover:border-indigo-500"
            }`}
            onClick={() => setSelectedImage("demo")}
          >
            {selectedImage ? (
              <div>
                <Check className="mx-auto mb-3 h-12 w-12 text-green-500" />
                <p className="font-medium text-green-600">Image Ready!</p>
                <p className="mt-2 text-xs text-gray-500">Click to change</p>
              </div>
            ) : (
              <div>
                <Upload className="mx-auto mb-3 h-12 w-12 text-gray-400" />
                <p className="font-medium">Click to upload a photo</p>
                <p className="mt-2 text-xs text-gray-500">
                  PNG, JPG up to 10MB
                </p>
              </div>
            )}
          </div>
          <div className="rounded-lg bg-white p-4">
            <h4 className="mb-2 font-semibold">Preview</h4>
            <div className="flex aspect-square items-center justify-center rounded-lg bg-gray-100">
              {selectedImage ? (
                <div className="text-center">
                  <Heart className="mx-auto mb-2 h-8 w-8 text-red-500" />
                  <p className="text-sm">Your photo will appear here</p>
                </div>
              ) : (
                <Camera className="h-12 w-12 text-gray-300" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Image Types */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Perfect for Photos</h3>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {specificData?.imageTypes?.map((type) => (
            <div
              key={type}
              className="rounded-lg border bg-white p-3 text-center transition-colors hover:border-indigo-300"
            >
              <div className="mb-2 text-2xl">
                {type.includes("Family")
                  ? "👨‍👩‍👧"
                  : type.includes("Couple")
                    ? "💑"
                    : type.includes("Child")
                      ? "👶"
                      : type.includes("Pet")
                        ? "🐕"
                        : "🏢"}
              </div>
              <span className="text-xs">{type}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Shape Options */}
      <div className="rounded-lg bg-indigo-50 p-6">
        <h3 className="mb-4 text-lg font-semibold">Choose Your Shape</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {specificData?.shapes?.map((shape) => (
            <div
              key={shape}
              className="cursor-pointer rounded-lg bg-white p-4 text-center transition-shadow hover:shadow-md"
            >
              <div
                className={`mx-auto mb-2 h-16 w-16 ${
                  shape === "Round"
                    ? "rounded-full"
                    : shape === "Square"
                      ? "rounded-lg"
                      : shape === "Heart"
                        ? "rotate-45 transform rounded-full"
                        : "rounded"
                } bg-gradient-to-br from-indigo-200 to-purple-200`}
              ></div>
              <span className="font-medium">{shape}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Cake Products */}
      {photoSpecials.length > 0 && (
        <AllCards
          title="📷 Photo Cake Gallery"
          subtitle="See what others have created"
          badge="PERSONALIZED"
          cakes={photoSpecials}
          initialDesktop={4}
          initialLaptop={3}
          initialMobile={2}
          left={true}
        />
      )}

      {/* Tips Section */}
      <div className="rounded-lg border bg-white p-6">
        <h3 className="mb-4 flex items-center gap-2 font-semibold">
          <Sparkles className="h-4 w-4 text-yellow-500" />
          Tips for Best Results
        </h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            Use high-resolution photos (at least 1MB)
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            Avoid dark or blurry images
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            Portrait orientation works best for round cakes
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            Allow 2-3 days for photo cake preparation
          </li>
        </ul>
      </div>
    </div>
  );
}
