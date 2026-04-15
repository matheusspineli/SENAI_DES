/*
  Warnings:

  - You are about to drop the column `eventosId` on the `inscricoes` table. All the data in the column will be lost.
  - You are about to drop the column `usuariosId` on the `inscricoes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[eventoId,usuarioId]` on the table `Inscricoes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `eventoId` to the `Inscricoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `Inscricoes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `inscricoes` DROP FOREIGN KEY `Inscricoes_eventosId_fkey`;

-- DropForeignKey
ALTER TABLE `inscricoes` DROP FOREIGN KEY `Inscricoes_usuariosId_fkey`;

-- DropIndex
DROP INDEX `Inscricoes_eventosId_fkey` ON `inscricoes`;

-- DropIndex
DROP INDEX `Inscricoes_usuariosId_fkey` ON `inscricoes`;

-- AlterTable
ALTER TABLE `eventos` ADD COLUMN `data_criacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `inscricoes` DROP COLUMN `eventosId`,
    DROP COLUMN `usuariosId`,
    ADD COLUMN `eventoId` INTEGER NOT NULL,
    ADD COLUMN `usuarioId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Imagem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeOriginal` VARCHAR(191) NOT NULL,
    `nomeArquivo` VARCHAR(191) NOT NULL,
    `mimeType` VARCHAR(191) NOT NULL,
    `path` VARCHAR(191) NOT NULL,
    `tamanho` INTEGER NULL,
    `data_upload` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `eventoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Inscricoes_eventoId_usuarioId_key` ON `Inscricoes`(`eventoId`, `usuarioId`);

-- AddForeignKey
ALTER TABLE `Inscricoes` ADD CONSTRAINT `Inscricoes_eventoId_fkey` FOREIGN KEY (`eventoId`) REFERENCES `Eventos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inscricoes` ADD CONSTRAINT `Inscricoes_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Imagem` ADD CONSTRAINT `Imagem_eventoId_fkey` FOREIGN KEY (`eventoId`) REFERENCES `Eventos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
