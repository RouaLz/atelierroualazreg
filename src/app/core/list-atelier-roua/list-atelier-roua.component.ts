import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AtelierRoua } from '../../models/atelier-roua'; 
import { AtelierRouaLazregService } from '../../services/atelier-roua-lazreg.service';
@Component({
  selector: 'app-list-atelier-roua',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-atelier-roua.component.html',
  styleUrl: './list-atelier-roua.component.css'
})
export class ListAtelierRouaComponent {

  liste!: any;
  isEditing = false;
  showForm = false;
  selected: AtelierRoua | null = null;

constructor(private services: AtelierRouaLazregService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.liste = this.services.getAll();
  }

  openForm(item?: AtelierRoua): void {
    this.selected = item ? { ...item } : null;
    this.isEditing = !!item;
    this.showForm = true;
  }

  save(): void {
    if (this.selected) {
      if (this.isEditing && this.selected.id) {
        this.services.update(this.selected.id, this.selected);
      } else {
        this.services.add(this.selected);
      }
      this.load();
      this.closeForm();
    }
  }

  delete(id: string): void {
    if (confirm('Supprimer ?')) {
      this.services.delete(id);
      this.load();
    }
  }

  closeForm(): void {
    this.selected = null;
    this.showForm = false;
    this.isEditing = false;
  }
}

