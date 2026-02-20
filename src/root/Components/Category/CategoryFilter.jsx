// src/components/CategoryFilter.jsx
import React, { useState } from "react";
// Correct imports - import each component individually
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";import { Filter, X } from "lucide-react";

export default function CategoryFilter({ filters, setFilters, category }) {
  const [isOpen, setIsOpen] = useState(false);

  const clearFilters = () => {
    setFilters({
      sortBy: "popular",
      priceRange: [0, 200],
      customizable: false,
      inStock: false,
      dietary: [],
    });
  };

  const FilterContent = () => (
    <div className="space-y-6 p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Clear all
        </Button>
      </div>

      <div>
        <h4 className="mb-3 font-medium">Sort By</h4>
        <RadioGroup
          value={filters.sortBy}
          onValueChange={(value) => setFilters({ ...filters, sortBy: value })}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="popular" id="popular" />
            <Label htmlFor="popular">Most Popular</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="price-low" id="price-low" />
            <Label htmlFor="price-low">Price: Low to High</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="price-high" id="price-high" />
            <Label htmlFor="price-high">Price: High to Low</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="rating" id="rating" />
            <Label htmlFor="rating">Highest Rated</Label>
          </div>
        </RadioGroup>
      </div>

      <Separator />

      <div>
        <h4 className="mb-3 font-medium">Price Range</h4>
        <Slider
          defaultValue={[filters.priceRange[0], filters.priceRange[1]]}
          max={200}
          step={5}
          onValueChange={(value) =>
            setFilters({ ...filters, priceRange: value })
          }
          className="mb-2"
        />
        <div className="flex justify-between text-sm">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>

      <Separator />

      <div>
        <h4 className="mb-3 font-medium">Availability</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="inStock"
              checked={filters.inStock}
              onCheckedChange={(checked) =>
                setFilters({ ...filters, inStock: checked })
              }
            />
            <Label htmlFor="inStock">In Stock Only</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="customizable"
              checked={filters.customizable}
              onCheckedChange={(checked) =>
                setFilters({ ...filters, customizable: checked })
              }
            />
            <Label htmlFor="customizable">Customizable Only</Label>
          </div>
        </div>
      </div>

      {category?.filters?.dietary && (
        <>
          <Separator />
          <div>
            <h4 className="mb-3 font-medium">Dietary</h4>
            <div className="space-y-2">
              {category.filters.dietary.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    id={option}
                    checked={filters.dietary?.includes(option)}
                    onCheckedChange={(checked) => {
                      const newDietary = checked
                        ? [...(filters.dietary || []), option]
                        : (filters.dietary || []).filter((d) => d !== option);
                      setFilters({ ...filters, dietary: newDietary });
                    }}
                  />
                  <Label htmlFor={option}>{option}</Label>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );

  return (
    <>
      <div className="mb-4 lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <Filter className="mr-2 h-4 w-4" />
              Filters & Sort
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[300px] overflow-y-auto sm:w-[400px]"
          >
            <FilterContent />
          </SheetContent>
        </Sheet>
      </div>

      <div className="sticky top-20 hidden rounded-lg border bg-white p-4 lg:block">
        <FilterContent />
      </div>

      {(filters.customizable ||
        filters.inStock ||
        filters.dietary?.length > 0) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {filters.customizable && (
            <span className="flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600">
              Customizable
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => setFilters({ ...filters, customizable: false })}
              />
            </span>
          )}
          {filters.inStock && (
            <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm text-green-600">
              In Stock
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => setFilters({ ...filters, inStock: false })}
              />
            </span>
          )}
          {filters.dietary?.map((d) => (
            <span
              key={d}
              className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600"
            >
              {d}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() =>
                  setFilters({
                    ...filters,
                    dietary: filters.dietary.filter((item) => item !== d),
                  })
                }
              />
            </span>
          ))}
        </div>
      )}
    </>
  );
}
