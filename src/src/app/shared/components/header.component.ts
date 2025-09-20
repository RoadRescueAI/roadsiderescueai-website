import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MenubarModule, ButtonModule],
  template: `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <!-- Logo Section -->
          <div class="logo-section">
            <a routerLink="/" class="logo-link">
              <img src="roadsiderescuelogoR.png" 
                   alt="RoadRescueAI" 
                   class="logo-image"/>
            </a>
          </div>

          <!-- Navigation -->
          <nav class="nav-section">
            <ul class="nav-links">
              <li *ngFor="let item of items">
                <a 
                  [routerLink]="item.routerLink" 
                  routerLinkActive="nav-link-active"
                  class="nav-link text-sm font-medium">
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </nav>

          <!-- Actions -->
          <div class="header-actions">
            <button class="btn btn-emergency btn-md">
              <i class="pi pi-phone"></i>
              <span>Emergency</span>
            </button>
            <button class="btn btn-secondary btn-md">
              <i class="pi pi-user"></i>
              <span>Sign in</span>
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button class="mobile-menu-btn" (click)="toggleMobileMenu()">
            <i class="pi" [ngClass]="mobileMenuOpen ? 'pi-times' : 'pi-bars'"></i>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div class="mobile-menu" [class.open]="mobileMenuOpen">
          <nav class="mobile-nav">
            <a *ngFor="let item of items" 
               [routerLink]="item.routerLink" 
               routerLinkActive="mobile-nav-active"
               class="mobile-nav-link text-md font-medium"
               (click)="closeMobileMenu()">
              <i [class]="item.icon"></i>
              {{ item.label }}
            </a>
          </nav>
          <div class="mobile-actions">
            <button class="btn btn-emergency btn-lg w-full mb-3">
              <i class="pi pi-phone"></i>
              <span>Emergency Help</span>
            </button>
            <button class="btn btn-secondary btn-lg w-full">
              <i class="pi pi-user"></i>
              <span>Sign in</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: sticky;
      top: 0;
      z-index: 1000;
      background-color: var(--bg-primary);
      border-bottom: 1px solid var(--border-secondary);
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 4rem;
      padding: 0;
    }

    /* Logo */
    .logo-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      transition: opacity 0.2s ease;
    }
    
    .logo-link:hover {
      opacity: 0.8;
    }

    .logo-image {
      height: 2.5rem;
      width: auto;
    }

    /* Navigation */
    .nav-section {
      flex: 1;
      display: flex;
      justify-content: center;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: var(--spacing-2);
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-link {
      display: flex;
      align-items: center;
      padding: var(--spacing-2) var(--spacing-4);
      color: var(--text-primary);
      text-decoration: none;
      border-radius: 0;
      transition: all 0.2s ease;
    }

    .nav-link:hover {
      color: var(--text-primary);
      background-color: var(--bg-elevated);
    }

    .nav-link-active {
      color: var(--text-primary) !important;
      background-color: var(--bg-elevated) !important;
      border-bottom: 2px solid var(--text-primary);
    }

    /* Header Actions */
    .header-actions {
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
    }

    /* Mobile Menu */
    .mobile-menu-btn {
      display: none;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      border: 1px solid var(--border-primary);
      border-radius: var(--radius-md);
      background-color: var(--bg-primary);
      color: var(--text-primary);
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 1.125rem;
    }

    .mobile-menu-btn:hover {
      background-color: var(--bg-secondary);
    }

    .mobile-menu {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: var(--bg-primary);
      border-bottom: 1px solid var(--border-secondary);
      transform: translateY(-100%);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }

    .mobile-menu.open {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }

    .mobile-nav {
      display: flex;
      flex-direction: column;
      padding: var(--spacing-4);
      border-bottom: 1px solid var(--border-tertiary);
    }

    .mobile-nav-link {
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
      padding: var(--spacing-4);
      color: var(--text-primary);
      text-decoration: none;
      border-radius: 0;
      transition: all 0.2s ease;
    }

    .mobile-nav-link:hover {
      color: var(--text-primary);
      background-color: var(--bg-elevated);
    }

    .mobile-nav-active {
      color: var(--text-primary) !important;
      background-color: var(--bg-elevated) !important;
    }

    .mobile-actions {
      padding: var(--spacing-4);
      display: flex;
      flex-direction: column;
    }

    /* Utility classes */
    .w-full {
      width: 100%;
    }

    .mb-3 {
      margin-bottom: var(--spacing-3);
    }

    /* Responsive */
    @media (max-width: 1024px) {
      .nav-section {
        display: none;
      }
      
      .mobile-menu-btn {
        display: flex;
      }
    }

    @media (max-width: 768px) {
      .header-content {
        height: 3.5rem;
      }
      
      .header-actions {
        display: none;
      }
      
      .mobile-menu-btn {
        display: flex;
      }
      
      .logo-image {
        height: 2rem;
      }
    }
  `]
})
export class HeaderComponent {
  mobileMenuOpen = false;

  items: MenuItem[] = [
    {
      label: 'Home',
      routerLink: '/',
      icon: 'pi pi-home'
    },
    {
      label: 'Services',
      routerLink: '/services',
      icon: 'pi pi-cog'
    },
    {
      label: 'How It Works',
      routerLink: '/how-it-works',
      icon: 'pi pi-question-circle'
    },
    {
      label: 'About',
      routerLink: '/about',
      icon: 'pi pi-info-circle'
    },
    {
      label: 'Contact',
      routerLink: '/contact',
      icon: 'pi pi-envelope'
    }
  ];

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}
