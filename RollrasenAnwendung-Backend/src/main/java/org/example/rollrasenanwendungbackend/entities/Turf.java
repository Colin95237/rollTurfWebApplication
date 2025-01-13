package org.example.rollrasenanwendungbackend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Turf {
    @Id
    @GeneratedValue
    private Long id;

    @NotBlank(message = "Der Name darf nicht leer sein.")
    @Size(max = 100, message = "Der Name darf maximal 100 Zeichen lang sein.")
    private String name;

    @Size(max = 500, message = "Die Beschreibung darf maximal 500 Zeichen lang sein.")
    private String description;

    @Min(value = 0, message = "Der Preis pro Quadratmeter muss mindestens 0 sein.")
    private double pricePerSquareMeter;

    @OneToMany(mappedBy = "turf", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<CartItem> cartItems;
}
