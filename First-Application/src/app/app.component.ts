import { Component } from '@angular/core';

//Decorator
@Component({
  selector: 'app-root',
  //templateeUrls Removed because of the html displayed in template dection
  template: `
  <div style="text-align:center">
  <h1>
    Welcome to {{ title }}
  </h1>
  
</div>
<h2 style="text-align: center">Educating for better tomorrow</h2>
    
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvellous Infosystems'
}
