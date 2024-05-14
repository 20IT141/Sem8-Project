-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 14, 2024 at 07:03 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eventproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `phone_num` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `c_password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `gender`, `phone_num`, `password`, `c_password`) VALUES
(1, 'admin1', 'admin1@gmail.com', 'female', '11111', '111', '111'),
(2, 'admin2', 'admin2@gmail.com', 'female', '22222', '222', '222'),
(4, 'admin4', 'admin4@gmail.com', 'male', '44444', '444', '444');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(10) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `url` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `category_name`, `url`, `image`) VALUES
(19, 'Weeding', 'Weeding', 'http://localhost:4500/category/category_1709465496984.avif'),
(20, 'Birthday Party', 'Birthday Party', 'http://localhost:4500/category/category_1709466759026.webp'),
(21, 'DJ Party', 'DJ Party', 'http://localhost:4500/category/category_1709467233209.jpg'),
(22, 'Corporate Event', 'Corporate Event', 'http://localhost:4500/category/category_1710039408787.jpg'),
(23, 'Conference Event', 'Conference Event', 'http://localhost:4500/category/category_1710039537932.jpg'),
(24, 'Charity Event', 'Charity Event', 'http://localhost:4500/category/category_1710039627888.jpg'),
(25, 'Sports Event', 'Sports Event', 'http://localhost:4500/category/category_1710039687758.jpg'),
(26, 'Fashion Show Event', 'Fashion Show Event', 'http://localhost:4500/category/category_1710039776009.png');

-- --------------------------------------------------------

--
-- Table structure for table `catevent`
--

CREATE TABLE `catevent` (
  `id` int(10) NOT NULL,
  `event_id` varchar(100) NOT NULL,
  `category_id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `catevent`
--

INSERT INTO `catevent` (`id`, `event_id`, `category_id`) VALUES
(1, '35', '1'),
(2, '36', '1'),
(3, '37', '1'),
(4, '38', '2'),
(5, '35', '2'),
(6, '35', '2');

-- --------------------------------------------------------

--
-- Table structure for table `changepassword`
--

CREATE TABLE `changepassword` (
  `id` int(100) NOT NULL,
  `old_password` int(100) NOT NULL,
  `new_password` int(100) NOT NULL,
  `confrim_password` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `changepassword`
--

INSERT INTO `changepassword` (`id`, `old_password`, `new_password`, `confrim_password`) VALUES
(82, 222, 22, 22),
(83, 222, 22, 22),
(84, 222, 22, 22),
(85, 222, 22, 22),
(86, 222, 22, 22),
(87, 222, 22, 22),
(88, 22, 2222, 2222),
(89, 2222, 222, 222),
(90, 222, 22, 22),
(91, 22, 122, 122),
(92, 122, 22, 22),
(93, 8818, 123, 123),
(94, 123, 13, 13),
(95, 111, 121, 121),
(96, 121, 111, 111),
(97, 111, 123, 123),
(98, 111, 112, 112),
(99, 123, 111, 111),
(100, 112, 111, 111),
(101, 444, 414, 414),
(102, 414, 444, 444),
(103, 123, 0, 0),
(104, 0, 1234567890, 1234567890),
(105, 22, 222, 222),
(106, 111, 1212, 1212),
(107, 1212, 111, 111),
(108, 111, 123, 123);

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `id` int(100) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `s_date` varchar(10) NOT NULL,
  `e_date` varchar(10) NOT NULL,
  `time` time(6) NOT NULL,
  `location` varchar(10) NOT NULL,
  `description` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`id`, `category_name`, `title`, `s_date`, `e_date`, `time`, `location`, `description`, `image`) VALUES
