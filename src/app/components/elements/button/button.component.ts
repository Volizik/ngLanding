import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {

  @Input() type = 'button';
  @Input() styleType: 'primary' | 'secondary';
  @Input() disabled: boolean;

  constructor() { }

  ngOnInit() {
  }

}
