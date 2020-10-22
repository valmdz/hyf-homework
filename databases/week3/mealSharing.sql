CREATE DATABASE `mealSharing`;
USE `mealSharing`;

CREATE TABLE `meal` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `when` DATETIME NOT NULL,
    `max_reservations` INT(10) NOT NULL,
    `price` DECIMAL(18,2) NOT NULL,
    `created_date` DATE NOT NULL,
    PRIMARY KEY (`id`)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;


CREATE TABLE `reservation` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `number_of_guests` INT(10) NOT NULL,
    `meal_id` INT(10) UNSIGNED NOT NULL,
    `created_date` DATE NOT NULL,
    `contact_phonenumber` VARCHAR(255) NOT NULL,
    `contact_name` VARCHAR(255) NOT NULL,
    `contact_email` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`meal_id`)
      REFERENCES `meal` (`id`)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE `review` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `meal_id` INT(10) UNSIGNED NOT NULL,
    `stars` INT(10) NOT NULL,
    `created_date` DATE NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`meal_id`)
      REFERENCES `meal` (`id`)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

-- Meal
INSERT INTO `mealsharing`.`meal` (`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) 
VALUES (1, 'Thai night','Enjoy a great variety of Thai food', 
'Skjalm Hvides Gade 7, 1728 København', '2020-10-23 18:00:00', 10, 40.00, '2020-10-16');

INSERT INTO `mealsharing`.`meal` (`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) 
VALUES (2, 'A day for the dead','Join us to celebrate day of the dead accompanied with traditional mexican food', 
'Hans Tavsens Gade 20, 2200 København', '2020-10-31 18:00:00', 15, 40.00, '2020-10-19');

INSERT INTO `mealsharing`.`meal` (`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) 
VALUES (3, 'A weirdough day','Come to a social day of sourdough pizza, it is all about the fun', 
'Møllegade 3 2th, 2200 København', '2020-11-12 18:30:00', 10, 20.00, '2020-10-19');

INSERT INTO `mealsharing`.`meal` (`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) 
VALUES (4, 'Pastries for days','Enjoy an evening full of delicious pastries that will surely satisfy your sweet cravings', 
'Kastanievej 12, 1876 Frederiksberg C', '2020-11-06 18:0:00', 7, 10.00, '2020-10-22');

SELECT * FROM `mealSharing`.`meal`;

-- Reservation
INSERT INTO `mealsharing`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) 
VALUES (1, 2, 1, '2020-10-16', '61366748', 'Chawannat Inta', 'chawannat_inta@gmail.com');

INSERT INTO `mealsharing`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) 
VALUES (2, 3, 2, '2020-10-19', '86338782', 'Juan José Domínguez', 'jjdominguez@gmail.com');

INSERT INTO `mealsharing`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) 
VALUES (3, 2, 3, '2020-10-19', '93782999', 'Pablo Capozzi', 'capozzizzi@gmail.com');

INSERT INTO `mealsharing`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) 
VALUES (4, 2, 1, '2020-10-20', '84288447', 'Hao Ming', 'howhaohao@gmail.com');

INSERT INTO `mealsharing`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) 
VALUES (5, 4, 1, '2020-10-20', '77462573', 'Maha Kitiyakara', 'm_kitiyakara@gmail.com');

INSERT INTO `mealsharing`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) 
VALUES (6, 2, 1, '2020-10-21', '66583778', 'Sarali Vajiralongkorn', 'vajiralongkornkorn@gmail.com');
SELECT * FROM `mealsharing`.`reservation`;

-- Review

INSERT INTO `mealsharing`.`review` (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`) 
VALUES (1, 'Always great food', 'I have been in multiple events of the same hosts and the food was delicious', 1, 5, '2020-10-10');

INSERT INTO `mealsharing`.`review` (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`) 
VALUES (2, 'Great vibes', 'Surrounded by friendly people', 2, 5, '2020-10-20');

INSERT INTO `mealsharing`.`review` (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`)
 VALUES (3, 'Tasty but late', 'The food was delicious but sadly the event delayed and started 30min late', 3, 4, '2020-10-21');

INSERT INTO `mealsharing`.`review` (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`)
 VALUES (4, 'Dissapointing', 'My expectations were not fulfilled', 3, 2, '2020-10-22');

