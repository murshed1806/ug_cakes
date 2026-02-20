export const navigateLinks = [
  {
    id: 1,
    label: "Home",
    icon: "🏠",
    path: "/"
  },
  {
    id: 2,
    label: "Bakery Training",
    icon: "👩‍🍳",
    path: "/bakery-training"
  },
  {
    id: 3,
    label: "Sugarless Cakes",
    icon: "🍯",
    path: "/categories/sugarless-cakes",
    categoryId: 9,
    isCategory: true
  },
  {
    id: 4,
    label: "Eggless Cakes",
    icon: "🥚",
    path: "/categories/eggless-cakes",
    categoryId: 10,
    isCategory: true
  },
  {
    id: 5,
    label: "Wedding Cakes",
    icon: "💑",
    path: "/categories/wedding-cakes",
    categoryId: 2,
    isCategory: true
  },
  {
    id: 6,
    label: "Quick Cakes",
    icon: "🎂",
    path: "/categories/quick-cakes",
    categoryId: 11,
    isCategory: true
  },
  {
    id: 7,
    label: "Gifts",
    icon: "🎁",
    path: "/gifts"
  },
  {
    id: 8,
    label: "Wish Generator",
    icon: "✨",
    path: "/wish-generator"
  },
  {
    id: 9,
    label: "Careers",
    icon: "💼",
    path: "/careers"
  },
];
// data.js - Complete data file for the e-commerce category system

// ==================== CATEGORIES DATA ====================

