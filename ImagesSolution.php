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

		$regex = "/abbath/i";       # contain "abbath", case insensitive

		foreach ($images as $image) {
		  if (preg_match($regex, $image)) {
		    ?>
		    <img src="<?= $image ?>" alt="an awesome picture" />
		    <?php
		  }
		}

		# begin with "abbath" and end with "cat", "dog", or "sheep"
		# $regex = "/^{$folder}\/abbath(.*)(dog|cat|sheep).jpg$/";  
		# $regex = "/[0-9].jpg$/";   # end in a number
		# $regex = "/^{$folder}\/[ab]{4}/i";    # start with 4 As/Bs
	?>
      
    </div>
  </body>
</html>