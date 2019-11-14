import { Component, OnInit } from '@angular/core';
import {next, previous} from '../../actions/step.actions';
import {Store} from '@ngrx/store';
import {StepState} from '../../states/step.state';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  step: number;

  constructor(private store: Store<StepState>) { }

  ngOnInit() {
  }

  next() {
    this.store.dispatch(next({step: this.step}));
  }

  previous() {
    this.store.dispatch(previous({step: this.step}));
  }
}
