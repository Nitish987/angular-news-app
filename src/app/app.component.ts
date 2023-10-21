import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'news-app';
  category: string = "general";
  query: string = "";

  getCategory(category: string) {
    this.category = category;
  }

  getQuery(query: string) {
    this.query = query;
  }
}