export const categories = [
  {
    id: 1,
    name: "Birthday Cakes",
    slug: "birthday-cakes",
    description: "Celebrate with our delicious birthday cakes",
    image: "https://media.ugcakes.com/categories/birthday-cakes.webp",
    productCount: 24,
    type: "Cakes",
    metaTitle: "Birthday Cakes - Custom Designs for Every Age",
    metaDescription: "Find the perfect birthday cake with customizable designs for kids, teens, and adults. Order online with free delivery.",
    heroImage: "https://media.ugcakes.com/categories/birthday-hero.webp",
    heroTitle: "Make Their Birthday Special",
    heroDescription: "Customize your cake with photos, messages, and designs",
    filters: {
      customizable: true,
      dietary: ["Eggless", "Gluten-Free", "Vegan"],
      sizes: ["0.5kg", "1kg", "1.5kg", "2kg", "3kg"],
      themes: ["Cartoon", "Elegant", "Photo Cake", "Number Cake", "Character"],
      priceRanges: [
        { min: 0, max: 25, label: "Under $25" },
        { min: 25, max: 50, label: "$25 - $50" },
        { min: 50, max: 100, label: "$50 - $100" },
        { min: 100, max: 500, label: "$100+" }
      ]
    },
    specificComponents: ["BirthdaySpecial"], // Will be mapped to actual components
    seo: {
      keywords: ["birthday cakes", "happy birthday cake", "custom birthday cake", "kids birthday cake"],
      schema: "Product",
      image: "https://media.ugcakes.com/categories/birthday-seo.jpg"
    }
  },
  {
    id: 2,
    name: "Wedding Cakes",
    slug: "wedding-cakes",
    description: "Elegant cakes for your special day",
    image: "https://media.ugcakes.com/categories/wedding-cakes.webp",
    productCount: 18,
    type: "Cakes",
    metaTitle: "Wedding Cakes - Elegant Designs for Your Wedding",
    metaDescription: "Beautiful wedding cakes designed for your perfect day. Choose from classic, modern, and rustic styles.",
    heroImage: "https://media.ugcakes.com/categories/wedding-hero.webp",
    heroTitle: "Your Dream Wedding Cake",
    heroDescription: "From classic to contemporary designs",
    filters: {
      customizable: true,
      tiers: ["Single", "2-Tier", "3-Tier", "4-Tier", "5-Tier"],
      flavors: ["Vanilla", "Chocolate", "Red Velvet", "Fruit", "Lemon"],
      dietary: ["Eggless", "Gluten-Free"],
      colors: ["White", "Ivory", "Gold", "Rose Gold", "Blush Pink"]
    },
    specificComponents: ["WeddingSpecial"],
    seo: {
      keywords: ["wedding cakes", "bridal cakes", "wedding cake designs", "tiered cakes"],
      schema: "Product",
      image: "https://media.ugcakes.com/categories/wedding-seo.jpg"
    }
  },
  {
    id: 3,
    name: "Anniversary Cakes",
    slug: "anniversary-cakes",
    description: "Celebrate love with our anniversary specials",
    image: "https://media.ugcakes.com/categories/anniversary-cakes.webp",
    productCount: 15,
    type: "Cakes",
    metaTitle: "Anniversary Cakes - Celebrate Love",
    metaDescription: "Romantic cakes for your anniversary celebration. Personalized designs for every milestone.",
    heroImage: "https://media.ugcakes.com/categories/anniversary-hero.webp",
    heroTitle: "Celebrate Your Love Story",
    heroDescription: "Personalized cakes for every anniversary milestone",
    filters: {
      customizable: true,
      themes: ["Romantic", "Elegant", "Modern", "Classic", "Heart-Shaped"],
      years: ["1st", "5th", "10th", "25th", "50th"],
      dietary: ["Eggless", "Vegan"]
    },
    specificComponents: ["AnniversarySpecial"],
    seo: {
      keywords: ["anniversary cakes", "romantic cakes", "love cakes", "milestone cakes"],
      schema: "Product",
      image: "https://media.ugcakes.com/categories/anniversary-seo.jpg"
    }
  },
  {
    id: 4,
    name: "Kids Cakes",
    slug: "kids-cakes",
    description: "Fun and colorful cakes for little ones",
    image: "https://media.ugcakes.com/categories/kids-cakes.webp",
    productCount: 20,
    type: "Cakes",
    metaTitle: "Kids Cakes - Fun Designs for Children",
    metaDescription: "Exciting cakes for kids' birthdays with cartoon characters, superheroes, and fun themes.",
    heroImage: "https://media.ugcakes.com/categories/kids-hero.webp",
    heroTitle: "Magical Cakes for Little Ones",
    heroDescription: "Bring their favorite characters to life",
    filters: {
      customizable: true,
      characters: ["Superhero", "Princess", "Cartoon", "Animal", "Dinosaur"],
      sizes: ["0.5kg", "1kg", "1.5kg"],
      dietary: ["Eggless"]
    },
    specificComponents: ["KidsSpecial"],
    seo: {
      keywords: ["kids cakes", "children's birthday cakes", "character cakes", "fun cakes"],
      schema: "Product"
    }
  },
  {
    id: 5,
    name: "Photo Cakes",
    slug: "photo-cakes",
    description: "Edible photo prints on delicious cakes",
    image: "https://media.ugcakes.com/categories/photo-cakes.webp",
    productCount: 12,
    type: "Cakes",
    metaTitle: "Photo Cakes - Personalize with Photos",
    metaDescription: "Create memorable cakes with edible photo prints. Perfect for birthdays, anniversaries, and special occasions.",
    heroImage: "https://media.ugcakes.com/categories/photo-hero.webp",
    heroTitle: "Your Photos on a Cake",
    heroDescription: "Turn memories into delicious art",
    filters: {
      customizable: true,
      sizes: ["0.5kg", "1kg", "1.5kg", "2kg"],
      shapes: ["Round", "Square", "Heart", "Custom"]
    },
    specificComponents: ["PhotoSpecial"],
    seo: {
      keywords: ["photo cakes", "picture cakes", "custom photo cakes", "edible image cakes"],
      schema: "Product"
    }
  },
  {
    id: 6,
    name: "Cupcakes",
    slug: "cupcakes",
    description: "Delicious individual treats for any occasion",
    image: "https://media.ugcakes.com/categories/cupcakes.webp",
    productCount: 16,
    type: "Desserts",
    metaTitle: "Cupcakes - Perfect Individual Treats",
    metaDescription: "Delicious cupcakes in various flavors. Perfect for parties, events, and gifting.",
    heroImage: "https://media.ugcakes.com/categories/cupcakes-hero.webp",
    heroTitle: "Sweet Treats in Every Bite",
    heroDescription: "Perfect for sharing or indulging yourself",
    filters: {
      customizable: true,
      quantities: ["6 pcs", "12 pcs", "24 pcs", "48 pcs"],
      flavors: ["Vanilla", "Chocolate", "Red Velvet", "Strawberry", "Lemon"],
      dietary: ["Eggless", "Gluten-Free", "Vegan"]
    },
    specificComponents: ["CupcakeSpecial"],
    seo: {
      keywords: ["cupcakes", "mini cakes", "cupcake delivery", "custom cupcakes"],
      schema: "Product"
    }
  },
  {
    id: 7,
    name: "Pastries",
    slug: "pastries",
    description: "Delicate and flaky baked delights",
    image: "https://media.ugcakes.com/categories/pastries.webp",
    productCount: 14,
    type: "Desserts",
    metaTitle: "Pastries - Delicate Baked Treats",
    metaDescription: "Freshly baked pastries with creamy fillings and flaky layers.",
    heroImage: "https://media.ugcakes.com/categories/pastries-hero.webp",
    heroTitle: "Flaky, Creamy, Delicious",
    heroDescription: "Traditional and modern pastry delights",
    filters: {
      flavors: ["Vanilla", "Chocolate", "Fruit", "Cream", "Caramel"],
      types: ["Puffs", "Tarts", "Éclairs", "Danishes"]
    },
    specificComponents: ["PastrySpecial"],
    seo: {
      keywords: ["pastries", "cream puffs", "éclairs", "tarts", "baked goods"],
      schema: "Product"
    }
  },
  {
    id: 8,
    name: "Cookies",
    slug: "cookies",
    description: "Crunchy and chewy cookies made fresh",
    image: "https://media.ugcakes.com/categories/cookies.webp",
    productCount: 10,
    type: "Snacks",
    metaTitle: "Cookies - Fresh Baked Goodness",
    metaDescription: "Delicious cookies in various flavors. Perfect for tea-time or gifting.",
    heroImage: "https://media.ugcakes.com/categories/cookies-hero.webp",
    heroTitle: "Fresh Baked Cookies",
    heroDescription: "Crunchy, chewy, and absolutely delicious",
    filters: {
      flavors: ["Chocolate Chip", "Oatmeal", "Butter", "Almond", "Double Chocolate"],
      dietary: ["Eggless", "Gluten-Free", "Vegan"],
      giftPacks: ["Regular", "Festive", "Premium"]
    },
    specificComponents: ["CookieSpecial"],
    seo: {
      keywords: ["cookies", "biscuits", "cookie gifts", "fresh cookies"],
      schema: "Product"
    }
  }
];

