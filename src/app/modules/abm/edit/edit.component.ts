import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  action: string;
  element: any;
  
  constructor() { }

  ngOnInit(): void {
    this.action = history.state.action;
    this.element = history.state.data;
    console.log(this.action);
    console.log(this.element);
  }
}
