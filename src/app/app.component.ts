import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  rootName = 'Name';
  text: string = 'bla bla lba';

  onNameChanged(newName:string) {
    this.rootName = newName;
  }
}
