import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-services',
  standalone: true,
imports: [CommonModule, CardModule, TableModule, ButtonModule, TagModule],
  template: `
    <div class="services-page">
      <!-- Hero Section -->
      <section class="hero-section section-padding">
        <div class="container text-center">
          <h1 class="hero-title">
            Our AI-Powered Services
          </h1>
          <p class="hero-subtitle">
            Comprehensive roadside assistance with cutting-edge AI technology and certified professionals
          </p>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="services-section section-padding">
        <div class="container">
          <div class="services-grid">
            <p-card *ngFor="let service of services" class="service-card">
              <ng-template pTemplate="header">
                <div class="service-header">
                  <div class="service-icon">
                    <i [class]="service.icon"></i>
                  </div>
                  <div class="service-price">
                    <span class="price-text">{{ service.price }}</span>
                  </div>
                </div>
              </ng-template>
              
              <div class="service-content">
                <h3 class="service-name">{{ service.name }}</h3>
                <p class="service-description">{{ service.description }}</p>
                
                <div class="service-features">
                  <h4>What's Included:</h4>
                  <ul>
                    <li *ngFor="let feature of service.features">
                      <i class="pi pi-check mr-2"></i>
                      {{ feature }}
                    </li>
                  </ul>
                </div>
                
                <div class="service-tags">
                  <p-tag 
                    *ngFor="let tag of service.tags" 
                    [value]="tag"
                    class="mr-2 mb-2">
                  </p-tag>
                </div>
              </div>
              
              <ng-template pTemplate="footer">
                <div class="service-actions">
                  <p-button 
                    label="Request Service" 
                    icon="pi pi-phone"
                    class="w-full">
                  </p-button>
                </div>
              </ng-template>
            </p-card>
          </div>
        </div>
      </section>

      <!-- Pricing Table -->
      <section class="pricing-section section-padding">
        <div class="container">
          <div class="section-header text-center mb-5">
            <h2>Transparent Pricing</h2>
            <p>No hidden fees, no surprises. Pay only for the services you need.</p>
          </div>
          
          <div class="pricing-table-container">
            <p-table 
              [value]="pricingData" 
              [tableStyle]="{'min-width': '50rem'}"
              styleClass="p-datatable-sm">
              
              <ng-template pTemplate="header">
                <tr>
                  <th>Service</th>
                  <th>Base Price</th>
                  <th>Response Time</th>
                  <th>Coverage</th>
                  <th>Action</th>
                </tr>
              </ng-template>
              
              <ng-template pTemplate="body" let-service>
                <tr>
                  <td>
                    <div class="service-cell">
                      <i [class]="service.icon" class="service-table-icon mr-2"></i>
                      <span>{{ service.name }}</span>
                    </div>
                  </td>
                  <td>
                    <span class="price-cell">{{ service.price }}</span>
                  </td>
                  <td>
                    <p-tag 
                      [value]="service.responseTime">
                    </p-tag>
                  </td>
                  <td>{{ service.coverage }}</td>
                  <td>
                    <p-button 
                      icon="pi pi-phone" 
                      size="small"
                      [text]="true"
                      label="Call Now">
                    </p-button>
                  </td>
                </tr>
              </ng-template>
            </p-table>
          </div>
        </div>
      </section>

      <!-- Coverage Map Section -->
      <section class="coverage-section section-padding">
        <div class="container">
          <div class="section-header text-center mb-5">
            <h2>Service Coverage Areas</h2>
            <p>We're expanding our AI-powered network across major metropolitan areas</p>
          </div>
          
          <div class="coverage-content">
            <div class="coverage-map">
              <div class="map-placeholder">
                <i class="pi pi-map-marker map-icon"></i>
                <p>Interactive Coverage Map</p>
                <small>Currently serving 50+ cities nationwide</small>
              </div>
            </div>
            
            <div class="coverage-stats">
              <div class="stat-card">
                <div class="stat-icon">
                  <i class="pi pi-map"></i>
                </div>
                <div class="stat-content">
                  <h3>50+</h3>
                  <p>Cities Covered</p>
                </div>
              </div>
              
              <div class="stat-card">
                <div class="stat-icon">
                  <i class="pi pi-users"></i>
                </div>
                <div class="stat-content">
                  <h3>1,000+</h3>
                  <p>Certified Technicians</p>
                </div>
              </div>
              
              <div class="stat-card">
                <div class="stat-icon">
                  <i class="pi pi-clock"></i>
                </div>
                <div class="stat-content">
                  <h3>24/7</h3>
                  <p>Emergency Response</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section section-padding">
        <div class="container">
          <div class="section-header text-center mb-5">
            <h2>Frequently Asked Questions</h2>
            <p>Get answers to common questions about our services</p>
          </div>
          
          <div class="faq-list">
            <div *ngFor="let faq of faqs; let i = index" class="faq-item">
              <h4 class="faq-question">{{ faq.question }}</h4>
              <p class="faq-answer">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .hero-section {
      padding: 6rem 0 4rem;
    }

    .hero-title {
      font-size: 3rem;
      font-weight: 300;
      margin-bottom: 1.5rem;
    }

    .hero-subtitle {
      font-size: 1.3rem;
      max-width: 600px;
      margin: 0 auto;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .service-card {
      height: 100%;
    }

    .service-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem;
      border-bottom: 1px solid var(--border-secondary);
    }

    .service-icon {
      font-size: 3rem;
    }

    .service-price {
      font-size: 1.5rem;
      font-weight: 500;
    }

    .service-content {
      padding: 1.5rem;
    }

    .service-name {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .service-description {
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .service-features h4 {
      margin-bottom: 1rem;
    }

    .service-features ul {
      list-style: none;
      padding: 0;
      margin-bottom: 2rem;
    }

    .service-features li {
      padding: 0.5rem 0;
      display: flex;
      align-items: center;
    }

    .service-tags {
      margin-top: 1rem;
    }

    .service-actions {
      padding: 1rem 1.5rem;
    }

    .pricing-table-container {
      border: 1px solid var(--border-secondary);
      border-radius: 0;
      padding: 2rem;
    }

    .service-cell {
      display: flex;
      align-items: center;
    }

    .service-table-icon {
      font-size: 1.2rem;
    }

    .price-cell {
      font-weight: 500;
    }

    .coverage-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3rem;
      align-items: center;
    }

    .map-placeholder {
      border: 1px solid var(--border-secondary);
      border-radius: 0;
      padding: 4rem 2rem;
      text-align: center;
      min-height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .map-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .coverage-stats {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .stat-card {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding: 2rem;
      border: 1px solid var(--border-secondary);
      border-radius: 0;
    }

    .stat-icon {
      font-size: 2.5rem;
    }

    .stat-content h3 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    .stat-content p {
      margin: 0;
    }

    .faq-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .faq-item {
      border: 1px solid var(--border-secondary);
      border-radius: 0;
      padding: 1.5rem;
    }

    .faq-question {
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    .faq-answer {
      line-height: 1.6;
      margin: 0;
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }
      
      .services-grid {
        grid-template-columns: 1fr;
      }
      
      .coverage-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .coverage-stats {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      name: 'Emergency Towing',
      icon: 'pi pi-car',
      price: 'From $79',
      description: 'Professional towing services available 24/7 to transport your vehicle safely to your destination.',
      features: [
        'GPS tracking of tow truck',
        'Fully insured and licensed drivers',
        'Damage-free towing guaranteed',
        'Up to 10 miles included',
        'Real-time ETA updates'
      ],
      tags: ['24/7', 'GPS Tracked', 'Insured'],
      emergency: true
    },
    {
      name: 'Battery Jump Start',
      icon: 'pi pi-bolt',
      price: 'From $49',
      description: 'Quick and safe battery jump start service to get your vehicle running again.',
      features: [
        'Professional grade equipment',
        'Battery health diagnostics',
        'Safety protocols followed',
        'Same-day service',
        'Battery replacement available'
      ],
      tags: ['Fast', 'Safe', 'Diagnostic'],
      emergency: false
    },
    {
      name: 'Tire Change Service',
      icon: 'pi pi-circle',
      price: 'From $59',
      description: 'Expert tire changing service for flats, blowouts, and emergency replacements.',
      features: [
        'Professional tire tools',
        'Proper torque specifications',
        'Tire pressure check',
        'Spare tire installation',
        'Tire disposal service'
      ],
      tags: ['Professional', 'Quick', 'Safe'],
      emergency: false
    },
    {
      name: 'Vehicle Lockout',
      icon: 'pi pi-key',
      price: 'From $69',
      description: 'Safe and damage-free vehicle unlocking service by certified technicians.',
      features: [
        'No damage guarantee',
        'Licensed professionals',
        'All vehicle makes/models',
        'Key cutting available',
        'Emergency access'
      ],
      tags: ['No Damage', 'Licensed', 'Emergency'],
      emergency: false
    },
    {
      name: 'Fuel Delivery',
      icon: 'pi pi-shopping-cart',
      price: 'From $39',
      description: 'Emergency fuel delivery service when you\'re stranded with an empty tank.',
      features: [
        'Premium fuel quality',
        'Emergency delivery',
        'Multiple fuel types',
        'Safe handling procedures',
        'Payment on delivery'
      ],
      tags: ['Premium', 'Emergency', 'Safe'],
      emergency: false
    },
    {
      name: 'Winch Out Service',
      icon: 'pi pi-arrows-alt',
      price: 'From $129',
      description: 'Professional winch-out service for vehicles stuck in mud, snow, or ditches.',
      features: [
        'Heavy-duty winch equipment',
        'Experienced operators',
        'Damage prevention',
        'All-terrain capability',
        'Safety assessment'
      ],
      tags: ['Heavy Duty', 'All Terrain', 'Expert'],
      emergency: true
    }
  ];

  pricingData = [
    { name: 'Towing (Local)', icon: 'pi pi-car', price: '$79-$149', responseTime: '< 30min', coverage: 'All Areas' },
    { name: 'Jump Start', icon: 'pi pi-bolt', price: '$49-$79', responseTime: '< 20min', coverage: 'All Areas' },
    { name: 'Tire Change', icon: 'pi pi-circle', price: '$59-$99', responseTime: '< 25min', coverage: 'All Areas' },
    { name: 'Lockout', icon: 'pi pi-key', price: '$69-$119', responseTime: '< 30min', coverage: 'All Areas' },
    { name: 'Fuel Delivery', icon: 'pi pi-shopping-cart', price: '$39-$59', responseTime: '< 45min', coverage: 'Metro Areas' },
    { name: 'Winch Out', icon: 'pi pi-arrows-alt', price: '$129-$299', responseTime: '< 60min', coverage: 'All Areas' }
  ];

  faqs = [
    {
      question: 'How quickly can you respond to my emergency?',
      answer: 'Our AI dispatch system typically connects you with the nearest available technician within 15-30 minutes, depending on your location and the type of service needed. Emergency services like towing may take up to 45 minutes in remote areas.'
    },
    {
      question: 'Are your technicians certified and insured?',
      answer: 'Yes, all our technicians are fully certified, licensed, and insured. They undergo rigorous background checks and continuous training to ensure the highest quality of service and safety standards.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, and digital payment methods including Apple Pay and Google Pay. Payment is typically processed after the service is completed to your satisfaction.'
    },
    {
      question: 'Do you provide services outside normal business hours?',
      answer: 'Yes, we operate 24/7, 365 days a year. Our AI-powered dispatch system ensures that emergency services are available at any time, including weekends and holidays.'
    },
    {
      question: 'How do I track my service request?',
      answer: 'Once you place a service request, you\'ll receive real-time updates via SMS and our mobile app. You can track your assigned technician\'s location, estimated arrival time, and communicate directly with them if needed.'
    },
    {
      question: 'What if my vehicle needs to be towed to a specific location?',
      answer: 'We can tow your vehicle to any location within our service area, including your preferred repair shop, dealership, or home. Additional mileage charges may apply for distances beyond the included radius.'
    }
  ];

}