-- CreateTable
CREATE TABLE "shoppingCart" (
    "cartId" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "productID" TEXT,
    "comboID" TEXT,
    CONSTRAINT "shoppingCart_productID_fkey" FOREIGN KEY ("productID") REFERENCES "products" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "shoppingCart_comboID_fkey" FOREIGN KEY ("comboID") REFERENCES "combo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
