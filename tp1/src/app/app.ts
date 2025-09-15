import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';
import { Footer } from "./footer/footer";
import { WindowsLogo } from './windows-logo/windows-logo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, WindowsLogo, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public backgroundColor = "";

  public footer_color: string = "color_orange";
  public footer_size: string = "height_50px";

  protected readonly title = signal('tp1');

  public textColorAlign : string = "names";
  public headerSize : string = "size";
  public headerBackground : string = "background";

  public onColorSelected(color: string) {
    this.backgroundColor = color;
  }

}
