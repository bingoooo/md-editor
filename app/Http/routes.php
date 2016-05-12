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

$app->get('/api/get-files', 'Controller@getFiles');
$app->get('/api/get-files/{id}', 'Controller@getFile');
$app->post('/api/send-file', 'Controller@postFile');
$app->get('/{path}', function ($path) use ($app) {
    return view($path);
});
