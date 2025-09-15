import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'WindowsLogo',
  imports: [],
  templateUrl: './windows-logo.html',
  styleUrl: './windows-logo.css'
})
export class WindowsLogo {
  @Input() size = 140;
  @Input() colors: string[] = ['#f25022 48%',  '#00A300','#0078D7', '#FFB900'];
  @Output() colorSelected = new EventEmitter<string>();

  get squareSize(): number {
    const gap = 8;
    return Math.floor((this.size - gap) / 2);
  }

  onSquareClick(color: string) {
    this.colorSelected.emit(color);
  }
}
