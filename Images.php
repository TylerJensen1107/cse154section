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

		$regex = "/abbath/i";

		foreach ($images as $path) {

			if(preg_match($regex, $path)) {
				?><img src="<?= $path ?>"  alt="some picture" />  
		<?php
			} 
		}


	?>
      
    </div>
  </body>
</html>