import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { PeopleComponent } from "./people.component";
import { PeopleSearchComponent } from './people-search/people-search.component';
import { PeopleListComponent } from './people-list/people-list.component';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "People",
      urls: [{ title: "People", url: "/people" }, { title: "People" }],
    },
    component: PeopleComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PeopleComponent,
    PeopleSearchComponent,
    PeopleListComponent
  ],
})
export class PeopleModule {}
