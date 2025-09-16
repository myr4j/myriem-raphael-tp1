import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'Header',
  imports: [
    NgClass
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  @Input() names: string = '';
  @Input() size: string = '';
  @Input() background: string = '';

}
