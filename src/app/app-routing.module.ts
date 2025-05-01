import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BookComponent} from './book/book/book.component';
import {AuthorsComponent} from './author/authors/authors.component';
import {DashboardComponent} from './bashboard/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  {
    path: 'dashboard',
     component: DashboardComponent,
  },  {
    path: 'book',
     component: BookComponent,
  }, {
    path: 'author',
    component: AuthorsComponent,
  },
  // { path: 'error', component: ErrorComponent },
  // { path: 'login', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
