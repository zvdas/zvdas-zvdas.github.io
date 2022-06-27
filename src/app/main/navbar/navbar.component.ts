import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToOta(){
    this.router.navigate(['/ota']);
  }

  goToFba(){
    this.router.navigate(['/fba']);
  }

  goToEfa(){
    this.router.navigate(['/efa']);
  }

  goToPsa(){
    this.router.navigate(['/psa']);
  }

  goToTma(){
    this.router.navigate(['/tma']);
  }

  goToLms(){
    this.router.navigate(['/lms']);
  }

  goToOml(){
    this.router.navigate(['/oml']);
  }
  
}
