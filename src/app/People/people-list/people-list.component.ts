import { Component, OnInit } from '@angular/core';
import { Person, PersonDummyList } from './membership-data';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  people:Person[];

  constructor() {
    this.people = PersonDummyList;
  }

  ngOnInit(): void {
  }

}
