-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: questions
-- ------------------------------------------------------
-- Server version	5.7.21-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `markers`
--

DROP TABLE IF EXISTS `markers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `markers` (
  `markerID` int(11) NOT NULL AUTO_INCREMENT,
  `markerLat` varchar(45) DEFAULT NULL,
  `markerLng` varchar(45) DEFAULT NULL,
  `teamID` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`markerID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `markers`
--

LOCK TABLES `markers` WRITE;
/*!40000 ALTER TABLE `markers` DISABLE KEYS */;
INSERT INTO `markers` VALUES (1,'59.313670','18.114184','1'),(2,'59.313670','18.118675','2'),(3,'59.312560','18.105562','3'),(4,'59.310822','18.114690','4'),(5,'59.311496','18.118675','5'),(6,'59.309242','18.109821','6'),(7,'59.312943','18.109854','7');
/*!40000 ALTER TABLE `markers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questionanswers`
--

DROP TABLE IF EXISTS `questionanswers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questionanswers` (
  `questionid` int(11) NOT NULL AUTO_INCREMENT,
  `answer1` varchar(45) DEFAULT 'magnusson',
  `answer2` varchar(45) DEFAULT 'andersson',
  `answer3` varchar(45) DEFAULT 'lappalainen',
  `answer4` varchar(45) DEFAULT 'karlsson',
  `question` varchar(45) DEFAULT 'Vad heter Tim i efternamn?',
  `correctAnswer` varchar(45) DEFAULT 'lappalainen',
  PRIMARY KEY (`questionid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questionanswers`
--

LOCK TABLES `questionanswers` WRITE;
/*!40000 ALTER TABLE `questionanswers` DISABLE KEYS */;
INSERT INTO `questionanswers` VALUES (0,'Black sails','Vikings','Karlsson på taket','Game of thrones','Jon snow är med i en serie, vilken?','Game of thrones'),(1,'magnusson','andersson','Gustafsson','karlsson','Vad heter Elin i efternamn?','Gustafsson'),(2,'magnusson','andersson','Stenqvist','karlsson','Vad heter Viktor i efternamn?','Stenqvist'),(3,'Svenska','Engelska','Franska','Spanska','Vilket språk pratas i Spanien?','Spanska'),(4,'20 April','26 Juni','1 Januari','31 December','När föddes Adolf Hitler?','20 April'),(5,'Syre','kaffe','Vatten','Koldioxid','Vad är CO2 för något?','Koldioxid'),(6,'Korv','Mays','Corn','Korn','Vad heter majs på engelska','Corn');
/*!40000 ALTER TABLE `questionanswers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `userID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `team` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-02-19 10:59:48
