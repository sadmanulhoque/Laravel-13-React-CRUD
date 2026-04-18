import { useForm } from '@inertiajs/react';
import ProductController from '@/actions/App/Http/Controllers/Backend/Modules/ProductModule/ProductController';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';







export default function Create() {


    const { data, setData, post, errors } = useForm({
      name: '',
      image: null as File | null,
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      post(ProductController.store().url, {
        onSuccess: () => {
          console.log('Product created successfully');
        }
      })
    }

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        if(e.target.files && e.target.files.length > 0){
            setData('image', e.target.files[0]);
        }
    }

    return (
      <div className="flex min-h-[80vh] items-center justify-center p-4">
        <Card className="w-full max-w-lg shadow-lg">
          <CardHeader>
            <CardTitle>Create Product</CardTitle>
            <CardDescription>
              Fill in the details below to add a new product.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="image">Product Image</Label>
                <Input onChange={handleFileUpload}
                    id="image" type="file" className="mt-1" />
                    <InputError message={errors.image}/>
              </div>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input 
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                 id="name" type="text" placeholder="Product name" className="mt-1" />
                 <InputError message={errors.name} />
              </div>
              <Button type="submit" className="w-full mt-2">
                Create Product
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
}

Create.layout = {
    breadcrumbs: [
        {
            title: 'Create Products',
            href: '/products/create',
        },
    ],
};
