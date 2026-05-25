import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // <-- Importamos ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Space, SpaceService } from '../../core/services/space.service';

@Component({
  selector: 'app-space-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './space-detail.html',
  styleUrls: ['./space-detail.css']
})
export class SpaceDetail implements OnInit {
  space: Space | undefined;

  // Variables para la simulación de reserva
  isReserving: boolean = false;
  isProcessing: boolean = false;
  reservationSuccess: boolean = false;
  startDate: string = '';
  endDate: string = '';

  constructor(
    private route: ActivatedRoute,
    private spaceService: SpaceService,
    private cdr: ChangeDetectorRef // <-- Lo inyectamos en el constructor
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.space = this.spaceService.getSpaceById(id);
    window.scrollTo(0, 0);
  }

  startReservation() {
    this.isReserving = true;
  }

  confirmReservation() {
    if (!this.startDate || !this.endDate) {
      alert('Por favor selecciona la fecha de inicio y fin para tu reserva.');
      return;
    }

    this.isProcessing = true;
    
    // Simulamos el retraso de 2 segundos
    setTimeout(() => {
      this.isProcessing = false;
      this.reservationSuccess = true;
      
      // <-- FORZAMOS a Angular a actualizar el HTML
      this.cdr.detectChanges(); 
    }, 2000);
  }

  resetReservation() {
    this.isReserving = false;
    this.reservationSuccess = false;
    this.startDate = '';
    this.endDate = '';
  }

  
}