// ==================== RELATED CATEGORIES MAPPING ====================

export const relatedCategoriesMap = {
  1: [4, 5, 8], // Birthday Cakes related to Kids Cakes, Photo Cakes, Cookies
  2: [3, 5, 6], // Wedding Cakes related to Anniversary, Photo, Cupcakes
  3: [1, 2, 5], // Anniversary related to Birthday, Wedding, Photo
  4: [1, 5, 8], // Kids related to Birthday, Photo, Cookies
  5: [1, 2, 3], // Photo related to Birthday, Wedding, Anniversary
  6: [7, 8, 1], // Cupcakes related to Pastries, Cookies, Birthday
  7: [6, 8, 1], // Pastries related to Cupcakes, Cookies, Birthday
  8: [6, 7, 1]  // Cookies related to Cupcakes, Pastries, Birthday
};

// ==================== PRODUCTS DATA ====================

export const products = [
  {
    cakeDetails: {
      title: "Happy Birthday Grandma Cake",
      id: 12,
      avatar: "https://media.ugcakes.com/products/medium/strawberry-topped-cake.webp",
      price: 15.99,
      description: "A sweet birthday cake for grandma, featuring a loving 'Happy Birthday Grandma' message. Lemon cake with elderflower buttercream and edible flowers.",
      customizable: true,
      SKU: "UGC-BG-1224",
      category: "Birthday Cakes",
      categoryId: 1,
      stock: 16,
      rating: {
        value: 4.8,
        count: 71,
        stars: 5
      },
      pricing: {
        original: 19.19,
        discounted: 15.99,
        discountPercentage: 17,
        currency: "$"
      },
      specifications: [
        { label: "Weight", value: "1 kg (approx)" },
        { label: "Serves", value: "8-10 people" },
        { label: "Shelf Life", value: "3 days" },
        { label: "Storage", value: "Refrigerate" }
      ],
      features: [
        "Lemon cake",
        "Elderflower buttercream",
        "Edible flowers",
        "Elegant design",
        "Personalized message"
      ],
      deliveryInfo: [
        { icon: "Truck", text: "Free delivery inside Kathmandu Valley" },
        { icon: "Shield", text: "100% satisfaction guaranteed" },
        { icon: "RotateCcw", text: "24-hour return policy" },
        { icon: "Package", text: "Premium quality ingredients" }
      ],
      nutritionInfo: [
        { label: "Calories", value: "335 kcal" },
        { label: "Protein", value: "4g" },
        { label: "Carbs", value: "43g" },
        { label: "Fat", value: "17g" }
      ],
      additionalImages: [
        "https://media.ugcakes.com/products/medium/strawberry-topped-cake-1.webp",
        "https://media.ugcakes.com/products/medium/strawberry-topped-cake-2.webp",
        "https://media.ugcakes.com/products/medium/strawberry-topped-cake-3.webp",
        "https://media.ugcakes.com/products/medium/strawberry-topped-cake-4.webp"
      ],
      tags: ["birthday", "grandma", "elderflower", "lemon", "flowers"],
      availableSizes: ["0.5kg", "1kg", "1.5kg", "2kg"],
      availableFlavors: ["Lemon", "Vanilla", "Chocolate"]
    },
    relatedProducts: [3, 9, 13, 19],
    reviews: [134, 135, 136],
    faqs: [2, 4, 6]
  },
  {
    cakeDetails: {
      title: "Chocolate Dream Birthday Cake",
      id: 13,
      avatar: "https://media.ugcakes.com/products/medium/chocolate-dream-cake.webp",
      price: 18.99,
      description: "Rich chocolate cake with chocolate ganache and chocolate shavings. Perfect for chocolate lovers.",
      customizable: true,
      SKU: "UGC-BC-1324",
      category: "Birthday Cakes",
      categoryId: 1,
      stock: 12,
      rating: {
        value: 4.9,
        count: 95,
        stars: 5
      },
      pricing: {
        original: 22.99,
        discounted: 18.99,
        discountPercentage: 17,
        currency: "$"
      },
      specifications: [
        { label: "Weight", value: "1 kg (approx)" },
        { label: "Serves", value: "8-10 people" },
        { label: "Shelf Life", value: "4 days" },
        { label: "Storage", value: "Refrigerate" }
      ],
      features: [
        "Chocolate cake",
        "Chocolate ganache",
        "Chocolate shavings",
        "Rich chocolate flavor"
      ],
      deliveryInfo: [
        { icon: "Truck", text: "Free delivery" },
        { icon: "Shield", text: "Satisfaction guaranteed" }
      ],
      nutritionInfo: [
        { label: "Calories", value: "380 kcal" },
        { label: "Protein", value: "5g" },
        { label: "Carbs", value: "45g" },
        { label: "Fat", value: "20g" }
      ],
      additionalImages: [
        "https://media.ugcakes.com/products/medium/chocolate-dream-cake-1.webp",
        "https://media.ugcakes.com/products/medium/chocolate-dream-cake-2.webp"
      ],
      tags: ["chocolate", "birthday", "rich", "ganache"],
      availableSizes: ["0.5kg", "1kg", "1.5kg", "2kg"]
    },
    relatedProducts: [12, 14, 15, 16],
    reviews: [137, 138, 139],
    faqs: [3, 5, 7]
  },
  {
    cakeDetails: {
      title: "Elegant White Wedding Cake",
      id: 21,
      avatar: "https://media.ugcakes.com/products/medium/white-wedding-cake.webp",
      price: 89.99,
      description: "Three-tier elegant white wedding cake with vanilla buttercream and fresh flowers.",
      customizable: true,
      SKU: "UGC-WC-2124",
      category: "Wedding Cakes",
      categoryId: 2,
      stock: 5,
      rating: {
        value: 5.0,
        count: 48,
        stars: 5
      },
      pricing: {
        original: 109.99,
        discounted: 89.99,
        discountPercentage: 18,
        currency: "$"
      },
      specifications: [
        { label: "Weight", value: "3 kg (approx)" },
        { label: "Serves", value: "25-30 people" },
        { label: "Shelf Life", value: "2 days" },
        { label: "Storage", value: "Refrigerate" }
      ],
      features: [
        "Three tiers",
        "Vanilla buttercream",
        "Fresh flowers",
        "Elegant design",
        "Gold accents"
      ],
      deliveryInfo: [
        { icon: "Truck", text: "Free delivery" },
        { icon: "Shield", text: "Satisfaction guaranteed" },
        { icon: "Package", text: "Premium ingredients" }
      ],
      nutritionInfo: [
        { label: "Calories", value: "350 kcal per serving" },
        { label: "Protein", value: "4g" },
        { label: "Carbs", value: "42g" },
        { label: "Fat", value: "18g" }
      ],
      additionalImages: [
        "https://media.ugcakes.com/products/medium/white-wedding-cake-1.webp",
        "https://media.ugcakes.com/products/medium/white-wedding-cake-2.webp",
        "https://media.ugcakes.com/products/medium/white-wedding-cake-3.webp"
      ],
      tags: ["wedding", "elegant", "tiered", "flowers", "vanilla"],
      availableTiers: ["2-Tier", "3-Tier", "4-Tier"],
      availableFlavors: ["Vanilla", "Chocolate", "Red Velvet"]
    },
    relatedProducts: [22, 23, 24, 25],
    reviews: [201, 202, 203],
    faqs: [21, 22, 23]
  },
  {
    cakeDetails: {
      title: "Golden Anniversary Cake",
      id: 31,
      avatar: "https://media.ugcakes.com/products/medium/golden-anniversary-cake.webp",
      price: 45.99,
      description: "Elegant golden-themed cake for 50th anniversary celebration with edible gold leaf.",
      customizable: true,
      SKU: "UGC-AC-3124",
      category: "Anniversary Cakes",
      categoryId: 3,
      stock: 8,
      rating: {
        value: 4.9,
        count: 32,
        stars: 5
      },
      pricing: {
        original: 55.99,
        discounted: 45.99,
        discountPercentage: 18,
        currency: "$"
      },
      specifications: [
        { label: "Weight", value: "1.5 kg (approx)" },
        { label: "Serves", value: "12-15 people" },
        { label: "Shelf Life", value: "3 days" },
        { label: "Storage", value: "Refrigerate" }
      ],
      features: [
        "Edible gold leaf",
        "Vanilla sponge",
        "Buttercream frosting",
        "Elegant piping",
        "Custom message"
      ],
      deliveryInfo: [
        { icon: "Truck", text: "Free delivery" },
        { icon: "Shield", text: "Satisfaction guaranteed" }
      ],
      nutritionInfo: [
        { label: "Calories", value: "340 kcal" },
        { label: "Protein", value: "4g" },
        { label: "Carbs", value: "44g" },
        { label: "Fat", value: "17g" }
      ],
      additionalImages: [
        "https://media.ugcakes.com/products/medium/golden-anniversary-cake-1.webp",
        "https://media.ugcakes.com/products/medium/golden-anniversary-cake-2.webp"
      ],
      tags: ["anniversary", "golden", "50th", "elegant", "gold leaf"],
      availableYears: ["25th", "50th", "Custom"]
    },
    relatedProducts: [32, 33, 34, 35],
    reviews: [301, 302, 303],
    faqs: [31, 32, 33]
  },
  {
    cakeDetails: {
      title: "Spider-Man Kids Cake",
      id: 41,
      avatar: "https://media.ugcakes.com/products/medium/spiderman-cake.webp",
      price: 22.99,
      description: "Exciting Spider-Man themed cake for your little superhero fan.",
      customizable: true,
      SKU: "UGC-KC-4124",
      category: "Kids Cakes",
      categoryId: 4,
      stock: 14,
      rating: {
        value: 4.9,
        count: 56,
        stars: 5
      },
      pricing: {
        original: 27.99,
        discounted: 22.99,
        discountPercentage: 18,
        currency: "$"
      },
      specifications: [
        { label: "Weight", value: "1 kg (approx)" },
        { label: "Serves", value: "8-10 kids" },
        { label: "Shelf Life", value: "3 days" },
        { label: "Storage", value: "Refrigerate" }
      ],
      features: [
        "Spider-Man design",
        "Vanilla cake",
        "Blue and red frosting",
        "Edible spider web",
        "Toy topper included"
      ],
      deliveryInfo: [
        { icon: "Truck", text: "Free delivery" },
        { icon: "Shield", text: "Satisfaction guaranteed" }
      ],
      nutritionInfo: [
        { label: "Calories", value: "320 kcal" },
        { label: "Protein", value: "3g" },
        { label: "Carbs", value: "42g" },
        { label: "Fat", value: "15g" }
      ],
      additionalImages: [
        "https://media.ugcakes.com/products/medium/spiderman-cake-1.webp",
        "https://media.ugcakes.com/products/medium/spiderman-cake-2.webp"
      ],
      tags: ["kids", "spiderman", "superhero", "boys", "character"],
      availableCharacters: ["Spider-Man", "Superman", "Batman", "Frozen"]
    },
    relatedProducts: [42, 43, 44, 45],
    reviews: [401, 402, 403],
    faqs: [41, 42, 43]
  },
  {
    cakeDetails: {
      title: "Family Photo Cake",
      id: 51,
      avatar: "https://media.ugcakes.com/products/medium/photo-cake.webp",
      price: 29.99,
      description: "Beautiful cake with edible photo print of your family picture.",
      customizable: true,
      SKU: "UGC-PC-5124",
      category: "Photo Cakes",
      categoryId: 5,
      stock: 10,
      rating: {
        value: 4.7,
        count: 43,
        stars: 5
      },
      pricing: {
        original: 34.99,
        discounted: 29.99,
        discountPercentage: 14,
        currency: "$"
      },
      specifications: [
        { label: "Weight", value: "1 kg (approx)" },
        { label: "Serves", value: "8-10 people" },
        { label: "Shelf Life", value: "3 days" },
        { label: "Storage", value: "Refrigerate" }
      ],
      features: [
        "Edible photo print",
        "Choice of flavor",
        "Custom message",
        "High-quality image"
      ],
      deliveryInfo: [
        { icon: "Truck", text: "Free delivery" },
        { icon: "Shield", text: "Satisfaction guaranteed" }
      ],
      nutritionInfo: [
        { label: "Calories", value: "330 kcal" },
        { label: "Protein", value: "4g" },
        { label: "Carbs", value: "43g" },
        { label: "Fat", value: "16g" }
      ],
      additionalImages: [
        "https://media.ugcakes.com/products/medium/photo-cake-1.webp",
        "https://media.ugcakes.com/products/medium/photo-cake-2.webp"
      ],
      tags: ["photo", "picture", "custom", "family", "memories"],
      availableShapes: ["Round", "Square", "Heart"]
    },
    relatedProducts: [52, 53, 54, 55],
    reviews: [501, 502, 503],
    faqs: [51, 52, 53]
  },
  {
    cakeDetails: {
      title: "Assorted Cupcakes (12 pcs)",
      id: 61,
      avatar: "https://media.ugcakes.com/products/medium/assorted-cupcakes.webp",
      price: 24.99,
      description: "Assorted cupcakes in vanilla, chocolate, and red velvet flavors.",
      customizable: true,
      SKU: "UGC-CU-6124",
      category: "Cupcakes",
      categoryId: 6,
      stock: 25,
      rating: {
        value: 4.8,
        count: 67,
        stars: 5
      },
      pricing: {
        original: 29.99,
        discounted: 24.99,
        discountPercentage: 17,
        currency: "$"
      },
      specifications: [
        { label: "Quantity", value: "12 pcs" },
        { label: "Shelf Life", value: "2 days" },
        { label: "Storage", value: "Refrigerate" }
      ],
      features: [
        "Vanilla, Chocolate, Red Velvet",
        "Buttercream frosting",
        "Colorful sprinkles",
        "Perfect for parties"
      ],
      deliveryInfo: [
        { icon: "Truck", text: "Free delivery" },
        { icon: "Shield", text: "Satisfaction guaranteed" }
      ],
      nutritionInfo: [
        { label: "Calories per piece", value: "180 kcal" },
        { label: "Protein", value: "2g" },
        { label: "Carbs", value: "22g" },
        { label: "Fat", value: "9g" }
      ],
      additionalImages: [
        "https://media.ugcakes.com/products/medium/assorted-cupcakes-1.webp",
        "https://media.ugcakes.com/products/medium/assorted-cupcakes-2.webp"
      ],
      tags: ["cupcakes", "assorted", "party", "mini"],
      availableQuantities: ["6 pcs", "12 pcs", "24 pcs"]
    },
    relatedProducts: [62, 63, 64, 65],
    reviews: [601, 602, 603],
    faqs: [61, 62, 63]
  },
  {
    cakeDetails: {
      title: "Chocolate Éclairs (6 pcs)",
      id: 71,
      avatar: "https://media.ugcakes.com/products/medium/chocolate-eclairs.webp",
      price: 15.99,
      description: "Classic French éclairs filled with vanilla cream and topped with chocolate ganache.",
      customizable: false,
      SKU: "UGC-PA-7124",
      category: "Pastries",
      categoryId: 7,
      stock: 18,
      rating: {
        value: 4.9,
        count: 52,
        stars: 5
      },
      pricing: {
        original: 18.99,
        discounted: 15.99,
        discountPercentage: 16,
        currency: "$"
      },
      specifications: [
        { label: "Quantity", value: "6 pcs" },
        { label: "Shelf Life", value: "1 day" },
        { label: "Storage", value: "Refrigerate" }
      ],
      features: [
        "Choux pastry",
        "Vanilla cream filling",
        "Chocolate ganache topping",
        "French recipe"
      ],
      deliveryInfo: [
        { icon: "Truck", text: "Free delivery" },
        { icon: "Shield", text: "Satisfaction guaranteed" }
      ],
      nutritionInfo: [
        { label: "Calories per piece", value: "210 kcal" },
        { label: "Protein", value: "3g" },
        { label: "Carbs", value: "24g" },
        { label: "Fat", value: "12g" }
      ],
      additionalImages: [
        "https://media.ugcakes.com/products/medium/chocolate-eclairs-1.webp",
        "https://media.ugcakes.com/products/medium/chocolate-eclairs-2.webp"
      ],
      tags: ["pastries", "eclairs", "french", "chocolate", "cream"],
      availableVarieties: ["Chocolate", "Coffee", "Strawberry"]
    },
    relatedProducts: [72, 73, 74, 75],
    reviews: [701, 702, 703],
    faqs: [71, 72, 73]
  },
  {
    cakeDetails: {
      title: "Chocolate Chip Cookies (12 pcs)",
      id: 81,
      avatar: "https://media.ugcakes.com/products/medium/chocolate-chip-cookies.webp",
      price: 12.99,
      description: "Classic chocolate chip cookies, baked fresh daily. Crunchy outside, chewy inside.",
      customizable: false,
      SKU: "UGC-CO-8124",
      category: "Cookies",
      categoryId: 8,
      stock: 30,
      rating: {
        value: 4.8,
        count: 88,
        stars: 5
      },
      pricing: {
        original: 14.99,
        discounted: 12.99,
        discountPercentage: 13,
        currency: "$"
      },
      specifications: [
        { label: "Quantity", value: "12 pcs" },
        { label: "Weight", value: "300g" },
        { label: "Shelf Life", value: "7 days" },
        { label: "Storage", value: "Room temperature" }
      ],
      features: [
        "Rich chocolate chips",
        "Buttery flavor",
        "Perfectly baked",
        "Great with tea/coffee"
      ],
      deliveryInfo: [
        { icon: "Truck", text: "Free delivery" },
        { icon: "Shield", text: "Satisfaction guaranteed" }
      ],
      nutritionInfo: [
        { label: "Calories per cookie", value: "120 kcal" },
        { label: "Protein", value: "2g" },
        { label: "Carbs", value: "16g" },
        { label: "Fat", value: "6g" }
      ],
      additionalImages: [
        "https://media.ugcakes.com/products/medium/chocolate-chip-cookies-1.webp",
        "https://media.ugcakes.com/products/medium/chocolate-chip-cookies-2.webp"
      ],
      tags: ["cookies", "chocolate chip", "snacks", "tea-time"],
      availableVarieties: ["Chocolate Chip", "Oatmeal Raisin", "Butter", "Double Chocolate"]
    },
    relatedProducts: [82, 83, 84, 85],
    reviews: [801, 802, 803],
    faqs: [81, 82, 83]
  }
];

