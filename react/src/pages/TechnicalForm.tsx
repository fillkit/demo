import { useState, FormEvent } from 'react';
import DemoBanner from '../components/DemoBanner';

export default function TechnicalForm() {
  const [formData, setFormData] = useState({
    macAddress: '',
    jwtToken: '',
    imei: '',
    nanoid: '',
    ulid: '',
    semver: '',
    uuid: '',
    ipAddress: '',
    vin: '',
    licensePlate: '',
    displayName: '',
    userAgent: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Technical form submitted:', formData);
    alert('Technical form submitted! Check console for data.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputClass =
    'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <DemoBanner sourceUrl="https://github.com/fillkit/demo/blob/main/react/src/pages/TechnicalForm.tsx" />
      <h1 className="text-3xl font-bold mb-2">Technical Identifiers</h1>
      <p className="text-gray-600 mb-8">
        Tests MAC addresses, JWT tokens, IMEI, nanoid, ULID, semver, and other
        technical field types.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
      >
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Network & Device</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="macAddress"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                MAC Address
              </label>
              <input
                type="text"
                id="macAddress"
                name="macAddress"
                value={formData.macAddress}
                onChange={handleChange}
                placeholder="00:1B:44:11:3A:B7"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="ipAddress"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                IP Address
              </label>
              <input
                type="text"
                id="ipAddress"
                name="ipAddress"
                value={formData.ipAddress}
                onChange={handleChange}
                placeholder="192.168.1.1"
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="imei"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                IMEI
              </label>
              <input
                type="text"
                id="imei"
                name="imei"
                value={formData.imei}
                onChange={handleChange}
                placeholder="490154203237518"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="userAgent"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                User Agent
              </label>
              <input
                type="text"
                id="userAgent"
                name="userAgent"
                value={formData.userAgent}
                onChange={handleChange}
                placeholder="Mozilla/5.0 ..."
                className={inputClass}
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Tokens & IDs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="jwtToken"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                JWT Token
              </label>
              <input
                type="text"
                id="jwtToken"
                name="jwtToken"
                value={formData.jwtToken}
                onChange={handleChange}
                placeholder="eyJhbGciOiJIUzI1NiIs..."
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="uuid"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                UUID
              </label>
              <input
                type="text"
                id="uuid"
                name="uuid"
                value={formData.uuid}
                onChange={handleChange}
                placeholder="550e8400-e29b-41d4-a716-446655440000"
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label
                htmlFor="nanoid"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nanoid
              </label>
              <input
                type="text"
                id="nanoid"
                name="nanoid"
                value={formData.nanoid}
                onChange={handleChange}
                placeholder="V1StGXR8_Z5jdHi6B-myT"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="ulid"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                ULID
              </label>
              <input
                type="text"
                id="ulid"
                name="ulid"
                value={formData.ulid}
                onChange={handleChange}
                placeholder="01ARZ3NDEKTSV4RRFFQ69G5FAV"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="semver"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Semver Version
              </label>
              <input
                type="text"
                id="semver"
                name="semver"
                value={formData.semver}
                onChange={handleChange}
                placeholder="1.2.3"
                className={inputClass}
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Vehicle</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="vin"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                VIN
              </label>
              <input
                type="text"
                id="vin"
                name="vin"
                value={formData.vin}
                onChange={handleChange}
                placeholder="1HGBH41JXMN109186"
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
          <div>
            <label
              htmlFor="displayName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Display Name
            </label>
            <input
              type="text"
              id="displayName"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              placeholder="CoolUser42"
              className={inputClass}
            />
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
