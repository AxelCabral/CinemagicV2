-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_combo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "urlImg" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "promotional" REAL NOT NULL DEFAULT 0
);
INSERT INTO "new_combo" ("active", "id", "name", "urlImg") SELECT "active", "id", "name", "urlImg" FROM "combo";
DROP TABLE "combo";
ALTER TABLE "new_combo" RENAME TO "combo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
