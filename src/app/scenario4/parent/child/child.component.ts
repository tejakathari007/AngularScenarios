
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-scenario4-child1',
  templateUrl: './child.component.html'
})
export class ChildComponent {
  @Output() displayData = new EventEmitter();
  private data:string;

  constructor() { }

  onChange(data:string){
    this.data=data;
    this.displayData.emit(this.data);
  }
}
