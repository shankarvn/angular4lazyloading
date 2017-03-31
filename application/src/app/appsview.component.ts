import {Component, OnInit, trigger, state, transition, style, animate} from '@angular/core';

@Component({
  selector: 'app-appsview',
  templateUrl: './appsview.component.html',
  styleUrls: ['./appsview.component.css'],
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
export class AppsviewComponent implements OnInit {
  state: string;
  cards: Array<any> = [];

  constructor() {
    this.cards = [
      {
        title: 'Product1',
        shape: 'icon-circle',
        route: '/product1'
      },
      {
        title: 'Product2',
        shape: 'icon-wrench',
        route: '/product2'
      },
      {
        title: 'Product3',
        shape: 'icon-cog',
        route: '/product3'
      }
    ];
  }

  ngOnInit() {
    this.state = 'in';
  }

}
