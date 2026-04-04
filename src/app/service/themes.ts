import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Themes {
  public toggleTheme() {
    const dark = "dark";
    const bodyClasses = document.body.classList;

    if (bodyClasses.contains(dark)) {
      bodyClasses.remove(dark)
    } else {
      bodyClasses.add(dark)
    }
  }

  public getTheme() {
    return document.body.classList.contains("dark") ? "dark" : "light";
  }
}
