-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cinema" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "ownerEmail" TEXT NOT NULL,
    CONSTRAINT "cinema_ownerEmail_fkey" FOREIGN KEY ("ownerEmail") REFERENCES "owner" ("email") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_cinema" ("country", "id", "local", "name", "ownerEmail") SELECT "country", "id", "local", "name", "ownerEmail" FROM "cinema";
DROP TABLE "cinema";
ALTER TABLE "new_cinema" RENAME TO "cinema";
CREATE TABLE "new_employeer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "cineId" TEXT NOT NULL,
    CONSTRAINT "employeer_cineId_fkey" FOREIGN KEY ("cineId") REFERENCES "cinema" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_employeer" ("cineId", "email", "id", "name", "phone_number") SELECT "cineId", "email", "id", "name", "phone_number" FROM "employeer";
DROP TABLE "employeer";
ALTER TABLE "new_employeer" RENAME TO "employeer";
CREATE UNIQUE INDEX "employeer_email_key" ON "employeer"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
