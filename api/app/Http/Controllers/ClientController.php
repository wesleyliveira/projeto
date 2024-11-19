<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function index (): JsonResponse
    {
        $clients = Client::orderBy('id')->get();
        return response()->json(['Lista de clientes:', $clients]);
    }
    public function create (Request $request): JsonResponse
    {
        $clients = Client::create([
            'name'=> $request->name,
            'email'=> $request->email,
        ]);
        return response()->json(['Lista de clientes:', $clients]);
    }

    public function update (Request $request, $id):JsonResponse
    {
        $clients = Client::find($id);
        $clients -> update([
            'name'=> $request->name,
            'email'=> $request->email,
        ]);
        return response()->json(['Cliente Atualizado:', $clients]);
    }

    public function destroy (Request $request, $id): JsonResponse
    {
        $clients = Client::find($id);
        $clients -> delete();
        return response()->json(['Cliente Deletado:', $clients]);
    }

}
