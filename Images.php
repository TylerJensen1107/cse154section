<!DOCTYPE html>
<html>
  <head>
    <title>Images</title>
  </head>

  <body>
    <h1>Grim and Frostbitten Images</h1>

    <div>
      
      <?php
		$folder = "https://webster.cs.washington.edu/staff/tylerj11/cs154/cse154section/images";

		$images = glob("$folder/*.jpg");

		foreach ($images as $path) {
			print $path;
		}


	?>
      
    </div>
  </body>
</html>