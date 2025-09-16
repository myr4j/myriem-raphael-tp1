import { Component, signal } from '@angular/core';
import {Header} from './header/header';
import { Footer } from "./footer/footer";
import { WindowsLogo } from './windows-logo/windows-logo';

@Component({
  selector: 'app-root',
  imports: [Footer, WindowsLogo, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp1');

  public backgroundColor = "";
  public logoSize: number = 400;

  public footerColor: string = "colorOrange";
  public footerSize: string = "height50px";

  public textColorAlign : string = "names";
  public headerSize : string = "size";
  public headerBackground : string = "background";

  public onColorSelected(color: string) {
    this.backgroundColor = color;
  }

}
