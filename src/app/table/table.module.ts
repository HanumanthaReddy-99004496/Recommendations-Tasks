import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { AlertComponent } from '../alert/alert.component';
import { LoadingComponent } from '../loading/loading.component';
import { FormsModule } from '@angular/forms';

@NgModule({ 
  declarations: [
    TableComponent,
    AlertComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    FormsModule
    
  ]
})
export class TableModule { }
