import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/base';
import { JAVA_RESOURCES } from 'src/app/models/java';

@Component({
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss']
})
export class JavaComponent implements OnInit {

  articles: Array<Article> = JAVA_RESOURCES;

  constructor() { }

  ngOnInit(): void {
  }
}
