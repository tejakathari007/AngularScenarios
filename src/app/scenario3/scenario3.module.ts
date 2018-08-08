import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parent1Component } from './parent1/parent1.component';
import { ChildComponent } from './parent1/child/child.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Parent1Component, ChildComponent],
  exports:[ChildComponent,Parent1Component]
})
export class Scenario3Module { }
