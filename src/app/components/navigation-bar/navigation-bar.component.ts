import { Component, OnInit } from '@angular/core';
import {next, previous} from '../../actions/step.actions';
import {select, Store} from '@ngrx/store';
import {StepState} from '../../states/step.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  step$;

  constructor(private store: Store<StepState>) {
    this.step$ = store.pipe(select(state => state));

  }

  ngOnInit() {
  }

  next() {
    this.store.dispatch(next());
    this.step$.subscribe(result => console.log(result));
  }

  previous() {
    this.store.dispatch(previous());
  }
}