(53, 'Weeding', 'Weeding in palace', '01/03/2024', '05/03/2024', '10:00:00.000000', 'Ahmedabad', 'Ahmedabad', 'http://localhost:4500/profile/profile_1709465807568.jpg'),
(54, 'Weeding', 'Weeding in Hall', '02/03/2024', '06/03/2024', '11:00:00.000000', 'Surat', 'Surat', 'http://localhost:4500/profile/profile_1709465975947.jpg'),
(55, 'Weeding', 'Weeding At Vila', '03/03/2024', '07/03/2024', '00:00:00.000000', 'Jamnagar', 'Jamnagar', 'http://localhost:4500/profile/profile_1709466113877.avif'),
(56, 'Weeding', 'Weeding At Beaches', '05/03/2024', '08/03/2024', '18:00:00.000000', 'Kerla', 'Kerla', 'http://localhost:4500/profile/profile_1709466233110.jpeg'),
(57, 'Weeding', 'Weeding in Hotel', '06/03/2024', '08/03/2024', '18:00:00.000000', 'Anand', 'Anand', 'http://localhost:4500/profile/profile_1709466460298.jpg'),
(58, 'Weeding', 'Weeding at Castle', '06/03/2024', '08/03/2024', '18:00:00.000000', 'Kasmir', 'Kasmir', 'http://localhost:4500/profile/profile_1709466569475.jpeg'),
(59, 'Birthday Party', 'Birthday party In hotel', '15/02/2024', '17/02/2024', '10:00:00.000000', 'Ahmedabad', 'Ahmedabad', 'http://localhost:4500/profile/profile_1709466864268.jpg'),
(61, 'Birthday Party', 'Birthday party at beach', '16/02/2024', '17/02/2024', '10:00:00.000000', 'Surat', 'Surat', 'http://localhost:4500/profile/profile_1709466943166.png'),
(62, 'Birthday Party', 'Birthday party at Party Plot', '14/02/2024', '17/02/2024', '10:00:00.000000', 'Anand', 'Anand', 'http://localhost:4500/profile/profile_1709467049642.avif'),
(63, 'Birthday Party', 'In house Birthday party', '14/02/2024', '17/02/2024', '10:00:00.000000', 'Mumbai', 'Mumbai', 'http://localhost:4500/profile/profile_1709467176624.webp'),
(64, 'DJ Party', 'DJ Party in weeding', '08/03/2024', '09/03/2024', '21:00:00.000000', 'Nadiad', 'Nadiad', 'http://localhost:4500/profile/profile_1710038631832.jpeg'),
(65, 'DJ Party', 'DJ party For Festival /Event', '12/03/2024', '13/03/2024', '21:00:00.000000', 'Changa', 'Changa', 'http://localhost:4500/profile/profile_1710038718939.jpg'),
(66, 'DJ Party', 'DJ Party at beach', '13/03/2024', '13/03/2024', '19:00:00.000000', 'Goa', 'Goa', 'http://localhost:4500/profile/profile_1710038800069.jpg'),
(67, 'DJ Party', 'DJ Party at Nightclubs', '14/03/2024', '14/03/2024', '20:00:00.000000', 'Mumbai', 'Mumbai', 'http://localhost:4500/profile/profile_1710039056187.jpg'),
(68, 'DJ Party', 'DJ Party at Rooftop', '15/03/2024', '15/03/2024', '18:00:00.000000', 'Delhi', 'Delhi', 'http://localhost:4500/profile/profile_1710039144818.webp');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(11) DEFAULT NULL,
  `country` varchar(11) DEFAULT NULL,
  `fon_number` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `name`, `email`, `country`, `fon_number`, `description`) VALUES
(11, 'user1', 'User1@gmail', 'India', 11111, 'asdffdsa'),
(12, 'user2', 'User2@gmail', 'India', 22222, 'asdffdsa'),
(13, 'user3', 'User3@gmail', 'India', 33333, 'asdffdsa'),
(14, 'astha', 'astha@gmail', 'canada', 12345, 'asdffdsa'),
(15, 'user1', 'user1@gmail', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `phone_num` int(10) NOT NULL,
  `password` varchar(10) NOT NULL,
  `c_password` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`id`, `name`, `email`, `gender`, `phone_num`, `password`, `c_password`) VALUES
(126, 'MOHAMMADSAFIK SHAIKH', '20it141@charusat.edu.in', 'male', 11, '1111', '1111'),
(127, 'Abc', 'Abc@gmail.com', 'male', 1234567890, '1111', '1111'),
(128, 'rakesh', 'rakes@gmail.com', 'male', 1234567890, '11', '11'),
(129, 'Raman', 'Raman123@gmail.com', 'male', 1234567895, 'Abc@12345', 'Abc@12345'),
(130, '20it141', 'shaikhshafik987@gmail.com', 'male', 1234567890, 'aaaa1111', 'aaaa1111');

-- --------------------------------------------------------

--
-- Table structure for table `userevent`
--

CREATE TABLE `userevent` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `event_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userevent`
--

INSERT INTO `userevent` (`id`, `user_id`, `event_id`) VALUES
(30, 3, 6),
(31, 3, 7),
(32, 4, 5),
(33, 0, 0),
(34, 0, 0),
(35, 0, 0),
(36, 1, 1),
(37, 1, 36),
(38, 1, 35),
(39, 1, 0),
(40, 1, 0),
(41, 1, 36),
(42, 2, 36),
(43, 2, 36),
(44, 1, 1),
(45, 1, 36),
(46, 1, 36),
(47, 1, 45),
(48, 1, 37),
(49, 1, 36),
(50, 1, 46),
(51, 1, 42),
(52, 1, 47),
(53, 1, 47),
(54, 1, 36),
(55, 124, 36),
(56, 4, 38),
(57, 1, 48),
(58, 126, 52),
(59, 126, 52),
(60, 126, 52),
(61, 126, 51),
(62, 126, 53),
(63, 129, 61),
(64, 130, 53);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `catevent`
--
ALTER TABLE `catevent`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `changepassword`
--
ALTER TABLE `changepassword`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `signup`
--
ALTER TABLE `signup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userevent`
--
ALTER TABLE `userevent`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `catevent`
--
ALTER TABLE `catevent`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `changepassword`
--
ALTER TABLE `changepassword`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `signup`
--
ALTER TABLE `signup`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=131;

--
-- AUTO_INCREMENT for table `userevent`
--
ALTER TABLE `userevent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
