import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/base';
import { NODEJS_RESOURCES } from 'src/app/models/nodejs';

@Component({
  templateUrl: './nodejs.component.html',
  styleUrls: ['./nodejs.component.scss']
})
export class NodejsComponent implements OnInit {

  articles: Array<Article> = NODEJS_RESOURCES;

  constructor() { }

  ngOnInit(): void {
  }

}
