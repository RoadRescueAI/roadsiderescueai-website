import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, DividerModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="logo-section">
              <img src="roadsiderescuelogoR.png" alt="RoadRescueAI" class="logo-img" />
            </div>
            <p class="footer-description">
              AI-powered roadside assistance that gets you back on the road faster than ever before.
            </p>
            <div class="emergency-info">
              <p class="emergency-number">
                <i class="pi pi-phone mr-2"></i>
                <span>1-800-RESCUE-AI</span>
              </p>
              <p class="emergency-label">24/7 Emergency Hotline</p>
            </div>
          </div>

          <div class="footer-section">
            <h4>Services</h4>
            <ul class="footer-links">
              <li><a routerLink="/services">Emergency Towing</a></li>
              <li><a routerLink="/services">Battery Jump Start</a></li>
              <li><a routerLink="/services">Tire Change</a></li>
              <li><a routerLink="/services">Lockout Service</a></li>
              <li><a routerLink="/services">Fuel Delivery</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Company</h4>
            <ul class="footer-links">
              <li><a routerLink="/about">About Us</a></li>
              <li><a routerLink="/how-it-works">How It Works</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Support</h4>
            <ul class="footer-links">
              <li><a routerLink="/contact">Contact Us</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Safety</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Connect</h4>
            <div class="social-links">
              <p-button 
                icon="pi pi-facebook" 
                [rounded]="true" 
                [outlined]="true" 
                size="small"
                class="social-btn">
              </p-button>
              <p-button 
                icon="pi pi-twitter" 
                [rounded]="true" 
                [outlined]="true" 
                size="small"
                class="social-btn">
              </p-button>
              <p-button 
                icon="pi pi-linkedin" 
                [rounded]="true" 
                [outlined]="true" 
                size="small"
                class="social-btn">
              </p-button>
              <p-button 
                icon="pi pi-instagram" 
                [rounded]="true" 
                [outlined]="true" 
                size="small"
                class="social-btn">
              </p-button>
            </div>
            <div class="app-links">
              <p class="app-text text-secondary">Download our app</p>
              <div class="app-buttons">
                <img src="https://via.placeholder.com/120x40/1E1E1E/00D4FF?text=App+Store" alt="Download on App Store" class="app-store-btn" />
                <img src="https://via.placeholder.com/120x40/1E1E1E/00D4FF?text=Google+Play" alt="Get it on Google Play" class="app-store-btn" />
              </div>
            </div>
          </div>
        </div>

        <p-divider></p-divider>

        <div class="footer-bottom">
          <div class="copyright text-secondary">
            <p>&copy; {{ currentYear }} RoadRescueAI. All rights reserved.</p>
          </div>
          <div class="certifications">
            <span class="cert-badge">
              <i class="pi pi-shield mr-1"></i>
              SSL Secured
            </span>
            <span class="cert-badge">
              <i class="pi pi-verified mr-1"></i>
              Insured & Licensed
            </span>
            <span class="cert-badge">
              <i class="pi pi-star mr-1"></i>
              BBB Accredited
            </span>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--bg-primary);
      border-top: 1px solid var(--border-secondary);
      padding: 4rem 0 2rem;
      margin-top: 4rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
      gap: 3rem;
      margin-bottom: 2rem;
    }

    .footer-section h4 {
      color: var(--text-primary);
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
      font-weight: 500;
    }

    .logo-section {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }

    .logo-img {
      height: 3rem;
      width: auto;
    }

    .footer-description {
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .emergency-info {
      background-color: var(--bg-elevated);
      padding: 1.5rem;
      border-radius: 0;
      border: 1px solid var(--border-secondary);
    }

    .emergency-number {
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      color: var(--text-primary);
    }

    .emergency-label {
      font-size: 0.9rem;
      color: var(--text-secondary);
    }

    .footer-links {
      list-style: none;
      padding: 0;
    }

    .footer-links li {
      margin-bottom: 0.75rem;
    }

    .footer-links a {
      color: var(--text-secondary);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: var(--text-primary);
    }

    .social-links {
      display: flex;
      gap: 0.75rem;
      margin-bottom: 2rem;
    }

    .social-btn {
      width: 40px;
      height: 40px;
    }

    .app-links {
      margin-top: 1.5rem;
    }

    .app-text {
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }

    .app-buttons {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .app-store-btn {
      border-radius: 6px;
      transition: opacity 0.3s ease;
      cursor: pointer;
    }

    .app-store-btn:hover {
      opacity: 0.8;
    }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;
    }

    .certifications {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
    }

    .cert-badge {
      display: flex;
      align-items: center;
      background: var(--bg-elevated);
      color: var(--text-primary);
      padding: 0.5rem 1rem;
      border-radius: 0;
      font-size: 0.85rem;
      border: 1px solid var(--border-secondary);
    }

    @media (max-width: 1024px) {
      .footer-content {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }
      
      .footer-bottom {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }
      
      .certifications {
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}