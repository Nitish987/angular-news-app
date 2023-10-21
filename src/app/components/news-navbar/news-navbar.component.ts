import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-news-navbar',
  templateUrl: './news-navbar.component.html',
  styleUrls: ['./news-navbar.component.css']
})
export class NewsNavbarComponent {
  @Output("categoryEmitter") categoryEmitter = new EventEmitter<string>();
  @Output("queryEmitter") queryEmitter = new EventEmitter<string>();
  category: string = "general";
  searchForm = new FormGroup({
    query: new FormControl("")
  });

  onCategoryChange(category: string) {
    this.category = category;
    this.categoryEmitter.emit(category);
    this.queryEmitter.emit("");
  }

  searchQuerySubmit() {
    if (this.searchForm.value.query === undefined || this.searchForm.value.query === null) return;
    this.queryEmitter.emit(this.searchForm.value.query);
  }
}
