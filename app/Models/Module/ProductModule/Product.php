<?php

namespace App\Models\Module\ProductModule;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia; // for spatie Media
use Spatie\MediaLibrary\InteractsWithMedia;  // for spatie Media
use Spatie\MediaLibrary\MediaCollections\Models\Media; // Don't forget this for conversions!

#[Fillable(['name', 'image'])]
class Product extends Model implements HasMedia
{
    use InteractsWithMedia; // Make sure to use this trait!

    // this will auto load realation with eager load
    protected $with = ['media'];

    public function registerMediaConversions(?Media $media = null): void
    {
        // Convert all images to webp format for better performance
        $this->addMediaConversion('webp')
            ->format('webp')
            ->nonQueued(); // Use nonQueued for smaller apps, or queued for larger ones

        // Create a thumbnail version (optional but very useful!)
        $this->addMediaConversion('thumb')
            ->format('webp') // Also make the thumbnail webp
            ->width(300)
            ->height(200)
            ->sharpen(10) // Make it a bit sharper
            ->nonQueued();
    }
}
