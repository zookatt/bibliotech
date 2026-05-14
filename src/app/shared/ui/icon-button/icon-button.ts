import { Component, input, output } from '@angular/core';

@Component({
  selector: 'icon-button',
  template: ` 
  <button 
    class="rounded-md border border-transparent p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer" 
    type="button"
    (click)="emitEvent()">
    <ng-content></ng-content>
  </button>`,
})
export class IconButton {
  readonly item = input.required<string>();
  eventEmitted = output<string>();

  emitEvent() {
    this.eventEmitted.emit(this.item());
  }

}
