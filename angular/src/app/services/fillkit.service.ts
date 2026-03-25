import { Injectable, OnDestroy } from '@angular/core';
import { FillKit } from '@fillkit/core';
import type { FillKitOptions } from '@fillkit/core';

@Injectable({ providedIn: 'root' })
export class FillKitService implements OnDestroy {
  instance: FillKit | null = null;
  ready = false;
  private initPromise: Promise<FillKit> | null = null;

  async init(options?: FillKitOptions): Promise<FillKit> {
    if (this.instance) return this.instance;
    if (this.initPromise) return this.initPromise;

    this.initPromise = FillKit.init(options);
    try {
      this.instance = await this.initPromise;
      this.ready = true;
      return this.instance;
    } catch (e) {
      this.initPromise = null;
      throw e;
    }
  }

  ngOnDestroy(): void {
    this.instance?.destroy().catch(console.error);
    this.instance = null;
    this.ready = false;
  }
}