// ==================== REVIEWS DATA ====================

export const reviews = [
  {
    id: 134,
    productId: 12,
    userName: "Sarah Johnson",
    rating: 5,
    title: "Perfect for Grandma!",
    comment: "My grandma absolutely loved this cake. The lemon flavor was perfect and the edible flowers made it look so elegant.",
    date: "2024-02-10",
    verified: true,
    helpful: 12
  },
  {
    id: 135,
    productId: 12,
    userName: "Michael Chen",
    rating: 4,
    title: "Great cake, beautiful design",
    comment: "The cake tasted amazing and the delivery was on time. Would order again.",
    date: "2024-02-08",
    verified: true,
    helpful: 5
  },
  {
    id: 136,
    productId: 12,
    userName: "Emily Davis",
    rating: 5,
    title: "Exceeded expectations",
    comment: "The personalized message was perfect. Everyone at the party loved it!",
    date: "2024-02-05",
    verified: true,
    helpful: 8
  },
  {
    id: 201,
    productId: 21,
    userName: "Jessica & Mark",
    rating: 5,
    title: "Dream wedding cake",
    comment: "Our wedding cake was absolutely stunning. Exactly what we wanted!",
    date: "2024-01-15",
    verified: true,
    helpful: 23
  }
];

// ==================== FAQS DATA ====================

