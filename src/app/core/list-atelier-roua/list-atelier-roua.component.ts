import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AtelierRoua } from '../../models/atelier-roua'; 
import { AtelierRouaLazregService } from '../../services/atelier-roua-lazreg.service';
@Component({
  selector: 'app-list-atelier-roua',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './list-atelier-roua.component.html',
  styleUrl: './list-atelier-roua.component.css'
})
export class ListAtelierRouaComponent implements OnInit {

  liste: AtelierRoua[] = [];
  isEditing = false;
  showForm = false;
  selected: AtelierRoua = {
    nom: '',
    emailFormateur: '',
    nbrParticipant: 0,
    statut: false
  };

constructor(private services: AtelierRouaLazregService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.services.getAll().subscribe({
      next: (data: any) => {
        this.liste = Array.isArray(data) ? data : [];
      },
      error: (err) => {
        console.error('Erreur lors du chargement des ateliers:', err);
        this.liste = [];
      }
    });
  }

  openForm(item?: AtelierRoua): void {
    if (item) {
      this.selected = { ...item };
      this.isEditing = true;
    } else {
      this.selected = {
        nom: '',
        emailFormateur: '',
        nbrParticipant: 0,
        statut: false
      };
      this.isEditing = false;
    }
    this.showForm = true;
  }

  save(): void {
    if (this.selected && this.selected.nom) {
      if (this.isEditing && this.selected.id) {
        this.services.update(this.selected.id, this.selected).subscribe({
          next: () => {
            this.load();
            this.closeForm();
          },
          error: (err) => console.error('Erreur lors de la mise à jour:', err)
        });
      } else {
        this.services.add(this.selected).subscribe({
          next: () => {
            this.load();
            this.closeForm();
          },
          error: (err) => console.error('Erreur lors de l\'ajout:', err)
        });
      }
    }
  }

  delete(id: string): void {
    if (confirm('Supprimer ?')) {
      this.services.delete(id).subscribe({
        next: () => {
          this.load();
        },
        error: (err) => console.error('Erreur lors de la suppression:', err)
      });
    }
  }

  closeForm(): void {
    this.selected = {
      nom: '',
      emailFormateur: '',
      nbrParticipant: 0,
      statut: false
    };
    this.showForm = false;
    this.isEditing = false;
  }
}

