import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/base';
import { GIT_RESOURCES } from 'src/app/models/git';

@Component({
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.scss']
})
export class GitComponent implements OnInit {

  articles: Array<Article> = GIT_RESOURCES;

  constructor() { }

  ngOnInit(): void {
  }

}
