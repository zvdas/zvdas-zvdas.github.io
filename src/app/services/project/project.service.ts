import { Injectable } from '@angular/core';
import { Project } from 'src/app/classes/project/project';

import project_json from 'src/app/files/project.json';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  project: Project[] = project_json.project;

  constructor() { }

  getData(){
    return this.project;
  }

}