<script setup lang="ts">
import { reactive } from 'vue';
import DemoBanner from '../components/DemoBanner.vue';

const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  phone: '',
  dateOfBirth: '',
  gender: '',
  country: '',
  city: '',
  zipCode: '',
  agreeTerms: false,
  newsletter: false,
});

function handleSubmit() {
  console.log('Form submitted:', { ...formData });
  alert('Registration form submitted! Check console for data.');
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <DemoBanner sourceUrl="https://github.com/fillkit/demo/blob/main/vue/src/pages/Registration.vue" />
    <h1 class="text-3xl font-bold mb-2">Create Your Account</h1>
    <p class="text-gray-600 mb-8">
      Fill out the form below to register. Use FillKit to autofill all fields
      instantly!
    </p>

    <form
      class="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
      @submit.prevent="handleSubmit"
    >
      <!-- Personal Information -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4">Personal Information</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              for="firstName"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              First Name <span class="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              v-model="formData.firstName"
              type="text"
              name="firstName"
              autocomplete="given-name"
              required
              placeholder="John"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              for="lastName"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Last Name <span class="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              v-model="formData.lastName"
              type="text"
              name="lastName"
              autocomplete="family-name"
              required
              placeholder="Doe"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address <span class="text-red-500">*</span>
            </label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              name="email"
              autocomplete="email"
              required
              placeholder="john.doe@example.com"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              for="phone"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number <span class="text-red-500">*</span>
            </label>
            <input
              id="phone"
              v-model="formData.phone"
              type="tel"
              name="phone"
              autocomplete="tel"
              required
              placeholder="+1 (555) 123-4567"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              for="dateOfBirth"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Date of Birth <span class="text-red-500">*</span>
            </label>
            <input
              id="dateOfBirth"
              v-model="formData.dateOfBirth"
              type="date"
              name="dateOfBirth"
              autocomplete="bday"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              for="gender"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Gender
            </label>
            <select
              id="gender"
              v-model="formData.gender"
              name="gender"
              autocomplete="sex"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Account Details -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4">Account Details</h3>

        <div class="mb-4">
          <label
            for="username"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Username <span class="text-red-500">*</span>
          </label>
          <input
            id="username"
            v-model="formData.username"
            type="text"
            name="username"
            autocomplete="username"
            required
            placeholder="johndoe123"
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Password <span class="text-red-500">*</span>
            </label>
            <input
              id="password"
              v-model="formData.password"
              type="password"
              name="password"
              autocomplete="new-password"
              required
              placeholder="Enter a strong password"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              for="confirmPassword"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password <span class="text-red-500">*</span>
            </label>
            <input
              id="confirmPassword"
              v-model="formData.confirmPassword"
              type="password"
              name="confirmPassword"
              autocomplete="new-password"
              required
              placeholder="Re-enter your password"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <!-- Location -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4">Location</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              for="country"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Country <span class="text-red-500">*</span>
            </label>
            <input
              id="country"
              v-model="formData.country"
              type="text"
              name="country"
              autocomplete="country-name"
              required
              placeholder="United States"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              for="city"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              City <span class="text-red-500">*</span>
            </label>
            <input
              id="city"
              v-model="formData.city"
              type="text"
              name="city"
              autocomplete="address-level2"
              required
              placeholder="New York"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div class="mb-4">
          <label
            for="zipCode"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            ZIP / Postal Code <span class="text-red-500">*</span>
          </label>
          <input
            id="zipCode"
            v-model="formData.zipCode"
            type="text"
            name="zipCode"
            autocomplete="postal-code"
            required
            placeholder="10001"
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <!-- Checkboxes -->
      <div class="mb-8">
        <div class="mb-4">
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              v-model="formData.agreeTerms"
              type="checkbox"
              name="agreeTerms"
              required
              class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <span class="text-sm text-gray-700">
              I agree to the Terms of Service and Privacy Policy
              <span class="text-red-500">*</span>
            </span>
          </label>
        </div>

        <div class="mb-4">
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              v-model="formData.newsletter"
              type="checkbox"
              name="newsletter"
              class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <span class="text-sm text-gray-700">
              Subscribe to newsletter for updates and promotions
            </span>
          </label>
        </div>
      </div>

      <!-- Buttons -->
      <div class="flex gap-4">
        <button
          type="submit"
          class="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Create Account
        </button>
        <button
          type="reset"
          class="px-6 py-2 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
        >
          Clear Form
        </button>
      </div>
    </form>

    <!-- Footer credits -->
    <footer class="mt-10 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
      <p>
        Open source by
        <a href="https://github.com/Dahkenangnon" class="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Justin Dah-kenangnon</a>
      </p>
    </footer>
  </div>
</template>
