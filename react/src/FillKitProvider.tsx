import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { FillKit, FillKitOptions } from '@fillkit/core';

// Context to expose the FillKit instance
const FillKitContext = createContext<FillKit | null>(null);

// Hook to use FillKit instance
export const useFillKit = () => useContext(FillKitContext);

interface FillKitProviderProps {
  children: React.ReactNode;
  options?: FillKitOptions;
}

// Module-level singleton to handle StrictMode double-invocation and global persistence
let globalInstance: FillKit | null = null;
let globalInitPromise: Promise<FillKit> | null = null;
let activeConsumers = 0;

export function FillKitProvider({ children, options }: FillKitProviderProps) {
  const [instance, setInstance] = useState<FillKit | null>(globalInstance);
  const initialized = useRef(false);

  // Stabilize options reference to avoid re-running the effect on every render
  const stableOptions = useMemo(
    () => options,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(options)]
  );

  useEffect(() => {
    activeConsumers++;
    initialized.current = true;

    const init = async () => {
      // If already initialized, use existing instance
      if (globalInstance) {
        setInstance(globalInstance);
        return;
      }

      // If initialization is in progress, wait for it
      if (globalInitPromise) {
        try {
          const inst = await globalInitPromise;
          if (initialized.current) {
            setInstance(inst);
          }
        } catch {
          // Initialization failed — will be retried on next mount
        }
        return;
      }

      // Start new initialization
      globalInitPromise = FillKit.init(stableOptions);

      try {
        const inst = await globalInitPromise;
        globalInstance = inst;
        globalInitPromise = null;

        if (initialized.current) {
          setInstance(inst);
        } else {
          // Component unmounted during init
          if (activeConsumers === 0) {
            inst.destroy().catch(() => {});
            globalInstance = null;
          }
        }
      } catch {
        globalInitPromise = null;
      }
    };

    init();

    return () => {
      activeConsumers--;
      initialized.current = false;

      // Cleanup if no more consumers
      if (activeConsumers === 0 && globalInstance) {
        globalInstance.destroy().catch(() => {});
        globalInstance = null;
      }
    };
  }, [stableOptions]);

  return (
    <FillKitContext.Provider value={instance}>
      {children}
    </FillKitContext.Provider>
  );
}
