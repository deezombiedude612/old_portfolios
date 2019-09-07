DROP DATABASE IF EXISTS `portfolio`;

CREATE DATABASE `portfolio`;
USE `portfolio`;

DROP TABLE IF EXISTS `pals_credentials`;
CREATE TABLE `pals_credentials` (
	`id` INT(2) NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(30) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `last_active` DATETIME NULL, 
    
    PRIMARY KEY(`id`)
);

DELIMITER //

DROP PROCEDURE IF EXISTS `retrieveCredentials` //
CREATE PROCEDURE `retrieveCredentials`(`in_uname` VARCHAR(30), `in_pass` VARCHAR(50))
	BEGIN
		SELECT * FROM `pals_credentials`
        WHERE `username` = `in_uname`
        AND `password` = `in_pass`;
    END //

DELIMITER ;

INSERT INTO `pals_credentials` (`username`, `password`) VALUES ('henryheng612', 'Nickelodeon612');

CALL `retrieveCredentials`('henryheng612', 'Nickelodeon612');