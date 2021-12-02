-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 02, 2021 at 12:50 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webreview`
--

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `movie` varchar(30) COLLATE utf8_polish_ci NOT NULL,
  `username` varchar(20) COLLATE utf8_polish_ci NOT NULL,
  `stars` int(1) NOT NULL,
  `review` varchar(250) COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `movie`, `username`, `stars`, `review`) VALUES
(1, 'Venom', 'Maciek12', 4, 'Super film! Idealny do obejrzenia z rodziną :)'),
(2, 'Venom', 'Konrad.60', 5, 'Niesamowite! Polecam gorąco!'),
(96, 'Jumanji', 'Pan Grzegorz', 5, 'Zabawny, polecam!'),
(97, 'Interstellar', 'Krystian_Pe', 4, 'Trzyma w napięciu przez dwie godziny!'),
(98, 'Interstellar', 'Iwona', 5, 'Cudo! Zmienia punkt widzenia...'),
(99, 'Interstellar', 'Marcin_aka_Wronka', 3, 'Film dobry, ale aktorzy słabi.'),
(100, 'Interstellar', 'Po_prostu_Andrzej', 1, 'Nie mój gust'),
(101, 'Intouchables', 'Komiediant', 1, 'Ten film to komedia, ale pod względem reżyserii, a nie fabuły'),
(102, 'Intouchables', 'Fist', 4, 'Ja uważam, że film ma potencjał'),
(103, 'Intouchables', 'Pan Andrzej', 5, 'Warto obejrzeć, uśmiałem się :)'),
(104, 'Jumanji', 'ZwykłyKowalski', 5, 'Super!!!'),
(105, 'San Andreas', 'Agnieszka', 5, 'Doskonały film Apokaliptyczny!'),
(106, 'San Andreas', 'Jan', 4, 'Fajny, ale czegoś mu brakuje.'),
(107, 'San Andreas', 'Ania', 4, 'Film bardzo dobry, ale spodziewałam się więcej');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=108;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
