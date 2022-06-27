import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/classes/project/project';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-online-music-library-app',
  templateUrl: './online-music-library-app.component.html',
  styleUrls: ['./online-music-library-app.component.css']
})

export class OnlineMusicLibraryAppComponent implements OnInit {

  project: Project[] = [];

  constructor(private ps: ProjectService) { }

  ngOnInit(): void {
    this.getProjectDetails();
  }

  getProjectDetails(){
    this.project = this.ps.getData();
  }

}
