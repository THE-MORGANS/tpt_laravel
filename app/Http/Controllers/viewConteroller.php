<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class viewConteroller extends Controller
{


    public function home(){
      return view('index');
    }

    public function casestudies(){
        return view('case');
    }
}
