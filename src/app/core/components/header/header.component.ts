import { etheme } from './enums/etheme';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public icon: string = etheme.icon_moon;
  public textTheme: string = etheme.text_moon;
  constructor() { }

  ngOnInit(): void {
  }

  public toggle() {
    const theme = document.body.classList.toggle('dark-theme');

    if (theme) {
      this.textTheme = etheme.text_sun;
      return (this.icon = etheme.icon_sun);
    }
    this.textTheme = etheme.text_moon;
    return (this.icon = etheme.icon_moon);
  }
}
