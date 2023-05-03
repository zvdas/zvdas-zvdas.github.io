import { Component, OnInit } from '@angular/core';
import { PdfResume } from 'src/app/files/pdf-resume';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  techStack: string[] = ['JavaScript','NodeJS','Express','React','Angular','Bootstrap','Angular Material','MongoDB','MySQL','REST APIs','Swagger'];
  // Python,Django,Flask,FastAPI,Next JS

  constructor() { }

  ngOnInit(): void {
    let hostStyle = document.documentElement.style;
    hostStyle.setProperty('--mainTextColor-dark', '#000');
    hostStyle.setProperty('--secondaryTextColor-dark', 'rgb(51 51 51)');
    hostStyle.setProperty('--mainLinkColor-dark', '#0da2b8');
    hostStyle.setProperty('--mainBorderColor-dark', 'rgb(218, 218, 218)');
    hostStyle.setProperty('--mainBgColor-dark', 'rgb(249, 250, 251)');
  }

  switchTheme(e: any) {
    if (e.target.checked) {
      let hostStyle = document.documentElement.style;
      hostStyle.setProperty('--mainTextColor-dark', '#fff');
      hostStyle.setProperty('--secondaryTextColor-dark', '#adb0b1');
      hostStyle.setProperty('--mainLinkColor-dark', 'rgb(30, 190, 214)');
      hostStyle.setProperty('--mainBorderColor-dark', '#2b3031');
      hostStyle.setProperty('--mainBgColor-dark', '#131415');
    } else {
      let hostStyle = document.documentElement.style;
      hostStyle.setProperty('--mainTextColor-dark', '#000');
      hostStyle.setProperty('--secondaryTextColor-dark', 'rgb(51 51 51)');
      hostStyle.setProperty('--mainLinkColor-dark', '#0da2b8');
      hostStyle.setProperty('--mainBorderColor-dark', 'rgb(218, 218, 218)');
      hostStyle.setProperty('--mainBgColor-dark', 'rgb(249, 250, 251)');
    }
  }

  generatePdf() {
    PdfResume();
  }

}
