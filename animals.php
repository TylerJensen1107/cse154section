<html>
<head>
	<title>Animals</title>
</head>
<body>
	<?php  if(isset($_GET["animal"])) {
			$animal = $_GET["animal"];

	}?>

	<p><?= $animal?></p>

</body>
</html>