<?php

namespace InWeb\Admin\TranslatablePhrases;

use Illuminate\Http\Request;
use InWeb\Admin\App\Tool;

class TranslatablePhrases extends Tool
{
    public static function label()
    {
        return __('Переводы');
    }

    public static function uriKey()
    {
        return 'translatable-phrases';
    }

    public function authorizedToSee(Request $request)
    {
        return in_array(optional(auth()->user())->login, ['admin', 'fusucristina', 'bigben']);
    }
}
