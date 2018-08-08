import { Component} from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './child1.component.html'
})
export class Child1Component{
  private data1 : string;

  onAddItem(data: string){
    this.data1=data;

}

}