export const faqs = [
  {
    id: 2,
    productId: 12,
    question: "Can I add a custom message?",
    answer: "Yes, you can add a personalized message when ordering. Just mention it in the special instructions.",
    category: "Customization"
  },
  {
    id: 4,
    productId: 12,
    question: "How should I store the cake?",
    answer: "Keep refrigerated and consume within 3 days for best taste. Let it sit at room temperature for 30 minutes before serving.",
    category: "Storage"
  },
  {
    id: 6,
    productId: 12,
    question: "Is this cake eggless?",
    answer: "No, this cake contains eggs. We do have eggless options available in our collection.",
    category: "Dietary"
  }
];

// ==================== HELPER FUNCTIONS ====================

// Get category by slug
export const getCategoryBySlug = (slug) => {
  return categories.find(cat => cat.slug === slug);
};

// Get category by ID
export const getCategoryById = (id) => {
  return categories.find(cat => cat.id === id);
};

// Get products by category ID
export const getProductsByCategory = (categoryId) => {
  return products.filter(p => p.cakeDetails.categoryId === categoryId);
};

// Get product by ID
export const getProductById = (id) => {
  return products.find(p => p.cakeDetails.id === parseInt(id));
};

// Get related categories for a category
export const getRelatedCategories = (categoryId) => {
  const relatedIds = relatedCategoriesMap[categoryId] || [];
  return relatedIds.map(id => getCategoryById(id)).filter(Boolean);
};

