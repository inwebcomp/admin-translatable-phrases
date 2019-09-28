<?php

namespace InWeb\Admin\TranslatablePhrases;

use Illuminate\Http\Request;
use InWeb\Admin\App\HasPermissions;
use InWeb\Admin\App\Tool;

class TranslatablePhrases extends Tool
{
    use HasPermissions;

    public static function label()
    {
        return __('Переводы');
    }

    public function authorizedToSee(Request $request)
    {
        return $request->user()->can(static::uriKey() . ':viewAny');
    }

    public static function permissionActions()
    {
        return [
            'viewAny' => __('Доступ'),
        ];
    }
}
