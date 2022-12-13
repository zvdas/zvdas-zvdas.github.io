import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  switchTheme(e: Event) {
    // console.log(e.target);
    console.log(e.target);

    /*
    :host {
      --mainTextColor-light: #000;
      --secondaryTextColor-light: rgb(51 51 51);
      --mainLinkColor-light: #0da2b8;
      --mainBorderColor-light: rgb(218, 218, 218);
      --mainBgColor-light: rgb(249, 250, 251);
    }
    */

    /*
    :host {
      --mainTextColor-dark: #fff;
      --secondaryTextColor-dark: #adb0b1;
      --mainLinkColor-dark: rgb(30, 190, 214);
      --mainBorderColor-dark: #2b3031;
      --mainBgColor-dark: #131415;
    }
    */
  }

  generatePdf() {
    
  }

}
