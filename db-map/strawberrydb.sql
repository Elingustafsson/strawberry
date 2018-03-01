-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2018 at 10:21 AM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u8157462_strawberrydb`
--
CREATE DATABASE IF NOT EXISTS `u8157462_strawberrydb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `u8157462_strawberrydb`;

-- --------------------------------------------------------

--
-- Table structure for table `markers`
--

CREATE TABLE `markers` (
  `markerID` int(11) NOT NULL,
  `markerLat` varchar(45) DEFAULT NULL,
  `markerLng` varchar(45) DEFAULT NULL,
  `teamID` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `markers`
--

INSERT INTO `markers` (`markerID`, `markerLat`, `markerLng`, `teamID`) VALUES
(1, '59.313670', '18.114184', '1'),
(2, '59.313670', '18.118675', '2'),
(3, '59.312560', '18.105562', '3'),
(4, '59.310822', '18.114690', '4'),
(5, '59.311496', '18.118675', '5'),
(6, '59.309242', '18.109821', '6'),
(7, '59.312943', '18.109854', '7');

-- --------------------------------------------------------

--
-- Table structure for table `questionanswers`
--

CREATE TABLE `questionanswers` (
  `questionid` int(11) NOT NULL,
  `answer1` varchar(45) DEFAULT 'magnusson',
  `answer2` varchar(45) DEFAULT 'andersson',
  `answer3` varchar(45) DEFAULT 'lappalainen',
  `answer4` varchar(45) DEFAULT 'karlsson',
  `question` varchar(45) DEFAULT 'Vad heter Tim i efternamn?',
  `correctAnswer` varchar(45) DEFAULT 'lappalainen'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `questionanswers`
--

INSERT INTO `questionanswers` (`questionid`, `answer1`, `answer2`, `answer3`, `answer4`, `question`, `correctAnswer`) VALUES
(0, 'Black sails', 'Vikings', 'Karlsson på taket', 'Game of thrones', 'Jon snow är med i en serie, vilken?', 'Game of thrones'),
(1, 'magnusson', 'andersson', 'Gustafsson', 'karlsson', 'Vad heter Elin i efternamn?', 'Gustafsson'),
(2, 'magnusson', 'andersson', 'Stenqvist', 'karlsson', 'Vad heter Viktor i efternamn?', 'Stenqvist'),
(3, 'Svenska', 'Engelska', 'Franska', 'Spanska', 'Vilket språk pratas i Spanien?', 'Spanska'),
(4, '20 April', '26 Juni', '1 Januari', '31 December', 'När föddes Adolf Hitler?', '20 April'),
(5, 'Syre', 'kaffe', 'Vatten', 'Koldioxid', 'Vad är CO2 för något?', 'Koldioxid'),
(6, 'Korv', 'Mays', 'Corn', 'Korn', 'Vad heter majs på engelska', 'Corn');

-- --------------------------------------------------------

--
-- Table structure for table `teamscore`
--

CREATE TABLE `teamscore` (
  `team` varchar(16) NOT NULL,
  `score` int(5) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `teamscore`
--

INSERT INTO `teamscore` (`team`, `score`) VALUES
('Pink', 1),
('Purple', 0),
('Blue', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userID` int(11) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `team` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userID`, `username`, `password`, `email`, `team`) VALUES
(1, 'elinÃ¤rglad', 'elinÃ¤rglad', 'elinÃ¤rglad@gmail.com', 'Blue'),
(4, 'elinÃ¤rlost', 'elinÃ¤rlost', 'elinÃ¤rlost', 'Pink'),
(6, 'viktortest', 'viktortest', 'viktortest', 'purple'),
(9, 'elinsuger', 'elinsuger', 'elinsuger@gmail.com', 'purple'),
(10, 'inteviktor', 'inteviktor', 'inteviktor', 'Pink');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `markers`
--
ALTER TABLE `markers`
  ADD PRIMARY KEY (`markerID`);

--
-- Indexes for table `questionanswers`
--
ALTER TABLE `questionanswers`
  ADD PRIMARY KEY (`questionid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `markers`
--
ALTER TABLE `markers`
  MODIFY `markerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `questionanswers`
--
ALTER TABLE `questionanswers`
  MODIFY `questionid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
