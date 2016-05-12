<!DOCTYPE html>
<html>
<head>
	<title>Code Mirror</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="css/semantic.css">
	<link rel="stylesheet" href="css/codemirror.css">
	<link rel="stylesheet" href="css/style.css">
	<script src="js/codemirror.js"></script>
	<script src="js/markdown.js"></script>
	<script src="js/marked.min.js"></script>
	<script src="js/mymirror.js"></script>
</head>
<body>
	<nav>
		<ul>
			<li><a href="/home">Code Mirror if I</a></li>
			<li><a href="/react">React if I</a></li>
			<li><a href="/angular">A2 if I</a></li>
		</ul>
	</nav>
	<div class="banner"><h2>Using Gode My Roar</h2></div>
	<form id="filename-form" action="" class="ui form">
		<input class="ui input" id="filename" name="filename" type="text" placeholder="File name"><button id="save-button" class="ui button">SAVE</button>
	</form>
	<div id="md-field">
		<div id="code"></div>
		<div id="mirror"></div>
	</div>
</body>
</html>