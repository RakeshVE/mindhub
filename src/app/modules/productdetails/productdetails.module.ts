import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductdetailsRoutingModule } from './productdetails-routing.module';
import { BookdetailComponent } from './components/bookdetail/bookdetail.component';
import { ProductdetailService } from 'src/app/shared/services/productdetail.service';


@NgModule({
  declarations: [
    BookdetailComponent
  ],
  imports: [
    CommonModule,
    ProductdetailsRoutingModule
  ],
  providers:[ProductdetailService]
})
export class ProductdetailsModule { }
