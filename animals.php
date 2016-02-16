<html>
<head>
	<title>Animals</title>
</head>
<body>
	<?php  if(isset($_GET["animal"])) {
			$animal = $_GET["animal"];

	}
		$files = glob("images/{$animal}*.jpeg");

	?>

	<p><?= count($files)?></p>

</body>
</html>