<!DOCTYPE html PUBLIC>
<html>
  <head>
     <title>Animal Gallery</title>
  </head>
  <body>
    <div>
      <?php
      $animal = "";
      if (isset($_GET["animal"])) {
          $animal = $_GET["animal"];
      }
      $files = glob("images/{$animal}*.jpeg");
      if(count($files) == 0) {?>
         <p> Sorry, looks like we don't have any photos of <?= $animal ?>s.</p>
      <?php } else {
         foreach ($files as $image) {
            ?>
            <img src="<?= $image ?>" alt="animal picture" />
            <?php
         }
      }
      ?>
    </div>
  </body>