// Get related products for a product
export const getRelatedProducts = (productId) => {
  const product = getProductById(productId);
  if (!product || !product.relatedProducts) return [];
  
  return product.relatedProducts
    .map(id => getProductById(id))
    .filter(Boolean);
};

// Get reviews for a product
export const getProductReviews = (productId) => {
  return reviews.filter(r => r.productId === parseInt(productId));
};

// Get FAQs for a product
export const getProductFaqs = (productId) => {
  return faqs.filter(f => f.productId === parseInt(productId));
};

// Get all unique categories from products
export const getAllProductCategories = () => {
  const uniqueCategories = [...new Set(products.map(p => p.cakeDetails.category))];
  return uniqueCategories.map(catName => {
    const category = categories.find(c => c.name === catName);
    return {
      name: catName,
      id: category?.id || null,
      slug: category?.slug || catName.toLowerCase().replace(/\s+/g, '-'),
      productCount: products.filter(p => p.cakeDetails.category === catName).length
    };
  });
};

// Get popular products (by rating)
export const getPopularProducts = (limit = 8) => {
  return [...products]
    .sort((a, b) => b.cakeDetails.rating.value - a.cakeDetails.rating.value)
    .slice(0, limit);
};

// Get new products (by ID - assuming higher IDs are newer)
export const getNewProducts = (limit = 8) => {
  return [...products]
    .sort((a, b) => b.cakeDetails.id - a.cakeDetails.id)
    .slice(0, limit);
};

