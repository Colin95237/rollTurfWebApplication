package org.example.rollrasenanwendungbackend.services;

import org.example.rollrasenanwendungbackend.entities.Turf;
import org.example.rollrasenanwendungbackend.repositories.TurfRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TurfService {
    private final TurfRepository turfRepository;

    public TurfService(TurfRepository turfRepository) {
        this.turfRepository = turfRepository;
    }

    // Methode zum Abrufen aller Turfs
    public List<Turf> getAllTurfs() {
        return turfRepository.findAll();
    }

    // Methode zum Erstellen eines neuen Turf
    public Turf createTurf(Turf turf) {
        return turfRepository.save(turf);
    }

    // Methode zum Abrufen eines Turf nach ID
    public Optional<Turf> getTurfById(Long id) {
        return turfRepository.findById(id);
    }

    // Methode zum Aktualisieren eines bestehenden Turf
    public Turf updateTurf(Long id, Turf updatedTurf) {
        if (turfRepository.existsById(id)) {
            updatedTurf.setId(id);  // ID setzen, damit die Entität aktualisiert wird
            return turfRepository.save(updatedTurf);
        } else {
            throw new RuntimeException("Turf with ID " + id + " does not exist");
        }
    }

    // Methode zum Löschen eines Turf
    public void deleteTurf(Long id) {
        if (turfRepository.existsById(id)) {
            turfRepository.deleteById(id);
        } else {
            throw new RuntimeException("Turf with ID " + id + " does not exist");
        }
    }
}
