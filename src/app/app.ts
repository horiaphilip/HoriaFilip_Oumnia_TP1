import { Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { LogoSquare } from './logo-square/logo-square';

@Component({
  imports: [Header, Footer, LogoSquare],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  public backgroundColor: string = 'white';

  public onColorPicked(color: string): void {
    this.backgroundColor = color;
  }
}
