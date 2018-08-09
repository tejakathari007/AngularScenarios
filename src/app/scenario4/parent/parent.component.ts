import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario4-parent1',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {

  private data:string;

  constructor() { }

  displayData(data:string) {
        this.data=data;
  }

  ngOnInit() {
  }

}
