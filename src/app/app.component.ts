import { Component } from '@angular/core';

/* Component Decorator */
@Component({
  /* HTML selector inside which the template will be rendered */
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'First Angular-App';
  counter = 10;
  click(e:any) {
    this.title = "New Title " + this.counter;
    this.counter += 10;
  }
}
