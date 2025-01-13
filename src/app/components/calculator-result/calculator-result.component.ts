import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CartItemService} from "../../services/cart-item.service";
import {CartItem} from "../../models/cart-item";

@Component({
  selector: 'app-calculator-result',
  templateUrl: './calculator-result.component.html',
  styleUrl: './calculator-result.component.css'
})
export class CalculatorResultComponent implements OnInit {

  postcode!: string | null;
  area!: string | null;
  price!: string | null;

  constructor(private route: ActivatedRoute, private router: Router, private cartItemService: CartItemService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.postcode = params['postcode'];
      this.area = params['area'];
      this.price = params['price'];
    });
  }

  goToOrderForm(): void {
    // Erstelle das CartItem Objekt
    const cartItem: CartItem = {
      squareMeter: parseFloat(this.area || '0'),
      turf: {
        id: 1,
        name: '',
        pricePerSquareMeter: 4
      }, // Setze eine Beispiel-Turf-ID, hier müsste der tatsächliche Wert verwendet werden
      order: { id: 0 } // Diese ID wird später auf Basis der tatsächlichen Bestellung gesetzt
    };

    // Speichern des CartItems im Backend
    this.cartItemService.createCartItem(cartItem).subscribe({
      next: () => this.router.navigate(['/order-form'], { queryParams: { price: this.price } }),
      error: (err) => console.error('Error creating cart item', err)
    });
  }
}
