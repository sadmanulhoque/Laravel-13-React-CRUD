<?php

namespace App\Http\Controllers\Backend\Modules\ProductModule;

use App\Http\Controllers\Controller;
use App\Http\Requests\Modules\ProductModule\ProductRequest;
use App\Services\Backend\Modules\ProductModule\ProductService;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    public function __construct(
        protected ProductService $productService
    ) {}

    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $products = $this->productService->getAllProducts();

        // dd($products);
        return Inertia::render('backend/modules/product-module/index', [
            'products' => $products,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('backend/modules/product-module/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequest $request): RedirectResponse
    {
        try {
            $this->productService->storeProduct($request->validated());

            // dd('success');
            return redirect()->route('products.index')->with('success', 'Product created successfully.');
        } catch (Exception $e) {
            dd($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): Response
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id): Response
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): RedirectResponse
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): RedirectResponse
    {
        //
    }
}
