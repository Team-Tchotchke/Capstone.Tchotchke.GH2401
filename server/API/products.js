const express = require("express");
const productRouter = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

productRouter.get("/", async (req, res, next) => {
  try {
    const clause = req.query.category
      ? {
          where: {
            category_name: decodeURIComponent(req.query.category),
          },
        }
      : {};
    const products = await prisma.products.findMany(clause);
    res.send(products);
  } catch (ex) {
    next(ex);
  }
});

productRouter.get("/:id", async (req, res, next) => {
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

productRouter.post("/", async (req, res, next) => {
  try {
    const { name, desc, imgURL, price, category_name } = req.body;
    if (!name || !desc || !imgURL || !price || !category_name) {
      return res.status(400).send("Missing required fields");
    }
    const newProduct = await prisma.products.create({
      data: {
        name,
        desc,
        imgURL,
        price,
        category_name,
      },
    });
    res.send(newProduct);
  } catch (ex) {
    console.error("Error adding new product:");
    next(ex);
  }
});

module.exports = productRouter;
