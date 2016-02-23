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

		$randIndex = array_rand($images);
			
			?><img src="<?= $images[$randIndex] ?>"  alt="some picture" />  
		<?php
			} 
		}


	?>
      
    </div>
  </body>
</html>