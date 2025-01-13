import {Component, OnInit} from '@angular/core';
import {Order} from "../../models/order";
import {Router} from "@angular/router";

@Component({
  selector: 'app-invoice-overview',
  templateUrl: './invoice-overview.component.html',
  styleUrl: './invoice-overview.component.css'
})
export class InvoiceOverviewComponent implements OnInit {

  order!: Order;

  constructor(private router: Router) {
    this.order = this.router.getCurrentNavigation()?.extras.state?.['order'];
  }

  ngOnInit(): void {
    if (!this.order) {
      this.router.navigate(['/order-form']);
    }
  }

}
