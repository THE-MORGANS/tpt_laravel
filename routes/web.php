<?php

use App\Http\Controllers\viewConteroller;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




Route::get('/', [viewConteroller::class, 'home']);
Route::get('/case', [viewConteroller::class, 'casestudies']);
Route::get('/viewcase/{name}', [viewConteroller::class, 'viewcase']);
