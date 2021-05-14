import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/base';
import { SSL_RESOURCES } from 'src/app/models/ssl';

@Component({
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  articles: Array<Article> = SSL_RESOURCES;

  constructor() { }

  ngOnInit(): void {
  }

}
