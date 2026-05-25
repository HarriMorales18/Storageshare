import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Space, SpaceService } from '../../core/services/space.service';

@Component({
  selector: 'app-search-spaces',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './search-spaces.html',
  styleUrls: ['./search-spaces.css']
})
export class SearchSpaces implements OnInit {
  spaces: Space[] = [];
  searchTerm: string = '';

  constructor(private spaceService: SpaceService) {}

  ngOnInit(): void {
    // Obtenemos todos los espacios
    this.spaces = this.spaceService.getFeaturedSpaces();
  }

  // Filtro interactivo
  get filteredSpaces() {
    return this.spaces.filter(space =>
      space.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}