import { Component} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html'
})
export class Child1Component{

  constructor() { }
  private data1 : string;

  onChange(data: string){
    this.data1=data;

}

  

}
