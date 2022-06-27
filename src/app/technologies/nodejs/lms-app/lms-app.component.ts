import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/classes/project/project';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-lms-app',
  templateUrl: './lms-app.component.html',
  styleUrls: ['./lms-app.component.css']
})

export class LmsAppComponent implements OnInit {

  project: Project[] = [];

  constructor(private ps: ProjectService) { }

  ngOnInit(): void {
    this.getProjectDetails();
  }

  getProjectDetails(){
    this.project = this.ps.getData();
  }
  
}
