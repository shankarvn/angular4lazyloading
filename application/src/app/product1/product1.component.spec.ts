/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";
import {Product1Component} from "./product1.component";
import {Product1Module} from "./product1.module";



describe('AppComponent', () => {

  let fixture:ComponentFixture<Product1Component> = null;
  let debugElement:DebugElement = null;
  let app:any = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        Product1Module
      ]

    });
    fixture = TestBed.createComponent(Product1Component);
    debugElement = fixture.debugElement;
    app = debugElement.componentInstance;
    app.ngOnInit();
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('app should contain one single side nav section', async(() => {

  }));

});



