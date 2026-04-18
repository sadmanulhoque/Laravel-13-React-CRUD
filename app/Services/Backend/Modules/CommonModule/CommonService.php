<?php

namespace App\Services\Backend\Modules\CommonModule;

class CommonService
{
    public function handleImageUpload($model)
    {
        $model->addMediaFromRequest('image')
            ->toMediaCollection('image');
    }
}
