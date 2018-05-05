import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './news/news.component';

const newsRoutes: Routes = [
  {
    path: '',
    component: NewsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(newsRoutes)
  ],
  declarations: [NewsComponent]
})
export class NewsModule { }
