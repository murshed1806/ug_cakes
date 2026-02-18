import useAuth from "@/Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ShoppingCart, Truck } from "lucide-react";
import React from "react";
import { Link } from "react-router";

// const cakes = [
//   {
//     title: "Strawberry Topped Cake",
//     id: 1,
//     avater:
//       "https://media.ugcakes.com/products/medium/strawberry-topped-cake-853601764658285-fW1XAIWe6E.webp",
//     price: 11.83,
//     description:
//       "Strawberry Topped Cake from UG Cakes is a delightful masterpiece made with fresh sponge layers, velvety cream, and juicy strawberries. Perfect for romantic celebrations, birthdays, or special surprises, this cake brings a burst of sweetness to every bite. Made with premium ingredients for exceptional taste and freshness Beautifully decorated with hand-arranged strawberries Prompt delivery available inside Kathmandu Valley Guaranteed satisfaction for every celebration Order this irresistible Strawberry Topped Cake today and make your moments truly special with UG Cakes — Nepal’s trusted name for premium celebration cakes.",
//     customizable: true,
//     SKU: "UGC-B-1115",
//     category: "cake",
//     stok: 20
//   },
//   {
//     title: "Strawberry Topped Cake",
//     id: 2,
//     avater:
//       "https://media.ugcakes.com/products/medium/strawberry-topped-cake-853601764658285-fW1XAIWe6E.webp",
//     price: 11.83,
//     description:
//       "Strawberry Topped Cake from UG Cakes is a delightful masterpiece made with fresh sponge layers, velvety cream, and juicy strawberries. Perfect for romantic celebrations, birthdays, or special surprises, this cake brings a burst of sweetness to every bite. Made with premium ingredients for exceptional taste and freshness Beautifully decorated with hand-arranged strawberries Prompt delivery available inside Kathmandu Valley Guaranteed satisfaction for every celebration Order this irresistible Strawberry Topped Cake today and make your moments truly special with UG Cakes — Nepal’s trusted name for premium celebration cakes.",
//     customizable: true,
//     SKU: "UGC-B-1115",
//     category: "cake",
//     stok: 20
//   },
//   {
//     title: "Strawberry Topped Cake",
//     id: 3,
//     avater:
//       "https://media.ugcakes.com/products/medium/strawberry-topped-cake-853601764658285-fW1XAIWe6E.webp",
//     price: 11.83,
//     description:
//       "Strawberry Topped Cake from UG Cakes is a delightful masterpiece made with fresh sponge layers, velvety cream, and juicy strawberries. Perfect for romantic celebrations, birthdays, or special surprises, this cake brings a burst of sweetness to every bite. Made with premium ingredients for exceptional taste and freshness Beautifully decorated with hand-arranged strawberries Prompt delivery available inside Kathmandu Valley Guaranteed satisfaction for every celebration Order this irresistible Strawberry Topped Cake today and make your moments truly special with UG Cakes — Nepal’s trusted name for premium celebration cakes.",
//     customizable: true,
//     SKU: "UGC-B-1115",
//     category: "cake",
//     stok: 20
//   },
//   {
//     title: "Strawberry Topped Cake",
//     id: 4,
//     avater:
//       "https://media.ugcakes.com/products/medium/strawberry-topped-cake-853601764658285-fW1XAIWe6E.webp",
//     price: 11.83,
//     description:
//       "Strawberry Topped Cake from UG Cakes is a delightful masterpiece made with fresh sponge layers, velvety cream, and juicy strawberries. Perfect for romantic celebrations, birthdays, or special surprises, this cake brings a burst of sweetness to every bite. Made with premium ingredients for exceptional taste and freshness Beautifully decorated with hand-arranged strawberries Prompt delivery available inside Kathmandu Valley Guaranteed satisfaction for every celebration Order this irresistible Strawberry Topped Cake today and make your moments truly special with UG Cakes — Nepal’s trusted name for premium celebration cakes.",
//     customizable: true,
//     SKU: "UGC-B-1115",
//     category: "cake",
//     stok: 20
//   },
// ];

