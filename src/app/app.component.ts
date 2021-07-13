import { Component, OnInit, AfterViewInit, ElementRef, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import * as packageJson from 'package.json';

@Component({
  selector: 'awd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  appVersion: string;
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

  constructor(private router: Router, private elRef: ElementRef, @Inject(DOCUMENT) private document: Document) {
    this.appVersion = packageJson.version;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.themeSwitcher();
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  private themeSwitcher() {
    this.elRef.nativeElement.getElementsByClassName('form-check-input')[0].addEventListener('change', (event: Event) => {
      (event.target as HTMLInputElement).checked ? this.document.documentElement.setAttribute('data-theme', 'dark') : this.document.documentElement.removeAttribute('data-theme');
    });
  }
}
