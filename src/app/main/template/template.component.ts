import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/classes/project/project';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})

export class TemplateComponent implements OnInit {
  @ViewChild('iframe', {static: true}) iframe!: ElementRef;

  project: Project = {} as Project;
  t:number = NaN;
  screenshots: string[] = [];
  problem: string = '';
  writeup: string = '';

  constructor(private ps: ProjectService, private route: ActivatedRoute) {
    route.paramMap.subscribe(x => {
      this.t = parseInt(x.get('id')!);
      this.ngOnInit();
      setTimeout(() => this.setIframe());
    })
  }

  ngOnInit(): void {
    this.getSelectedProject(this.t);
    this.getSelectedScreenshot(this.t);
    this.getSelectedProblem(this.t);
    this.getSelectedWriteup(this.t);
  }
  
  setIframe() {
    const doc = this.iframe.nativeElement.contentDocument;
    doc.open();
    doc.write(this.project.code);
    doc.close();
  }

  getSelectedProject(index: number){
    this.project = this.ps.getProjectByIndex(index);
  }
  
  getSelectedScreenshot(index: number) {
    this.screenshots = this.ps.getScreenshots(index);
  }

  getSelectedProblem(index: number) {
    this.ps.getProblem(index).subscribe(x=>{this.problem = x});
  }

  getSelectedWriteup(index: number) {
    this.ps.getWriteup(index).subscribe(x=>{this.writeup = x});
  }

}