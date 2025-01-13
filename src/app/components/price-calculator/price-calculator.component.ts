import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TurfService } from '../../services/turf.service';
import { Turf } from '../../models/turf';

@Component({
  selector: 'app-price-calculator',
  templateUrl: './price-calculator.component.html',
  styleUrls: ['./price-calculator.component.css']
})
export class PriceCalculatorComponent implements OnInit {
  priceCalculatorForm!: FormGroup;
  turfs: Turf[] = [];

  constructor(
    private router: Router,
    private turfService: TurfService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // Initialisiere das Formular mit Validierungen
    this.priceCalculatorForm = this.formBuilder.group({
      postcode: [
        '',
        [
          Validators.required,
          Validators.min(1067),
          Validators.max(99999)
        ]
      ],
      area: ['', [Validators.required, Validators.min(1)]],
      selectedTurfId: ['', Validators.required]
    });

    // Alle verfügbaren Turfs vom Backend abrufen
    this.turfService.getAllTurfs().subscribe((data: Turf[]) => {
      this.turfs = data;
    });
  }

  calculatePrice(): void {
    if (this.priceCalculatorForm.invalid) {
      alert('Bitte füllen Sie alle Felder korrekt aus.');
      return;
    }

    const { postcode, area, selectedTurfId } = this.priceCalculatorForm.value;

    // Preis pro Quadratmeter vom Backend abrufen, basierend auf dem ausgewählten Turf
    this.turfService.getPricePerSquareMeter(selectedTurfId).subscribe((pricePerSquareMeter: number) => {
      let price = 0;

      /*// Berechnung basierend auf der Postleitzahl
      if (postcode >= 1000 && postcode <= 1999) {
        if (area <= 50) {
          price = pricePerSquareMeter * area + 176;
        } else if (area <= 100) {
          price = pricePerSquareMeter * area + 335;
        } else if (area <= 150) {
          price = pricePerSquareMeter * area + 498;
        } else if (area <= 200) {
          price = pricePerSquareMeter * area + 719;
        } else if (area <= 250) {
          price = pricePerSquareMeter * area + 895;
        } else if (area <= 300) {
          price = pricePerSquareMeter * area + 1054;
        } else if (area > 300) {
          price = pricePerSquareMeter * area + 1217;
        }
      } else {
        alert('Postleitzahl ist derzeit nicht abgedeckt.');
        return;
      }*/

        switch (true) {
          // Bereich 1000-1999
          case (postcode >= 1000 && postcode <= 1999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 176; break;
              case (area <= 100): price = pricePerSquareMeter * area + 335; break;
              case (area <= 150): price = pricePerSquareMeter * area + 498; break;
              case (area <= 200): price = pricePerSquareMeter * area + 719; break;
              case (area <= 250): price = pricePerSquareMeter * area + 895; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1054; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1217; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          // Bereich 2000-3999
          case (postcode >= 2000 && postcode <= 3999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 183; break;
              case (area <= 100): price = pricePerSquareMeter * area + 350; break;
              case (area <= 150): price = pricePerSquareMeter * area + 521; break;
              case (area <= 200): price = pricePerSquareMeter * area + 755; break;
              case (area <= 250): price = pricePerSquareMeter * area + 938; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1105; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1276; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 4000 && postcode <= 5999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 166; break;
              case (area <= 100): price = pricePerSquareMeter * area + 315; break;
              case (area <= 150): price = pricePerSquareMeter * area + 469; break;
              case (area <= 200): price = pricePerSquareMeter * area + 727; break;
              case (area <= 250): price = pricePerSquareMeter * area + 893; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1042; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1196; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 6000 && postcode <= 7999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 166; break;
              case (area <= 100): price = pricePerSquareMeter * area + 315; break;
              case (area <= 150): price = pricePerSquareMeter * area + 469; break;
              case (area <= 200): price = pricePerSquareMeter * area + 689; break;
              case (area <= 250): price = pricePerSquareMeter * area + 855; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1004; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1158; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 8000 && postcode <= 14999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 175; break;
              case (area <= 100): price = pricePerSquareMeter * area + 334; break;
              case (area <= 150): price = pricePerSquareMeter * area + 498; break;
              case (area <= 200): price = pricePerSquareMeter * area + 727; break;
              case (area <= 250): price = pricePerSquareMeter * area + 902; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1061; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1225; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 15000 && postcode <= 17999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 183; break;
              case (area <= 100): price = pricePerSquareMeter * area + 350; break;
              case (area <= 150): price = pricePerSquareMeter * area + 521; break;
              case (area <= 200): price = pricePerSquareMeter * area + 755; break;
              case (area <= 250): price = pricePerSquareMeter * area + 938; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1105; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1276; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 18000 && postcode <= 18564):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 175; break;
              case (area <= 100): price = pricePerSquareMeter * area + 334; break;
              case (area <= 150): price = pricePerSquareMeter * area + 498; break;
              case (area <= 200): price = pricePerSquareMeter * area + 755; break;
              case (area <= 250): price = pricePerSquareMeter * area + 930; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1089; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1253; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 18565 && postcode <= 18565):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 100): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 150): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 200): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 250): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 300): price = pricePerSquareMeter * area + 3000; break;
              case (area >= 300): price = pricePerSquareMeter * area + 3000; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 19000 && postcode <= 19999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 175; break;
              case (area <= 100): price = pricePerSquareMeter * area + 334; break;
              case (area <= 150): price = pricePerSquareMeter * area + 498; break;
              case (area <= 200): price = pricePerSquareMeter * area + 689; break;
              case (area <= 250): price = pricePerSquareMeter * area + 864; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1023; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1187; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 20000 && postcode <= 22999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 166; break;
              case (area <= 100): price = pricePerSquareMeter * area + 315; break;
              case (area <= 150): price = pricePerSquareMeter * area + 469; break;
              case (area <= 200): price = pricePerSquareMeter * area + 657; break;
              case (area <= 250): price = pricePerSquareMeter * area + 823; break;
              case (area <= 300): price = pricePerSquareMeter * area + 972; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1126; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 23000 && postcode <= 24999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 166; break;
              case (area <= 100): price = pricePerSquareMeter * area + 315; break;
              case (area <= 150): price = pricePerSquareMeter * area + 469; break;
              case (area <= 200): price = pricePerSquareMeter * area + 690; break;
              case (area <= 250): price = pricePerSquareMeter * area + 856; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1005; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1159; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 25000 && postcode <= 25844):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 175; break;
              case (area <= 100): price = pricePerSquareMeter * area + 334; break;
              case (area <= 150): price = pricePerSquareMeter * area + 498; break;
              case (area <= 200): price = pricePerSquareMeter * area + 690; break;
              case (area <= 250): price = pricePerSquareMeter * area + 865; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1024; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1188; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 25845 && postcode <= 25999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 100): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 150): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 200): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 250): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 300): price = pricePerSquareMeter * area + 3000; break;
              case (area >= 300): price = pricePerSquareMeter * area + 3000; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 26000 && postcode <= 26464):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 147; break;
              case (area <= 100): price = pricePerSquareMeter * area + 277; break;
              case (area <= 150): price = pricePerSquareMeter * area + 412; break;
              case (area <= 200): price = pricePerSquareMeter * area + 589; break;
              case (area <= 250): price = pricePerSquareMeter * area + 709; break;
              case (area <= 300): price = pricePerSquareMeter * area + 866; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1001; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 26465 && postcode <= 26999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 100): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 150): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 200): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 250): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 300): price = pricePerSquareMeter * area + 3000; break;
              case (area >= 300): price = pricePerSquareMeter * area + 3000; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 27000 && postcode <= 27497):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 147; break;
              case (area <= 100): price = pricePerSquareMeter * area + 277; break;
              case (area <= 150): price = pricePerSquareMeter * area + 412; break;
              case (area <= 200): price = pricePerSquareMeter * area + 589; break;
              case (area <= 250): price = pricePerSquareMeter * area + 709; break;
              case (area <= 300): price = pricePerSquareMeter * area + 866; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1001; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 27498 && postcode <= 27999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 100): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 150): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 200): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 250): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 300): price = pricePerSquareMeter * area + 3000; break;
              case (area >= 300): price = pricePerSquareMeter * area + 3000; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 28000 && postcode <= 28999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 147; break;
              case (area <= 100): price = pricePerSquareMeter * area + 277; break;
              case (area <= 150): price = pricePerSquareMeter * area + 412; break;
              case (area <= 200): price = pricePerSquareMeter * area + 589; break;
              case (area <= 250): price = pricePerSquareMeter * area + 709; break;
              case (area <= 300): price = pricePerSquareMeter * area + 866; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1001; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 29000 && postcode <= 29999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 158; break;
              case (area <= 100): price = pricePerSquareMeter * area + 298; break;
              case (area <= 150): price = pricePerSquareMeter * area + 444; break;
              case (area <= 200): price = pricePerSquareMeter * area + 657; break;
              case (area <= 250): price = pricePerSquareMeter * area + 815; break;
              case (area <= 300): price = pricePerSquareMeter * area + 955; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1101; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 30000 && postcode <= 31999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 147; break;
              case (area <= 100): price = pricePerSquareMeter * area + 277; break;
              case (area <= 150): price = pricePerSquareMeter * area + 412; break;
              case (area <= 200): price = pricePerSquareMeter * area + 589; break;
              case (area <= 250): price = pricePerSquareMeter * area + 709; break;
              case (area <= 300): price = pricePerSquareMeter * area + 866; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1001; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 32000 && postcode <= 32999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 136; break;
              case (area <= 100): price = pricePerSquareMeter * area + 226; break;
              case (area <= 150): price = pricePerSquareMeter * area + 379; break;
              case (area <= 200): price = pricePerSquareMeter * area + 589; break;
              case (area <= 250): price = pricePerSquareMeter * area + 725; break;
              case (area <= 300): price = pricePerSquareMeter * area + 815; break;
              case (area >= 300): price = pricePerSquareMeter * area + 968; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 33000 && postcode <= 33999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 136; break;
              case (area <= 100): price = pricePerSquareMeter * area + 226; break;
              case (area <= 150): price = pricePerSquareMeter * area + 379; break;
              case (area <= 200): price = pricePerSquareMeter * area + 544; break;
              case (area <= 250): price = pricePerSquareMeter * area + 680; break;
              case (area <= 300): price = pricePerSquareMeter * area + 770; break;
              case (area >= 300): price = pricePerSquareMeter * area + 923; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 34000 && postcode <= 35999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 147; break;
              case (area <= 100): price = pricePerSquareMeter * area + 277; break;
              case (area <= 150): price = pricePerSquareMeter * area + 412; break;
              case (area <= 200): price = pricePerSquareMeter * area + 589; break;
              case (area <= 250): price = pricePerSquareMeter * area + 709; break;
              case (area <= 300): price = pricePerSquareMeter * area + 866; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1001; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 36000 && postcode <= 36999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 158; break;
              case (area <= 100): price = pricePerSquareMeter * area + 299; break;
              case (area <= 150): price = pricePerSquareMeter * area + 445; break;
              case (area <= 200): price = pricePerSquareMeter * area + 589; break;
              case (area <= 250): price = pricePerSquareMeter * area + 747; break;
              case (area <= 300): price = pricePerSquareMeter * area + 888; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1034; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 37000 && postcode <= 37999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 147; break;
              case (area <= 100): price = pricePerSquareMeter * area + 277; break;
              case (area <= 150): price = pricePerSquareMeter * area + 412; break;
              case (area <= 200): price = pricePerSquareMeter * area + 589; break;
              case (area <= 250): price = pricePerSquareMeter * area + 709; break;
              case (area <= 300): price = pricePerSquareMeter * area + 866; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1001; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 38000 && postcode <= 38999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 158; break;
              case (area <= 100): price = pricePerSquareMeter * area + 299; break;
              case (area <= 150): price = pricePerSquareMeter * area + 445; break;
              case (area <= 200): price = pricePerSquareMeter * area + 657; break;
              case (area <= 250): price = pricePerSquareMeter * area + 815; break;
              case (area <= 300): price = pricePerSquareMeter * area + 886; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1001; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 39000 && postcode <= 39999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 166; break;
              case (area <= 100): price = pricePerSquareMeter * area + 285; break;
              case (area <= 150): price = pricePerSquareMeter * area + 469; break;
              case (area <= 200): price = pricePerSquareMeter * area + 689; break;
              case (area <= 250): price = pricePerSquareMeter * area + 855; break;
              case (area <= 300): price = pricePerSquareMeter * area + 974; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1158; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 40000 && postcode <= 40999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 181; break;
              case (area <= 150): price = pricePerSquareMeter * area + 251; break;
              case (area <= 200): price = pricePerSquareMeter * area + 503; break;
              case (area <= 250): price = pricePerSquareMeter * area + 618; break;
              case (area <= 300): price = pricePerSquareMeter * area + 684; break;
              case (area >= 300): price = pricePerSquareMeter * area + 754; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 41000 && postcode <= 41999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 181; break;
              case (area <= 150): price = pricePerSquareMeter * area + 251; break;
              case (area <= 200): price = pricePerSquareMeter * area + 503; break;
              case (area <= 250): price = pricePerSquareMeter * area + 618; break;
              case (area <= 300): price = pricePerSquareMeter * area + 684; break;
              case (area >= 300): price = pricePerSquareMeter * area + 754; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 42000 && postcode <= 43999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 337; break;
              case (area <= 200): price = pricePerSquareMeter * area + 516; break;
              case (area <= 250): price = pricePerSquareMeter * area + 639; break;
              case (area <= 300): price = pricePerSquareMeter * area + 744; break;
              case (area >= 300): price = pricePerSquareMeter * area + 853; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 44000 && postcode <= 44999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 337; break;
              case (area <= 200): price = pricePerSquareMeter * area + 516; break;
              case (area <= 250): price = pricePerSquareMeter * area + 639; break;
              case (area <= 300): price = pricePerSquareMeter * area + 744; break;
              case (area >= 300): price = pricePerSquareMeter * area + 853; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 45000 && postcode <= 45999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 181; break;
              case (area <= 150): price = pricePerSquareMeter * area + 311; break;
              case (area <= 200): price = pricePerSquareMeter * area + 516; break;
              case (area <= 250): price = pricePerSquareMeter * area + 631; break;
              case (area <= 300): price = pricePerSquareMeter * area + 697; break;
              case (area >= 300): price = pricePerSquareMeter * area + 827; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46000 && postcode <= 46116):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 310; break;
              case (area <= 200): price = pricePerSquareMeter * area + 328; break;
              case (area <= 250): price = pricePerSquareMeter * area + 346; break;
              case (area <= 300): price = pricePerSquareMeter * area + 364; break;
              case (area >= 300): price = pricePerSquareMeter * area + 382; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46117 && postcode <= 46118):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 310; break;
              case (area <= 200): price = pricePerSquareMeter * area + 328; break;
              case (area <= 250): price = pricePerSquareMeter * area + 346; break;
              case (area <= 300): price = pricePerSquareMeter * area + 364; break;
              case (area >= 300): price = pricePerSquareMeter * area + 382; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46119 && postcode <= 46146):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 330; break;
              case (area <= 200): price = pricePerSquareMeter * area + 348; break;
              case (area <= 250): price = pricePerSquareMeter * area + 366; break;
              case (area <= 300): price = pricePerSquareMeter * area + 384; break;
              case (area >= 300): price = pricePerSquareMeter * area + 402; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46147 && postcode <= 46148):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 316; break;
              case (area <= 200): price = pricePerSquareMeter * area + 334; break;
              case (area <= 250): price = pricePerSquareMeter * area + 352; break;
              case (area <= 300): price = pricePerSquareMeter * area + 370; break;
              case (area >= 300): price = pricePerSquareMeter * area + 388; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46149 && postcode <= 46235):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 303; break;
              case (area <= 200): price = pricePerSquareMeter * area + 321; break;
              case (area <= 250): price = pricePerSquareMeter * area + 339; break;
              case (area <= 300): price = pricePerSquareMeter * area + 357; break;
              case (area >= 300): price = pricePerSquareMeter * area + 375; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46236 && postcode <= 46239):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 330; break;
              case (area <= 200): price = pricePerSquareMeter * area + 348; break;
              case (area <= 250): price = pricePerSquareMeter * area + 366; break;
              case (area <= 300): price = pricePerSquareMeter * area + 384; break;
              case (area >= 300): price = pricePerSquareMeter * area + 402; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46240 && postcode <= 46241):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 337; break;
              case (area <= 200): price = pricePerSquareMeter * area + 357; break;
              case (area <= 250): price = pricePerSquareMeter * area + 375; break;
              case (area <= 300): price = pricePerSquareMeter * area + 393; break;
              case (area >= 300): price = pricePerSquareMeter * area + 411; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46242 && postcode <= 46243):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 330; break;
              case (area <= 200): price = pricePerSquareMeter * area + 348; break;
              case (area <= 250): price = pricePerSquareMeter * area + 366; break;
              case (area <= 300): price = pricePerSquareMeter * area + 384; break;
              case (area >= 300): price = pricePerSquareMeter * area + 402; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46244 && postcode <= 46324):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 337; break;
              case (area <= 200): price = pricePerSquareMeter * area + 366; break;
              case (area <= 250): price = pricePerSquareMeter * area + 384; break;
              case (area <= 300): price = pricePerSquareMeter * area + 402; break;
              case (area >= 300): price = pricePerSquareMeter * area + 420; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46325 && postcode <= 46341):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 337; break;
              case (area <= 200): price = pricePerSquareMeter * area + 350; break;
              case (area <= 250): price = pricePerSquareMeter * area + 368; break;
              case (area <= 300): price = pricePerSquareMeter * area + 386; break;
              case (area >= 300): price = pricePerSquareMeter * area + 404; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46342 && postcode <= 46347):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 337; break;
              case (area <= 200): price = pricePerSquareMeter * area + 376; break;
              case (area <= 250): price = pricePerSquareMeter * area + 394; break;
              case (area <= 300): price = pricePerSquareMeter * area + 412; break;
              case (area >= 300): price = pricePerSquareMeter * area + 420; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46348 && postcode <= 46353):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 303; break;
              case (area <= 200): price = pricePerSquareMeter * area + 321; break;
              case (area <= 250): price = pricePerSquareMeter * area + 339; break;
              case (area <= 300): price = pricePerSquareMeter * area + 357; break;
              case (area >= 300): price = pricePerSquareMeter * area + 375; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46354 && postcode <= 46358):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 337; break;
              case (area <= 200): price = pricePerSquareMeter * area + 388; break;
              case (area <= 250): price = pricePerSquareMeter * area + 406; break;
              case (area <= 300): price = pricePerSquareMeter * area + 424; break;
              case (area >= 300): price = pricePerSquareMeter * area + 442; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46359 && postcode <= 46389):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 337; break;
              case (area <= 200): price = pricePerSquareMeter * area + 366; break;
              case (area <= 250): price = pricePerSquareMeter * area + 384; break;
              case (area <= 300): price = pricePerSquareMeter * area + 402; break;
              case (area >= 300): price = pricePerSquareMeter * area + 378; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46390 && postcode <= 46418):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 303; break;
              case (area <= 200): price = pricePerSquareMeter * area + 321; break;
              case (area <= 250): price = pricePerSquareMeter * area + 339; break;
              case (area <= 300): price = pricePerSquareMeter * area + 357; break;
              case (area >= 300): price = pricePerSquareMeter * area + 375; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46419 && postcode <= 46458):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 240; break;
              case (area <= 200): price = pricePerSquareMeter * area + 258; break;
              case (area <= 250): price = pricePerSquareMeter * area + 276; break;
              case (area <= 300): price = pricePerSquareMeter * area + 294; break;
              case (area >= 300): price = pricePerSquareMeter * area + 312; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46459 && postcode <= 46479):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 210; break;
              case (area <= 150): price = pricePerSquareMeter * area + 228; break;
              case (area <= 200): price = pricePerSquareMeter * area + 246; break;
              case (area <= 250): price = pricePerSquareMeter * area + 264; break;
              case (area <= 300): price = pricePerSquareMeter * area + 282; break;
              case (area >= 300): price = pricePerSquareMeter * area + 300; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46480 && postcode <= 46498):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 240; break;
              case (area <= 200): price = pricePerSquareMeter * area + 258; break;
              case (area <= 250): price = pricePerSquareMeter * area + 276; break;
              case (area <= 300): price = pricePerSquareMeter * area + 294; break;
              case (area >= 300): price = pricePerSquareMeter * area + 312; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46499 && postcode <= 46508):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 282; break;
              case (area <= 200): price = pricePerSquareMeter * area + 300; break;
              case (area <= 250): price = pricePerSquareMeter * area + 318; break;
              case (area <= 300): price = pricePerSquareMeter * area + 336; break;
              case (area >= 300): price = pricePerSquareMeter * area + 354; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46509 && postcode <= 46513):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 183; break;
              case (area <= 150): price = pricePerSquareMeter * area + 201; break;
              case (area <= 200): price = pricePerSquareMeter * area + 219; break;
              case (area <= 250): price = pricePerSquareMeter * area + 237; break;
              case (area <= 300): price = pricePerSquareMeter * area + 255; break;
              case (area >= 300): price = pricePerSquareMeter * area + 273; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46514 && postcode <= 46518):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 294; break;
              case (area <= 200): price = pricePerSquareMeter * area + 312; break;
              case (area <= 250): price = pricePerSquareMeter * area + 330; break;
              case (area <= 300): price = pricePerSquareMeter * area + 348; break;
              case (area >= 300): price = pricePerSquareMeter * area + 366; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46519 && postcode <= 46529):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 190; break;
              case (area <= 150): price = pricePerSquareMeter * area + 208; break;
              case (area <= 200): price = pricePerSquareMeter * area + 226; break;
              case (area <= 250): price = pricePerSquareMeter * area + 244; break;
              case (area <= 300): price = pricePerSquareMeter * area + 262; break;
              case (area >= 300): price = pricePerSquareMeter * area + 280; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46530 && postcode <= 46561):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 282; break;
              case (area <= 200): price = pricePerSquareMeter * area + 300; break;
              case (area <= 250): price = pricePerSquareMeter * area + 318; break;
              case (area <= 300): price = pricePerSquareMeter * area + 336; break;
              case (area >= 300): price = pricePerSquareMeter * area + 354; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46562 && postcode <= 46568):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 255; break;
              case (area <= 200): price = pricePerSquareMeter * area + 273; break;
              case (area <= 250): price = pricePerSquareMeter * area + 291; break;
              case (area <= 300): price = pricePerSquareMeter * area + 309; break;
              case (area >= 300): price = pricePerSquareMeter * area + 327; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 46569 && postcode <= 46999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 282; break;
              case (area <= 200): price = pricePerSquareMeter * area + 300; break;
              case (area <= 250): price = pricePerSquareMeter * area + 318; break;
              case (area <= 300): price = pricePerSquareMeter * area + 336; break;
              case (area >= 300): price = pricePerSquareMeter * area + 354; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47000 && postcode <= 47052):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 307; break;
              case (area <= 200): price = pricePerSquareMeter * area + 325; break;
              case (area <= 250): price = pricePerSquareMeter * area + 343; break;
              case (area <= 300): price = pricePerSquareMeter * area + 361; break;
              case (area >= 300): price = pricePerSquareMeter * area + 379; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47053 && postcode <= 47054):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 294; break;
              case (area <= 200): price = pricePerSquareMeter * area + 312; break;
              case (area <= 250): price = pricePerSquareMeter * area + 330; break;
              case (area <= 300): price = pricePerSquareMeter * area + 348; break;
              case (area >= 300): price = pricePerSquareMeter * area + 366; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47055 && postcode <= 47057):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 313; break;
              case (area <= 200): price = pricePerSquareMeter * area + 331; break;
              case (area <= 250): price = pricePerSquareMeter * area + 349; break;
              case (area <= 300): price = pricePerSquareMeter * area + 367; break;
              case (area >= 300): price = pricePerSquareMeter * area + 385; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47058 && postcode <= 47118):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 307; break;
              case (area <= 200): price = pricePerSquareMeter * area + 325; break;
              case (area <= 250): price = pricePerSquareMeter * area + 343; break;
              case (area <= 300): price = pricePerSquareMeter * area + 361; break;
              case (area >= 300): price = pricePerSquareMeter * area + 379; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47119 && postcode <= 47136):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 278; break;
              case (area <= 200): price = pricePerSquareMeter * area + 296; break;
              case (area <= 250): price = pricePerSquareMeter * area + 314; break;
              case (area <= 300): price = pricePerSquareMeter * area + 332; break;
              case (area >= 300): price = pricePerSquareMeter * area + 350; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47137 && postcode <= 47137):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 294; break;
              case (area <= 200): price = pricePerSquareMeter * area + 312; break;
              case (area <= 250): price = pricePerSquareMeter * area + 330; break;
              case (area <= 300): price = pricePerSquareMeter * area + 348; break;
              case (area >= 300): price = pricePerSquareMeter * area + 366; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47138 && postcode <= 47138):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 300; break;
              case (area <= 200): price = pricePerSquareMeter * area + 318; break;
              case (area <= 250): price = pricePerSquareMeter * area + 336; break;
              case (area <= 300): price = pricePerSquareMeter * area + 354; break;
              case (area >= 300): price = pricePerSquareMeter * area + 372; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47139 && postcode <= 47165):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 268; break;
              case (area <= 200): price = pricePerSquareMeter * area + 286; break;
              case (area <= 250): price = pricePerSquareMeter * area + 304; break;
              case (area <= 300): price = pricePerSquareMeter * area + 322; break;
              case (area >= 300): price = pricePerSquareMeter * area + 330; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47166 && postcode <= 47166):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 287; break;
              case (area <= 200): price = pricePerSquareMeter * area + 305; break;
              case (area <= 250): price = pricePerSquareMeter * area + 320; break;
              case (area <= 300): price = pricePerSquareMeter * area + 314; break;
              case (area >= 300): price = pricePerSquareMeter * area + 359; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47167 && postcode <= 47177):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 300; break;
              case (area <= 200): price = pricePerSquareMeter * area + 318; break;
              case (area <= 250): price = pricePerSquareMeter * area + 336; break;
              case (area <= 300): price = pricePerSquareMeter * area + 354; break;
              case (area >= 300): price = pricePerSquareMeter * area + 372; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47178 && postcode <= 47178):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 319; break;
              case (area <= 200): price = pricePerSquareMeter * area + 337; break;
              case (area <= 250): price = pricePerSquareMeter * area + 355; break;
              case (area <= 300): price = pricePerSquareMeter * area + 373; break;
              case (area >= 300): price = pricePerSquareMeter * area + 391; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47179 && postcode <= 47197):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 303; break;
              case (area <= 200): price = pricePerSquareMeter * area + 321; break;
              case (area <= 250): price = pricePerSquareMeter * area + 339; break;
              case (area <= 300): price = pricePerSquareMeter * area + 357; break;
              case (area >= 300): price = pricePerSquareMeter * area + 375; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47198 && postcode <= 47198):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 375; break;
              case (area <= 200): price = pricePerSquareMeter * area + 393; break;
              case (area <= 250): price = pricePerSquareMeter * area + 411; break;
              case (area <= 300): price = pricePerSquareMeter * area + 429; break;
              case (area >= 300): price = pricePerSquareMeter * area + 447; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47199 && postcode <= 47225):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 268; break;
              case (area <= 200): price = pricePerSquareMeter * area + 286; break;
              case (area <= 250): price = pricePerSquareMeter * area + 304; break;
              case (area <= 300): price = pricePerSquareMeter * area + 322; break;
              case (area >= 300): price = pricePerSquareMeter * area + 330; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47226 && postcode <= 47228):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 294; break;
              case (area <= 200): price = pricePerSquareMeter * area + 312; break;
              case (area <= 250): price = pricePerSquareMeter * area + 330; break;
              case (area <= 300): price = pricePerSquareMeter * area + 348; break;
              case (area >= 300): price = pricePerSquareMeter * area + 366; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47229 && postcode <= 47238):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 303; break;
              case (area <= 200): price = pricePerSquareMeter * area + 321; break;
              case (area <= 250): price = pricePerSquareMeter * area + 339; break;
              case (area <= 300): price = pricePerSquareMeter * area + 357; break;
              case (area >= 300): price = pricePerSquareMeter * area + 375; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47239 && postcode <= 47248):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 284; break;
              case (area <= 200): price = pricePerSquareMeter * area + 302; break;
              case (area <= 250): price = pricePerSquareMeter * area + 320; break;
              case (area <= 300): price = pricePerSquareMeter * area + 338; break;
              case (area >= 300): price = pricePerSquareMeter * area + 356; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47249 && postcode <= 47268):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 319; break;
              case (area <= 200): price = pricePerSquareMeter * area + 337; break;
              case (area <= 250): price = pricePerSquareMeter * area + 355; break;
              case (area <= 300): price = pricePerSquareMeter * area + 373; break;
              case (area >= 300): price = pricePerSquareMeter * area + 391; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47269 && postcode <= 47439):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 329; break;
              case (area <= 200): price = pricePerSquareMeter * area + 347; break;
              case (area <= 250): price = pricePerSquareMeter * area + 365; break;
              case (area <= 300): price = pricePerSquareMeter * area + 383; break;
              case (area >= 300): price = pricePerSquareMeter * area + 401; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47440 && postcode <= 47474):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 268; break;
              case (area <= 200): price = pricePerSquareMeter * area + 286; break;
              case (area <= 250): price = pricePerSquareMeter * area + 304; break;
              case (area <= 300): price = pricePerSquareMeter * area + 322; break;
              case (area >= 300): price = pricePerSquareMeter * area + 330; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47475 && postcode <= 47494):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 185; break;
              case (area <= 150): price = pricePerSquareMeter * area + 203; break;
              case (area <= 200): price = pricePerSquareMeter * area + 221; break;
              case (area <= 250): price = pricePerSquareMeter * area + 239; break;
              case (area <= 300): price = pricePerSquareMeter * area + 257; break;
              case (area >= 300): price = pricePerSquareMeter * area + 275; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47495 && postcode <= 47508):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 198; break;
              case (area <= 150): price = pricePerSquareMeter * area + 216; break;
              case (area <= 200): price = pricePerSquareMeter * area + 234; break;
              case (area <= 250): price = pricePerSquareMeter * area + 252; break;
              case (area <= 300): price = pricePerSquareMeter * area + 270; break;
              case (area >= 300): price = pricePerSquareMeter * area + 288; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47509 && postcode <= 47532):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 185; break;
              case (area <= 150): price = pricePerSquareMeter * area + 203; break;
              case (area <= 200): price = pricePerSquareMeter * area + 221; break;
              case (area <= 250): price = pricePerSquareMeter * area + 239; break;
              case (area <= 300): price = pricePerSquareMeter * area + 257; break;
              case (area >= 300): price = pricePerSquareMeter * area + 275; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47533 && postcode <= 47558):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 186; break;
              case (area <= 150): price = pricePerSquareMeter * area + 204; break;
              case (area <= 200): price = pricePerSquareMeter * area + 222; break;
              case (area <= 250): price = pricePerSquareMeter * area + 240; break;
              case (area <= 300): price = pricePerSquareMeter * area + 258; break;
              case (area >= 300): price = pricePerSquareMeter * area + 276; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47559 && postcode <= 47573):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 196; break;
              case (area <= 150): price = pricePerSquareMeter * area + 214; break;
              case (area <= 200): price = pricePerSquareMeter * area + 232; break;
              case (area <= 250): price = pricePerSquareMeter * area + 250; break;
              case (area <= 300): price = pricePerSquareMeter * area + 268; break;
              case (area >= 300): price = pricePerSquareMeter * area + 286; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47574 && postcode <= 47637):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 150; break;
              case (area <= 150): price = pricePerSquareMeter * area + 168; break;
              case (area <= 200): price = pricePerSquareMeter * area + 186; break;
              case (area <= 250): price = pricePerSquareMeter * area + 204; break;
              case (area <= 300): price = pricePerSquareMeter * area + 222; break;
              case (area >= 300): price = pricePerSquareMeter * area + 240; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47638 && postcode <= 47646):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 160; break;
              case (area <= 150): price = pricePerSquareMeter * area + 178; break;
              case (area <= 200): price = pricePerSquareMeter * area + 196; break;
              case (area <= 250): price = pricePerSquareMeter * area + 214; break;
              case (area <= 300): price = pricePerSquareMeter * area + 232; break;
              case (area >= 300): price = pricePerSquareMeter * area + 250; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47647 && postcode <= 47651):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 176; break;
              case (area <= 150): price = pricePerSquareMeter * area + 194; break;
              case (area <= 200): price = pricePerSquareMeter * area + 212; break;
              case (area <= 250): price = pricePerSquareMeter * area + 230; break;
              case (area <= 300): price = pricePerSquareMeter * area + 248; break;
              case (area >= 300): price = pricePerSquareMeter * area + 266; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47652 && postcode <= 47660):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 104; break;
              case (area <= 100): price = pricePerSquareMeter * area + 122; break;
              case (area <= 150): price = pricePerSquareMeter * area + 140; break;
              case (area <= 200): price = pricePerSquareMeter * area + 158; break;
              case (area <= 250): price = pricePerSquareMeter * area + 176; break;
              case (area <= 300): price = pricePerSquareMeter * area + 194; break;
              case (area >= 300): price = pricePerSquareMeter * area + 212; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47661 && postcode <= 47664):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 176; break;
              case (area <= 150): price = pricePerSquareMeter * area + 194; break;
              case (area <= 200): price = pricePerSquareMeter * area + 212; break;
              case (area <= 250): price = pricePerSquareMeter * area + 230; break;
              case (area <= 300): price = pricePerSquareMeter * area + 248; break;
              case (area >= 300): price = pricePerSquareMeter * area + 266; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47665 && postcode <= 47668):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 160; break;
              case (area <= 150): price = pricePerSquareMeter * area + 178; break;
              case (area <= 200): price = pricePerSquareMeter * area + 196; break;
              case (area <= 250): price = pricePerSquareMeter * area + 214; break;
              case (area <= 300): price = pricePerSquareMeter * area + 232; break;
              case (area >= 300): price = pricePerSquareMeter * area + 250; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47669 && postcode <= 47797):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 176; break;
              case (area <= 150): price = pricePerSquareMeter * area + 194; break;
              case (area <= 200): price = pricePerSquareMeter * area + 212; break;
              case (area <= 250): price = pricePerSquareMeter * area + 230; break;
              case (area <= 300): price = pricePerSquareMeter * area + 248; break;
              case (area >= 300): price = pricePerSquareMeter * area + 266; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47798 && postcode <= 47799):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 258; break;
              case (area <= 200): price = pricePerSquareMeter * area + 276; break;
              case (area <= 250): price = pricePerSquareMeter * area + 294; break;
              case (area <= 300): price = pricePerSquareMeter * area + 312; break;
              case (area >= 300): price = pricePerSquareMeter * area + 330; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47800 && postcode <= 47801):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 294; break;
              case (area <= 200): price = pricePerSquareMeter * area + 312; break;
              case (area <= 250): price = pricePerSquareMeter * area + 330; break;
              case (area <= 300): price = pricePerSquareMeter * area + 348; break;
              case (area >= 300): price = pricePerSquareMeter * area + 366; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47802 && postcode <= 47806):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 258; break;
              case (area <= 200): price = pricePerSquareMeter * area + 276; break;
              case (area <= 250): price = pricePerSquareMeter * area + 294; break;
              case (area <= 300): price = pricePerSquareMeter * area + 312; break;
              case (area >= 300): price = pricePerSquareMeter * area + 330; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47807 && postcode <= 47808):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 332; break;
              case (area <= 200): price = pricePerSquareMeter * area + 350; break;
              case (area <= 250): price = pricePerSquareMeter * area + 368; break;
              case (area <= 300): price = pricePerSquareMeter * area + 386; break;
              case (area >= 300): price = pricePerSquareMeter * area + 404; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47809 && postcode <= 47828):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 303; break;
              case (area <= 200): price = pricePerSquareMeter * area + 321; break;
              case (area <= 250): price = pricePerSquareMeter * area + 339; break;
              case (area <= 300): price = pricePerSquareMeter * area + 357; break;
              case (area >= 300): price = pricePerSquareMeter * area + 375; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47829 && postcode <= 47838):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 258; break;
              case (area <= 200): price = pricePerSquareMeter * area + 276; break;
              case (area <= 250): price = pricePerSquareMeter * area + 294; break;
              case (area <= 300): price = pricePerSquareMeter * area + 312; break;
              case (area >= 300): price = pricePerSquareMeter * area + 330; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47839 && postcode <= 47876):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 230; break;
              case (area <= 200): price = pricePerSquareMeter * area + 248; break;
              case (area <= 250): price = pricePerSquareMeter * area + 266; break;
              case (area <= 300): price = pricePerSquareMeter * area + 284; break;
              case (area >= 300): price = pricePerSquareMeter * area + 302; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47877 && postcode <= 47905):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 265; break;
              case (area <= 200): price = pricePerSquareMeter * area + 283; break;
              case (area <= 250): price = pricePerSquareMeter * area + 301; break;
              case (area <= 300): price = pricePerSquareMeter * area + 319; break;
              case (area >= 300): price = pricePerSquareMeter * area + 337; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47906 && postcode <= 47917):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 202; break;
              case (area <= 150): price = pricePerSquareMeter * area + 220; break;
              case (area <= 200): price = pricePerSquareMeter * area + 238; break;
              case (area <= 250): price = pricePerSquareMeter * area + 256; break;
              case (area <= 300): price = pricePerSquareMeter * area + 274; break;
              case (area >= 300): price = pricePerSquareMeter * area + 292; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47918 && postcode <= 47928):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 211; break;
              case (area <= 150): price = pricePerSquareMeter * area + 230; break;
              case (area <= 200): price = pricePerSquareMeter * area + 248; break;
              case (area <= 250): price = pricePerSquareMeter * area + 266; break;
              case (area <= 300): price = pricePerSquareMeter * area + 284; break;
              case (area >= 300): price = pricePerSquareMeter * area + 302; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 47929 && postcode <= 47999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 115; break;
              case (area <= 100): price = pricePerSquareMeter * area + 202; break;
              case (area <= 150): price = pricePerSquareMeter * area + 265; break;
              case (area <= 200): price = pricePerSquareMeter * area + 283; break;
              case (area <= 250): price = pricePerSquareMeter * area + 301; break;
              case (area <= 300): price = pricePerSquareMeter * area + 319; break;
              case (area >= 300): price = pricePerSquareMeter * area + 337; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 48000 && postcode <= 48999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 136; break;
              case (area <= 100): price = pricePerSquareMeter * area + 256; break;
              case (area <= 150): price = pricePerSquareMeter * area + 380; break;
              case (area <= 200): price = pricePerSquareMeter * area + 516; break;
              case (area <= 250): price = pricePerSquareMeter * area + 652; break;
              case (area <= 300): price = pricePerSquareMeter * area + 772; break;
              case (area >= 300): price = pricePerSquareMeter * area + 896; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 49000 && postcode <= 49999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 136; break;
              case (area <= 100): price = pricePerSquareMeter * area + 256; break;
              case (area <= 150): price = pricePerSquareMeter * area + 380; break;
              case (area <= 200): price = pricePerSquareMeter * area + 544; break;
              case (area <= 250): price = pricePerSquareMeter * area + 680; break;
              case (area <= 300): price = pricePerSquareMeter * area + 800; break;
              case (area >= 300): price = pricePerSquareMeter * area + 924; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 50000 && postcode <= 50999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 337; break;
              case (area <= 200): price = pricePerSquareMeter * area + 516; break;
              case (area <= 250): price = pricePerSquareMeter * area + 639; break;
              case (area <= 300): price = pricePerSquareMeter * area + 744; break;
              case (area >= 300): price = pricePerSquareMeter * area + 853; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 51000 && postcode <= 52999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 337; break;
              case (area <= 200): price = pricePerSquareMeter * area + 516; break;
              case (area <= 250): price = pricePerSquareMeter * area + 639; break;
              case (area <= 300): price = pricePerSquareMeter * area + 744; break;
              case (area >= 300): price = pricePerSquareMeter * area + 853; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 53000 && postcode <= 53999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 136; break;
              case (area <= 100): price = pricePerSquareMeter * area + 256; break;
              case (area <= 150): price = pricePerSquareMeter * area + 380; break;
              case (area <= 200): price = pricePerSquareMeter * area + 516; break;
              case (area <= 250): price = pricePerSquareMeter * area + 652; break;
              case (area <= 300): price = pricePerSquareMeter * area + 772; break;
              case (area >= 300): price = pricePerSquareMeter * area + 896; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 54000 && postcode <= 54999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 147; break;
              case (area <= 100): price = pricePerSquareMeter * area + 278; break;
              case (area <= 150): price = pricePerSquareMeter * area + 412; break;
              case (area <= 200): price = pricePerSquareMeter * area + 544; break;
              case (area <= 250): price = pricePerSquareMeter * area + 691; break;
              case (area <= 300): price = pricePerSquareMeter * area + 822; break;
              case (area >= 300): price = pricePerSquareMeter * area + 956; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 55000 && postcode <= 55999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 147; break;
              case (area <= 100): price = pricePerSquareMeter * area + 278; break;
              case (area <= 150): price = pricePerSquareMeter * area + 412; break;
              case (area <= 200): price = pricePerSquareMeter * area + 589; break;
              case (area <= 250): price = pricePerSquareMeter * area + 736; break;
              case (area <= 300): price = pricePerSquareMeter * area + 867; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1001; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 56000 && postcode <= 56999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 136; break;
              case (area <= 100): price = pricePerSquareMeter * area + 256; break;
              case (area <= 150): price = pricePerSquareMeter * area + 380; break;
              case (area <= 200): price = pricePerSquareMeter * area + 544; break;
              case (area <= 250): price = pricePerSquareMeter * area + 680; break;
              case (area <= 300): price = pricePerSquareMeter * area + 800; break;
              case (area >= 300): price = pricePerSquareMeter * area + 924; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 57000 && postcode <= 57999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 136; break;
              case (area <= 100): price = pricePerSquareMeter * area + 256; break;
              case (area <= 150): price = pricePerSquareMeter * area + 380; break;
              case (area <= 200): price = pricePerSquareMeter * area + 544; break;
              case (area <= 250): price = pricePerSquareMeter * area + 680; break;
              case (area <= 300): price = pricePerSquareMeter * area + 800; break;
              case (area >= 300): price = pricePerSquareMeter * area + 924; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 58000 && postcode <= 58999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 123; break;
              case (area <= 100): price = pricePerSquareMeter * area + 228; break;
              case (area <= 150): price = pricePerSquareMeter * area + 337; break;
              case (area <= 200): price = pricePerSquareMeter * area + 544; break;
              case (area <= 250): price = pricePerSquareMeter * area + 667; break;
              case (area <= 300): price = pricePerSquareMeter * area + 772; break;
              case (area >= 300): price = pricePerSquareMeter * area + 881; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 59000 && postcode <= 59999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 136; break;
              case (area <= 100): price = pricePerSquareMeter * area + 256; break;
              case (area <= 150): price = pricePerSquareMeter * area + 380; break;
              case (area <= 200): price = pricePerSquareMeter * area + 544; break;
              case (area <= 250): price = pricePerSquareMeter * area + 680; break;
              case (area <= 300): price = pricePerSquareMeter * area + 800; break;
              case (area >= 300): price = pricePerSquareMeter * area + 924; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 60000 && postcode <= 65999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 147; break;
              case (area <= 100): price = pricePerSquareMeter * area + 278; break;
              case (area <= 150): price = pricePerSquareMeter * area + 412; break;
              case (area <= 200): price = pricePerSquareMeter * area + 589; break;
              case (area <= 250): price = pricePerSquareMeter * area + 736; break;
              case (area <= 300): price = pricePerSquareMeter * area + 867; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1001; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 66000 && postcode <= 66999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 158; break;
              case (area <= 100): price = pricePerSquareMeter * area + 299; break;
              case (area <= 150): price = pricePerSquareMeter * area + 445; break;
              case (area <= 200): price = pricePerSquareMeter * area + 589; break;
              case (area <= 250): price = pricePerSquareMeter * area + 747; break;
              case (area <= 300): price = pricePerSquareMeter * area + 888; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1034; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 67000 && postcode <= 67999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 147; break;
              case (area <= 100): price = pricePerSquareMeter * area + 278; break;
              case (area <= 150): price = pricePerSquareMeter * area + 412; break;
              case (area <= 200): price = pricePerSquareMeter * area + 589; break;
              case (area <= 250): price = pricePerSquareMeter * area + 736; break;
              case (area <= 300): price = pricePerSquareMeter * area + 867; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1001; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 68000 && postcode <= 69999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 158; break;
              case (area <= 100): price = pricePerSquareMeter * area + 299; break;
              case (area <= 150): price = pricePerSquareMeter * area + 445; break;
              case (area <= 200): price = pricePerSquareMeter * area + 589; break;
              case (area <= 250): price = pricePerSquareMeter * area + 747; break;
              case (area <= 300): price = pricePerSquareMeter * area + 888; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1034; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 70000 && postcode <= 71999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 166; break;
              case (area <= 100): price = pricePerSquareMeter * area + 316; break;
              case (area <= 150): price = pricePerSquareMeter * area + 470; break;
              case (area <= 200): price = pricePerSquareMeter * area + 657; break;
              case (area <= 250): price = pricePerSquareMeter * area + 823; break;
              case (area <= 300): price = pricePerSquareMeter * area + 973; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1127; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 72000 && postcode <= 73999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 166; break;
              case (area <= 100): price = pricePerSquareMeter * area + 316; break;
              case (area <= 150): price = pricePerSquareMeter * area + 470; break;
              case (area <= 200): price = pricePerSquareMeter * area + 689; break;
              case (area <= 250): price = pricePerSquareMeter * area + 855; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1005; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1157; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 74000 && postcode <= 76999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 158; break;
              case (area <= 100): price = pricePerSquareMeter * area + 299; break;
              case (area <= 150): price = pricePerSquareMeter * area + 445; break;
              case (area <= 200): price = pricePerSquareMeter * area + 657; break;
              case (area <= 250): price = pricePerSquareMeter * area + 815; break;
              case (area <= 300): price = pricePerSquareMeter * area + 956; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1102; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 77000 && postcode <= 77999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 166; break;
              case (area <= 100): price = pricePerSquareMeter * area + 316; break;
              case (area <= 150): price = pricePerSquareMeter * area + 470; break;
              case (area <= 200): price = pricePerSquareMeter * area + 689; break;
              case (area <= 250): price = pricePerSquareMeter * area + 855; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1005; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1157; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 78000 && postcode <= 78999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 176; break;
              case (area <= 100): price = pricePerSquareMeter * area + 335; break;
              case (area <= 150): price = pricePerSquareMeter * area + 498; break;
              case (area <= 200): price = pricePerSquareMeter * area + 728; break;
              case (area <= 250): price = pricePerSquareMeter * area + 904; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1063; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1226; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 79000 && postcode <= 79999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 176; break;
              case (area <= 100): price = pricePerSquareMeter * area + 335; break;
              case (area <= 150): price = pricePerSquareMeter * area + 498; break;
              case (area <= 200): price = pricePerSquareMeter * area + 755; break;
              case (area <= 250): price = pricePerSquareMeter * area + 931; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1090; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1253; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 80000 && postcode <= 81999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 183; break;
              case (area <= 100): price = pricePerSquareMeter * area + 350; break;
              case (area <= 150): price = pricePerSquareMeter * area + 522; break;
              case (area <= 200): price = pricePerSquareMeter * area + 728; break;
              case (area <= 250): price = pricePerSquareMeter * area + 911; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1078; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1250; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 82000 && postcode <= 83255):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 183; break;
              case (area <= 100): price = pricePerSquareMeter * area + 350; break;
              case (area <= 150): price = pricePerSquareMeter * area + 522; break;
              case (area <= 200): price = pricePerSquareMeter * area + 755; break;
              case (area <= 250): price = pricePerSquareMeter * area + 938; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1105; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1277; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 83256 && postcode <= 83999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 100): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 150): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 200): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 250): price = pricePerSquareMeter * area + 3000; break;
              case (area <= 300): price = pricePerSquareMeter * area + 3000; break;
              case (area >= 300): price = pricePerSquareMeter * area + 3000; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 84000 && postcode <= 84999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 183; break;
              case (area <= 100): price = pricePerSquareMeter * area + 350; break;
              case (area <= 150): price = pricePerSquareMeter * area + 522; break;
              case (area <= 200): price = pricePerSquareMeter * area + 728; break;
              case (area <= 250): price = pricePerSquareMeter * area + 911; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1078; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1250; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 85000 && postcode <= 86999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 176; break;
              case (area <= 100): price = pricePerSquareMeter * area + 335; break;
              case (area <= 150): price = pricePerSquareMeter * area + 498; break;
              case (area <= 200): price = pricePerSquareMeter * area + 728; break;
              case (area <= 250): price = pricePerSquareMeter * area + 904; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1063; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1226; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 87000 && postcode <= 87999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 183; break;
              case (area <= 100): price = pricePerSquareMeter * area + 350; break;
              case (area <= 150): price = pricePerSquareMeter * area + 522; break;
              case (area <= 200): price = pricePerSquareMeter * area + 728; break;
              case (area <= 250): price = pricePerSquareMeter * area + 911; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1078; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1250; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 88000 && postcode <= 89999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 176; break;
              case (area <= 100): price = pricePerSquareMeter * area + 335; break;
              case (area <= 150): price = pricePerSquareMeter * area + 498; break;
              case (area <= 200): price = pricePerSquareMeter * area + 728; break;
              case (area <= 250): price = pricePerSquareMeter * area + 904; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1063; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1226; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 90000 && postcode <= 91999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 166; break;
              case (area <= 100): price = pricePerSquareMeter * area + 316; break;
              case (area <= 150): price = pricePerSquareMeter * area + 470; break;
              case (area <= 200): price = pricePerSquareMeter * area + 689; break;
              case (area <= 250): price = pricePerSquareMeter * area + 855; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1005; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1159; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 92000 && postcode <= 93999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 176; break;
              case (area <= 100): price = pricePerSquareMeter * area + 335; break;
              case (area <= 150): price = pricePerSquareMeter * area + 498; break;
              case (area <= 200): price = pricePerSquareMeter * area + 728; break;
              case (area <= 250): price = pricePerSquareMeter * area + 904; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1063; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1226; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 94000 && postcode <= 94999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 183; break;
              case (area <= 100): price = pricePerSquareMeter * area + 350; break;
              case (area <= 150): price = pricePerSquareMeter * area + 522; break;
              case (area <= 200): price = pricePerSquareMeter * area + 755; break;
              case (area <= 250): price = pricePerSquareMeter * area + 938; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1105; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1277; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 95000 && postcode <= 95999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 176; break;
              case (area <= 100): price = pricePerSquareMeter * area + 335; break;
              case (area <= 150): price = pricePerSquareMeter * area + 498; break;
              case (area <= 200): price = pricePerSquareMeter * area + 689; break;
              case (area <= 250): price = pricePerSquareMeter * area + 865; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1024; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1187; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 96000 && postcode <= 96999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 166; break;
              case (area <= 100): price = pricePerSquareMeter * area + 316; break;
              case (area <= 150): price = pricePerSquareMeter * area + 470; break;
              case (area <= 200): price = pricePerSquareMeter * area + 689; break;
              case (area <= 250): price = pricePerSquareMeter * area + 855; break;
              case (area <= 300): price = pricePerSquareMeter * area + 1005; break;
              case (area >= 300): price = pricePerSquareMeter * area + 1159; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 97000 && postcode <= 97999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 158; break;
              case (area <= 100): price = pricePerSquareMeter * area + 299; break;
              case (area <= 150): price = pricePerSquareMeter * area + 445; break;
              case (area <= 200): price = pricePerSquareMeter * area + 546; break;
              case (area <= 250): price = pricePerSquareMeter * area + 704; break;
              case (area <= 300): price = pricePerSquareMeter * area + 845; break;
              case (area >= 300): price = pricePerSquareMeter * area + 991; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          case (postcode >= 98000 && postcode <= 99999):
            switch (true) {
              case (area <= 50): price = pricePerSquareMeter * area + 198; break;
              case (area <= 100): price = pricePerSquareMeter * area + 352; break;
              case (area <= 150): price = pricePerSquareMeter * area + 516; break;
              default: alert('Ungültige Eingabe'); return;
            }
            break;

          // Ungültige Postleitzahl
          default:
            alert('Ungültige Postleitzahl. Bitte gib eine Postleitzahl zwischen 1067 und 99999 ein.');
            return;
        }

      // Weiterleitung zur Ergebnisseite mit den Parametern
      this.router.navigate(['/calculator-result'], { queryParams: { postcode, area, price } });
    });
  }
}



