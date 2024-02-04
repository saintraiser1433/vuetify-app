<?php
	$conn = new mysqli('localhost', 'root', '', 'profiling');

	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}
	
?>