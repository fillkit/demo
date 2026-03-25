<script setup lang="ts">
import { ref } from 'vue';

const frameworks = [
  { label: 'React', href: '/react/', color: 'cyan' },
  { label: 'Vue', href: '/vue/', color: 'emerald' },
  { label: 'Angular', href: '/angular/', color: 'red' },
  { label: 'HTML', href: '/html/', color: 'amber' },
  { label: 'Extension', href: '/anywhere/', color: 'purple' },
] as const;

const activeFramework = 'Vue';
const mobileOpen = ref(false);
</script>

<template>
  <header class="border-b border-gray-200 bg-white shrink-0 relative">
    <div class="h-12 flex items-center justify-between px-4 max-w-screen-xl mx-auto">
      <a href="/" class="flex items-center gap-2 shrink-0">
        <img :src="'/assets/logo-rect.svg'" alt="FillKit" class="h-6" />
      </a>

      <!-- Desktop nav -->
      <nav class="hidden sm:flex items-center gap-1">
        <a
          v-for="fw in frameworks"
          :key="fw.label"
          :href="fw.href"
          class="px-3 py-1.5 text-sm rounded-md transition-colors whitespace-nowrap"
          :class="
            fw.label === activeFramework
              ? 'bg-gray-100 text-gray-900 font-medium'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          "
        >
          {{ fw.label }}
        </a>
      </nav>

      <!-- Mobile toggle -->
      <button
        class="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle navigation"
      >
        <!-- X icon -->
        <svg v-if="mobileOpen" class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <!-- Menu icon -->
        <svg v-else class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile dropdown -->
    <div v-if="mobileOpen" class="sm:hidden border-t border-gray-100 bg-white">
      <nav class="flex flex-col py-2 px-4">
        <a
          v-for="fw in frameworks"
          :key="fw.label"
          :href="fw.href"
          class="px-3 py-2 text-sm rounded-md transition-colors"
          :class="
            fw.label === activeFramework
              ? 'bg-gray-100 text-gray-900 font-medium'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          "
        >
          {{ fw.label }}
        </a>
      </nav>
    </div>
  </header>
</template>
