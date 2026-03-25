import { useState, FormEvent } from 'react';
import DemoBanner from '../components/DemoBanner';

export default function PersonalExtended() {
  const [formData, setFormData] = useState({
    gender: '',
    sex: '',
    bio: '',
    timezone: '',
    language: '',
    locale: '',
    countryCode: '',
    imageUrl: '',
    searchQuery: '',
    buildingNumber: '',
    street: '',
    continent: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Personal extended form submitted:', formData);
    alert('Personal extended form submitted! Check console for data.');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputClass =
    'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <DemoBanner sourceUrl="https://github.com/fillkit/demo/blob/main/react/src/pages/PersonalExtended.tsx" />
      <h1 className="text-3xl font-bold mb-2">Personal Extended Fields</h1>
      <p className="text-gray-600 mb-8">
        Tests gender, bio, timezone, language, locale, country code, image URL,
        search, and granular address components.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
      >
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Identity</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Gender
              </label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                placeholder="Non-binary"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="sex"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Sex
              </label>
              <input
                type="text"
                id="sex"
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                placeholder="Female"
                className={inputClass}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Bio / About
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={3}
              placeholder="Tell us about yourself..."
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Profile Image URL
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/avatar.jpg"
              className={inputClass}
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">
            Locale & Regional Settings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label
                htmlFor="timezone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Timezone
              </label>
              <input
                type="text"
                id="timezone"
                name="timezone"
                value={formData.timezone}
                onChange={handleChange}
                placeholder="America/New_York"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="language"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Language
              </label>
              <input
                type="text"
                id="language"
                name="language"
                value={formData.language}
                onChange={handleChange}
                placeholder="en"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="locale"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Locale
              </label>
              <input
                type="text"
                id="locale"
                name="locale"
                value={formData.locale}
                onChange={handleChange}
                placeholder="en-US"
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="countryCode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Country Code
              </label>
              <input
                type="text"
                id="countryCode"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                placeholder="US"
                maxLength={3}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="searchQuery"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Search Query
              </label>
              <input
                type="search"
                id="searchQuery"
                name="searchQuery"
                value={formData.searchQuery}
                onChange={handleChange}
                placeholder="search term..."
                className={inputClass}
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">
            Granular Address Components
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="buildingNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Building Number
              </label>
              <input
                type="text"
                id="buildingNumber"
                name="buildingNumber"
                value={formData.buildingNumber}
                onChange={handleChange}
                placeholder="42"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="street"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Street
              </label>
              <input
                type="text"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleChange}
                placeholder="Main Street"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="continent"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Continent
              </label>
              <input
                type="text"
                id="continent"
                name="continent"
                value={formData.continent}
                onChange={handleChange}
                placeholder="Europe"
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
