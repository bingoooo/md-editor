<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/api/get-files', function () use ($app) {
	return 'get all files';
});
$app->get('/api/get-files/{id}', function ($id) use ($app) {
	return $id;
});
$app->post('/api/send-files', function () use ($app) {
	return 'record';
});
$app->get('/{path}', function ($path) use ($app) {
    return view($path);
});
