import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import News from 'src/app/models/News';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-news-holder',
  templateUrl: './news-holder.component.html',
  styleUrls: ['./news-holder.component.css'],
  providers: [NewsApiService]
})
export class NewsHolderComponent implements OnInit, OnChanges {
  @Input() category: string = "general";
  @Input() query: string = "";
  newsItems: News[] = [];
  isLoading = true;

  constructor(private apiService: NewsApiService) {}
  
  ngOnInit(): void {
    this.isLoading = true;
    this.apiService.getNews("in", this.category).subscribe(response => {
      this.newsItems = response['articles'];
      this.isLoading = false;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isLoading = true;
    if (this.query === "") {
      this.apiService.getNews("in", this.category).subscribe(response => {
        this.newsItems = response['articles'];
        this.isLoading = false;
      });
    } else {
      this.apiService.searchNews(this.query).subscribe(response => {
        this.newsItems = response['articles'];
        this.isLoading = false;
      });
    }
  }
}
