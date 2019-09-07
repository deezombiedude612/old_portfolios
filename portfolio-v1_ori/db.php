<?php
	/**
	 * Created by PhpStorm.
	 * User: deezombiedude612
	 * Date: 01/08/2018
	 * Time: 01:26
	 */
	
	$connection = null;
	function connectDb() {
		/* mySQL Database connection */
		$db_user = "root";
		$db_pw = "Dzombiedude612";
		$db_name = "portfolio";
		
		static $connection;
		if($connection === null) {
			$connection = mysqli_connect('localhost', $db_user, $db_pw, $db_name);
			if(mysqli_connect_errno())
				echo "Database connection failed.";
		}
		
		return $connection;
	}
	
	function disconnectDb($connection) {
		if($connection !== null)
			mysqli_close($connection);
	}
	?>