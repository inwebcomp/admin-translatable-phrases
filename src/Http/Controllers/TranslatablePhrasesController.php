<?php

namespace InWeb\Admin\TranslatablePhrases\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Str;
use InWeb\Admin\App\Actions\Action;
use InWeb\Admin\App\Http\Requests\AdminRequest;
use InWeb\Admin\TranslatablePhrases\TranslatablePhrases;
use TranslationsParser;

class TranslatablePhrasesController extends Controller
{
    public function index(AdminRequest $request, $locale = null)
    {
        $phrases = [];

        $locales = $showLocales = config('translations-parser.locales');

        if ($locale)
            $showLocales = [$locale];

        $groups = [];

        foreach ($showLocales as $locale) {
            $parsed = TranslationsParser::getParsed($locale);

            foreach ($parsed as $original => $phrase) {
                $phrases[$original][$locale] = $phrase;
            }
        }

        $groups[] = [
            'title'   => __('Фразы'),
            'phrases' => $phrases,
            'name'    => null,
        ];

        // Add other groups
        $langDir = config('translations-parser.lang_files_directory');

        $phrases = [];

        foreach (\File::allFiles($langDir . '/' . $showLocales[0]) as $file) {
            $info = pathinfo($file);
            $title = Str::title(Str::snake($info['filename'], ' '));

            $phrases = [];

            foreach ($showLocales as $locale) {
                $file = $langDir . '/' . $locale . '/' . $info['basename'];

                if (\File::exists($file)) {
                    $parsed = \File::getRequire($file);

                    foreach ($parsed as $original => $phrase) {
                        $phrases[$original][$locale] = $phrase;
                    }
                }
            }

            $groups[] = [
                'title'   => $title,
                'phrases' => $phrases,
                'name'    => $info['filename'],
            ];
        }


        return compact('groups', 'locales');
    }

    public function parse()
    {
        \Artisan::call('translations:parse');

        return Action::message(__('Phrases successfully parsed'));
    }

    public function save()
    {
        $request = request()->input();

        $locale = $request['locale'];
        $original = $request['original'];
        $phrase = $request['phrase'];
        $group = $request['group'];

        if ($locale == '' or $original == '')
            return false;

        if (! $group) {
            TranslationsParser::translate($locale, $original, $phrase);
        } else {
            $file = config('translations-parser.lang_files_directory') . '/' . $locale . '/' . $group . '.php';

            if (\File::exists($file)) {
                $phrases = \File::getRequire($file);

                $phrases[$original] = $phrase;

                \File::put($file, '<?php return ' . var_export($phrases, true) . ';');
            }
        }

        return Action::message(__('Translation saved'));
    }
}
