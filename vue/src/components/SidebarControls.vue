<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { FillKit } from '@fillkit/core';
import type { FillMode } from '@fillkit/core';
import { useFillKit } from '../fillkit';

defineProps<{
  collapsed: boolean;
}>();

const LOCALES = [
  { code: 'af_ZA', label: 'Afrikaans' },
  { code: 'ar', label: 'Arabic' },
  { code: 'az', label: 'Azerbaijani' },
  { code: 'bn_BD', label: 'Bengali' },
  { code: 'zh_CN', label: 'Chinese (Simplified)' },
  { code: 'zh_TW', label: 'Chinese (Traditional)' },
  { code: 'hr', label: 'Croatian' },
  { code: 'cs_CZ', label: 'Czech' },
  { code: 'cy', label: 'Welsh' },
  { code: 'da', label: 'Danish' },
  { code: 'dv', label: 'Dhivehi' },
  { code: 'nl', label: 'Dutch' },
  { code: 'en', label: 'English' },
  { code: 'eo', label: 'Esperanto' },
  { code: 'fi', label: 'Finnish' },
  { code: 'fr', label: 'French' },
  { code: 'ka_GE', label: 'Georgian' },
  { code: 'de', label: 'German' },
  { code: 'el', label: 'Greek' },
  { code: 'he', label: 'Hebrew' },
  { code: 'hu', label: 'Hungarian' },
  { code: 'hy', label: 'Armenian' },
  { code: 'id_ID', label: 'Indonesian' },
  { code: 'it', label: 'Italian' },
  { code: 'ja', label: 'Japanese' },
  { code: 'ko', label: 'Korean' },
  { code: 'ku_ckb', label: 'Kurdish (Sorani)' },
  { code: 'ku_kmr_latin', label: 'Kurdish (Kurmanji)' },
  { code: 'lv', label: 'Latvian' },
  { code: 'mk', label: 'Macedonian' },
  { code: 'nb_NO', label: 'Norwegian' },
  { code: 'ne', label: 'Nepali' },
  { code: 'fa', label: 'Persian' },
  { code: 'pl', label: 'Polish' },
  { code: 'pt_BR', label: 'Portuguese (Brazil)' },
  { code: 'pt_PT', label: 'Portuguese (Portugal)' },
  { code: 'ro', label: 'Romanian' },
  { code: 'ru', label: 'Russian' },
  { code: 'sr_RS_latin', label: 'Serbian' },
  { code: 'sk', label: 'Slovak' },
  { code: 'sl_SI', label: 'Slovenian' },
  { code: 'es', label: 'Spanish' },
  { code: 'sv', label: 'Swedish' },
  { code: 'ta_IN', label: 'Tamil' },
  { code: 'th', label: 'Thai' },
  { code: 'tr', label: 'Turkish' },
  { code: 'uk', label: 'Ukrainian' },
  { code: 'ur', label: 'Urdu' },
  { code: 'uz_UZ_latin', label: 'Uzbek' },
  { code: 'vi', label: 'Vietnamese' },
  { code: 'yo_NG', label: 'Yoruba' },
  { code: 'zu_ZA', label: 'Zulu' },
] as const;

const instance = useFillKit();
const locale = ref('en');
const mode = ref<FillMode>('valid');

let unsubscribe: (() => void) | null = null;

onMounted(() => {
  const store = FillKit.atoms.sdkOptions;
  const current = store.get();
  locale.value = current.locale;
  mode.value = current.mode;

  unsubscribe = store.subscribe((state) => {
    locale.value = state.locale;
    mode.value = state.mode;
  });
});

onUnmounted(() => {
  if (unsubscribe) {
    unsubscribe();
    unsubscribe = null;
  }
});

function handleLocaleChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  const newLocale = target.value;
  locale.value = newLocale;
  instance.value?.updateOptions({ locale: newLocale });
}

function handleModeChange(newMode: FillMode) {
  mode.value = newMode;
  instance.value?.updateOptions({ mode: newMode });
}
</script>

<template>
  <div v-if="!collapsed" class="mt-6 pt-6 border-t border-gray-200">
    <h2
      class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4"
    >
      Settings
    </h2>
    <div class="px-4 space-y-4">
      <!-- Locale picker -->
      <div>
        <label
          for="locale-select"
          class="block text-xs font-medium text-gray-600 mb-1"
        >
          Locale
        </label>
        <select
          id="locale-select"
          :value="locale"
          class="w-full text-sm px-2 py-1.5 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          @change="handleLocaleChange"
        >
          <option
            v-for="loc in LOCALES"
            :key="loc.code"
            :value="loc.code"
          >
            {{ loc.label }}
          </option>
        </select>
      </div>

      <!-- Mode toggle -->
      <div>
        <span class="block text-xs font-medium text-gray-600 mb-1">
          Fill Mode
        </span>
        <div
          class="flex rounded-md overflow-hidden border border-gray-300"
        >
          <button
            type="button"
            class="flex-1 text-xs font-medium py-1.5 transition-colors"
            :class="
              mode === 'valid'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            "
            @click="handleModeChange('valid')"
          >
            Valid
          </button>
          <button
            type="button"
            class="flex-1 text-xs font-medium py-1.5 transition-colors"
            :class="
              mode === 'invalid'
                ? 'bg-red-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            "
            @click="handleModeChange('invalid')"
          >
            Invalid
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
