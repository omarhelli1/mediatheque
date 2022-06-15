import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})


export class ProductPageComponent implements OnInit {

  articles: any[] = [];
 constructor() {}

  ngOnInit(): void {  }


  addArticle(article: any) {
    this.articles.push(article);
  }

 

}


