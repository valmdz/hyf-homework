CREATE DATABASE school;
USE school;

CREATE TABLE `class` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `start_date` DATETIME NOT NULL,
    `end_date` DATETIME NOT NULL,
    PRIMARY KEY (`id`)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE `student` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `class_id` INT(10) UNSIGNED NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`class_id`)
        REFERENCES `class` (`id`)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

-- Create an index on the name column of the student table.

CREATE INDEX `index_student_name` ON `student` (`name`);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).

ALTER TABLE `class`
ADD COLUMN `status` ENUM('not-started', 'ongoing', 'finished') NOT NULL;

