import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngs';
  countries:any[]=[
    {code:'ind',country:'India'},
    {code:'uae',country:'United Arab Emirates'},
    {code:'uk',country:'United Kingdom'},
  ];
}
