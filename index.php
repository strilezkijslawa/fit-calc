<!doctype html>
<html lang="ru">
<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous">

	<title>Фитнес калькуляторы</title>

    <script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
</head>
<body>

<header class="py-3 bg-info">
	<div class="container">
		<h1 class="text-center text-light">Фитнес калькуляторы</h1>
	</div>
</header>

<main class="py-5">
	<div class="container">
        <?php
        $calc_files = scandir('inc');
        sort($calc_files, SORT_NATURAL);
        foreach ($calc_files as $file) {
            $extension = pathinfo($file, PATHINFO_EXTENSION);
            if ($extension == 'html') {
                include_once('inc/'.$file);
            }
        }
        ?>
    </div>
</main>

<footer class="py-3 bg-dark text-light">
	<div class="container">
        <div class="text-right">
            <a href="http://spaceweb.com.ua/" title="Developer">Created by SpaceWeb</a>
        </div>
    </div>
</footer>

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js" integrity="sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em" crossorigin="anonymous"></script>
</body>
</html>