import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  Truck, 
  Shield, 
  RotateCcw,
  Minus,
  Plus,
  Check,
  Share2,
  Clock,
  Package
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from '@/Hooks/use-toast';

const CakeDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // cakes data fetching
  const { data: cakes, isLoading } = useQuery({
    queryKey: ['cakes'],
    queryFn: async () => {
      const res = await axios.get('/cakes.json');
      return res.data;
    }
  });

  // Find the cake - FIXED: Now accessing cake.cakeDetails
  const cakeItem = cakes?.find((item) => item?.cakeDetails?.id == id);
  const cake = cakeItem?.cakeDetails; // Extract the cakeDetails object

  // Get related products using the new structure
  const relatedProducts = cakes
    ?.filter(item => item?.cakeDetails?.id != id)
    ?.slice(0, 4)
    ?.map(item => item.cakeDetails);

  // Get additional images
  const cakeImages = cake ? [
    cake.avatar,
    ...(cake.additionalImages || [])
  ] : [];

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${quantity} × ${cake?.title} added to your cart`,
      duration: 3000,
    });
  };

  const handleBuyNow = () => {
    toast({
      title: "Proceeding to checkout",
      description: "Redirecting to checkout page...",
      duration: 3000,
    });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: isWishlisted ? "Item removed from your wishlist" : "Item added to your wishlist",
      duration: 2000,
    });
  };

  const incrementQuantity = () => {
    if (quantity < (cake?.stock || 10)) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <Skeleton className="h-[400px] lg:h-[600px] w-full rounded-xl" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!cake) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Cake Not Found</h2>
        <p className="text-gray-600 mb-8">The cake you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => window.history.back()}>Go Back</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          <span className="hover:text-purple-600 cursor-pointer">Home</span> / 
          <span className="hover:text-purple-600 cursor-pointer">Cakes</span> / 
          <span className="text-gray-700 dark:text-gray-300 font-medium">{cake.title}</span>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
            {/* Left side - Images */}
            <div className="space-y-4">
              <div className="relative group">
                <img
                  src={cakeImages[selectedImage] || cake.avatar}
                  alt={cake.title}
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-xl shadow-md"
                  onError={(e) => {
                    e.target.src = cake.avatar; // Fallback to main image
                  }}
                />
                {/* Wishlist button */}
                <button
                  onClick={handleWishlist}
                  className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                  <Heart 
                    className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600 dark:text-gray-300'}`} 
                  />
                </button>
                
                {/* Share button */}
                <button className="absolute top-4 left-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-transform">
                  <Share2 className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </button>
              </div>

              {/* Thumbnail images */}
              <div className="grid grid-cols-4 gap-2">
                {cakeImages.slice(0, 4).map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-purple-600 scale-105' 
                        : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${cake.title} ${index + 1}`}
                      className="w-full h-20 object-cover"
                      onError={(e) => {
                        e.target.src = cake.avatar; // Fallback to main image
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Details */}
            <div className="space-y-6">
              {/* Title and basic info */}
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {cake.title}
                </h1>
                
                <div className="flex items-center gap-4 flex-wrap">
                  {/* Rating - Using new structure */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= (cake.rating?.value || 4) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                      ({cake.rating?.value || 4.0}) • {cake.rating?.count || 128} reviews
                    </span>
                  </div>

                  {/* SKU */}
                  <Badge variant="outline" className="text-xs">
                    SKU: {cake.SKU}
                  </Badge>
                </div>
              </div>

              {/* Price - Using new pricing structure */}
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  ${cake.pricing?.discounted?.toFixed(2) || cake.price?.toFixed(2)}
                </span>
                {cake.pricing?.original && (
                  <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                    ${cake.pricing?.original?.toFixed(2)}
                  </span>
                )}
                {cake.pricing?.discountPercentage > 0 && (
                  <Badge className="bg-green-500 text-white">{cake.pricing?.discountPercentage}% OFF</Badge>
                )}
              </div>

              {/* Stock status - Using stock from new structure */}
              <div className="flex items-center gap-2">
                {cake.stock > 0 ? (
                  <>
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600 dark:text-green-400">
                      In Stock ({cake.stock} available)
                    </span>
                  </>
                ) : (
                  <>
                    <Clock className="h-4 w-4 text-red-500" />
                    <span className="text-sm text-red-600 dark:text-red-400">
                      Out of Stock
                    </span>
                  </>
                )}
              </div>

              {/* Customizable badge */}
              {cake.customizable && (
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                  Customizable
                </Badge>
              )}

              <Separator />

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Description
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {cake.description}
                </p>
              </div>

              <Separator />

              {/* Quantity selector */}
              <div className="flex items-center gap-4">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Quantity:</span>
                <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                  <button
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className="px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-6 py-2 text-center min-w-[60px] font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    disabled={quantity >= cake.stock}
                    className="px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Max: {cake.stock}
                </span>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={cake.stock === 0}
                  className="bg-purple-600 hover:bg-purple-700 text-white h-12 text-lg"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  onClick={handleBuyNow}
                  disabled={cake.stock === 0}
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/30 h-12 text-lg"
                >
                  Buy Now
                </Button>
              </div>

              {/* Delivery info - Using new structure */}
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 space-y-3">
                {cake.deliveryInfo?.map((info, index) => {
                  const IconComponent = {
                    'Truck': Truck,
                    'Shield': Shield,
                    'RotateCcw': RotateCcw,
                    'Package': Package
                  }[info.icon] || Truck;
                  
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <IconComponent className="h-5 w-5 text-purple-600" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {info.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Category info */}
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">Category:</span> {cake.category}
              </div>
            </div>
          </div>

          {/* Additional tabs section - Using new structure */}
          <div className="border-t border-gray-600 dark:border-gray-700 p-6 lg:p-8 w-full">
            <div className="max-w-3xl mx-auto">
              <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-15">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Product Details</h4>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        {cake.features?.map((feature, index) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Specifications</h4>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        {cake.specifications?.map((spec, index) => (
                          <li key={index}>• {spec.label}: {spec.value}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="nutrition" className="mt-6">
                  <p className="text-gray-600 dark:text-gray-400">
                    Nutritional information per serving (100g):
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    {cake.nutritionInfo?.map((item, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="reviews" className="mt-6">
                  <p className="text-gray-600 dark:text-gray-400">
                    Customer reviews coming soon...
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Related products section */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-6 lg:p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              You Might Also Like
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts?.map((relatedCake) => (
                <div
                  key={relatedCake.id}
                  className="group cursor-pointer"
                  onClick={() => window.location.href = `/cake/${relatedCake.id}`}
                >
                  <div className="relative overflow-hidden rounded-lg mb-2">
                    <img
                      src={relatedCake.avatar}
                      alt={relatedCake.title}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {relatedCake.title}
                  </h4>
                  <p className="text-sm text-purple-600 dark:text-purple-400">
                    ${relatedCake.pricing?.discounted?.toFixed(2) || relatedCake.price?.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeDetails;