import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.scss']
})
export class HomePagesComponent implements OnInit {

articles: any[] = [];
  constructor() { }
  ngOnInit(): void {}

  addArticle(article: any) {
    this.articles.push(article);
  }
  
}