// Get discounted products
export const getDiscountedProducts = (limit = 8) => {
  return products
    .filter(p => p.cakeDetails.pricing.discountPercentage > 0)
    .sort((a, b) => b.cakeDetails.pricing.discountPercentage - a.cakeDetails.pricing.discountPercentage)
    .slice(0, limit);
};

// Search products
export const searchProducts = (query) => {
  const searchTerm = query.toLowerCase();
  return products.filter(p => 
    p.cakeDetails.title.toLowerCase().includes(searchTerm) ||
    p.cakeDetails.description.toLowerCase().includes(searchTerm) ||
    p.cakeDetails.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

// Filter products by price range
export const filterProductsByPrice = (products, min, max) => {
  return products.filter(p => 
    p.cakeDetails.pricing.discounted >= min && 
    p.cakeDetails.pricing.discounted <= max
  );
};

// Filter products by rating
export const filterProductsByRating = (products, minRating) => {
  return products.filter(p => p.cakeDetails.rating.value >= minRating);
};

// Get category-specific data for components
export const getCategorySpecificData = (categoryId) => {
  const specificData = {
    1: {
      ageGroups: ["Kids", "Teens", "Adults", "Seniors"],
      themes: ["Cartoon", "Elegant", "Photo", "Number", "Flowers"],
      popularAges: [1, 5, 10, 18, 21, 30, 40, 50, 60],
      messageExamples: [
        "Happy Birthday!",
        "Happy Birthday Mom/Dad",
        "Happy Birthday Grandma/Grandpa",
        "Happy Birthday [Name]"
      ]
    },
    2: {
      styles: ["Classic", "Modern", "Rustic", "Elegant", "Vintage"],
      colors: ["White", "Ivory", "Gold", "Rose Gold", "Blush Pink", "Navy"],
      cakeToppers: ["Bride & Groom", "Mr & Mrs", "Custom", "Fresh Flowers", "Gold Letters"],
      tierOptions: ["2-Tier", "3-Tier", "4-Tier", "5-Tier"]
    },
    3: {
      milestones: ["1st", "5th", "10th", "25th", "50th", "60th"],
      romanticThemes: ["Heart", "Rose", "Love Birds", "Eternal Love", "Rings"],
      messageTemplates: [
        "Happy Anniversary",
        "To My Love",
        "Forever Yours",
        "X Years Together"
      ]
    },
    4: {
      characters: ["Spider-Man", "Frozen", "Paw Patrol", "Superman", "Batman", "Mickey Mouse"],
      themes: ["Superhero", "Princess", "Cartoon", "Animal", "Dinosaur", "Space"],
      ageRanges: ["1-3 years", "4-7 years", "8-12 years"]
    },
    5: {
      imageTypes: ["Family Photo", "Couple Photo", "Child Photo", "Pet Photo", "Logo"],
      shapes: ["Round", "Square", "Heart", "Rectangle"],
      printingQuality: ["High Resolution", "Standard"]
    },
    6: {
      flavors: ["Vanilla", "Chocolate", "Red Velvet", "Strawberry", "Lemon", "Coffee"],
      frostingTypes: ["Buttercream", "Cream Cheese", "Ganache"],
      occasions: ["Birthday", "Wedding", "Baby Shower", "Party"]
    },
    7: {
      types: ["Éclairs", "Cream Puffs", "Tarts", "Danishes", "Mille-feuille"],
      fillings: ["Vanilla Cream", "Chocolate Cream", "Fruit Compote", "Pastry Cream"]
    },
    8: {
      varieties: ["Chocolate Chip", "Oatmeal", "Butter", "Almond", "Double Chocolate", "Sugar"],
      giftPackSizes: ["6 pcs", "12 pcs", "24 pcs", "36 pcs"]
    }
  };
  
  return specificData[categoryId] || {};
};

// Export all data as default object
export default {
  categories,
  products,
  reviews,
  faqs,
  getCategoryBySlug,
  getCategoryById,
  getProductsByCategory,
  getProductById,
  getRelatedCategories,
  getRelatedProducts,
  getProductReviews,
  getProductFaqs,
  getAllProductCategories,
  getPopularProducts,
  getNewProducts,
  getDiscountedProducts,
  searchProducts,
  filterProductsByPrice,
  filterProductsByRating,
  getCategorySpecificData
};