<?php

namespace App\Repositoriess\Backend\Modules\ProductModule;

use App\Interfaces\Module\ProductModule\ProductInterface;
use App\Models\Module\ProductModule\Product;
use Illuminate\Database\Eloquent\Collection;

class ProductRepository implements ProductInterface
{
    public function all(): Collection
    {
        return Product::all();
    }

    public function store(array $data): Product
    {
        return Product::create($data);
    }

    public function create(): Product
    {
        return new Product;
    }

    public function show(int $id): ?Product
    {
        return Product::findOrFail($id);
    }

    public function edit(int $id): Product
    {
        return Product::findOrFail($id);
    }

    public function update(array $data, int $id): Product
    {
        $product = Product::findOrFail($id);
        $product->update($data);

        return $product;
    }

    public function destroy(int $id): bool
    {
        $product = Product::findOrFail($id);

        return $product->delete();
    }
}
