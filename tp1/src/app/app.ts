import { Component, signal } from '@angular/core';
import { Footer } from "./footer/footer";
import { WindowsLogo } from './windows-logo/windows-logo';

@Component({
  selector: 'app-root',
  imports: [Footer, WindowsLogo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  footer_color: string = "color_orange";
  footer_size: string = "height_50px";
  header_color: string = "color_purple"
  header_size: string = "height_50px";

  protected readonly title = signal('tp1');

  public textColorAlign : string = "names";
  public headerSize : string = "size";
  public headerBackground : string = "background";
}
