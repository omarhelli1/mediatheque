import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})


export class ProductPageComponent implements OnInit {

  articules: any[] = [];
 constructor() {}

  ngOnInit(): void {  }


  addArticle(article: any) {
    this.articules.push(article);
  }

 

}


