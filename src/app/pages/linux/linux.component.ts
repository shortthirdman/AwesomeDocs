import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/base';
import { LINUX_RESOURCES } from 'src/app/models/linux';

@Component({
  selector: 'awd-linux',
  templateUrl: './linux.component.html',
  styleUrls: ['./linux.component.scss']
})
export class LinuxComponent implements OnInit {
	
  articles: Array<Article> = LINUX_RESOURCES;

  constructor() { }

  ngOnInit(): void {
  }

}
