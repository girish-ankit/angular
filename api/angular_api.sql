-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 13, 2015 at 01:54 PM
-- Server version: 5.1.73
-- PHP Version: 5.4.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `angular_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `friends`
--

CREATE TABLE IF NOT EXISTS `friends` (
  `fid` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`fid`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `friends`
--

INSERT INTO `friends` (`fid`, `first_name`, `last_name`, `created`, `updated`) VALUES
(1, 'Ankit', 'Kumar', '2015-02-11 07:55:13', '2015-02-11 07:55:13'),
(2, 'girish', 'thakur', '2015-02-11 07:55:13', '2015-02-11 07:55:13'),
(3, 'Amit', 'singh', '2015-02-11 07:56:28', '2015-02-11 07:56:28'),
(4, 'ram', 'sharma', '2015-02-11 07:56:28', '2015-02-11 07:56:28'),
(5, 'Lalu', 'yadav', '2015-02-11 08:01:17', '2015-02-17 18:30:00'),
(6, 'lalan', 'yadav', '2015-02-11 08:02:57', '2015-02-11 08:02:57');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
