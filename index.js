const { initializeDB } = require("./db/db.connect");
const Product = require("./models/Product.model");
const Category = require("./models/Category.model");
const Address = require("./models/Address.model");
const Order = require("./models/Order.model");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

initializeDB();

const newProduct = {
  productId: "d5",
  category: "dairy",
  title: "Paneer 200g",
  price: 90,
  rating: 4.3,
  description: "Fresh paneer perfect for curries and snacks.",
  image:
    "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const newProductsArray = [
  // Fruits & Vegetables
  {
    productId: "f1",
    category: "fruitsNveg",
    title: "Apples (1kg)",
    price: 120,
    rating: 4.6,
    description: "Crisp and juicy apples rich in fiber.",
    image:
      "https://plus.unsplash.com/premium_photo-1667049292983-d2524dd0ef08?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    productId: "f2",
    category: "fruitsNveg",
    title: "Bananas (6 pc)",
    price: 40,
    rating: 4.4,
    description: "Naturally sweet bananas packed with energy.",
    image:
      "https://images.unsplash.com/photo-1587334206596-c0f9f7dccbe6?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    productId: "f3",
    category: "fruitsNveg",
    title: "Tomatoes (1kg)",
    price: 35,
    rating: 4.1,
    description: "Fresh and ripe tomatoes for cooking or salad.",
    image:
      "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    productId: "f4",
    category: "fruitsNveg",
    title: "Potatoes (2kg)",
    price: 50,
    rating: 2.6,
    description: "All-purpose potatoes, ideal for boiling or frying.",
    image:
      "https://images.unsplash.com/photo-1590165482129-1b8b27698780?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    productId: "f5",
    category: "fruitsNveg",
    title: "Broccoli (1pc)",
    price: 45,
    rating: 4.5,
    description: "Nutritious and fresh broccoli, perfect for steaming.",
    image:
      "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // Drinks
  {
    productId: "dr1",
    category: "drinks",
    title: "Coca Cola 1.25L",
    price: 55,
    rating: 4.2,
    description: "Chilled and fizzy Coca Cola for instant refreshment.",
    image:
      "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    productId: "dr2",
    category: "drinks",
    title: "Frooti 500ml",
    price: 35,
    rating: 4.3,
    description: "Delicious mango drink in a convenient bottle.",
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    productId: "dr3",
    category: "drinks",
    title: "Sprite 1L",
    price: 50,
    rating: 3.6,
    description: "Lemon-flavored refreshing cold drink.",
    image:
      "https://images.unsplash.com/photo-1680404005217-a441afdefe83?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    productId: "dr4",
    category: "drinks",
    title: "Real Orange Juice 1L",
    price: 90,
    rating: 3.3,
    description: "100% real orange juice with no added sugar.",
    image:
      "https://images.unsplash.com/photo-1550234699-2ebb2d96dfa7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    productId: "dr5",
    category: "drinks",
    title: "Paper Boat Aam Panna",
    price: 30,
    rating: 4.4,
    description: "Traditional Indian summer drink in a modern pack.",
    image:
      "https://images.unsplash.com/photo-1631308491952-040f80133535?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // Cleaning
  {
    productId: "c1",
    category: "cleaning",
    title: "Surf Excel Detergent",
    price: 220,
    rating: 1.8,
    description: "Powerful stain removal detergent for tough laundry.",
    image:
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    productId: "c2",
    category: "cleaning",
    title: "Vim Liquid 500ml",
    price: 55,
    rating: 4.3,
    description: "Lemon-based dishwashing liquid with superior grease removal.",
    image:
      "https://plus.unsplash.com/premium_photo-1664443944738-357d3f7d1c42?q=80&w=1088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0",
  },
  {
    productId: "c3",
    category: "cleaning",
    title: "Lizol Disinfectant",
    price: 99,
    rating: 4.5,
    image:
      "https://plus.unsplash.com/premium_photo-1684407616444-d52caf1a828f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    productId: "c4",
    category: "cleaning",
    title: "Dettol Handwash",
    price: 85,
    rating: 4.4,
    description: "Kills 99.9% germs and keeps your home fresh.",
    image:
      "https://images.unsplash.com/photo-1606619353149-83f429787f9f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    productId: "c5",
    category: "cleaning",
    title: "Colin Glass Cleaner",
    price: 75,
    rating: 3.7,
    description: "Sparkling clean glass and surfaces, streak-free.",
    image:
      "https://images.unsplash.com/photo-1707143598173-944230c2de24?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // Chocolates & Icecreams
  {
    productId: "ch1",
    category: "chocNice",
    title: "KitKat 4 Finger",
    price: 25,
    rating: 4.6,
    description: "Crispy wafers covered in smooth milk chocolate.",
    image:
      "https://images.unsplash.com/photo-1604815891325-0f9c17688328?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    productId: "ch2",
    category: "chocNice",
    title: "Dairy Milk Silk",
    price: 80,
    rating: 4.8,
    description: "Indulgent and silky smooth Cadbury chocolate.",
    image:
      "https://images.unsplash.com/photo-1638275995244-26a3f3a2ed49?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    productId: "ch3",
    category: "chocNice",
    title: "Amul Ice Cream",
    price: 60,
    rating: 4.5,
    description: "Delicious and creamy Amul vanilla ice cream.",
    image:
      "https://images.unsplash.com/photo-1586770937732-9660b97dd48e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    productId: "ch4",
    category: "chocNice",
    title: "Ferrero Rocher",
    price: 299,
    rating: 4.9,
    description: "Premium hazelnut chocolate in a golden wrap.",
    image:
      "https://images.unsplash.com/photo-1654245384480-368638d6df9d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    productId: "ch5",
    category: "chocNice",
    title: "Snickers Mini",
    price: 10,
    rating: 3.3,
    description: "Tasty chocolate bar with peanuts and caramel.",
    image:
      "https://images.unsplash.com/photo-1694888594223-f727f1bbcdf0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // Stationary
  {
    productId: "s1",
    category: "stationary",
    title: "Classmate Notebook",
    price: 35,
    rating: 3.3,
    description: "Durable and high-quality notebook for everyday writing.",
    image:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    productId: "s2",
    category: "stationary",
    title: "Ball Pens (Pack of 10)",
    price: 50,
    rating: 4.2,
    description: "Smooth writing pens ideal for students and professionals.",
    image:
      "https://images.unsplash.com/photo-1672338099451-f9f7c11a02a4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    productId: "s3",
    category: "stationary",
    title: "Apsara Pencils",
    price: 30,
    rating: 2.4,
    description: "Quality pencils with dark lead for neat handwriting.",
    image:
      "https://images.unsplash.com/photo-1565359184520-fcff70f99c24?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    productId: "s4",
    category: "stationary",
    title: "Erasers (Pack of 3)",
    price: 15,
    rating: 3.9,
    description: "Clean erasing and dust-free erasers for school use.",
    image:
      "https://images.unsplash.com/photo-1667532447990-51c6704ef358?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    productId: "s5",
    category: "stationary",
    title: "Fevicol Glue",
    description: "Strong adhesive for craft and school projects.",
    price: 20,
    rating: 3.5,
    image:
      "https://plus.unsplash.com/premium_photo-1661630937304-3f12e74a4c15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const newCategrory = {
  categoryId: "stationary",
  title: "Stationary and office supplies",
  image:
    "https://plus.unsplash.com/premium_photo-1664303228218-c7eedbffe762?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  alt: "Books copies etc",
  link: "/products/stationary",
};

const newAddress = {
  name: "Pawan Mishra",
  street: "123 Main St",
  city: "Mumbai",
  state: "Maharashtra",
  pincode: "400001",
  phone: "9876543210",
};

//function to create new category
async function createCategory(newCategrory) {
  try {
    const category = new Category(newCategrory);
    const savedCategory = await category.save();
    return savedCategory;
  } catch (error) {
    throw error;
  }
}
//createCategory(newCategrory);

//api route for creating new category
app.post("/categories", async (req, res) => {
  try {
    const newCategrory = await createCategory(req.body);
    res.status(201).json({
      message: "New category created successfully",
      category: newCategrory,
    });
  } catch (error) {
    res.status(500).json({
      error: "An error occured while creating new Category.",
      errorMessage: error,
    });
  }
});

//function to read categories
async function readAllCategories() {
  try {
    const allCategories = await Category.find();
    return allCategories;
  } catch (error) {
    throw error;
  }
}
// readAllCategories();
app.get("/categories", async (req, res) => {
  try {
    const categories = await readAllCategories();
    if (categories.length > 0) {
      res
        .status(200)
        .json({ message: "Categories found successfully.", categories });
    } else {
      res.status(404).json({ error: "Category not found." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occured while fetching categories." });
  }
});

//function to add multiple products
async function createProducts(newProductsArray) {
  try {
    const savedProducts = await Product.insertMany(newProductsArray);
    return savedProducts;
  } catch (error) {
    throw error;
  }
}
//createProducts(newProductsArray);
//function to create new Product
async function createProduct(newProduct) {
  try {
    const product = new Product(newProduct);
    const savedProduct = await product.save();

    return savedProduct;
  } catch (error) {
    throw error;
  }
}

//route to create new Product
app.post("/products", async (req, res) => {
  try {
    const newProduct = await createProduct(req.body);
    res.status(201).json({
      message: "New product created successfully",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      error: "An error occured while saving product",
      errorMessage: error,
    });
  }
});

//createProduct(newProduct);

//function to find all products
async function findAllProducts() {
  try {
    const allProducts = await Product.find();
    return allProducts;
  } catch (error) {
    throw error;
  }
}

app.get("/products", async (req, res) => {
  try {
    const products = await findAllProducts();
    if (products.length > 0) {
      res
        .status(200)
        .json({ message: "Product Found successfully.", products: products });
    } else {
      res.status(404).json({ message: "No Product found" });
    }
  } catch (error) {
    res
      .status(400)
      .json({ error: "An error occured while fetching products." });
  }
});

//route to search  a product
app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ _id: id });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ product });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the product" });
  }
});

//function to add new address
async function createAddress(newAddress) {
  try {
    const address = new Address(newAddress);
    const savedAddress = await address.save();

    return savedAddress;
  } catch (error) {
    throw error;
  }
}

//createAddress(newAddress);

//route to add new Address
app.post("/addresses", async (req, res) => {
  try {
    const newAddress = await createAddress(req.body);
    const saved = await newAddress.save();
    res.status(201).json({ message: "Address added", address: saved });
  } catch (error) {
    res.status(500).json({ error: "Error saving address" });
  }
});
//update address
app.put("/addresses/:id", async (req, res) => {
  try {
    const addressId = req.params.id;
    const updatedData = req.body;

    const updatedAddress = await Address.findByIdAndUpdate(
      addressId,
      updatedData,
      { new: true } // Return updated document
    );

    if (!updatedAddress) {
      return res.status(404).json({ error: "Address not found" });
    }

    res.status(200).json({
      message: "Address updated successfully",
      address: updatedAddress,
    });
  } catch (error) {
    console.error("Error updating address:", error);
    res.status(500).json({
      error: "An error occurred while updating address",
      errorMessage: error.message,
    });
  }
});

//route to get all address
app.get("/addresses", async (req, res) => {
  try {
    const addresses = await Address.find();
    res.status(200).json({ addresses });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch addresses" });
  }
});

//route to add order
app.post("/orders", async (req, res) => {
  try {
    const { items, address } = req.body;
    const newOrder = new Order({ items, address });
    const savedOrder = await newOrder.save();
    res.status(201).json({ message: "Order placed", order: savedOrder });
  } catch (error) {
    res.status(500).json({ error: "Error saving order", errorMessage: error });
  }
});

//route to fetch order
app.get("/orders/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error: "Error fetching order" });
  }
});

//route to fetch all orders
app.get("/orders", async (req, res) => {
  try {
    const order = await Order.find();
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error: "Error fetching order" });
  }
});

//starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("App is running on port no: ", PORT);
});
