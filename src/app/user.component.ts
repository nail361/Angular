import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-user',
  template: `
    <!-- <input type="text" [(ngModel)]="name"> -->
    <input type="text" (input)="onUserInput($event)" [value]="name">
    <p>Hello! {{name}}</p>
    <span>Second line</span>
    <app-user-detail></app-user-detail>
  `
})
export class UserComponent {
  @Input() name: string = '';
  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event:any) {
    this.nameChanged.emit(event.target.value);
  }
}
