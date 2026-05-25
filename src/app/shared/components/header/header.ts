import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {
  lastScrollTop = 0;
  isHeaderHidden = false;

  ngOnInit() {
    // Captura la posición inicial del scroll al cargar el componente
    this.lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  }

  // Escucha el evento de scroll de la ventana del navegador
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Solo aplica el comportamiento en móviles/tablets (pantallas menores o iguales a 992px)
    if (window.innerWidth <= 992) {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      // 1. Si está muy arriba (casi al inicio), se muestra siempre
      if (currentScroll <= 10) {
        this.isHeaderHidden = false;
      } 
      // 2. Si baja en la página, esconde el header
      else if (currentScroll > this.lastScrollTop) {
        this.isHeaderHidden = true;
      } 
      // 3. Si sube en la página, vuelve a mostrar el header
      else if (currentScroll < this.lastScrollTop) {
        this.isHeaderHidden = false;
      }

      // Sincroniza la posición actual (evitando valores negativos en iOS)
      this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    } else {
      // En PC se mantiene siempre visible
      this.isHeaderHidden = false;
    }
  }
}