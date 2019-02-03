import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  positions =  ['Frontend developer', 'Backend developer', 'Designer', 'Manager'];

  constructor() { }

  ngOnInit() {
  }

}
