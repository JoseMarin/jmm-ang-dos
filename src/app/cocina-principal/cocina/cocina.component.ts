import { Component } from '@angular/core';

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.css']
})
export class CocinaComponent {

  opcion1: boolean = true;
  opcion2: boolean = false;
  inputDisable: boolean = false;
  inputDisable2: boolean = true;
  
  onCheckboxChange(e: any) {
    if (e.target.checked == true) {
      if(e.target.value=='opcion1'){
        this.opcion1 = e.target.checked;
        this.inputDisable = false;
      } else if(e.target.value=='opcion2'){
        this.opcion2 = e.target.checked;
        this.inputDisable2 = false;
      }
    }else {
      if(e.target.value=='opcion1'){
        this.opcion1 = e.target.checked;
        this.inputDisable = true;
      } else if(e.target.value=='opcion2'){
        this.opcion2 = e.target.checked;
        this.inputDisable2 = true;
      }
    }
  }

}
