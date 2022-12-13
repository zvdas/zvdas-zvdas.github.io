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

  switchTheme(e: any) {
    // console.log(e.target.checked);
    if (e.target.checked) {
      let hostStyle = document.documentElement.style;
      hostStyle.setProperty('--mainTextColor-dark', '#fff');
      hostStyle.setProperty('--secondaryTextColor-dark', '#adb0b1');
      hostStyle.setProperty('--mainLinkColor-dark', 'rgb(30, 190, 214)');
      hostStyle.setProperty('--mainBorderColor-dark', '#2b3031');
      hostStyle.setProperty('--mainBgColor-dark', '#131415');
      /*
      :host {
        --mainTextColor-dark: #fff;
        --secondaryTextColor-dark: #adb0b1;
        --mainLinkColor-dark: rgb(30, 190, 214);
        --mainBorderColor-dark: #2b3031;
        --mainBgColor-dark: #131415;
      }
      */
    } else {
      let hostStyle = document.documentElement.style;
      hostStyle.setProperty('--mainTextColor-dark', '#000');
      hostStyle.setProperty('--secondaryTextColor-dark', 'rgb(51 51 51)');
      hostStyle.setProperty('--mainLinkColor-dark', '#0da2b8');
      hostStyle.setProperty('--mainBorderColor-dark', 'rgb(218, 218, 218)');
      hostStyle.setProperty('--mainBgColor-dark', 'rgb(249, 250, 251)');
      /*
      :host {
        --mainTextColor-light: #000;
        --secondaryTextColor-light: rgb(51 51 51);
        --mainLinkColor-light: #0da2b8;
        --mainBorderColor-light: rgb(218, 218, 218);
        --mainBgColor-light: rgb(249, 250, 251);
      }
      */
    }
  }

  generatePdf() {
    
  }

}
