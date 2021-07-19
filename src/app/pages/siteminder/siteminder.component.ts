import { Component, OnInit } from '@angular/core';

import { SITEMINDER_RESOURCES } from 'src/app/models/siteminder';
import { Article } from 'src/app/models/base';

@Component({
  templateUrl: './siteminder.component.html',
  styleUrls: ['./siteminder.component.scss']
})
export class SiteMinderComponent implements OnInit {
	
  articles: Article[] = SITEMINDER_RESOURCES;

  constructor() { }

  ngOnInit(): void {
  }

}
