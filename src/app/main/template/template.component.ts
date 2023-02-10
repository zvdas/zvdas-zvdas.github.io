import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/classes/project/project';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})

export class TemplateComponent implements OnInit, AfterViewInit {
  @ViewChild('iframe') iframe!: ElementRef;

  project: Project = {} as Project;
  t:number = NaN;
  screenshots: string[] = [];
  problem: string = '';
  writeup: string = '';

  constructor(private ps: ProjectService, private route: ActivatedRoute) {
    route.paramMap.subscribe(x=>{
      this.t = parseInt(x.get('id')!);
      this.ngOnInit();
      this.ngAfterViewInit();
    })
  }

  ngOnInit(): void {
    this.getProjectDetails(this.t);
    this.getSelectedProblem(this.t);
    this.getSelectedWriteup(this.t);
  }
  
  ngAfterViewInit(): void {
    const doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
    doc.open();
    // doc.write(JSON.parse(JSON.stringify(this.project)).code);
    doc.write(this.project.code);
    doc.close();
  }

  getProjectDetails(index: number){
    this.project = this.ps.getData()[index];
    JSON.parse(JSON.stringify(this.project))['screenshots_count'].map((x: number)=>{this.screenshots.push(`https://raw.githubusercontent.com/zvdas/${JSON.parse(JSON.stringify(this.project))['screenshots_app']}/${JSON.parse(JSON.stringify(this.project))['screenshots_branch']}/screenshots/screenshot_${x.toString().padStart(3, "0")}.png`)});
  }

  getSelectedProblem(index: number) {
    this.ps.getProblem(index).subscribe(x=>{this.problem = x});
  }

  getSelectedWriteup(index: number) {
    this.ps.getWriteup(index).subscribe(x=>{this.writeup = x});
  }

}