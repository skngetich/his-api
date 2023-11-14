-- CreateTable
CREATE TABLE `User` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `dateOfBirth` DATETIME(3) NOT NULL,
    `idNo` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `nationality` VARCHAR(191) NOT NULL,
    `ethnicity` VARCHAR(191) NOT NULL,
    `homeCounty` VARCHAR(191) NOT NULL,
    `hasDisability` BOOLEAN NOT NULL,
    `disabilityDetails` VARCHAR(191) NULL,
    `nationalRegistrationForDisabilities` VARCHAR(191) NULL,

    UNIQUE INDEX `User_idNo_key`(`idNo`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contact` (
    `contactId` INTEGER NOT NULL AUTO_INCREMENT,
    `postalAddress` VARCHAR(191) NOT NULL,
    `postalCode` VARCHAR(191) NOT NULL,
    `town` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NOT NULL,
    `mobile` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `altContactName` VARCHAR(191) NOT NULL,
    `altContactTelephone` VARCHAR(191) NOT NULL,
    `userId` INTEGER NULL,

    PRIMARY KEY (`contactId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Disability` (
    `disabilityId` INTEGER NOT NULL AUTO_INCREMENT,
    `hasDisability` BOOLEAN NOT NULL,
    `disabilityDetails` VARCHAR(191) NULL,
    `nationalRegistrationForDisabilities` VARCHAR(191) NULL,
    `userId` INTEGER NULL,

    PRIMARY KEY (`disabilityId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
