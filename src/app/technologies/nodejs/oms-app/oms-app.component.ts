import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-oms-app',
  templateUrl: './oms-app.component.html',
  styleUrls: ['./oms-app.component.css']
})

export class OmsAppComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('iframe') iframe!: ElementRef;

  project: Project[] = [];

  problem: string = '';
  writeup: string = '';
  allSubscriptions: Subscription[] = new Array<Subscription>();

  constructor(private ps: ProjectService) { }

  /**
   * Lifecycle Methods
   */
  ngOnInit(): void {
    this.getProjectDetails();
    this.getSelectedProblem();
    this.getSelectedWriteup();
  }

  ngAfterViewInit(): void {
    const doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
    doc.open();
    doc.write(this.project[6].code);
    doc.close();
  }

  ngOnDestroy(): void {
    this.allSubscriptions.map(subscription => subscription.unsubscribe());
  }

  /**
   * Public Methods
   */
  getProjectDetails() {
    this.project = this.ps.getAllProjects();
  }

  getSelectedProblem() {
    this.allSubscriptions.push(this.ps.getProblem(6).subscribe(x=>{this.problem = x}));
  }

  getSelectedWriteup() {
    this.allSubscriptions.push(this.ps.getWriteup(6).subscribe(x=>{this.writeup = x}));
  }

}
