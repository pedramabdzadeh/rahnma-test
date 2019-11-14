import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {Project} from '../../models/project';
import {ProjectState} from '../../states/project.state';
import * as ProjectActions from '../../actions/project.actions';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]> = this.store.pipe(select(state => state.projects));
  showAddProjectDialog = false;

  constructor(private store: Store<ProjectState>) {}

  ngOnInit() {
    this.store.dispatch(ProjectActions.getProjects());
  }

  openAddProjectDialog() {
    this.showAddProjectDialog = true;
  }
}
