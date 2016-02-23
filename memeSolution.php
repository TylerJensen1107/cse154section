<?php
  $image = $_POST["image"];
  $topline = $_POST["topline"];
  $bottomline = $_POST["bottomline"];
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Meme-It</title>
    <link rel="stylesheet" type="text/css" href="meme.css" />
  </head>
  <body>
    <div id="meme">
      <img src="<?=$image ?>" alt="<?=$topline ?> - <?=$bottomline ?>"/>
      <div id="toptext"><?=$topline ?></div>
      <div id="bottomtext"><?=$bottomline ?></div>
    </div>
  </body>
</html>