/*
  Warnings:

  - You are about to drop the `comboProducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "comboProducts";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_combo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "urlImg" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "promotional" REAL NOT NULL DEFAULT 0,
    "totalPrice" REAL NOT NULL DEFAULT 0
);
INSERT INTO "new_combo" ("active", "id", "name", "promotional", "urlImg") SELECT "active", "id", "name", "promotional", "urlImg" FROM "combo";
DROP TABLE "combo";
ALTER TABLE "new_combo" RENAME TO "combo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
