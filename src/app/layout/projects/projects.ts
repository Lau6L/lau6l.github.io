import { Component } from '@angular/core';
import projectJson from '../../data/projects.json';
import { Project, ProjectType } from '../../data/project';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  public readonly projects: Project[] = projectJson as Project[];
  public readonly ProjectType = ProjectType;
}
