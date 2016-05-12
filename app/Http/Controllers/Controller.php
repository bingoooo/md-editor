<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Markdown;

class Controller extends BaseController
{
    //
	public function getFiles(){
		$datas = Markdown::all();
		return $datas;
	}

	public function getFile($id){
		$file = Markdown::find($id)->get();
		return $file;
	}

    public function postFile(Request $req){
    	$exist = true;
    	$check = Markdown::where('title', $req->input('title'))->first();
    	$markdown = $check?$check:new Markdown;
    	if($markdown->title == null) {
	    	$markdown->title = $req->input('title');
	    	$exist = false;
    	}
	    $markdown->markdown = $req->markdown;
	    // $markdown->save();
    	return response(['name' => $markdown])->header('Existing-file', $exist);
    }
}
