<html>
<head>
	<title>Animals</title>
</head>
<body>
	<?php if(isset($_GET["animal"])) {
			$animal = $_GET["animal"];

		$files = glob("images/{$animal}*.jpeg");

		if(count($files)) { ?>	
			<p>No files for <?= $animal ?></p>

		<?php }

		foreach ($files as $file) { ?>
				<img src="<?= $file ?>" alt="picture of <?= $animal ?>"></img>
		<?php }
	} else {
	?> <p>Need a parameter</p>

	<?php } ?>


</body>
</html>