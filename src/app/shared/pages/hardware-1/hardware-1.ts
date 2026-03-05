import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-hardware-1',
  imports: [],
  templateUrl: './hardware-1.html',
  styleUrl: './hardware-1.css',
  standalone: true,
})
export class Hardware1 {
  private router = inject(Router);
  private content = inject(ContentService)

  localLogo = signal(this.content.getLocalLogoUrl());

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.scrolled.set(window.scrollY > 50);
      });
    }
  }

  scrolled = signal(false);
  mobileMenuOpen = signal(false);
}
