import { Component, Input} from '@angular/core';
import { Parent1Component } from '../parent1.component';

@Component({
  selector: 'app-children',
  templateUrl: './child.component.html'
})
export class ChildComponent{

  @Input('data') parentData:string;

}