const BestSellers = () => {

  const { user, signOutUser } = useAuth();
  console.log(user, 'user info');
  // cakes data fetching
  const { data: cakes } = useQuery({
    queryKey: ["cakes"],
    queryFn: async () => {
      const res = await axios.get("/cakes.json");
      // console.log(res.data)
      return res.data;
    },
  });

  //   data console
  console.log("data:", cakes);

  return (
    <>
      {/* header text */}
      <div className="space-y-2.5">
        <h2 className="text-4xl font-bold text-center">
          🔥 Recently Best Sellers
        </h2>
        <p className="font-normal text-center">
          These trending cakes are flying off our shelves - Don't miss out!
        </p>
        <p className="font-normal text-center">Last updated: Feb 14, 2:14 AM</p>
      </div>

      <div className="flex justify-center my-10">
        {user ? (
          <>
            <div className="flex items-center gap-5">
              <button onClick={() => {
                signOutUser();
              }} className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-lg">Logout</button>
              <p>{user?.email}</p>
              <p>{user?.displayName}</p>
            </div>
          </>
        ) : (
          <Link to="/login"><button className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-lg">Login</button></Link>
        )}
      </div>

      {/* cards content */}
     <div className="my-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {/* cakes map & show cards */}
  {cakes?.map((cake) => {
    console.log(cake);
    const cakeData = cake.cakeDetails; // Access the cakeDetails object
    
    return (
      <Link
        to={`/cake/${cakeData?.id}`}
        key={cakeData?.id}
        className="border border-gray-200 hover:border-purple-300 cursor-pointer rounded-xl group shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden h-48 sm:h-56">
          <img
            src={cakeData?.avatar}
            alt={cakeData?.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          
          {/* Discount Badge */}
          {cakeData?.pricing?.discountPercentage > 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {cakeData?.pricing?.discountPercentage}% OFF
            </div>
          )}
          
          {/* Rating Badge */}
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-yellow-600 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
            <span>⭐</span>
            <span>{cakeData?.rating?.value}</span>
            <span className="text-gray-400">({cakeData?.rating?.count})</span>
          </div>
        </div>

        {/* Content Container */}
        <div className="px-3 py-4 space-y-3">
          {/* Title and Category */}
          <div>
            <h3 className="text-lg font-semibold group-hover:text-purple-600 line-clamp-1">
              {cakeData?.title}
            </h3>
            <p className="text-xs text-gray-500 mt-1">{cakeData?.category}</p>
          </div>

          {/* Features Tags */}
          <div className="flex flex-wrap gap-1">
            {cakeData?.features?.slice(0, 2).map((feature, index) => (
              <span 
                key={index}
                className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
              >
                {feature.split(' ')[0]}...
              </span>
            ))}
            {cakeData?.customizable && (
              <span className="text-[10px] bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">
                Customizable
              </span>
            )}
          </div>

          {/* Stock Status */}
          <div className="flex items-center justify-between">
            <p className="bg-orange-100 text-orange-600 w-20 text-center rounded-full text-sm font-medium px-2 py-1">
              🔥 {cakeData?.stock} sold
            </p>
            
            {/* Stock Availability */}
            {cakeData?.stock > 10 ? (
              <span className="text-green-600 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                In Stock
              </span>
            ) : cakeData?.stock > 0 ? (
              <span className="text-orange-600 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
                Only {cakeData?.stock} left
              </span>
            ) : (
              <span className="text-red-600 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                Out of Stock
              </span>
            )}
          </div>

          {/* Price Section */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-purple-600">
                ${cakeData?.pricing?.discounted?.toFixed(2)}
              </h2>
              {cakeData?.pricing?.original && (
                <p className="text-xs text-gray-400 line-through">
                  ${cakeData?.pricing?.original?.toFixed(2)}
                </p>
              )}
            </div>
            
            {/* Add to Cart Button (Optional) */}
            <button className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors">
              <ShoppingCart className="h-4 w-4" />
            </button>
          </div>

          {/* Delivery Info (Optional) */}
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <Truck className="h-3 w-3" />
            Free delivery
          </p>
        </div>
      </Link>
    );
  })}
</div>
    </>
  );
};

export default BestSellers;
