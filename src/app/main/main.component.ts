import { Component, OnInit } from '@angular/core';
import{ListPicker} from "tns-core-modules/ui/list-picker";

@Component({
  selector: 'ns-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  moduleId: module.id,
})
export class MainComponent implements OnInit {
    val1: string;
    val2: string;
    result: number;
    operations = ['add', 'subtract', 'multiply', 'divide', 'power'];
    operator = 0;


  constructor() { }

  ngOnInit() {
      this.val1 = this.val2 = '';
  }

  changeOperator(e) {
      let picker = <ListPicker>e.object;
      this.operator = picker.selectedIndex;
      this.calculate(null);
  }

  calculate(e) {
      switch (this.operator) {
          case 0:
            this.result = Number(this.val1) + Number(this.val2);
            break;
           case 1:
            this.result = Number(this.val1) - Number(this.val2);
            break;
           case 2:
            this.result = Number(this.val1) * Number(this.val2);
            break;
           case 3:
            this.result = Number(this.val1) / Number(this.val2);
            break;
           case 4:
           this.result = Math.pow(Number(this.val1), Number(this.val2));
      }


  }

}
