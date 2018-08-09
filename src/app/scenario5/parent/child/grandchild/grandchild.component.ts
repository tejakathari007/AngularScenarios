import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html'
})
export class GrandchildComponent {

  @Input('data') parentData:string;

}
