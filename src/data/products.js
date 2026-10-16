import productImage1 from "../assets/home/bestseller/img1.png";
import productImage2 from "../assets/home/bestseller/img2.png";
import productImage3 from "../assets/home/bestseller/img3.png";
import productImage4 from "../assets/home/shopByCategory/img1.png";
import productImage5 from "../assets/home/shopByCategory/img2.png";
import productImage6 from "../assets/home/shopByCategory/img3.png";

const products = [
  // =========================
  // RINGS
  // =========================

  {
    id: 1,
    title: "Aurora Solitaire Ring",
    description:
      "A timeless solitaire ring featuring a brilliant-cut stone set in polished sterling silver.",
    category: "rings",
    price: 120,
    rating: 4.8,
    stock: 25,
    size: "Adjustable",
    brand: "Lumière",
    image: productImage1,
    images: [productImage1, productImage2, productImage3],
    isBestSeller: true,
  },

  {
    id: 2,
    title: "Twist Knot Ring",
    description:
      "An elegant twisted band design crafted to add a delicate touch to everyday looks.",
    category: "rings",
    price: 95,
    rating: 4.7,
    stock: 35,
    size: "US 6-9",
    brand: "Aurelie & Co.",
    image: productImage2,
    images: [productImage2, productImage3, productImage1],
    isBestSeller: true,
  },

  {
    id: 3,
    title: "Celeste Halo Ring",
    description:
      "A refined halo ring surrounded by sparkling stones for an effortlessly luxurious look.",
    category: "rings",
    price: 165,
    rating: 4.9,
    stock: 18,
    size: "US 6-10",
    brand: "Celeste",
    image: productImage3,
    images: [productImage3, productImage1],
    isBestSeller: true,
  },

  {
    id: 4,
    title: "Minimal Gold Band",
    description:
      "A sleek minimalist band with a polished finish, perfect for everyday styling.",
    category: "rings",
    price: 85,
    rating: 4.5,
    stock: 45,
    size: "US 5-9",
    brand: "Lumière",
    image: productImage4,
    images: [productImage4],
    isBestSeller: false,
  },

  {
    id: 5,
    title: "Pearl Accent Ring",
    description:
      "A graceful ring featuring a luminous pearl accent with a delicate polished band.",
    category: "rings",
    price: 110,
    rating: 4.6,
    stock: 28,
    size: "US 6-9",
    brand: "Pearl & Co.",
    image: productImage5,
    images: [productImage5, productImage6],
    isBestSeller: false,
  },

  {
    id: 6,
    title: "Emerald Cut Ring",
    description:
      "A sophisticated emerald-cut design created for a statement of understated elegance.",
    category: "rings",
    price: 220,
    rating: 4.9,
    stock: 12,
    size: "US 5-10",
    brand: "Maison Lumière",
    image: productImage6,
    images: [productImage6],
    isBestSeller: true,
  },

  {
    id: 7,
    title: "Dainty Stacking Ring",
    description:
      "A slim and delicate ring designed to be worn alone or layered with your favorite bands.",
    category: "rings",
    price: 65,
    rating: 4.4,
    stock: 60,
    size: "US 5-9",
    brand: "Aurelie & Co.",
    image: productImage1,
    images: [productImage1, productImage2],
    isBestSeller: false,
  },

  {
    id: 8,
    title: "Vintage Bloom Ring",
    description:
      "A romantic floral-inspired ring with intricate detailing and a vintage-inspired finish.",
    category: "rings",
    price: 145,
    rating: 4.7,
    stock: 20,
    size: "US 6-9",
    brand: "Maison Lumière",
    image: productImage2,
    images: [productImage2],
    isBestSeller: false,
  },

  {
    id: 9,
    title: "Cushion Solitaire Ring",
    description:
      "A classic cushion-cut centerpiece framed by a refined setting for timeless elegance.",
    category: "rings",
    price: 195,
    rating: 4.8,
    stock: 15,
    size: "US 5-10",
    brand: "Celeste",
    image: productImage3,
    images: [productImage3, productImage4],
    isBestSeller: false,
  },

  {
    id: 10,
    title: "Eternity Band",
    description:
      "A sparkling eternity band featuring stones arranged around the entire polished band.",
    category: "rings",
    price: 180,
    rating: 4.8,
    stock: 16,
    size: "US 5-9",
    brand: "Lumière",
    image: productImage4,
    images: [productImage4],
    isBestSeller: true,
  },

  {
    id: 11,
    title: "Pear Shaped Statement Ring",
    description:
      "A striking pear-shaped centerpiece creates a graceful and sophisticated statement.",
    category: "rings",
    price: 240,
    rating: 4.9,
    stock: 10,
    size: "US 6-10",
    brand: "Celeste",
    image: productImage5,
    images: [productImage5],
    isBestSeller: false,
  },

  {
    id: 12,
    title: "Classic Signet Ring",
    description:
      "A modern take on the classic signet ring with a smooth face and polished finish.",
    category: "rings",
    price: 90,
    rating: 4.5,
    stock: 40,
    size: "US 6-10",
    brand: "Aurelie & Co.",
    image: productImage6,
    images: [productImage6],
    isBestSeller: false,
  },

  // =========================
  // EARRINGS
  // =========================

  {
    id: 13,
    title: "Pearl Drop Earrings",
    description:
      "Elegant pearl drops that bring a soft, timeless glow to any occasion.",
    category: "earrings",
    price: 125,
    rating: 4.8,
    stock: 24,
    size: "2.5 cm",
    brand: "Pearl & Co.",
    image: productImage1,
    images: [productImage1],
    isBestSeller: true,
  },

  {
    id: 14,
    title: "Classic Gold Hoops",
    description:
      "Polished gold hoops designed for effortless everyday elegance.",
    category: "earrings",
    price: 105,
    rating: 4.7,
    stock: 32,
    size: "25 mm",
    brand: "Lumière",
    image: productImage2,
    images: [productImage2],
    isBestSeller: true,
  },

  {
    id: 15,
    title: "Celeste Stud Earrings",
    description:
      "Minimal sparkling studs that add a subtle touch of brilliance to everyday outfits.",
    category: "earrings",
    price: 75,
    rating: 4.6,
    stock: 50,
    size: "6 mm",
    brand: "Celeste",
    image: productImage3,
    images: [productImage3],
    isBestSeller: false,
  },

  {
    id: 16,
    title: "Crystal Drop Earrings",
    description:
      "Delicate crystal drops designed to catch the light with every movement.",
    category: "earrings",
    price: 135,
    rating: 4.8,
    stock: 22,
    size: "3 cm",
    brand: "Maison Lumière",
    image: productImage4,
    images: [productImage4],
    isBestSeller: true,
  },

  {
    id: 17,
    title: "Twisted Huggie Hoops",
    description:
      "Compact huggie hoops featuring a refined twisted texture for modern styling.",
    category: "earrings",
    price: 85,
    rating: 4.5,
    stock: 42,
    size: "12 mm",
    brand: "Aurelie & Co.",
    image: productImage5,
    images: [productImage5],
    isBestSeller: false,
  },

  {
    id: 18,
    title: "Floral Pearl Earrings",
    description:
      "A delicate floral silhouette paired with luminous pearls for a romantic finish.",
    category: "earrings",
    price: 150,
    rating: 4.9,
    stock: 18,
    size: "3.2 cm",
    brand: "Pearl & Co.",
    image: productImage6,
    images: [productImage6],
    isBestSeller: true,
  },

  {
    id: 19,
    title: "Sculpted Gold Drops",
    description:
      "Contemporary sculpted earrings with flowing curves and a polished golden finish.",
    category: "earrings",
    price: 140,
    rating: 4.7,
    stock: 20,
    size: "4 cm",
    brand: "Lumière",
    image: productImage1,
    images: [productImage1, productImage2],
    isBestSeller: false,
  },

  {
    id: 20,
    title: "Diamond Accent Studs",
    description:
      "Refined stud earrings accented with brilliant stones for understated sparkle.",
    category: "earrings",
    price: 210,
    rating: 4.9,
    stock: 14,
    size: "5 mm",
    brand: "Celeste",
    image: productImage2,
    images: [productImage2],
    isBestSeller: true,
  },

  {
    id: 21,
    title: "Moonlight Earrings",
    description:
      "Elegant crescent-inspired earrings with a soft and luminous silhouette.",
    category: "earrings",
    price: 115,
    rating: 4.6,
    stock: 26,
    size: "2.8 cm",
    brand: "Maison Lumière",
    image: productImage3,
    images: [productImage3],
    isBestSeller: false,
  },

  {
    id: 22,
    title: "Pearl Cluster Earrings",
    description:
      "A graceful cluster of pearls arranged to create a sophisticated statement.",
    category: "earrings",
    price: 175,
    rating: 4.8,
    stock: 16,
    size: "2.2 cm",
    brand: "Pearl & Co.",
    image: productImage4,
    images: [productImage4],
    isBestSeller: false,
  },

  {
    id: 23,
    title: "Minimal Bar Earrings",
    description:
      "Clean-lined bar earrings designed for a simple and contemporary aesthetic.",
    category: "earrings",
    price: 70,
    rating: 4.4,
    stock: 55,
    size: "18 mm",
    brand: "Aurelie & Co.",
    image: productImage5,
    images: [productImage5],
    isBestSeller: false,
  },

  {
    id: 24,
    title: "Crystal Halo Earrings",
    description:
      "Radiant halo earrings featuring sparkling stones around a central accent.",
    category: "earrings",
    price: 185,
    rating: 4.8,
    stock: 17,
    size: "2 cm",
    brand: "Celeste",
    image: productImage6,
    images: [productImage6],
    isBestSeller: false,
  },

  // =========================
  // NECKLACES
  // =========================

  {
    id: 25,
    title: "Dainty Pearl Necklace",
    description:
      "A delicate necklace featuring a luminous pearl pendant on a fine chain.",
    category: "necklaces",
    price: 135,
    rating: 4.8,
    stock: 25,
    size: "16-18 inches",
    brand: "Pearl & Co.",
    image: productImage3,
    images: [productImage3],
    isBestSeller: true,
  },

  {
    id: 26,
    title: "Classic Pendant Necklace",
    description:
      "A timeless pendant necklace designed to complement both casual and formal looks.",
    category: "necklaces",
    price: 110,
    rating: 4.6,
    stock: 35,
    size: "18 inches",
    brand: "Lumière",
    image: productImage4,
    images: [productImage4],
    isBestSeller: false,
  },

  {
    id: 27,
    title: "Celeste Solitaire Necklace",
    description:
      "A refined solitaire pendant suspended from a delicate polished chain.",
    category: "necklaces",
    price: 175,
    rating: 4.9,
    stock: 18,
    size: "18 inches",
    brand: "Celeste",
    image: productImage5,
    images: [productImage5],
    isBestSeller: true,
  },

  {
    id: 28,
    title: "Layered Chain Necklace",
    description:
      "A stylish layered design combining fine chains for an effortlessly fashionable look.",
    category: "necklaces",
    price: 145,
    rating: 4.7,
    stock: 22,
    size: "16-20 inches",
    brand: "Aurelie & Co.",
    image: productImage6,
    images: [productImage6],
    isBestSeller: false,
  },

  {
    id: 29,
    title: "Heart Pendant Necklace",
    description:
      "A delicate heart-shaped pendant symbolizing timeless affection and elegance.",
    category: "necklaces",
    price: 120,
    rating: 4.7,
    stock: 30,
    size: "18 inches",
    brand: "Lumière",
    image: productImage1,
    images: [productImage1],
    isBestSeller: true,
  },

  {
    id: 30,
    title: "Emerald Accent Necklace",
    description:
      "A refined necklace featuring an emerald-toned centerpiece with elegant detailing.",
    category: "necklaces",
    price: 190,
    rating: 4.8,
    stock: 14,
    size: "18 inches",
    brand: "Maison Lumière",
    image: productImage2,
    images: [productImage2],
    isBestSeller: false,
  },

  {
    id: 31,
    title: "Diamond Line Necklace",
    description:
      "A sophisticated line of sparkling stones set along a graceful fine chain.",
    category: "necklaces",
    price: 260,
    rating: 4.9,
    stock: 10,
    size: "17 inches",
    brand: "Celeste",
    image: productImage3,
    images: [productImage3],
    isBestSeller: true,
  },

  {
    id: 32,
    title: "Moonstone Pendant",
    description:
      "A luminous moonstone-inspired pendant with a soft, ethereal appearance.",
    category: "necklaces",
    price: 155,
    rating: 4.6,
    stock: 20,
    size: "18 inches",
    brand: "Maison Lumière",
    image: productImage4,
    images: [productImage4],
    isBestSeller: false,
  },

  {
    id: 33,
    title: "Pearl Strand Necklace",
    description:
      "A classic strand of luminous pearls designed for timeless sophistication.",
    category: "necklaces",
    price: 225,
    rating: 4.9,
    stock: 12,
    size: "18 inches",
    brand: "Pearl & Co.",
    image: productImage5,
    images: [productImage5],
    isBestSeller: true,
  },

  {
    id: 34,
    title: "Minimal Bar Necklace",
    description:
      "A clean horizontal bar pendant on a delicate chain for modern everyday styling.",
    category: "necklaces",
    price: 90,
    rating: 4.5,
    stock: 40,
    size: "18 inches",
    brand: "Aurelie & Co.",
    image: productImage6,
    images: [productImage6],
    isBestSeller: false,
  },

  {
    id: 35,
    title: "Vintage Locket Necklace",
    description:
      "A beautifully detailed locket necklace inspired by classic vintage jewelry.",
    category: "necklaces",
    price: 165,
    rating: 4.7,
    stock: 18,
    size: "20 inches",
    brand: "Maison Lumière",
    image: productImage1,
    images: [productImage1],
    isBestSeller: false,
  },

  {
    id: 36,
    title: "Sapphire Drop Necklace",
    description:
      "A graceful pendant featuring a deep blue sapphire-inspired centerpiece.",
    category: "necklaces",
    price: 210,
    rating: 4.8,
    stock: 11,
    size: "18 inches",
    brand: "Celeste",
    image: productImage2,
    images: [productImage2],
    isBestSeller: false,
  },

  // =========================
  // BRACELETS
  // =========================

  {
    id: 37,
    title: "Classic Tennis Bracelet",
    description:
      "A timeless bracelet lined with brilliant stones for an elegant and polished finish.",
    category: "bracelets",
    price: 280,
    rating: 4.9,
    stock: 12,
    size: "6.5-7 inches",
    brand: "Celeste",
    image: productImage5,
    images: [productImage5, productImage6],
    isBestSeller: true,
  },

  {
    id: 38,
    title: "Dainty Chain Bracelet",
    description:
      "A fine chain bracelet designed to add a subtle sparkle to everyday outfits.",
    category: "bracelets",
    price: 85,
    rating: 4.5,
    stock: 45,
    size: "6.5-7.5 inches",
    brand: "Lumière",
    image: productImage6,
    images: [productImage6],
    isBestSeller: false,
  },

  {
    id: 39,
    title: "Pearl Charm Bracelet",
    description:
      "A delicate pearl bracelet finished with a charming centerpiece for a feminine touch.",
    category: "bracelets",
    price: 125,
    rating: 4.7,
    stock: 28,
    size: "Adjustable",
    brand: "Pearl & Co.",
    image: productImage1,
    images: [productImage1, productImage2],
    isBestSeller: true,
  },

  {
    id: 40,
    title: "Twisted Cuff Bracelet",
    description:
      "A sculptural cuff featuring an elegant twisted design and polished finish.",
    category: "bracelets",
    price: 145,
    rating: 4.6,
    stock: 20,
    size: "Adjustable",
    brand: "Aurelie & Co.",
    image: productImage2,
    images: [productImage2],
    isBestSeller: false,
  },

  {
    id: 41,
    title: "Gold Bangle",
    description:
      "A classic polished bangle designed to bring effortless elegance to any outfit.",
    category: "bracelets",
    price: 115,
    rating: 4.6,
    stock: 35,
    size: "2.5 inches",
    brand: "Lumière",
    image: productImage3,
    images: [productImage3],
    isBestSeller: false,
  },

  {
    id: 42,
    title: "Crystal Charm Bracelet",
    description:
      "A delicate charm bracelet accented with sparkling crystal details.",
    category: "bracelets",
    price: 155,
    rating: 4.8,
    stock: 18,
    size: "6.5-7 inches",
    brand: "Celeste",
    image: productImage4,
    images: [productImage4],
    isBestSeller: true,
  },

  {
    id: 43,
    title: "Minimal Curb Bracelet",
    description:
      "A modern curb-chain bracelet with a clean silhouette and polished finish.",
    category: "bracelets",
    price: 100,
    rating: 4.5,
    stock: 30,
    size: "7 inches",
    brand: "Aurelie & Co.",
    image: productImage5,
    images: [productImage5],
    isBestSeller: false,
  },

  {
    id: 44,
    title: "Pearl Tennis Bracelet",
    description:
      "A sophisticated bracelet combining delicate pearls with a refined setting.",
    category: "bracelets",
    price: 195,
    rating: 4.8,
    stock: 15,
    size: "6.5-7 inches",
    brand: "Pearl & Co.",
    image: productImage6,
    images: [productImage6],
    isBestSeller: true,
  },

  {
    id: 45,
    title: "Infinity Bracelet",
    description:
      "A graceful infinity-inspired bracelet symbolizing timeless connection and elegance.",
    category: "bracelets",
    price: 130,
    rating: 4.7,
    stock: 24,
    size: "Adjustable",
    brand: "Lumière",
    image: productImage1,
    images: [productImage1],
    isBestSeller: false,
  },

  {
    id: 46,
    title: "Diamond Accent Cuff",
    description:
      "A refined open cuff featuring subtle diamond-inspired accents and clean lines.",
    category: "bracelets",
    price: 220,
    rating: 4.9,
    stock: 10,
    size: "Adjustable",
    brand: "Celeste",
    image: productImage2,
    images: [productImage2],
    isBestSeller: false,
  },

  {
    id: 47,
    title: "Floral Charm Bracelet",
    description:
      "A romantic bracelet decorated with delicate floral-inspired charms.",
    category: "bracelets",
    price: 140,
    rating: 4.6,
    stock: 21,
    size: "6.5-7.5 inches",
    brand: "Maison Lumière",
    image: productImage3,
    images: [productImage3],
    isBestSeller: false,
  },

  {
    id: 48,
    title: "Sleek Link Bracelet",
    description:
      "A contemporary link bracelet featuring smooth interlocking links for a modern look.",
    category: "bracelets",
    price: 160,
    rating: 4.7,
    stock: 19,
    size: "7 inches",
    brand: "Aurelie & Co.",
    image: productImage4,
    images: [productImage4],
    isBestSeller: false,
  },

  // =========================
  // LAB DIAMONDS
  // =========================

  {
    id: 49,
    title: "Classic Lab Diamond Solitaire",
    description:
      "A brilliant lab-grown diamond solitaire designed with timeless elegance and exceptional sparkle.",
    category: "lab diamonds",
    price: 650,
    rating: 4.9,
    stock: 8,
    size: "1.0 Carat",
    brand: "Lumière Lab",
    image: productImage4,
    images: [productImage4],
    isBestSeller: true,
  },

  {
    id: 50,
    title: "Oval Lab Diamond Ring",
    description:
      "An elegant oval-cut lab-grown diamond set in a refined setting for a graceful silhouette.",
    category: "lab diamonds",
    price: 780,
    rating: 4.9,
    stock: 6,
    size: "1.2 Carat",
    brand: "Celeste Lab",
    image: productImage5,
    images: [productImage5],
    isBestSeller: true,
  },

  {
    id: 51,
    title: "Pear Lab Diamond Pendant",
    description:
      "A delicate pear-cut lab-grown diamond pendant that catches the light beautifully.",
    category: "lab diamonds",
    price: 590,
    rating: 4.8,
    stock: 10,
    size: "0.75 Carat",
    brand: "Lumière Lab",
    image: productImage6,
    images: [productImage6],
    isBestSeller: false,
  },

  {
    id: 52,
    title: "Lab Diamond Stud Earrings",
    description:
      "Classic lab-grown diamond studs offering refined brilliance for everyday elegance.",
    category: "lab diamonds",
    price: 520,
    rating: 4.9,
    stock: 12,
    size: "0.50 Carat",
    brand: "Celeste Lab",
    image: productImage1,
    images: [productImage1, productImage2],
    isBestSeller: true,
  },

  {
    id: 53,
    title: "Emerald Cut Lab Diamond",
    description:
      "A sophisticated emerald-cut lab-grown diamond with a clean and elegant appearance.",
    category: "lab diamonds",
    price: 920,
    rating: 4.9,
    stock: 5,
    size: "1.5 Carat",
    brand: "Maison Lab",
    image: productImage2,
    images: [productImage2],
    isBestSeller: false,
  },

  {
    id: 54,
    title: "Princess Cut Lab Diamond",
    description:
      "A modern princess-cut lab-grown diamond offering brilliant sparkle and sharp geometric lines.",
    category: "lab diamonds",
    price: 720,
    rating: 4.8,
    stock: 7,
    size: "1.0 Carat",
    brand: "Lumière Lab",
    image: productImage3,
    images: [productImage3],
    isBestSeller: false,
  },

  {
    id: 55,
    title: "Lab Diamond Halo Ring",
    description:
      "A stunning lab-grown diamond surrounded by a sparkling halo for added brilliance.",
    category: "lab diamonds",
    price: 850,
    rating: 4.9,
    stock: 6,
    size: "1.25 Carat",
    brand: "Celeste Lab",
    image: productImage4,
    images: [productImage4],
    isBestSeller: true,
  },

  {
    id: 56,
    title: "Round Brilliant Lab Diamond",
    description:
      "A classic round brilliant lab-grown diamond created to maximize light and sparkle.",
    category: "lab diamonds",
    price: 680,
    rating: 4.8,
    stock: 9,
    size: "1.0 Carat",
    brand: "Maison Lab",
    image: productImage5,
    images: [productImage5],
    isBestSeller: false,
  },

  {
    id: 57,
    title: "Lab Diamond Tennis Bracelet",
    description:
      "A refined tennis bracelet featuring a continuous row of brilliant lab-grown diamonds.",
    category: "lab diamonds",
    price: 1250,
    rating: 4.9,
    stock: 4,
    size: "6.5-7 inches",
    brand: "Celeste Lab",
    image: productImage6,
    images: [productImage6],
    isBestSeller: true,
  },

  {
    id: 58,
    title: "Cushion Lab Diamond Ring",
    description:
      "A romantic cushion-cut lab-grown diamond framed by a delicate polished setting.",
    category: "lab diamonds",
    price: 810,
    rating: 4.9,
    stock: 6,
    size: "1.25 Carat",
    brand: "Lumière Lab",
    image: productImage1,
    images: [productImage1],
    isBestSeller: false,
  },

  {
    id: 59,
    title: "Lab Diamond Drop Earrings",
    description:
      "Elegant drop earrings featuring brilliant lab-grown diamonds for special occasions.",
    category: "lab diamonds",
    price: 740,
    rating: 4.8,
    stock: 8,
    size: "1.0 Carat",
    brand: "Celeste Lab",
    image: productImage2,
    images: [productImage2],
    isBestSeller: false,
  },

  {
    id: 60,
    title: "Radiant Cut Lab Diamond",
    description:
      "A striking radiant-cut lab-grown diamond combining brilliant sparkle with contemporary style.",
    category: "lab diamonds",
    price: 980,
    rating: 4.9,
    stock: 5,
    size: "1.5 Carat",
    brand: "Maison Lab",
    image: productImage3,
    images: [productImage3],
    isBestSeller: false,
  },

  {
    id: 61,
    title: "Lab Diamond Eternity Band",
    description:
      "A sophisticated eternity band featuring lab-grown diamonds around the polished band.",
    category: "lab diamonds",
    price: 890,
    rating: 4.9,
    stock: 6,
    size: "US 5-9",
    brand: "Lumière Lab",
    image: productImage4,
    images: [productImage4],
    isBestSeller: true,
  },

  {
    id: 62,
    title: "Marquise Lab Diamond Ring",
    description:
      "A graceful marquise-cut lab-grown diamond designed for a distinctive and elegant look.",
    category: "lab diamonds",
    price: 760,
    rating: 4.8,
    stock: 7,
    size: "1.0 Carat",
    brand: "Celeste Lab",
    image: productImage5,
    images: [productImage5],
    isBestSeller: false,
  },

  {
    id: 63,
    title: "Lab Diamond Pendant Necklace",
    description:
      "A timeless pendant featuring a brilliant lab-grown diamond suspended from a fine chain.",
    category: "lab diamonds",
    price: 620,
    rating: 4.9,
    stock: 9,
    size: "18 inches",
    brand: "Lumière Lab",
    image: productImage6,
    images: [productImage6],
    isBestSeller: true,
  },

  {
    id: 64,
    title: "Luxury Lab Diamond Set",
    description:
      "A sophisticated matching jewelry set featuring lab-grown diamonds designed for elegant occasions.",
    category: "lab diamonds",
    price: 1450,
    rating: 4.9,
    stock: 3,
    size: "1.5 Carat",
    brand: "Maison Lab",
    image: productImage3,
    images: [productImage3],
    isBestSeller: true,
  },
];

export default products;
