import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderOverviewComponent} from "./components/order-overview/order-overview.component";
import {OrderFormComponent} from "./components/order-form/order-form.component";
import {InvoiceOverviewComponent} from "./components/invoice-overview/invoice-overview.component";
import {CalculatorResultComponent} from "./components/calculator-result/calculator-result.component";
import {PriceCalculatorComponent} from "./components/price-calculator/price-calculator.component";

const routes: Routes = [
  { path: 'price-calculator', component: PriceCalculatorComponent },
  { path: 'calculator-result', component: CalculatorResultComponent },
  { path: 'order-form', component: OrderFormComponent },
  { path: 'order-overview', component: OrderOverviewComponent },
  { path: 'invoice-overview', component: InvoiceOverviewComponent },
  { path: '', component: PriceCalculatorComponent },
  { path: '**', redirectTo: '/price-calculator', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
