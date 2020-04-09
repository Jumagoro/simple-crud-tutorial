import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { HomeComponent } from './components/home/home.component';


// Wenn browser url: website.com/listBooks -> weiterleitung an ListBooksComponent
const routes: Routes = [
  {
    path: "listBooks",
    component: ListBooksComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "**",
    redirectTo: "/home"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Variable (let), Name, : [typ] = ...
//let testVariable: string = "test";
//let testVariable: string[] = ["test", ""];
//let testVariable: number = 1;
