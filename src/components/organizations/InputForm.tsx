import { Label, TextInput, Textarea, FileInput, Button } from 'flowbite-react';
import { HiGlobeAlt, HiMail, HiHome } from 'react-icons/hi';

interface InputFormProps {
  onSubmit: (event: React.FormEvent) => void;
  formData: {
    name: string;
    description: string;
    file: File | null;
    website: string;
    email: string;
    street: string;
    city: string;
    zip: string;
  };
  setFormData: (value: {
    name: string;
    description: string;
    file: File | null;
    website: string;
    email: string;
    street: string;
    city: string;
    zip: string;
  }) => void;
}

const InputForm: React.FC<InputFormProps> = ({
  onSubmit,
  formData,
  setFormData,
}) => {
  return (
    <form
      className="flex max-w-md flex-col gap-4 mx-auto mt-8"
      onSubmit={onSubmit}
    >
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="name"
            value="Organization name"
            className="text-white"
          />
          <span className="text-red-500">*</span>
        </div>
        <TextInput
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="description"
            value="Description"
            className="text-white"
          />
        </div>
        <Textarea
          id="description"
          placeholder="Let us know your history, mission, and vision"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="file" value="Upload file" className="text-white" />
        </div>
        <FileInput
          id="file"
          accept="image/*"
          multiple={false}
          helperText="Visually represent your organization - logo, banner, etc."
          onChange={(e) =>
            setFormData({
              ...formData,
              file: e.target.files ? e.target.files[0] : null,
            })
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="website" value="Website" className="text-white" />
        </div>
        <TextInput
          id="website"
          type="url"
          icon={HiGlobeAlt}
          placeholder="https://example.com"
          value={formData.website}
          onChange={(e) =>
            setFormData({ ...formData, website: e.target.value })
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" className="text-white" />
          <span className="text-red-500">*</span>
        </div>
        <TextInput
          id="email"
          type="email"
          icon={HiMail}
          placeholder="name@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="street" value="Street" className="text-white" />
          <span className="text-red-500">*</span>
        </div>
        <TextInput
          id="street"
          type="text"
          icon={HiHome}
          placeholder="Ruđera Boškovića 32"
          value={formData.street}
          onChange={(e) => setFormData({ ...formData, street: e.target.value })}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="city" value="City" className="text-white" />
            <span className="text-red-500">*</span>
          </div>
          <TextInput
            id="city"
            type="text"
            placeholder="Split"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="zip" value="ZIP" className="text-white" />
            <span className="text-red-500">*</span>
          </div>
          <TextInput
            id="zip"
            type="text"
            placeholder="21000"
            value={formData.zip}
            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
            required
          />
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default InputForm;
