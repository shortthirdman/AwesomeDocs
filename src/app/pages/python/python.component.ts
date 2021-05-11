import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/base';
import { PYTHON_RESOURCES } from 'src/app/models/python';

@Component({
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.scss']
})
export class PythonComponent implements OnInit {

  articles: Array<Article> = PYTHON_RESOURCES;

  constructor() { }

  ngOnInit(): void {
  }

}
