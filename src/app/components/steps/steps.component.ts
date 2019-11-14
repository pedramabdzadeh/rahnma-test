import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  items = [
    {title: 'Project Details', iconOn: '', iconOff: ''},
    {title: 'Project Settings', iconOn: '', iconOff: ''},
    {title: 'Delivery Details', iconOn: '', iconOff: ''},
    {title: 'Review and Submit', iconOn: '', iconOff: ''},
  ];
  step$;
  constructor(private store: Store<{step: number}>) {
    this.step$ = this.store.pipe(select(state => state));
  }

  ngOnInit() {
  }

}
