<?php

namespace Atin\LaravelScrollToTop;

use Illuminate\Support\ServiceProvider;

class ScrollToTopProvider extends ServiceProvider
{
    public function register()
    {
        //
    }

    public function boot()
    {
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'laravel-scroll-to-top');

        $this->publishes([
            __DIR__.'/../resources/views' => resource_path('views/vendor/laravel-scroll-to-top')
        ], 'laravel-scroll-to-top-views');
    }
}