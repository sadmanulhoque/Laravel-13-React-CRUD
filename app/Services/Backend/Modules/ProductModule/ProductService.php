<?php

namespace App\Services\Backend\Modules\ProductModule;

use App\Interfaces\Module\ProductModule\ProductInterface;
use App\Models\Module\ProductModule\Product;
use App\Services\Backend\Modules\CommonModule\CommonService;
use Illuminate\Database\Eloquent\Collection;

class ProductService
{
    public function __construct(
        protected ProductInterface $productRepository,
        protected CommonService $commonService
    ) {}

    public function getAllProducts(): array
    {
        $products = $this->productRepository->all();
        return $products->map(function ($product) {
            return [
                'id' => $product->id,
                'name' => $product->name,
                'image' => $product->getFirstMediaUrl('image', 'thumb'),
            ];
        })->toArray();
    }

    public function storeProduct(array $data): Product
    {
        $product = $this->productRepository->store($data);
        $this->commonService->handleImageUpload($product);

        return $product;
    }

    public function getProductById(int $id): ?Product
    {
        return $this->productRepository->show($id);
    }

    public function updateProduct(array $data, int $id): Product
    {
        return $this->productRepository->update($data, $id);
    }

    public function deleteProduct(int $id): bool
    {
        return $this->productRepository->destroy($id);
    }
}
