import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/base';
import { WIN_PS_RESOURCES } from 'src/app/models/powershell';

@Component({
  templateUrl: './powershell.component.html',
  styleUrls: ['./powershell.component.scss']
})
export class PowershellComponent implements OnInit {

  articles: Array<Article> = WIN_PS_RESOURCES;
  
  constructor() { }

  ngOnInit(): void {
  }

}
