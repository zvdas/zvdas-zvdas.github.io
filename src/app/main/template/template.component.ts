import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/classes/project/project';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})

export class TemplateComponent implements OnInit {

  project: Project[] = [];
  t!:string;

  constructor(private ps: ProjectService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProjectDetails();
    console.log(`route is : ${this.route.params}`)
  }

  getProjectDetails(){
    this.project = this.ps.getData();
  }

}
