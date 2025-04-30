import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book/book.component';
import { AuthorsComponent } from './author/authors/authors.component';
import {DashboardComponent} from './bashboard/dashboard/dashboard.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { BarsComponent } from './bashboard/bars/bars.component';
import { LinesComponent } from './bashboard/lines/lines.component';
import { PieChartPublishedComponent } from './bashboard/pie-chart-published/pie-chart-published.component';
import { PieChartGenreComponent } from './bashboard/pie-chart-genre/pie-chart-genre.component'; // Asegúrate de tener esta importación

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    BookComponent,
    AuthorsComponent,
    BarsComponent,
    LinesComponent,
    PieChartPublishedComponent,
    PieChartGenreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
