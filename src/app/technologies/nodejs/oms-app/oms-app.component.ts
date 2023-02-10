import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/app/classes/project/project';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-oms-app',
  templateUrl: './oms-app.component.html',
  styleUrls: ['./oms-app.component.css']
})

export class OmsAppComponent implements OnInit {

  @ViewChild('iframe') iframe!: ElementRef;

  project: Project[] = [];

  problem: string = '';
  writeup: string = '';

  constructor(private ps: ProjectService) { }

  ngOnInit(): void {
    this.getProjectDetails();
    this.getSelectedProblem();
    this.getSelectedWriteup();
  }
  
  ngAfterViewInit(): void {
    const doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
    doc.open();
    doc.write(this.project[6].code);
    doc.close();
  }

  getProjectDetails() {
    this.project = this.ps.getData();
  }

  getSelectedProblem() {
    this.ps.getProblem(6).subscribe(x=>{this.problem = x});
  }

  getSelectedWriteup() {
    this.ps.getWriteup(6).subscribe(x=>{this.writeup = x});    
  }

}
