import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule, DividerModule],
  template: `
    <div class="landing-page">
      <!-- Hero Section -->
      <section class="hero-section section-padding">
        <div class="container">
          <div class="hero-content text-center">
            <div class="hero-badge mb-6">
              <span class="badge badge-lg">
                <i class="pi pi-sparkles"></i>
                AI-Powered Technology
              </span>
            </div>
            <h1 class="hero-title text-display-lg mb-6">
              Emergency Roadside Rescue<br>
              <span>When You Need It Most</span>
            </h1>
            <p class="hero-subtitle text-xl mb-8 max-w-2xl mx-auto">
              Get instant help with our AI-powered dispatch system. We connect you with certified technicians in under 15 minutes, anywhere you are.
            </p>
            <div class="hero-buttons mb-12">
              <button class="btn btn-primary btn-2xl mr-4 mb-4">
                <i class="pi pi-phone"></i>
                <span>Get Emergency Help</span>
              </button>
              <button class="btn btn-secondary btn-2xl mb-4">
                <i class="pi pi-play-circle"></i>
                <span>Watch How It Works</span>
              </button>
            </div>
            <div class="hero-stats">
              <div class="stat-item">
                <div class="stat-number">< 15min</div>
                <div class="stat-label">Avg Response</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">24/7</div>
                <div class="stat-label">Emergency Support</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">99.8%</div>
                <div class="stat-label">Success Rate</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">50K+</div>
                <div class="stat-label">Customers Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="services-section section-padding">
        <div class="container">
          <div class="section-header text-center mb-16">
            <div class="mb-4">
              <span class="badge badge-md">
                <i class="pi pi-cog"></i>
                Our Services
              </span>
            </div>
            <h2 class="text-display-md mb-6">Emergency Roadside Assistance</h2>
            <p class="text-lg max-w-3xl mx-auto">
              Professional roadside assistance powered by AI intelligence. Get back on the road faster with our certified technicians.
            </p>
          </div>
          
          <div class="services-grid">
            <div *ngFor="let service of services" class="service-card card card-interactive">
              <div class="service-header">
                <div class="service-icon-wrapper">
                  <i [class]="service.icon" class="service-icon"></i>
                </div>
                <div class="service-info">
                  <h3 class="text-lg font-semibold mb-2">{{ service.name }}</h3>
                  <p class="text-sm">{{ service.description }}</p>
                </div>
              </div>
              <div class="service-features">
                <span *ngFor="let feature of service.features" class="badge badge-sm">
                  {{ feature }}
                </span>
              </div>
              <div class="service-action mt-6">
                <button class="btn btn-tertiary btn-md w-full">
                  <span>Learn More</span>
                  <i class="pi pi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- How It Works Section -->
      <section class="how-it-works-section section-padding">
        <div class="container">
          <div class="section-header text-center mb-5">
            <h2>How AI Rescue Works</h2>
            <p>Three simple steps to get back on the road</p>
          </div>
          
          <div class="steps-grid">
            <div *ngFor="let step of steps; let i = index" class="step-card">
              <div class="step-number">{{ i + 1 }}</div>
              <div class="step-icon">
                <i [class]="step.icon"></i>
              </div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Trust Indicators Section -->
      <section class="trust-section section-padding">
        <div class="container">
          <div class="section-header text-center mb-5">
            <h2>Trusted by Thousands</h2>
            <p>Join the growing community of satisfied customers</p>
          </div>
          
          <div class="trust-grid">
            <div *ngFor="let indicator of trustIndicators" class="trust-card text-center">
              <div class="trust-icon">
                <i [class]="indicator.icon"></i>
              </div>
              <h3>{{ indicator.value }}</h3>
              <p>{{ indicator.label }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    /* Hero Section */
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      padding: var(--spacing-20) 0;
    }

    .hero-content {
      position: relative;
      z-index: 2;
    }

    .hero-badge {
      display: flex;
      justify-content: center;
    }

    .hero-buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: var(--spacing-4);
      flex-wrap: wrap;
    }

    .hero-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: var(--spacing-8);
      max-width: 600px;
      margin: 0 auto;
    }

    .stat-item {
      text-align: center;
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: var(--spacing-2);
    }

    .stat-label {
      font-size: 0.875rem;
      font-weight: 500;
      opacity: 0.9;
    }

    /* Services Section */
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: var(--spacing-6);
    }

    .service-card {
      padding: var(--spacing-8);
    }

    .service-header {
      display: flex;
      align-items: flex-start;
      gap: var(--spacing-4);
      margin-bottom: var(--spacing-6);
    }

    .service-icon-wrapper {
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--border-primary);
      border-radius: 0;
      flex-shrink: 0;
    }

    .service-icon {
      font-size: 1.5rem;
    }

    .service-info {
      flex: 1;
    }

    .service-features {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-2);
      margin-bottom: var(--spacing-6);
    }

    .steps-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 3rem;
    }

    .step-card {
      text-align: center;
      position: relative;
    }

    .step-number {
      position: absolute;
      top: -1rem;
      right: -1rem;
      background: var(--bg-surface);
      border: 1px solid var(--border-primary);
      color: var(--text-primary);
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }

    .step-icon {
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }

    .step-card h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .trust-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
    }

    .trust-card {
      padding: 2rem 1rem;
    }

    .trust-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .trust-card h3 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    /* Utility Classes */
    .max-w-2xl {
      max-width: 42rem;
    }
    
    .max-w-3xl {
      max-width: 48rem;
    }
    
    .mx-auto {
      margin-left: auto;
      margin-right: auto;
    }
    
    .mb-4 {
      margin-bottom: var(--spacing-4);
    }
    
    .mb-6 {
      margin-bottom: var(--spacing-6);
    }
    
    .mb-8 {
      margin-bottom: var(--spacing-8);
    }
    
    .mb-12 {
      margin-bottom: var(--spacing-12);
    }
    
    .mb-16 {
      margin-bottom: var(--spacing-16);
    }
    
    .mr-4 {
      margin-right: var(--spacing-4);
    }
    
    .mt-6 {
      margin-top: var(--spacing-6);
    }

    .w-full {
      width: 100%;
    }

    .text-center {
      text-align: center;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .hero-section {
        min-height: 80vh;
        padding: var(--spacing-16) 0;
      }
      
      .hero-buttons {
        flex-direction: column;
        align-items: stretch;
      }
      
      .hero-stats {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--spacing-6);
      }
      
      .stat-number {
        font-size: 2rem;
      }
      
      .services-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-4);
      }
    }
  `]
})
export class LandingComponent {
  services = [
    {
      name: 'Emergency Towing',
      icon: 'pi pi-car',
      description: 'Professional towing services to get your vehicle to safety or your preferred repair shop.',
      features: ['24/7 Available', 'GPS Tracking', 'Insured Drivers']
    },
    {
      name: 'Battery Jump Start',
      icon: 'pi pi-bolt',
      description: 'Quick battery jump start service to get you back on the road in minutes.',
      features: ['Fast Response', 'Modern Equipment', 'Safety First']
    },
    {
      name: 'Tire Change',
      icon: 'pi pi-circle',
      description: 'Expert tire change service for flats, blowouts, and emergency replacements.',
      features: ['Professional Tools', 'All Weather', 'Quality Service']
    },
    {
      name: 'Lockout Service',
      icon: 'pi pi-key',
      description: 'Safe vehicle unlocking service without damage to your car.',
      features: ['No Damage', 'Quick Access', 'Licensed Technicians']
    }
  ];

  steps = [
    {
      icon: 'pi pi-mobile',
      title: 'Request Help',
      description: 'Use our app or call to request assistance. AI analyzes your location and issue.'
    },
    {
      icon: 'pi pi-search',
      title: 'AI Dispatch',
      description: 'Our AI instantly finds and dispatches the nearest qualified technician to you.'
    },
    {
      icon: 'pi pi-wrench',
      title: 'Get Fixed',
      description: 'Certified technician arrives with the right tools to solve your problem quickly.'
    }
  ];

  trustIndicators = [
    {
      icon: 'pi pi-users',
      value: '50,000+',
      label: 'Customers Served'
    },
    {
      icon: 'pi pi-clock',
      value: '< 15min',
      label: 'Average Response'
    },
    {
      icon: 'pi pi-star',
      value: '4.9/5',
      label: 'Customer Rating'
    },
    {
      icon: 'pi pi-shield',
      value: '100%',
      label: 'Insured Service'
    }
  ];
}