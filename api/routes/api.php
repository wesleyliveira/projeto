<?php

use App\Http\Controllers\ClientController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/client', [ClientController::class,'index']);
Route::post('/client', [ClientController::class,'create']);
Route::put('/client/{client}', [ClientController::class,'update']);
Route::delete('/client/{client}', [ClientController::class,'destroy']);
