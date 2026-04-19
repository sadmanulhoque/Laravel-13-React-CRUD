// resources/js/Pages/Products/modals/create-modal.tsx
import { useForm } from '@inertiajs/react';
import ProductController from '@/actions/App/Http/Controllers/Backend/Modules/ProductModule/ProductController';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';


interface CreateModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CreateModal({ open, onClose }: CreateModalProps) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    image: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    post(ProductController.store().url, {
      onSuccess: () => {
        reset();
        onClose();
        // Optional: You can refresh the products list here if needed
      },
      onError: () => {
        console.log('Validation errors');
      },
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setData('image', e.target.files[0]);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Product</DialogTitle>
          <DialogDescription>
            Fill in the details below to add a new product.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="image">Product Image</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1"
            />
            <InputError message={errors.image} />
          </div>

          <div>
            <Label htmlFor="name">Product Name</Label>
            <Input
              id="name"
              type="text"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              placeholder="Enter product name"
              className="mt-1"
            />
            <InputError message={errors.name} />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={processing}>
              {processing ? 'Creating...' : 'Create Product'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}