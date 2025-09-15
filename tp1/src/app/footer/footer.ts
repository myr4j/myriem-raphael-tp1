import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [
    NgClass,
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  @Input() footerColor: string = "";
  @Input() footerSize: string = "";
}
