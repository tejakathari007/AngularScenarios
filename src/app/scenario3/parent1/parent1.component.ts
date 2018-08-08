import { Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: `./parent1.component.html`,
 
})

export class Parent1Component {
 
  
  private data : string;

  onAddItem(data: string){
  this.data=data;

}
}