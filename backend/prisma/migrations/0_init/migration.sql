-- CreateTable
CREATE TABLE `category` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `catid` INTEGER NOT NULL,
    `price` DECIMAL(10, 0) NOT NULL,
    `avaliable` BOOLEAN NOT NULL,

    INDEX `catid`(`catid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(20) NULL,
    `email` VARCHAR(50) NULL,
    `password` VARCHAR(70) NULL,
    `salt` VARCHAR(10) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`catid`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

