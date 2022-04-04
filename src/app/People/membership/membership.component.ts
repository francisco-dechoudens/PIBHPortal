import { Component, OnInit } from '@angular/core';
import { Person, PersonDummyList } from './membership-data';

@Component({
  selector: 'app-membership-table',
  templateUrl: './membership.component.html'
})
export class MembershipComponent implements OnInit {

  people:Person[];

  constructor() { 

    this.people = PersonDummyList;
  }

  ngOnInit(): void {
  }

}
