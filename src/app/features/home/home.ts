import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Space, SpaceService } from '../../core/services/space.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  featuredSpaces: Space[] = [];
  
  // Beneficios basados en tu documento
  benefits = ['Seguro', 'Flexible', 'Económico', 'Cercano'];

  constructor(private spaceService: SpaceService) {}

  ngOnInit(): void {
    this.featuredSpaces = this.spaceService.getFeaturedSpaces();
  }
}