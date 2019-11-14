import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ProjectsService} from '../services/projects.service';
import {map, mergeMap} from 'rxjs/operators';
import * as ProjectActions from '../actions/project.actions';
import {Project} from '../models/project';


@Injectable()
export class ProjectEffects {
  @Effect()
  loadProjects$ = this.actions$.pipe(
    ofType(ProjectActions.getProjects),
    mergeMap(() => this.projectsService.getAll()
      .pipe(
      map((projects) => {
        console.log(projects);
        return {type: ProjectActions.getProjectSuccess.type, payload: projects};
      })
      )),
  );

  constructor(private actions$: Actions,
              private projectsService: ProjectsService
  ) {
  }
}
