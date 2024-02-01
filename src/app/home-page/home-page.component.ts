import { Component } from '@angular/core';
import { MY_PROJECT_LIST } from '../my-projects/constants/my-projects-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  myProjects = MY_PROJECT_LIST;

  constructor(private router: Router) { }

  goToProject(projectPath: string) {
    this.router.navigate([`${projectPath}`]);
  }
}
