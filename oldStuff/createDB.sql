-- Adminer 4.2.5 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP DATABASE IF EXISTS `strawberry_login`;
CREATE DATABASE `strawberry_login` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;
USE `strawberry_login`;

DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `username` varchar(30) COLLATE utf8_bin NOT NULL,
  `password` varchar(30) COLLATE utf8_bin NOT NULL,
  `email` varchar(40) COLLATE utf8_bin NOT NULL,
  `team` varchar(40) COLLATE utf8_bin NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

TRUNCATE `login`;

-- 2018-02-05 12:45:22