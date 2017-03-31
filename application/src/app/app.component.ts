import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event, Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

declare var WEB_PLATFORM;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

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
