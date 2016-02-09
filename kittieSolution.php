<!DOCTYPE html>
<html>
  <head>
   <title>kitties</title>
  </head>
  <body>
  <div>
    <?php for ($i = 1; $i <= 5; $i++) { ?>
      <img src="kittie<?= $i ?>.jpg" />
    <?php } ?>
  </div>
  </body>
</html>