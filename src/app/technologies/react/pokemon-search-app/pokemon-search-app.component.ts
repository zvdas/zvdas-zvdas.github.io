import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/classes/project/project';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-pokemon-search-app',
  templateUrl: './pokemon-search-app.component.html',
  styleUrls: ['./pokemon-search-app.component.css']
})

export class PokemonSearchAppComponent implements OnInit {

  project: Project[] = [];

  constructor(private ps: ProjectService) { }

  ngOnInit(): void {
    this.getProjectDetails();
  }

  getProjectDetails(){
    this.project = this.ps.getData();
  }

}