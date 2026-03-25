import {
  ref,
  provide,
  inject,
  onMounted,
  onUnmounted,
  type Ref,
  type InjectionKey,
} from 'vue';
import { FillKit } from '@fillkit/core';
import type { FillKitOptions } from '@fillkit/core';

const FillKitKey: InjectionKey<Ref<FillKit | null>> = Symbol('FillKit');

let globalInstance: FillKit | null = null;
let globalInitPromise: Promise<FillKit> | null = null;
let activeConsumers = 0;

export function provideFillKit(options?: FillKitOptions) {
  const instance = ref(globalInstance) as Ref<FillKit | null>;

  onMounted(async () => {
    activeConsumers++;

    if (globalInstance) {
      instance.value = globalInstance;
      return;
    }

    if (globalInitPromise) {
      try {
        instance.value = await globalInitPromise;
      } catch {
        // Initialization failed — will be retried on next mount
      }
      return;
    }

    globalInitPromise = FillKit.init(options);
    try {
      const inst = await globalInitPromise;
      globalInstance = inst;
      globalInitPromise = null;
      instance.value = inst;
    } catch {
      globalInitPromise = null;
    }
  });

  onUnmounted(() => {
    activeConsumers--;
    if (activeConsumers === 0 && globalInstance) {
      globalInstance.destroy().catch(console.error);
      globalInstance = null;
    }
  });

  provide(FillKitKey, instance);
  return instance;
}

export function useFillKit() {
  const instance = inject(FillKitKey);
  if (!instance) {
    throw new Error('useFillKit() called without provideFillKit()');
  }
  return instance;
}
