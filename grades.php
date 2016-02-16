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
				$fileContentsArray = explode(" ", $fileContents);
				$totalScore = 0;
				foreach ($fileContentsArray as $score) {
				$totalScore += $score;
				?>
					<li><?= $score ?></li>
				<?php } ?>
				<li>TOTAL: <?= $totalScore ?></li>
			<?php } ?>
		</ul>
	</body>
</html>
