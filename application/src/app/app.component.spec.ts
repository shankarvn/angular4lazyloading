/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent } from './app.component';
import {AppModule} from "./app.module";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";
import {AppsviewComponent} from "./appsview.component";



describe('AppComponent', () => {

  let fixture:ComponentFixture<AppComponent> = null;
  let debugElement:DebugElement = null;
  let app:any = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]

    });
    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
    app = debugElement.componentInstance;
    app.ngOnInit();
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('app should contain one single side nav section', async(() => {
    let sideNavs:DebugElement[] = debugElement.queryAll(By.css(".sidenav-content"));
    expect(sideNavs.length).toBe(1);
  }));

});



