import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [
    NgClass,
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  footerColor: string = "";
  footerSize: string = "";
}
