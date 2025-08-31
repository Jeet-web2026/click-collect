<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminauthController extends Controller
{
    public function Authentication()
    {
        return Inertia::render('Auth/AdminLogin');
    }
}
