<?php if(isset($_GET["student"])) {
	$student = $_GET["student"];
} ?>


<!DOCTYPE html>
<html>
	<head>
		<title>Grades</title>
	</head>

	<body>
		<h1>Grades for <?= $student ?></h1>
		<ul>
			<li>0 points</li>
			<li>TOTAL: 0</li>
		</ul>
	</body>
</html>
