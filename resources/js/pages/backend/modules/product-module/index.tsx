import { Head, Link } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import ProductController from '@/actions/App/Http/Controllers/Backend/Modules/ProductModule/ProductController';
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




export default function Index({ products }: { products: any[] }) {
    return (
        <>
            <Head title="Index" />
            <div className="flex w-full flex-col gap-6 p-8 text-foreground">
                {' '}
                {/* ← Add this */}
                <div className="mb-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-foreground dark:text-white">
                        {' '}
                        {/* ← Better contrast */}
                        Products
                    </h1>
                    <Link
                    as="button"
                        href={ProductController.create().url}
                        className="inline-flex items-center gap-2 rounded bg-primary px-1 py-1 text-primary-foreground shadow transition hover:bg-primary/90" // Use semantic classes
                    >
                        <Plus className="h-4 w-4" />
                        Create New
                    </Link>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Products</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableCaption>
                                A list of your products.
                            </TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">
                                        Product Name
                                    </TableHead>
                                    <TableHead>Image</TableHead>
      
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                               {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <img src={product.image} alt={product.name} style={{ maxWidth: 80, maxHeight: 80 }} />
           
          </TableRow>
        ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
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