/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {Product1ViewComponent} from "./product1view.component";
import {Product1Module} from "./product1.module";



describe('AppViewComponent', () => {

  let fixture:ComponentFixture<Product1ViewComponent> = null;
  let debugElement:DebugElement = null;
  let app:any = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        Product1Module
      ]
    });
    fixture = TestBed.createComponent(Product1ViewComponent);
    debugElement = fixture.debugElement;
    app = debugElement.componentInstance;
    app.ngOnInit();
    fixture.detectChanges();
  });


  it('should create the palette view', async(() => {
    expect(app).toBeTruthy();
  }));


  it('apps view should contain all palette cards', async(() => {

  }));

});
