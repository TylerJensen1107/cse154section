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
			<?php $filename = strtolower($student) . ".txt";
			if(file_exists($filename)) { 
				$fileContents = file_get_contents($filename);
				?>
				<li><?= $fileContents ?></li>
				<li>TOTAL: 0</li>
			<?php } ?>
		</ul>
	</body>
</html>
