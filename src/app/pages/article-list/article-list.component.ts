import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Article } from 'src/app/models/base';

@Component({
  selector: 'awd-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit, OnDestroy {

  @Input() tableId: string = '';
  @Input() articles: Array<Article> = [];

  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
	this.tableId = '';
	this.articles = [];
  }
}
