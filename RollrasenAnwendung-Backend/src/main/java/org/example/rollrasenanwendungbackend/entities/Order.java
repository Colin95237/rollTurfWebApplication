package org.example.rollrasenanwendungbackend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "customer_order")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Der Name darf nicht leer sein.")
    @Size(max = 100, message = "Der Name darf maximal 100 Zeichen lang sein.")
    private String name;

    @NotBlank(message = "Die Adresse darf nicht leer sein.")
    @Size(max = 200, message = "Die Adresse darf maximal 200 Zeichen lang sein.")
    private String address;

    @NotBlank(message = "Die Postleitzahl darf nicht leer sein.")
    @Pattern(regexp = "\\d{5}", message = "Die Postleitzahl muss genau 5 Ziffern lang sein.")
    private String zipcode;

    @NotBlank(message = "Die Stadt darf nicht leer sein.")
    @Size(max = 100, message = "Die Stadt darf maximal 100 Zeichen lang sein.")
    private String city;

    @NotNull(message = "Der Gesamtpreis darf nicht null sein.")
    @Min(value = 0, message = "Der Gesamtpreis muss mindestens 0 sein.")
    @Column(name = "total_price")
    private double totalPrice;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<CartItem> items;
}

