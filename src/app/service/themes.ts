import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Themes {
  private readonly THEME_KEY = 'theme';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.initTheme();
    }
  }

  private initTheme() {
    const saved = localStorage.getItem(this.THEME_KEY);

    if (saved) {
      this.applyTheme(saved);
    } else {
      const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = prefersDarkTheme ? 'dark' : 'light';

      this.applyTheme(theme);
    }
  }

  private applyTheme(theme: string) {
    const classes = document.body.classList;

    // 'light' class has no actual effect, it's here for coherence
    classes.remove('light', 'dark');
    classes.add(theme);
  }

  public toggleTheme() {
    if (!this.isBrowser) return;
    const theme = this.getTheme() === 'dark' ? 'light' : 'dark';

    this.applyTheme(theme);
    localStorage.setItem(this.THEME_KEY, theme);
  }

  public getTheme(): string {
    if (!this.isBrowser) return 'light';
    return document.body.classList.contains('dark') ? 'dark' : 'light';
  }
}
