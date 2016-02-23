<!DOCTYPE html>
<html>
  <head>
    <title>Images</title>
  </head>

  <body>
    <h1>Grim and Frostbitten Images</h1>

    <div>
      
      <?php
		$folder = "images";

		$images = glob("$folder/*.jpg");

		foreach ($images as $path) {
			?><img src="<?= $path ?>"  alt="some picture" />  
		<?php }


	?>
      
    </div>
  </body>
</html>