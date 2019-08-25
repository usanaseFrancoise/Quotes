import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-model',
  templateUrl: './article-model.component.html',
  styleUrls: ['./article-model.component.css']
})
export class ArticleModelComponent implements OnInit {
  
    id: number
    name : string
    author : string
    points : number
    constructor(id: number, name: string, author: string, points?: number) {
        this.id = id
        this.name = name;
        this.author = author;
        this.points = points || 0;
    }

  ngOnInit() {
  }

}
