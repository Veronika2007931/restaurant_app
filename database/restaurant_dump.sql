-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: restaurant_db
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menuitems`
--

DROP TABLE IF EXISTS `menuitems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menuitems` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `price` decimal(10,2) NOT NULL,
  `weight` int NOT NULL,
  `imageUrl` varchar(1000) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menuitems`
--

LOCK TABLES `menuitems` WRITE;
/*!40000 ALTER TABLE `menuitems` DISABLE KEYS */;
INSERT INTO `menuitems` VALUES (1,'Суп-пюре з грибів','Ніжний крем-суп з білих грибів',88.00,300,'https://plus.unsplash.com/premium_photo-1664391935474-f1e502d3ad61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8JUQwJUExJUQxJTgzJUQwJUJGJTIwJUQwJUJGJUQxJThFJUQxJTgwJUQwJUI1JTIwJUQwJUI3JTIwJUQwJUIzJUQxJTgwJUQwJUI4JUQwJUIxJUQxJTk2JUQwJUIyfGVufDB8fDB8fHww','2025-05-26 21:17:32','2025-05-26 21:17:32'),(2,'Солянка м\'ясна','Густий суп з копченостями та лимоном',102.00,400,'https://images.unsplash.com/photo-1673021889619-0677506b56ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fCVEMSU4MSVEMSU4MyVEMCVCRnxlbnwwfHwwfHx8MA%3D%3D','2025-05-26 21:19:26','2025-05-26 21:19:26'),(3,'Цезар з куркою','Листя салату, курка, пармезан і соус',110.00,250,'https://media.istockphoto.com/id/2197430925/photo/%D1%81%D0%B0%D0%BB%D0%B0%D1%82-%D1%86%D0%B5%D0%B7%D0%B0%D1%80%D1%8C-%D1%81-%D1%84%D0%BE%D1%80%D0%B5%D0%BB%D1%8C%D1%8E-%D0%BF%D0%BE%D0%BC%D0%B8%D0%B4%D0%BE%D1%80%D0%B0%D0%BC%D0%B8-%D1%87%D0%B5%D1%80%D1%80%D0%B8-%D0%B3%D1%80%D0%B5%D0%BD%D0%BA%D0%B0%D0%BC%D0%B8-%D1%81%D1%8B%D1%80%D0%BE%D0%BC-%D0%BF%D0%B0%D1%80%D0%BC%D0%B5%D0%B7%D0%B0%D0%BD-%D0%BF%D0%B5%D1%80%D0%B5%D0%BF%D0%B5%D0%BB%D0%B8%D0%BD%D1%8B%D0%BC%D0%B8-%D1%8F%D0%B9%D1%86%D0%B0%D0%BC%D0%B8-%D0%B8-%D1%81%D0%B0%D0%BB%D0%B0%D1%82%D0%BE%D0%BC.webp?a=1&b=1&s=612x612&w=0&k=20&c=vPIJzwSyaEiyGqa_95_raUgijgj52hmzYBHzHtsz6j8=','2025-05-26 21:20:24','2025-05-26 21:20:24'),(4,'Грецький салат','Свіжі овочі, бринза, оливки',85.00,220,'https://images.unsplash.com/photo-1659270156961-323ea2afcd0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fCUyMiVEMCU5MyVEMSU4MCVEMCVCNSVEMSU4NiVEMSU4QyVEMCVCQSVEMCVCOCVEMCVCOSUyMCVEMSU4MSVEMCVCMCVEMCVCQiVEMCVCMCVEMSU4MnxlbnwwfHwwfHx8MA%3D%3D','2025-05-26 21:21:33','2025-05-26 21:21:33'),(5,'Куряче філе в вершковому соусі','Філе з ніжним соусом та травами',125.00,270,'https://assets.dots.live/misteram-public/d3627de2-83ec-45b0-9b60-704985111d9f-826x0.png','2025-05-26 21:22:44','2025-05-26 21:22:44'),(6,'Стейк зі свинини','Соковитий стейк з овочами гриль',150.00,320,'https://alp-dvor.com.ua/wp-content/uploads/2021/03/24a9241.jpg','2025-05-26 21:24:05','2025-05-26 21:24:05'),(7,'Вареники з картоплею','Домашні вареники з цибулею',70.00,300,'https://www.winiary.pl/sites/default/files/styles/home_stage_944_531/public/srh_recipes/d83e888001c0805834fb1895207d7469.jpg?h=4f5b30f1&itok=01NVmjv7','2025-05-26 21:25:20','2025-05-26 21:25:20'),(8,'Деруни зі сметаною','Смажені деруни з домашньою сметаною',80.00,250,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkFCjLLFBkBSoalKV_C3KmHJ2UlHq-83Zmtw&s','2025-05-26 21:28:01','2025-05-26 21:28:01'),(9,'Піца Маргарита','Томатний соус, сир моцарела, базилік',130.00,450,'https://images.unsplash.com/photo-1692737580547-b45bb4a02356?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8JUQwJUJGJUQxJTk2JUQxJTg2JUQwJUIwfGVufDB8fDB8fHww','2025-05-26 21:30:06','2025-05-26 21:30:06'),(10,'Піца Пепероні','Пікантна ковбаса, сир, томати',145.00,470,'https://images.unsplash.com/photo-1709392975966-6e76d0452436?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fCVEMCVCRiVEMSU5NiVEMSU4NiVEMCVCMHxlbnwwfHwwfHx8MA%3D%3D','2025-05-26 21:30:43','2025-05-26 21:30:43'),(11,'Паста Карбонара','Італійська класика з беконом та вершками',120.00,350,'https://media.istockphoto.com/id/915226490/photo/close-up-of-pasta-carbonara-on-a-white-plate-with-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=dqyWBtt2c0aZ3JJFy8OJDM3B7f34nKyQ-RNVYcW8rGs=','2025-05-26 21:31:37','2025-05-26 21:31:37'),(12,'Паста Болоньєзе','Томатний соус з фаршем та пармезаном',125.00,360,'https://media.istockphoto.com/id/1222045639/photo/italian-spaghetti-with-tuna-on-white-dish.webp?a=1&b=1&s=612x612&w=0&k=20&c=qvBTomsH8RS1vWkMPjWqV4zMz4dNrK3SnZ_vGylc77s=','2025-05-26 21:34:14','2025-05-26 21:34:14'),(13,'Філе лосося на грилі','Подане з овочами і лимоном',185.00,280,'https://media.istockphoto.com/id/1366795449/photo/fresh-salmon-steak-with-spinach-and-lentils.webp?a=1&b=1&s=612x612&w=0&k=20&c=rGadKMOcpAqP6bePftbB4whCN-MRTNLg7oHeicvMcJo=','2025-05-26 21:35:12','2025-05-26 21:35:12'),(14,'Оселедець під шубою','Класичний український салат',75.00,200,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwp0jfqZnz0MPJcOrcxRQeKtt_eim8v5Fxw&s','2025-05-26 21:36:46','2025-05-26 21:36:46'),(15,'Сирник львівський','Домашній сирник з шоколадом',65.00,150,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQodrfjaWhV4NRgMH2Da9f8B0sZuwDyJW-Zxw&s','2025-05-26 21:39:05','2025-05-26 21:39:05'),(16,'Штрудель яблучний','Теплий штрудель з морозивом',70.00,180,'https://images.unsplash.com/photo-1731696744138-b52b504aab72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RydWRlbHxlbnwwfHwwfHx8MA%3D%3D','2025-05-26 21:39:52','2025-05-26 21:39:52'),(17,'Кава капучино','Свіжообсмажена кава з молочною пінкою',45.00,200,'https://images.unsplash.com/photo-1632595508805-bd7b9ce74173?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmV8ZW58MHx8MHx8fDA%3D','2025-05-26 21:40:29','2025-05-26 21:40:29'),(18,'Чай з м’ятою','Запашний чорний чай з листям м’яти',30.00,250,'https://images.unsplash.com/photo-1535395155851-2088a2a94701?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHRlYXxlbnwwfHwwfHx8MA%3D%3D','2025-05-26 21:41:27','2025-05-26 21:41:27');
/*!40000 ALTER TABLE `menuitems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `numberOfGuests` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ClientId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ClientId` (`ClientId`),
  CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`ClientId`) REFERENCES `clients` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-28 15:13:17
