// import { PrismaClient } from '@prisma/client'
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
// const { v4: uuidv4 } = require("uuid");
// ROUTES

const pg = require("pg");
const client = new pg.Client(
  process.env.DATABASE_URL ||
    "postgresql://allisonrandel:howdy123@localhost:5432/tchotchke_db" // This should be filled in with your personal computer credentials in your .env file
);

const express = require("express");
const app = express();
app.use(express.json());

const dummyOrder = require("./dummyOrder");
const dummyCart = require("./dummyCart");

// const bcrypt = require('bcrypt');
const cors = require("cors");

app.use(cors());

app.get("/", async (req, res) => {
  res.send("TODO - this will be our application");
});

app.get("/api/products", async (req, res, next) => {
  try {
    const products = await prisma.products.findMany();
    res.send(products);
  } catch (ex) {
    next(ex);
  }
});

app.get("/api/products/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await prisma.products.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    res.send(product);
  } catch (ex) {
    next(ex);
  }
});

// app.post("/api/products", async (req, res, next) => {
//   const uuid = uuidv4();
//   try {
//     const { id, name, desc, imgURL, price, category_name } = req.body;
//     if (!name || !desc || !imgURL || !price || !category_name) {
//       return res.status(400).send("Missing required fields");
//     }
//     const newProduct = await prisma.products.create({
//       data: {
//         id,
//         name,
//         desc,
//         imgURL,
//         price,
//         category_name,
//       },
//     });
//     res.send(newProduct);
//   } catch (ex) {
//     console.error("Error adding new product:");
//     next(ex);
//   }
// });

app.get("/api/users", async (req, res, next) => {
  try {
    const allUsers = await prisma.users.findMany();
    res.status(200).json(allUsers);
  } catch (ex) {
    next(ex);
  }
});

app.post("/api/users/register", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await prisma.users.create({
      data: {
        name,
        email,
        password,
      },
    });
    console.log(newUser);
    res.status(201).send(newUser);
  } catch (ex) {
    next(ex);
  }
});

app.get("api/users/login", (req, res) => {});

app.get("/api/order", async (req, res, next) => {
  try {
    // const orders = await prisma.orders.findMany();
    res.send(dummyOrder);
  } catch (ex) {
    next(ex);
  }
});

app.get("/api/cart", async (req, res, next) => {
  try {
    // const cart = await prisma.cart.findMany();
    res.send(dummyCart);
  } catch (ex) {
    next(ex);
  }
});

app.delete("/api/cart/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteCartItem = await prisma.cart.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.send(deleteCartItem);
  } catch (ex) {
    next(ex);
  }
});

const init = async () => {
  console.log("connecting to database");
  await prisma.$connect();
  console.log("connected to database");
};

init()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`REST API server ready at http://localhost:${PORT}`);
});
