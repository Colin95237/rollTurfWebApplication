package org.example.rollrasenanwendungbackend.controller;

import jakarta.persistence.EntityNotFoundException;
import org.example.rollrasenanwendungbackend.entities.Turf;
import org.example.rollrasenanwendungbackend.repositories.TurfRepository;
import org.example.rollrasenanwendungbackend.services.TurfService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/turfs")
@CrossOrigin(origins = "http://localhost:4200/")
public class TurfController {
    private final TurfService turfService;

    public TurfController(TurfService turfService, TurfRepository turfRepository) {
        this.turfService = turfService;
    }

    // 1. Alle Turfs abrufen
    @GetMapping
    public List<Turf> getAllTurfs() {
        return turfService.getAllTurfs();
    }

    // 2. Ein Turf erstellen
    @PostMapping
    public ResponseEntity<Turf> createTurf(@RequestBody Turf turf) {
        Turf createdTurf = turfService.createTurf(turf);
        return ResponseEntity.ok(createdTurf);
    }

    // 3. Ein Turf nach ID abrufen
    @GetMapping("/{id}")
    public ResponseEntity<Turf> getTurfById(@PathVariable Long id) {
        Optional<Turf> turf = turfService.getTurfById(id);
        return turf.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // 4. Ein Turf aktualisieren
    @PutMapping("/{id}")
    public ResponseEntity<Turf> updateTurf(@PathVariable Long id, @RequestBody Turf updatedTurf) {
        try {
            Turf turf = turfService.updateTurf(id, updatedTurf);
            return ResponseEntity.ok(turf);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // 5. Ein Turf löschen
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTurf(@PathVariable Long id) {
        try {
            turfService.deleteTurf(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }


    @GetMapping("/{id}/price")
    public double getPricePerSquareMeter(@PathVariable Long id) {
        Turf turf = turfService.getTurfById(id)
                .orElseThrow(() -> new EntityNotFoundException("Turf not found for this id :: " + id));
        return turf.getPricePerSquareMeter();
    }
}

