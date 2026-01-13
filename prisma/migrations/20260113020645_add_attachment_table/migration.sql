/*
  Warnings:

  - The primary key for the `UserProgress` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `completedAt` on the `UserProgress` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,chapterId]` on the table `UserProgress` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `UserProgress` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `updatedAt` to the `UserProgress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `UserProgress` DROP PRIMARY KEY,
    DROP COLUMN `completedAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `Attachment` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `url` TEXT NOT NULL,
    `courseId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Attachment_courseId_idx`(`courseId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `UserProgress_chapterId_idx` ON `UserProgress`(`chapterId`);

-- CreateIndex
CREATE UNIQUE INDEX `UserProgress_userId_chapterId_key` ON `UserProgress`(`userId`, `chapterId`);
