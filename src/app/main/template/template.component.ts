import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/classes/project/project';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})

export class TemplateComponent implements OnInit {

  project: Project[] = [];
  t!:number;

  constructor(private ps: ProjectService) { }

  ngOnInit(): void {
    this.getProjectDetails();
    this.t = this.getIndex();
    console.log(`number received is ${this.t}`);
  }

  getProjectDetails(){
    this.project = this.ps.getData();
  }

  getIndex(){
    return this.ps.getNumber();
  }

}