INSERT INTO `mealsharing`.`review` (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`)
 VALUES (5, 'It used to be better', 'On past years this celebration had a better organization', 2, 2, '2020-10-21');

SELECT * FROM `mealsharing`.`review`;

-- MEAL QUERIES

-- Get all meals
SELECT * FROM `mealSharing`.`meal`;

-- Add a new meal
INSERT INTO `mealsharing`.`meal` (`id`, `title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) 
VALUES (5, 'Kombucha','Tasting of experimental kombucha with tapas', 'Tibirkegade 12, 2200 København', '2020-10-30 18:00:00', 15, 30.00, '2020-10-18');

-- Get a meal with any id, fx 1
SELECT * FROM `mealSharing`.`meal`
WHERE id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE `mealSharing`.`meal` 
SET `when` = '2020-11-12 18:45:00'
WHERE id = 3;

-- Delete a meal with any id, fx 1
DELETE FROM `mealSharing`.`meal`
WHERE id = 5;

-- RESERVATION QUERIES

-- Get all reservations
SELECT * FROM `mealSharing`.`reservation`;

-- Add a new reservation
INSERT INTO `mealsharing`.`reservation` (`id`, `number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) 
VALUES (7, 2, 2, '2020-10-16', '81916589', 'Peter Winther', 'pwinther@gmail.com');

-- Get a reservation with any id, fx 1
SELECT * FROM `mealSharing`.`reservation`
WHERE id = 2;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE `mealSharing`.`reservation` 
SET `contact_email` = 'pwinthery@gmail.com'
WHERE id = 4;

-- Delete a reservation with any id, fx 1
DELETE FROM `mealSharing`.`reservation`
WHERE id = 7;

-- REVIEW QUERIES

-- Get all reviews
SELECT * FROM `mealSharing`.`review`;

-- Add a new review
INSERT INTO `mealsharing`.`review` (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`) 
VALUES (6, 'Very spicy', 'In my opinion the food was good but very spicy, not recomended if you are not used to eating a lof of chili', 1, 3, '2020-10-24');

-- Get a review with any id, fx 1
SELECT * FROM `mealSharing`.`review`
WHERE id = 6;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE `mealSharing`.`review` 
SET `stars` = '2'
WHERE id = 6;

-- Delete a review with any id, fx 1
DELETE FROM `mealSharing`.`review`
WHERE id = 6;

--ADITIONAL QUERIES

-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM `mealSharing`.`meal`
WHERE `price` <= 35.00;

-- Get meals that still has available reservations
SELECT *
FROM `meal`
JOIN (
	SELECT meal_id, SUM(`number_of_guests`) AS `signed_guests`
	FROM `reservation`
	  JOIN `meal` ON `meal_id` = `meal`.`id`
	GROUP BY meal_id
) AS _ ON meal_id = meal.id
WHERE `max_reservations` > `signed_guests`;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM `mealSharing`.`meal`
WHERE `title` LIKE '%day%';

-- Get meals that has been created between two dates
SELECT * FROM `mealSharing`.`meal`
WHERE `created_date` BETWEEN '2020-10-16' AND '2020-10-19';

-- Get only specific number of meals fx return only 5 meals 
SELECT * FROM `mealSharing`.`meal`
LIMIT 2;

-- Get the meals that have good reviews
SELECT * FROM `meal` WHERE `id` IN (
SELECT `meal`.`id`
FROM `review`
  JOIN `meal` ON `meal_id` = `meal`.`id`
WHERE `stars` >= 4);


-- Get reservations for a specific meal sorted by created_date
SELECT `meal`.*
FROM `reservation`
  JOIN `meal` ON `meal_id` = `meal`.`id`
WHERE `meal_id` = 1
ORDER BY `created_date` ASC;

-- Sort all meals by average number of stars in the reviews
SELECT * FROM `meal`
JOIN (SELECT `meal_id`, AVG(`stars`) AS `avg_stars`
FROM `review`
GROUP BY `meal_id`) AS `_` ON `meal_id` = `meal`.`id`
ORDER BY `avg_stars` DESC;
