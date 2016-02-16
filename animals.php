<html>
<head>
	<title>Animals</title>
</head>
<body>
	<?php if(isset($_GET["animal"])) {
			$animal = $_GET["animal"];
			$number = $_GET["number"];

		$files = glob("images/{$animal}*.jpeg");

		if(count($files) == 0) { ?>	
			<p>No files for <?= $animal ?></p>

		<?php }

		$index = 0;

		foreach ($files as $file) { 
			if($index < $number) {?>
				<img src="<?= $file ?>" alt="picture of <?= $animal ?>"></img>
		<?php }
			$index++;
		}
	} else {
	?> <p>Need a parameter</p>

	<?php } ?>


</body>
</html>