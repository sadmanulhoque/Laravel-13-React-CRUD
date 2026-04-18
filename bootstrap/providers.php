<?php

use App\Providers\AppServiceProvider;
use App\Providers\FortifyServiceProvider;
use App\Providers\Modules\Backend\ProductModule\ProductServiceProvider;

return [
    AppServiceProvider::class,
    FortifyServiceProvider::class,
    ProductServiceProvider::class,
];
