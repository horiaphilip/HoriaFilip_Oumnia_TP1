import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-logo-square',
  styleUrl: './logo-square.scss',
  templateUrl: './logo-square.html',
})
export class LogoSquare {
  @Output() colorPicked: EventEmitter<string> = new EventEmitter();

  pick(color: string): void {
    this.colorPicked.emit(color);
  }
}
