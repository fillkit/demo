import { useState, FormEvent } from 'react';
import DemoBanner from '../components/DemoBanner';

export default function NicheDomainForm() {
  const [formData, setFormData] = useState({
    airlineName: '',
    flightNumber: '',
    seatNumber: '',
    airportCode: '',
    recordLocator: '',
    foodDish: '',
    foodIngredient: '',
    foodDescription: '',
    cuisineType: '',
    bookTitle: '',
    bookAuthor: '',
    bookGenre: '',
    bookPublisher: '',
    musicGenre: '',
    songName: '',
    musicArtist: '',
    chemicalElement: '',
    scienceUnit: '',
    mongodbId: '',
    commitSha: '',
    commitMessage: '',
    gitBranch: '',
    databaseColumn: '',
    databaseType: '',
    databaseEngine: '',
    animalType: '',
    petName: '',
    dogBreed: '',
    catBreed: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Niche domain form submitted:', formData);
    alert('Niche domain form submitted! Check console for data.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputClass =
    'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <DemoBanner sourceUrl="https://github.com/fillkit/demo/blob/main/react/src/pages/NicheDomainForm.tsx" />
      <h1 className="text-3xl font-bold mb-2">Niche Domain Fields</h1>
      <p className="text-gray-600 mb-8">
        Tests airline, food, book, music, science, devtools, and animal field
        types.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-8"
      >
        {/* Airlines */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Airlines</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label
                htmlFor="airlineName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Airline Name
              </label>
              <input
                type="text"
                id="airlineName"
                name="airlineName"
                value={formData.airlineName}
                onChange={handleChange}
                placeholder="Delta Air Lines"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="flightNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Flight Number
              </label>
              <input
                type="text"
                id="flightNumber"
                name="flightNumber"
                value={formData.flightNumber}
                onChange={handleChange}
                placeholder="DL1234"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="seatNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Seat Number
              </label>
              <input
                type="text"
                id="seatNumber"
                name="seatNumber"
                value={formData.seatNumber}
                onChange={handleChange}
                placeholder="12A"
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="airportCode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Airport Code (IATA)
              </label>
              <input
                type="text"
                id="airportCode"
                name="airportCode"
                value={formData.airportCode}
                onChange={handleChange}
                placeholder="JFK"
                maxLength={3}
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="recordLocator"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Record Locator (PNR)
              </label>
              <input
                type="text"
                id="recordLocator"
                name="recordLocator"
                value={formData.recordLocator}
                onChange={handleChange}
                placeholder="ABC123"
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* Food */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Food</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label
                htmlFor="foodDish"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Dish
              </label>
              <input
                type="text"
                id="foodDish"
                name="foodDish"
                value={formData.foodDish}
                onChange={handleChange}
                placeholder="Pad Thai"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="foodIngredient"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Ingredient
              </label>
              <input
                type="text"
                id="foodIngredient"
                name="foodIngredient"
                value={formData.foodIngredient}
                onChange={handleChange}
                placeholder="Basil"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="cuisineType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Cuisine Type
              </label>
              <input
                type="text"
                id="cuisineType"
                name="cuisineType"
                value={formData.cuisineType}
                onChange={handleChange}
                placeholder="Italian"
                className={inputClass}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="foodDescription"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Food Description
            </label>
            <input
              type="text"
              id="foodDescription"
              name="foodDescription"
              value={formData.foodDescription}
              onChange={handleChange}
              placeholder="A savory dish with fresh herbs..."
              className={inputClass}
            />
          </div>
        </div>

        {/* Books */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Books</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="bookTitle"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Book Title
              </label>
              <input
                type="text"
                id="bookTitle"
                name="bookTitle"
                value={formData.bookTitle}
                onChange={handleChange}
                placeholder="The Great Gatsby"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="bookAuthor"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Author
              </label>
              <input
                type="text"
                id="bookAuthor"
                name="bookAuthor"
                value={formData.bookAuthor}
                onChange={handleChange}
                placeholder="F. Scott Fitzgerald"
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="bookGenre"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Genre
              </label>
              <input
                type="text"
                id="bookGenre"
                name="bookGenre"
                value={formData.bookGenre}
                onChange={handleChange}
                placeholder="Fiction"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="bookPublisher"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Publisher
              </label>
              <input
                type="text"
                id="bookPublisher"
                name="bookPublisher"
                value={formData.bookPublisher}
                onChange={handleChange}
                placeholder="Penguin Books"
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* Music */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Music</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="musicGenre"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Genre
              </label>
              <input
                type="text"
                id="musicGenre"
                name="musicGenre"
                value={formData.musicGenre}
                onChange={handleChange}
                placeholder="Jazz"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="songName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Song Name
              </label>
              <input
                type="text"
                id="songName"
                name="songName"
                value={formData.songName}
                onChange={handleChange}
                placeholder="Bohemian Rhapsody"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="musicArtist"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Artist
              </label>
              <input
                type="text"
                id="musicArtist"
                name="musicArtist"
                value={formData.musicArtist}
                onChange={handleChange}
                placeholder="Queen"
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* Science */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Science</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="chemicalElement"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Chemical Element
              </label>
              <input
                type="text"
                id="chemicalElement"
                name="chemicalElement"
                value={formData.chemicalElement}
                onChange={handleChange}
                placeholder="Hydrogen"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="scienceUnit"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Science Unit
              </label>
              <input
                type="text"
                id="scienceUnit"
                name="scienceUnit"
                value={formData.scienceUnit}
                onChange={handleChange}
                placeholder="Kelvin (K)"
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* DevTools */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Developer Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="mongodbId"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                MongoDB ObjectId
              </label>
              <input
                type="text"
                id="mongodbId"
                name="mongodbId"
                value={formData.mongodbId}
                onChange={handleChange}
                placeholder="507f1f77bcf86cd799439011"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="commitSha"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Commit SHA
              </label>
              <input
                type="text"
                id="commitSha"
                name="commitSha"
                value={formData.commitSha}
                onChange={handleChange}
                placeholder="e3b0c44298fc1c149afb..."
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="gitBranch"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Git Branch
              </label>
              <input
                type="text"
                id="gitBranch"
                name="gitBranch"
                value={formData.gitBranch}
                onChange={handleChange}
                placeholder="feature/auth-login"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="commitMessage"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Commit Message
              </label>
              <input
                type="text"
                id="commitMessage"
                name="commitMessage"
                value={formData.commitMessage}
                onChange={handleChange}
                placeholder="fix: resolve auth issue"
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="databaseColumn"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Database Column
              </label>
              <input
                type="text"
                id="databaseColumn"
                name="databaseColumn"
                value={formData.databaseColumn}
                onChange={handleChange}
                placeholder="created_at"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="databaseType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Database Type
              </label>
              <input
                type="text"
                id="databaseType"
                name="databaseType"
                value={formData.databaseType}
                onChange={handleChange}
                placeholder="varchar"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="databaseEngine"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Database Engine
              </label>
              <input
                type="text"
                id="databaseEngine"
                name="databaseEngine"
                value={formData.databaseEngine}
                onChange={handleChange}
                placeholder="InnoDB"
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* Animals */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Animals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="animalType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Animal Type
              </label>
              <input
                type="text"
                id="animalType"
                name="animalType"
                value={formData.animalType}
                onChange={handleChange}
                placeholder="Dog"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="petName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Pet Name
              </label>
              <input
                type="text"
                id="petName"
                name="petName"
                value={formData.petName}
                onChange={handleChange}
                placeholder="Buddy"
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="dogBreed"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Dog Breed
              </label>
              <input
                type="text"
                id="dogBreed"
                name="dogBreed"
                value={formData.dogBreed}
                onChange={handleChange}
                placeholder="Golden Retriever"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="catBreed"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Cat Breed
              </label>
              <input
                type="text"
                id="catBreed"
                name="catBreed"
                value={formData.catBreed}
                onChange={handleChange}
                placeholder="Persian"
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
