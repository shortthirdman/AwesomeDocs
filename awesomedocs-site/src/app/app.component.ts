import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'awd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'awesomedocs-site';
  
  constructor() {
  }
  
  ngOnInit(): void  {
	this.showAccreditions();
  }
  
  private showAccreditions() {
	console.log(`Font Awesome Free 5.15.0 by @fontawesome - https://fontawesome.com
		License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
	`);
  }
}
