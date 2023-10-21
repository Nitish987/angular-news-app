import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsHolderComponent } from './news-holder.component';

describe('NewsHolderComponent', () => {
  let component: NewsHolderComponent;
  let fixture: ComponentFixture<NewsHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsHolderComponent]
    });
    fixture = TestBed.createComponent(NewsHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
