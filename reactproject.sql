-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 18, 2024 at 10:55 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(100) DEFAULT current_timestamp(),
  `username` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `username`, `email`, `password`) VALUES
(NULL, '20it0483', 'munasinghe20731@gmail.com', 'Test1234'),
(NULL, 'ssss', 'kk@gmail.com', 'Kkqw1234'),
(NULL, 'sayuranga', 'test@gmail.com', 'Dhanu1234'),
(NULL, 'munasinghe20731@gmail.com', 'sarindu@gmail.com', 'Dhanushka1234'),
(NULL, '20it0481', 'test1@test.com', 'Test1234'),
(NULL, 'sayuranga', 'sarindu@gmail.com', 'Dfsg12345'),
(NULL, '20it0483', 'test1@test.com', 'Aert12345'),
(NULL, 'test1', 'test1@test.com', 'Test1234'),
(NULL, 'sayuranga', 'munasinghe20731@gmail.com', 'Dhanushka1234'),
(2147483647, 'ssss', '20it0483@itum.mrt.ac.lk', 'Test1234'),
(2147483647, 'sayuranga', 'test1@test.com', 'Dhanushka1234'),
(2147483647, '20it0483', 'munasinghe20731@gmail.com', 'Test1234');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
