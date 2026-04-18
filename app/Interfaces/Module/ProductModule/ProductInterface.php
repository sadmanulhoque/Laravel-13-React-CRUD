<?php

namespace App\Interfaces\Module\ProductModule;

use App\Models\Module\ProductModule\Product;
use Illuminate\Database\Eloquent\Collection;

interface ProductInterface
{
    public function all(): Collection;

    public function create(): Product;

    public function store(array $data): Product;

    public function show(int $id): ?Product;

    public function edit(int $id): Product;

    public function update(array $data, int $id): Product;

    public function destroy(int $id): bool;
}
