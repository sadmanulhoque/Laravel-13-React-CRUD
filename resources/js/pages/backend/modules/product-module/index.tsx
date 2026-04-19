// resources/js/Pages/Products/Index.tsx
import { Head } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import CreateModal from './modals/create-modal';   // ← Import the modal

export default function Index({ products }: { products: any[] }) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <>
      <Head title="Products" />

      <div className="flex w-full flex-col gap-6 p-8 text-foreground">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Products</h1>

          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="inline-flex items-center gap-2 rounded bg-primary px-4 py-2 text-primary-foreground shadow transition hover:bg-primary/90"
          >
            <Plus className="h-4 w-4" />
            Create New
          </button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>A list of your products.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Product Name</TableHead>
                  <TableHead>Image</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>
                      {product.image && (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="max-h-20 max-w-20 object-contain rounded"
                        />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Modal */}
      <CreateModal
        open={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </>
  );
}

Index.layout = {
  breadcrumbs: [
    {
      title: 'Products',
      href: '/products',
    },
  ],
};