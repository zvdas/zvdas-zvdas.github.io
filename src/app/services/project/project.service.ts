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

  getAllProjects() {
    return this.project;
  }

  getProjectByIndex(index: number) {
    return this.project[index];
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

  getScreenshots(index: number) {
    const project = this.project[index];
    const screenshots = JSON.parse(JSON.stringify(project))['screenshots_count'];
    const app = JSON.parse(JSON.stringify(project))['screenshots_app'];
    const branch = JSON.parse(JSON.stringify(project))['screenshots_branch'];
    return screenshots.map((x:number) => `https://raw.githubusercontent.com/zvdas/${app}/${branch}/screenshots/screenshot_${x.toString().padStart(3, "0")}.png`);
  }

}