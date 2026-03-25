import { useState, FormEvent } from 'react';
import DemoBanner from '../components/DemoBanner';

export default function VehicleForm() {
  const [formData, setFormData] = useState({
    vin: '',
    licensePlate: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleType: '',
    vehicleFuel: '',
    vehicleColor: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Vehicle form submitted:', formData);
    alert('Vehicle form submitted! Check console for data.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputClass =
    'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <DemoBanner sourceUrl="https://github.com/fillkit/demo/blob/main/react/src/pages/VehicleForm.tsx" />
      <h1 className="text-3xl font-bold mb-2">Vehicle Information</h1>
      <p className="text-gray-600 mb-8">
        Tests VIN, license plate, vehicle make, model, type, fuel type, and
        color field types.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
      >
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">
            Vehicle Identification
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="vin"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                VIN (Vehicle Identification Number)
              </label>
              <input
                type="text"
                id="vin"
                name="vin"
                value={formData.vin}
                onChange={handleChange}
                placeholder="1HGBH41JXMN109186"
                maxLength={17}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="licensePlate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                License Plate
              </label>
              <input
                type="text"
                id="licensePlate"
                name="licensePlate"
                value={formData.licensePlate}
                onChange={handleChange}
                placeholder="ABC-1234"
                className={inputClass}
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Vehicle Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="vehicleMake"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Make (Manufacturer)
              </label>
              <input
                type="text"
                id="vehicleMake"
                name="vehicleMake"
                value={formData.vehicleMake}
                onChange={handleChange}
                placeholder="Toyota"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="vehicleModel"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Model
              </label>
              <input
                type="text"
                id="vehicleModel"
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={handleChange}
                placeholder="Camry"
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="vehicleType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Vehicle Type
              </label>
              <input
                type="text"
                id="vehicleType"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                placeholder="SUV"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="vehicleFuel"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Fuel Type
              </label>
              <input
                type="text"
                id="vehicleFuel"
                name="vehicleFuel"
                value={formData.vehicleFuel}
                onChange={handleChange}
                placeholder="Gasoline"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="vehicleColor"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Vehicle Color
              </label>
              <input
                type="text"
                id="vehicleColor"
                name="vehicleColor"
                value={formData.vehicleColor}
                onChange={handleChange}
                placeholder="Silver"
                className={inputClass}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Submit
          </button>
          <button
            type="reset"
            className="px-6 py-2 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
          >
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
}
