import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'awd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  title: string = 'AwesomeDocs';
  navLinks: any[] = [
	{ label: 'Angular', route: 'angular' },
	{ label: 'Python', route: 'python' },
	{ label: 'Java', route: 'java' },
	{ label: 'Node.js', route: 'nodejs' },
	{ label: 'Git', route: 'git' },
	{ label: 'DevOps', route: 'devops' },
	{ label: 'PowerShell', route: 'powershell' },
	{ label: 'UNIX/Linux', route: 'linux' },
	{ label: 'Security', route: 'security' },
	{ label: 'IBM WebSphere App Server', route: 'websphere' }
  ];
  
  constructor(private router: Router) {
  }
  
  ngOnInit(): void  {
	this.showAccreditions();
  }
  
  ngAfterViewInit(): void {
	document.documentElement.setAttribute('data-theme', 'dark');
  }
  
  private showAccreditions() {
	console.log(`Font Awesome Free 5.15.0 by @fontawesome - https://fontawesome.com
		License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
	`);
  }
  
  navigateTo(path: string) {
	this.router.navigate([path]);
  }
}
