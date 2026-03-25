<script setup lang="ts">
defineProps<{
  collapsed: boolean;
}>();
</script>

<template>
  <div class="space-y-1">
    <router-link
      to="/"
      class="flex items-center gap-3 rounded-lg transition-colors"
      :class="collapsed ? 'justify-center px-2 py-2.5' : 'px-4 py-2.5'"
      active-class="bg-gray-100 text-gray-900 font-medium border-l-2 border-blue-600"
      exact-active-class="bg-gray-100 text-gray-900 font-medium border-l-2 border-blue-600"
      title="Registration"
    >
      <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      <span v-if="!collapsed">Registration</span>
    </router-link>

    <router-link
      to="/contact"
      class="flex items-center gap-3 rounded-lg transition-colors"
      :class="collapsed ? 'justify-center px-2 py-2.5' : 'px-4 py-2.5'"
      active-class="bg-gray-100 text-gray-900 font-medium border-l-2 border-blue-600"
      title="Contact"
    >
      <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <span v-if="!collapsed">Contact</span>
    </router-link>
  </div>
</template>

<style scoped>
a:not(.router-link-active) {
  color: rgb(55 65 81);
}
a:not(.router-link-active):hover {
  background-color: rgb(243 244 246);
}
</style>
