-- CreateTable
CREATE TABLE "Cinema" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "regiao" TEXT NOT NULL,
    "IdSecao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Filme" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "duracao" INTEGER NOT NULL,
    "sinopse" TEXT NOT NULL,
    "idSecao" TEXT NOT NULL,
    "generoID" TEXT NOT NULL,
    "idiomaID" TEXT NOT NULL,
    CONSTRAINT "Filme_generoID_fkey" FOREIGN KEY ("generoID") REFERENCES "Genero" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Filme_idiomaID_fkey" FOREIGN KEY ("idiomaID") REFERENCES "Idioma" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Genero" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "genero" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Idioma" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idioma" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Secao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "estreia" DATETIME NOT NULL,
    "enceramento" DATETIME NOT NULL,
    "cinemaId" TEXT NOT NULL,
    "filmeId" TEXT NOT NULL,
    CONSTRAINT "Secao_filmeId_fkey" FOREIGN KEY ("filmeId") REFERENCES "Filme" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Secao_cinemaId_fkey" FOREIGN KEY ("cinemaId") REFERENCES "Cinema" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Cinema_name_key" ON "Cinema"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Filme_titulo_key" ON "Filme"("titulo");

-- CreateIndex
CREATE UNIQUE INDEX "Idioma_idioma_key" ON "Idioma"("idioma");
