import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/classes/project/project';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-threed-app',
  templateUrl: './threed-app.component.html',
  styleUrls: ['./threed-app.component.css']
})

export class ThreedAppComponent implements OnInit {

  project: Project[] = [];

  constructor(private ps: ProjectService) { }

  ngOnInit(): void {
    this.getProjectDetails();
  }

  getProjectDetails(){
    this.project = this.ps.getData();
  }
}
