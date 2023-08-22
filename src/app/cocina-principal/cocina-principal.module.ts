import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocinaComponent } from './cocina/cocina.component';




@NgModule({
  declarations: [
    CocinaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CocinaComponent
  ]
})
export class CocinaPrincipalModule { }
