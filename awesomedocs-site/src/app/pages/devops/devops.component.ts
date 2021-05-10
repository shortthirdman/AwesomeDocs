import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/base';
import { DEVOPS_RESOURCES } from 'src/app/models/devops';

@Component({
  selector: 'awd-devops',
  templateUrl: './devops.component.html',
  styleUrls: ['./devops.component.scss']
})
export class DevOpsComponent implements OnInit {

  articles: Array<Article> = DEVOPS_RESOURCES;

  constructor() { }

  ngOnInit(): void {
  }

}
