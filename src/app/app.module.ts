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
import { PieChartGenreComponent } from './bashboard/pie-chart-genre/pie-chart-genre.component';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { MatOptionModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalBookComponent } from './book/modal-book/modal-book.component';
import {FormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import { ModalAuthorComponent } from './author/modal-author/modal-author.component';

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
    PieChartGenreComponent,
    ModalBookComponent,
    ModalAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    FormsModule,
    MatDatepickerModule,
    MatCheckboxModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
