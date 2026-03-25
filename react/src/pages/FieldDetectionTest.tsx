import { useState, FormEvent } from 'react';
import DemoBanner from '../components/DemoBanner';

export default function FieldDetectionTest() {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Field Detection Test submitted:', formData);
    alert('Form submitted! Check console for data.');
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const inputClass =
    'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <DemoBanner sourceUrl="https://github.com/fillkit/demo/blob/main/react/src/pages/FieldDetectionTest.tsx" />
      <h1 className="text-3xl font-bold mb-2">Field Detection Test</h1>
      <p className="text-gray-600 mb-8">
        Comprehensive form covering all locale pattern field keys. Use FillKit
        to verify each field is detected and filled correctly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section 1: Personal */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold mb-4">Personal Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label
                htmlFor="prefix"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Prefix / Title
              </label>
              <input
                type="text"
                id="prefix"
                name="prefix"
                placeholder="Mr., Mrs., Dr."
                value={formData.prefix || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
                value={formData.firstName || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="middleName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Middle Name
              </label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                placeholder="Michael"
                value={formData.middleName || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="suffix"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Suffix
              </label>
              <input
                type="text"
                id="suffix"
                name="suffix"
                placeholder="Jr., Sr., III"
                value={formData.suffix || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="John Michael Doe"
                value={formData.fullName || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender || ''}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="birthDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                placeholder="mm/dd/yyyy"
                value={formData.birthDate || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder="25"
                value={formData.age || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="ssn"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Social Security Number
              </label>
              <input
                type="text"
                id="ssn"
                name="ssn"
                placeholder="XXX-XX-XXXX"
                value={formData.ssn || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                placeholder="Tell us about yourself"
                value={formData.bio || ''}
                onChange={handleChange}
                rows={2}
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* Section 2: Contact */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone"
                value={formData.phone || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={formData.username || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="website"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                placeholder="https://your-website.com"
                value={formData.website || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Re-enter your password"
                value={formData.confirmPassword || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* Section 3: Business */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold mb-4">Business Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your company name"
                value={formData.company || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="jobTitle"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                placeholder="Software Engineer"
                value={formData.jobTitle || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="department"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Department
              </label>
              <input
                type="text"
                id="department"
                name="department"
                placeholder="Engineering"
                value={formData.department || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* Section 4: Address */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold mb-4">Address</h3>

          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Address Line 1
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="123 Main Street"
                value={formData.address || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="address2"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Address Line 2
              </label>
              <input
                type="text"
                id="address2"
                name="address2"
                placeholder="Apartment, suite, unit"
                value={formData.address2 || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="San Francisco"
                value={formData.city || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                State / Province
              </label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="California"
                value={formData.state || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                placeholder="94102"
                value={formData.postalCode || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="United States"
                value={formData.country || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* Section 5: Financial */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold mb-4">Financial Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="md:col-span-2">
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                placeholder="4242 4242 4242 4242"
                value={formData.cardNumber || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="cvv"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                placeholder="123"
                value={formData.cvv || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="expiry"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Expiration Date
              </label>
              <input
                type="text"
                id="expiry"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
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
                placeholder="DE89 3704 0044 0532 0130 00"
                value={formData.iban || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* Section 6: Date */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold mb-4">Dates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date || ''}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
