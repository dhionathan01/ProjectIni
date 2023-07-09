-- CreateTable
CREATE TABLE "Viagem" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "localizacao" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,
    "precoPorDia" DECIMAL(11,2) NOT NULL,
    "descricao" TEXT NOT NULL,
    "fotoCapa" TEXT NOT NULL,
    "imagensUrl" TEXT[],
    "destaques" TEXT[],
    "maximoHospedes" INTEGER NOT NULL,

    CONSTRAINT "Viagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reservaViagem" (
    "id" TEXT NOT NULL,
    "reservaId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,
    "precoTotal" DECIMAL(11,2) NOT NULL,

    CONSTRAINT "reservaViagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reservaViagem" ADD CONSTRAINT "reservaViagem_reservaId_fkey" FOREIGN KEY ("reservaId") REFERENCES "Viagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservaViagem" ADD CONSTRAINT "reservaViagem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
