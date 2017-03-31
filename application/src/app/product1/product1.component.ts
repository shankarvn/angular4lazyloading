import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event, Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

declare var WEB_PLATFORM;

@Component({
  selector: 'product1-root',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit, OnDestroy {

  globalErrorMsg: string = null;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }



}
