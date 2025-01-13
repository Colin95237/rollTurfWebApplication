import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  orderForm!: FormGroup;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-ZäöüßÄÖÜ\s-]+$/)]],
      address: ['', Validators.required],
      zipcode: ['', [Validators.required, Validators.pattern(/^\d{4,5}$/)]],
      city: ['', Validators.required],
      totalPrice: [0] // Wird automatisch gesetzt
    });

    this.route.queryParams.subscribe(params => {
      this.orderForm.patchValue({ totalPrice: +params['price'] || 0 });
    });
  }

  onSubmit(): void {
    if (this.orderForm.invalid) {
      alert('Bitte füllen Sie alle Felder korrekt aus.');
      return;
    }

    const order: Order = this.orderForm.value;

    this.orderService.createOrder(order).subscribe(
      response => {
        this.router.navigate(['/order-overview'], { state: { order: response } });
      },
    );
  }
}

