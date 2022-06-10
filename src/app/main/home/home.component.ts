import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

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

}