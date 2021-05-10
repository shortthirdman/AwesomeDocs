import { Component, OnInit } from '@angular/core';
import { ANGULAR_RESOURCES } from 'src/app/models/angular';
import { Article } from 'src/app/models/base';

@Component({
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {

  articles: Article[] = ANGULAR_RESOURCES;

  constructor() { }

  ngOnInit(): void {
  }

}
