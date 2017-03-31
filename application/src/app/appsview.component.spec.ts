/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppsviewComponent } from './appsview.component';
import {AppModule} from "./app.module";

describe('AppViewComponent', () => {

  let fixture:ComponentFixture<AppsviewComponent> = null;
  let debugElement:DebugElement = null;
  let app:any = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    });
    fixture = TestBed.createComponent(AppsviewComponent);
    debugElement = fixture.debugElement;
    app = debugElement.componentInstance;
    app.ngOnInit();
    fixture.detectChanges();
  });


  it('should create the palette view', async(() => {
    expect(app).toBeTruthy();
  }));



});