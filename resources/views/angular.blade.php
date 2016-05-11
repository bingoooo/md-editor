<!DOCTYPE html>
<html>
<head>
	<title>Markdown Editor : With Angular 2</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta charset="utf-8">
	<link rel="stylesheet" href="css/semantic.css">
	<link rel="stylesheet" href="css/codemirror.css">
	<link rel="stylesheet" href="css/style.css">
	<script src="js/codemirror.js"></script>
	<script src="js/markdown.js"></script>
    <link rel="stylesheet" href="styles.css">

    <!-- 1. Load libraries -->
     <!-- Polyfill(s) for older browsers -->
    <script src="node_modules/es6-shim/es6-shim.min.js"></script>
    <script src="external/marked.min.js"></script>
    <script src="node_modules/zone.js/dist/zone.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>

    <!-- 2. Configure SystemJS -->
    <script src="systemjs.config.js"></script>
    <script>
      System.import('app').catch(function(err){ console.error(err);  });
    </script>
</head>

  <!-- 3. Display the application -->
<body>
<nav>
	<ul>
		<li><a href="/home">Code Mirror if I</a></li>
		<li><a href="/react">React if I</a></li>
		<li><a href="/angular">A2 if I</a></li>
	</ul>
</nav>
	<div class="banner"><h2>Using Encular</h2></div>
	<my-app>Loading...</my-app>
</body>
</html>