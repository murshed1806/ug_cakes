// src/components/CategorySidebar.jsx
import React from 'react';
import { NavLink } from "react-router-dom";
import { categories } from "@/data/data";

export default function CategorySidebar() {
  return (
    <div className="bg-white rounded-lg border p-4">
      <h3 className="font-semibold text-lg mb-4">Categories</h3>
      <nav className="space-y-2">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/categories/${category.slug}`}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md transition-colors ${
                isActive 
                  ? "bg-purple-600 text-white" 
                  : "hover:bg-purple-50 text-gray-700"
              }`
            }
          >
            <div className="flex items-center justify-between">
              <span>{category.name}</span>
              <span className="text-sm opacity-75">
                ({category.productCount})
              </span>
            </div>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}