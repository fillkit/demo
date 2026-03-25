import { useState, FormEvent } from 'react';
import DemoBanner from '../components/DemoBanner';

export default function FinancialForm() {
  const [formData, setFormData] = useState({
    iban: '',
    bic: '',
    bitcoinAddress: '',
    ethereumAddress: '',
    currencyCode: '',
    accountNumber: '',
    creditCardNumber: '',
    creditCardCvv: '',
    creditCardExpiry: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Financial form submitted:', formData);
    alert('Financial form submitted! Check console for data.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputClass =
    'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <DemoBanner sourceUrl="https://github.com/fillkit/demo/blob/main/react/src/pages/FinancialForm.tsx" />
      <h1 className="text-3xl font-bold mb-2">Financial Information</h1>
      <p className="text-gray-600 mb-8">
        Tests IBAN, BIC/SWIFT, cryptocurrency addresses, and other financial
        field types.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
      >
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Bank Account Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="iban"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                IBAN
              </label>
              <input
                type="text"
                id="iban"
                name="iban"
                value={formData.iban}
                onChange={handleChange}
                placeholder="DE89 3704 0044 0532 0130 00"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="bic"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                BIC / SWIFT Code
              </label>
              <input
                type="text"
                id="bic"
                name="bic"
                value={formData.bic}
                onChange={handleChange}
                placeholder="COBADEFFXXX"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="currencyCode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Currency Code
              </label>
              <input
                type="text"
                id="currencyCode"
                name="currencyCode"
                value={formData.currencyCode}
                onChange={handleChange}
                placeholder="EUR"
                maxLength={3}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="accountNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Account Number
              </label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                placeholder="1234567890"
                className={inputClass}
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Cryptocurrency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="bitcoinAddress"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Bitcoin Address
              </label>
              <input
                type="text"
                id="bitcoinAddress"
                name="bitcoinAddress"
                value={formData.bitcoinAddress}
                onChange={handleChange}
                placeholder="1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="ethereumAddress"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Ethereum Address
              </label>
              <input
                type="text"
                id="ethereumAddress"
                name="ethereumAddress"
                value={formData.ethereumAddress}
                onChange={handleChange}
                placeholder="0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
                className={inputClass}
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Credit Card</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="md:col-span-2">
              <label
                htmlFor="creditCardNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Card Number
              </label>
              <input
                type="text"
                id="creditCardNumber"
                name="creditCardNumber"
                value={formData.creditCardNumber}
                onChange={handleChange}
                placeholder="4111 1111 1111 1111"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="creditCardCvv"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                CVV
              </label>
              <input
                type="text"
                id="creditCardCvv"
                name="creditCardCvv"
                value={formData.creditCardCvv}
                onChange={handleChange}
                placeholder="123"
                maxLength={4}
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="creditCardExpiry"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="creditCardExpiry"
                name="creditCardExpiry"
                value={formData.creditCardExpiry}
                onChange={handleChange}
                placeholder="12/25"
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
