import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {StepState} from '../../states/step.state';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  step$= this.store.select(state => state);
  @Input() show: boolean;

  constructor(private store: Store<StepState>) { }

  ngOnInit() {
  }

}
