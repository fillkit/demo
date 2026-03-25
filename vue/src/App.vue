<script setup lang="ts">
import { ref } from 'vue';
import SidebarNav from './components/SidebarNav.vue';
import SidebarControls from './components/SidebarControls.vue';
import TopNav from './components/TopNav.vue';
import { provideFillKit } from './fillkit';

provideFillKit({
  mode: 'valid',
  watchMode: true,
  refill: true,
  provider: 'local',
  locale: 'en',
  ui: {
    enabled: true,
    position: 'bottom.center',
  },
});

const sidebarCollapsed = ref<boolean>(
  (() => {
    const saved = localStorage.getItem('fillkit-sidebar-collapsed');
    return saved ? JSON.parse(saved) : false;
  })(),
);

function toggleSidebar() {
  sidebarCollapsed.value = !sidebarCollapsed.value;
  localStorage.setItem(
    'fillkit-sidebar-collapsed',
    JSON.stringify(sidebarCollapsed.value),
  );
}
</script>

<template>
  <div class="h-screen bg-gray-50 flex flex-col overflow-hidden">
    <TopNav />
    <div class="flex flex-1 overflow-hidden">
      <!-- Sidebar Navigation -->
      <aside
        class="bg-white border-r border-gray-200 shrink-0 h-full overflow-y-auto transition-all duration-300"
        :class="sidebarCollapsed ? 'w-16' : 'w-64'"
      >
        <div class="p-4">
          <div class="flex items-center justify-between mb-6">
            <span
              v-if="!sidebarCollapsed"
              class="text-sm font-semibold text-gray-500 uppercase tracking-wider"
            >
              Pages
            </span>
            <button
              class="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle sidebar"
              @click="toggleSidebar"
            >
              <svg
                class="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  v-if="sidebarCollapsed"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
                <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>

          <nav class="space-y-1">
            <SidebarNav :collapsed="sidebarCollapsed" />
            <SidebarControls :collapsed="sidebarCollapsed" />
          </nav>
        </div>
      </aside>

      <!-- Main Content Area -->
      <main class="flex-1 overflow-y-auto h-full">
        <RouterView />
      </main>
    </div>
  </div>
</template>
