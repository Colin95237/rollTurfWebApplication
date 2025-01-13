import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceCalculatorComponent } from './components/price-calculator/price-calculator.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CalculatorResultComponent } from './components/calculator-result/calculator-result.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderOverviewComponent } from './components/order-overview/order-overview.component';
import { InvoiceOverviewComponent } from './components/invoice-overview/invoice-overview.component';
import {CartItemService} from "./services/cart-item.service";

@NgModule({
  declarations: [
    AppComponent,
    PriceCalculatorComponent,
    CalculatorResultComponent,
    OrderFormComponent,
    OrderOverviewComponent,
    InvoiceOverviewComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [CartItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
