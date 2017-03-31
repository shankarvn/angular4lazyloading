import {Component, OnInit, trigger, state, transition, style, animate} from '@angular/core';

@Component({
  selector: 'product1view-appsview',
  templateUrl: './product1view.component.html',
  styleUrls: ['./product1view.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(100%)', opacity: 0}),
        animate('0.2s ease-in')
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class Product1ViewComponent implements OnInit {
  state: string;
  cards: Array<any> = [];

  constructor() {
    this.cards = [
      {
        title: 'Dashboard',
        shape: 'icon-cogs',
        route: 'dashboard'
      }
    ];
  }

  ngOnInit() {
    this.state = 'in';
  }

}
