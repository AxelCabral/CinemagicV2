-- CreateTable
CREATE TABLE "cinema" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "movie_theater" TEXT NOT NULL,
    CONSTRAINT "cinema_movie_theater_fkey" FOREIGN KEY ("movie_theater") REFERENCES "employeer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "employeer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "cinema_movie_theater_key" ON "cinema"("movie_theater");

-- CreateIndex
CREATE UNIQUE INDEX "employeer_email_key" ON "employeer"("email");
