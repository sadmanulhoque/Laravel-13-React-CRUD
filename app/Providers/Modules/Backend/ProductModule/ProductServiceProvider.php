<?php

namespace App\Providers\Modules\Backend\ProductModule;

use App\Interfaces\Module\ProductModule\ProductInterface;
use App\Repositoriess\Backend\Modules\ProductModule\ProductRepository;
use Illuminate\Support\ServiceProvider;

class ProductServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(
            ProductInterface::class,
            ProductRepository::class
        );
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
