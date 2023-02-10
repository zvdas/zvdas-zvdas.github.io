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

  /*
  goToOta(){
    this.router.navigate(['/ota']);
    // this.router.navigateByUrl('/details/0/ota');
    // this.router.navigate(['/details', 0, 'ota']);
    // this.router.navigate(['/details', {id: 0, app: 'ota'}]);
  }

  goToFba(){
    this.router.navigate(['/fba']);
    // this.router.navigateByUrl('/details/1/fba');
    // this.router.navigate(['/details', 1, 'fba']);
    // this.router.navigate(['/details', {id: 1, app: 'fba'}]);
  }

  goToEfa(){
    this.router.navigate(['/efa']);
    // this.router.navigateByUrl('/details/2/efa');
    // this.router.navigate(['/details', 2, 'efa']);
    // this.router.navigate(['/details', {id: 2, app: 'efa'}]);
  }

  goToPsa(){
    this.router.navigate(['/psa']);
    // this.router.navigateByUrl('/details/3/psa');
    // this.router.navigate(['/details', 3, 'psa']);
    // this.router.navigate(['/details', {id: 3, app: 'psa'}]);
  }

  goToTma(){
    this.router.navigate(['/tma']);
    // this.router.navigateByUrl('/details/4/tma');
    // this.router.navigate(['/details', 4, 'tma']);
    // this.router.navigate(['/details', {id: 4, app: 'tma'}]);
  }

  goToLms(){
    this.router.navigate(['/lms']);
    // this.router.navigateByUrl('/details/5/lms');
    // this.router.navigate(['/details', 5, 'lms']);
    // this.router.navigate(['/details', {id: 5, app: 'lms'}]);
  }

  goToOms(){
    this.router.navigate(['/oms']);
    // this.router.navigateByUrl('/details/6/oms');
    // this.router.navigate(['/details', 6, 'oms']);
    // this.router.navigate(['/details', {id: 6, app: 'oms'}]);
  }
  */

  goToAbout(){
    this.router.navigate(['/about']);
  }
  
}
