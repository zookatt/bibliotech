import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button-edit',
  imports: [],
  templateUrl: './button-edit.html',
  styleUrl: './button-edit.css',
})
export class ButtonEdit { 
  item = input<string>("");
  eventEmitted = output<string>();
  emitEvent(){
    this.eventEmitted.emit(this.item());
  }
}
