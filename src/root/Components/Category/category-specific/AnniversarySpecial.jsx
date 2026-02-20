// src/components/category-specific/AnniversarySpecial.jsx
import React from 'react';
import { Heart, Calendar, Gift, Clock, Star } from 'lucide-react';
import AllCards from './../../Cards/AllCards';

export default function AnniversarySpecial({ category, products, specificData }) {
  const anniversarySpecials = products.filter(p => 
    p.cakeDetails.title.toLowerCase().includes('anniversary') ||
    p.cakeDetails.tags?.includes('anniversary')
  );

  return (
    <div className="mt-12 space-y-8">
      {/* Anniversary Banner */}
      <div className="bg-gradient-to-r from-red-500 to-rose-400 rounded-lg p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <Heart className="w-32 h-32" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <Calendar className="w-8 h-8" />
            <h2 className="text-2xl font-bold">💕 Celebrate Your Love Story</h2>
          </div>
          <p className="mb-6 max-w-2xl">From 1st to 50th anniversary, find the perfect cake to celebrate your journey together.</p>
          <button className="bg-white text-red-500 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Explore Milestone Cakes
          </button>
        </div>
      </div>

      {/* Milestone Years */}
      <div>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-red-500" />
          Anniversary Milestones
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {specificData?.milestones?.map((year) => (
            <div key={year} className="bg-white border-2 border-red-100 rounded-lg p-4 text-center hover:border-red-300 hover:shadow-md transition-all cursor-pointer group">
              <span className="text-3xl font-bold text-red-500 group-hover:scale-110 inline-block transition-transform">
                {year}
              </span>
              <p className="text-xs text-gray-600 mt-1">Anniversary</p>
            </div>
          ))}
        </div>
      </div>

      {/* Romantic Themes */}
      <div className="bg-red-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Romantic Themes</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {specificData?.romanticThemes?.map((theme) => (
            <div key={theme} className="bg-white p-3 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">
                {theme === 'Heart' ? '❤️' :
                 theme === 'Rose' ? '🌹' :
                 theme === 'Love Birds' ? '🕊️' :
                 theme === 'Eternal Love' ? '∞' : '💍'}
              </div>
              <span className="text-xs font-medium">{theme}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Message Templates */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Popular Anniversary Messages</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {specificData?.messageTemplates?.map((message) => (
            <div key={message} className="border rounded-lg p-4 hover:border-red-300 cursor-pointer transition-colors">
              <p className="text-gray-700">{message}</p>
              <button className="text-xs text-red-500 mt-2 hover:underline">Use this message</button>
            </div>
          ))}
        </div>
      </div>

      {/* Anniversary Products */}
      {anniversarySpecials.length > 0 && (
        <AllCards 
          title="💝 Anniversary Specials"
          subtitle="Perfect cakes for your celebration"
          badge="ROMANTIC"
          cakes={anniversarySpecials}
          initialDesktop={4}
          initialLaptop={3}
          initialMobile={2}
          left={true}
        />
      )}

      {/* Gift Guide */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-lg">
          <Gift className="w-8 h-8 text-red-500 mb-3" />
          <h4 className="font-semibold mb-2">1st Anniversary</h4>
          <p className="text-sm text-gray-600">Traditional gift is paper. Try our photo cakes!</p>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-lg">
          <Gift className="w-8 h-8 text-red-500 mb-3" />
          <h4 className="font-semibold mb-2">25th Anniversary</h4>
          <p className="text-sm text-gray-600">Silver theme cakes with elegant designs</p>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-lg">
          <Gift className="w-8 h-8 text-red-500 mb-3" />
          <h4 className="font-semibold mb-2">50th Anniversary</h4>
          <p className="text-sm text-gray-600">Golden celebration cakes with gold leaf</p>
        </div>
      </div>
    </div>
  );
}