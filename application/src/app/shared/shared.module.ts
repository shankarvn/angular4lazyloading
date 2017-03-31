import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule } from 'clarity-angular/clarity.module';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule,
    RouterModule
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    ClarityModule,
    ReactiveFormsModule]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }

}
