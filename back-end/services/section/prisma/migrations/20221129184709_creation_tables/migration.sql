/*
  Warnings:

  - You are about to drop the column `idSecao` on the `Filme` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Filme" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "duracao" INTEGER NOT NULL,
    "sinopse" TEXT NOT NULL,
    "generoID" TEXT NOT NULL,
    "idiomaID" TEXT NOT NULL,
    CONSTRAINT "Filme_generoID_fkey" FOREIGN KEY ("generoID") REFERENCES "Genero" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Filme_idiomaID_fkey" FOREIGN KEY ("idiomaID") REFERENCES "Idioma" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Filme" ("duracao", "generoID", "id", "idiomaID", "sinopse", "titulo") SELECT "duracao", "generoID", "id", "idiomaID", "sinopse", "titulo" FROM "Filme";
DROP TABLE "Filme";
ALTER TABLE "new_Filme" RENAME TO "Filme";
CREATE UNIQUE INDEX "Filme_titulo_key" ON "Filme"("titulo");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
