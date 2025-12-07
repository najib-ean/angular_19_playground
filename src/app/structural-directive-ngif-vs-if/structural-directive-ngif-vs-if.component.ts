import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ngif-vs-if',
  imports: [CommonModule],
  templateUrl: './structural-directive-ngif-vs-if.component.html',
  styleUrl: './structural-directive-ngif-vs-if.component.scss',
})
export class StructuralDirectiveNgifVsIfComponent {
  isChecked: boolean = false;
  isInputBox: boolean = true;

  onClick() {
    // this.isChecked = this.isChecked == false ? true : false; --> bisa begini
    this.isChecked = !this.isChecked; // --> bisa juga begini
  }

  showField() {
    this.isInputBox = true;
  }

  hideField() {
    this.isInputBox = false;
  }
}
