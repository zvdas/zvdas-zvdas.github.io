import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from 'src/app/classes/project/project';

import project_json from 'src/assets/files/project.json';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  project: Project[] = project_json.project;

  constructor(private http: HttpClient) { }

  getData() {
    return this.project;
  }

  getJsonFile() {
    return this.http.get('assets/files/project.json', {responseType: 'text'});
  }

  getProblem(index: number) {
    return this.http.get(JSON.parse(JSON.stringify(this.project[index]))['problem_link'], {responseType: 'text'});
  }

  getWriteup(index: number) {
    return this.http.get(JSON.parse(JSON.stringify(this.project[index]))['procedure_link'], {responseType: 'text'});
  }

}