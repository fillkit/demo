<script setup lang="ts">
import { reactive } from 'vue';
import DemoBanner from '../components/DemoBanner.vue';

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
  contactMethod: 'email',
});

function handleSubmit() {
  console.log('Contact form submitted:', { ...formData });
  alert('Message sent! Check console for data.');
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <DemoBanner sourceUrl="https://github.com/fillkit/demo/blob/main/vue/src/pages/ContactForm.vue" />
    <h1 class="text-3xl font-bold mb-2">Contact Us</h1>
    <p class="text-gray-600 mb-8">
      Have questions or feedback? Fill out the form below and we'll get back to
      you soon.
    </p>

    <form
      class="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
      @submit.prevent="handleSubmit"
    >
      <!-- Your Information -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4">Your Information</h3>

        <div class="mb-4">
          <label
            for="name"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name <span class="text-red-500">*</span>
          </label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            name="name"
            autocomplete="name"
            required
            placeholder="John Doe"
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
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
              placeholder="john@example.com"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              for="phone"
              class="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              id="phone"
              v-model="formData.phone"
              type="tel"
              name="phone"
              autocomplete="tel"
              placeholder="+1 (555) 123-4567"
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div class="mb-4">
          <label
            for="company"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Company Name
          </label>
          <input
            id="company"
            v-model="formData.company"
            type="text"
            name="company"
            autocomplete="organization"
            placeholder="Acme Inc."
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <!-- Your Message -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4">Your Message</h3>

        <div class="mb-4">
          <label
            for="subject"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Subject <span class="text-red-500">*</span>
          </label>
          <input
            id="subject"
            v-model="formData.subject"
            type="text"
            name="subject"
            required
            placeholder="What can we help you with?"
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div class="mb-4">
          <label
            for="message"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Message <span class="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            v-model="formData.message"
            name="message"
            required
            rows="6"
            placeholder="Tell us more about your inquiry..."
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"
          />
        </div>

        <div class="mb-4">
          <label
            for="contactMethod"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Preferred Contact Method
          </label>
          <select
            id="contactMethod"
            v-model="formData.contactMethod"
            name="contactMethod"
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="either">Either</option>
          </select>
        </div>
      </div>

      <!-- Buttons -->
      <div class="flex gap-4">
        <button
          type="submit"
          class="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Send Message
        </button>
        <button
          type="reset"
          class="px-6 py-2 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
        >
          Clear Form
        </button>
      </div>
    </form>
  </div>
</template>
