import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule, TimelineModule, CardModule, ButtonModule],
  template: `
    <div class="how-it-works-page">
      <!-- Hero Section -->
      <section class="hero-section hero-background section-padding">
        <div class="container text-center">
          <h1 class="hero-title">
            How <span class="text-gradient">AI-Powered</span> Rescue Works
          </h1>
          <p class="hero-subtitle text-secondary">
            Experience the future of roadside assistance with our intelligent dispatch system
          </p>
        </div>
      </section>

      <!-- Process Timeline -->
      <section class="process-section section-padding">
        <div class="container">
          <div class="section-header text-center mb-5">
            <h2>Your Journey to Safety</h2>
            <p class="text-secondary">From emergency to resolution in minutes, not hours</p>
          </div>
          
          <p-timeline [value]="processSteps" align="alternate" styleClass="customized-timeline">
            <ng-template pTemplate="marker" let-step>
              <div class="timeline-marker">
                <i [class]="step.icon"></i>
              </div>
            </ng-template>
            
            <ng-template pTemplate="content" let-step let-i="index">
              <p-card [header]="step.title" class="timeline-card">
                <p class="text-secondary">{{ step.description }}</p>
                <div class="step-features">
                  <div *ngFor="let feature of step.features" class="feature-item">
                    <i class="pi pi-check text-gradient mr-2"></i>
                    <span>{{ feature }}</span>
                  </div>
                </div>
              </p-card>
            </ng-template>
          </p-timeline>
        </div>
      </section>

      <!-- AI Features -->
      <section class="ai-features-section section-padding">
        <div class="container">
          <div class="section-header text-center mb-5">
            <h2><span class="text-gradient">AI Intelligence</span> Behind the Service</h2>
            <p class="text-secondary">Advanced technology that makes all the difference</p>
          </div>
          
          <div class="ai-features-grid">
            <div *ngFor="let feature of aiFeatures" class="ai-feature-card fade-in">
              <div class="feature-icon">
                <i [class]="feature.icon"></i>
              </div>
              <h3>{{ feature.title }}</h3>
              <p class="text-secondary">{{ feature.description }}</p>
              <div class="feature-stats">
                <div class="stat">
                  <span class="stat-number text-gradient">{{ feature.stat }}</span>
                  <span class="stat-label">{{ feature.statLabel }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Mobile App Preview -->
      <section class="app-preview-section section-padding">
        <div class="container">
          <div class="section-header text-center mb-5">
            <h2>RoadRescueAI Mobile App</h2>
            <p class="text-secondary">Take control of your roadside emergency with our intelligent mobile app</p>
          </div>
          
          <div class="app-preview-content">
            <div class="app-screenshots">
              <div class="phone-mockup">
                <div class="screen">
                  <div class="app-interface">
                    <div class="app-header">
                      <h4>Emergency Request</h4>
                      <div class="status-indicator">
                        <i class="pi pi-circle-fill text-gradient"></i>
                        <span>AI Analyzing</span>
                      </div>
                    </div>
                    <div class="map-area">
                      <i class="pi pi-map-marker map-icon"></i>
                      <p>Locating nearest technician...</p>
                    </div>
                    <div class="request-details">
                      <div class="service-type">
                        <i class="pi pi-car mr-2"></i>
                        <span>Towing Service</span>
                      </div>
                      <div class="eta">
                        <i class="pi pi-clock mr-2"></i>
                        <span class="text-gradient">ETA: 15 minutes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="app-features">
              <h3>App Features</h3>
              <div class="feature-list">
                <div *ngFor="let feature of appFeatures" class="app-feature">
                  <div class="app-feature-icon">
                    <i [class]="feature.icon"></i>
                  </div>
                  <div class="app-feature-content">
                    <h4>{{ feature.title }}</h4>
                    <p class="text-secondary">{{ feature.description }}</p>
                  </div>
                </div>
              </div>
              
              <div class="download-buttons">
                <p-button 
                  label="Download for iOS" 
                  icon="pi pi-apple"
                  class="mr-3 mb-2"
                  size="large">
                </p-button>
                <p-button 
                  label="Download for Android" 
                  icon="pi pi-android"
                  severity="secondary"
                  size="large">
                </p-button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Technology Stack -->
      <section class="tech-section section-padding">
        <div class="container">
          <div class="section-header text-center mb-5">
            <h2>Powered by Advanced Technology</h2>
            <p class="text-secondary">The cutting-edge tech stack behind our AI-powered platform</p>
          </div>
          
          <div class="tech-grid">
            <div *ngFor="let tech of technologies" class="tech-card">
              <div class="tech-icon">
                <i [class]="tech.icon"></i>
              </div>
              <h4>{{ tech.name }}</h4>
              <p class="text-secondary">{{ tech.description }}</p>
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
      font-weight: 700;
      margin-bottom: 1.5rem;
    }

    .hero-subtitle {
      font-size: 1.3rem;
      max-width: 600px;
      margin: 0 auto;
    }

    :host ::ng-deep .customized-timeline .p-timeline-event-marker {
      background: var(--primary-color);
      border: 3px solid var(--surface-a);
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .timeline-marker i {
      color: white;
      font-size: 1.5rem;
    }

    .timeline-card {
      max-width: 400px;
      margin: 1rem 0;
    }

    .step-features {
      margin-top: 1.5rem;
    }

    .feature-item {
      display: flex;
      align-items: center;
      margin-bottom: 0.75rem;
    }

    .ai-features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .ai-feature-card {
      background: var(--surface-a);
      padding: 2.5rem;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      text-align: center;
    }

    .ai-feature-card .feature-icon {
      font-size: 3.5rem;
      color: var(--primary-color);
      margin-bottom: 1.5rem;
    }

    .ai-feature-card h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: white;
    }

    .feature-stats {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .stat-number {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      color: var(--text-color-secondary);
      font-size: 0.9rem;
    }

    .app-preview-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .phone-mockup {
      position: relative;
      width: 300px;
      height: 600px;
      background: #1a1a1a;
      border-radius: 30px;
      padding: 20px;
      margin: 0 auto;
      box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
    }

    .screen {
      width: 100%;
      height: 100%;
      background: var(--surface-a);
      border-radius: 20px;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
    }

    .app-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }

    .status-indicator {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
    }

    .map-area {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(0, 212, 255, 0.1);
      border-radius: 12px;
      margin-bottom: 2rem;
    }

    .map-icon {
      font-size: 3rem;
      color: var(--primary-color);
      margin-bottom: 1rem;
    }

    .request-details {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .service-type, .eta {
      display: flex;
      align-items: center;
      padding: 1rem;
      background: var(--surface-b);
      border-radius: 8px;
    }

    .app-features h3 {
      font-size: 2rem;
      margin-bottom: 2rem;
      color: white;
    }

    .feature-list {
      margin-bottom: 3rem;
    }

    .app-feature {
      display: flex;
      align-items: flex-start;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .app-feature-icon {
      font-size: 2rem;
      color: var(--secondary-color);
      width: 3rem;
      flex-shrink: 0;
    }

    .app-feature-content h4 {
      color: white;
      margin-bottom: 0.5rem;
    }

    .download-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .tech-card {
      background: var(--surface-a);
      padding: 2rem;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      text-align: center;
    }

    .tech-icon {
      font-size: 3rem;
      color: var(--secondary-color);
      margin-bottom: 1.5rem;
    }

    .tech-card h4 {
      color: white;
      margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }
      
      .app-preview-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .phone-mockup {
        width: 250px;
        height: 500px;
      }
    }
  `]
})
export class HowItWorksComponent {
  processSteps = [
    {
      icon: 'pi pi-mobile',
      title: 'Request Assistance',
      description: 'Use our mobile app or call our hotline to request help. Our AI instantly analyzes your location and situation.',
      features: [
        'One-tap emergency button',
        'Automatic location detection',
        'Vehicle information recognition',
        'Service type recommendation'
      ]
    },
    {
      icon: 'pi pi-search',
      title: 'AI Dispatch System',
      description: 'Our advanced AI finds the best technician for your specific needs and location within seconds.',
      features: [
        'Real-time technician availability',
        'Skill-based matching',
        'Traffic-optimized routing',
        'Estimated arrival time calculation'
      ]
    },
    {
      icon: 'pi pi-truck',
      title: 'Technician Dispatched',
      description: 'A certified professional is immediately dispatched to your location with the right tools and expertise.',
      features: [
        'GPS tracking enabled',
        'Direct communication channel',
        'Real-time ETA updates',
        'Pre-arrival diagnostics'
      ]
    },
    {
      icon: 'pi pi-wrench',
      title: 'Service Completion',
      description: 'Our expert resolves your issue efficiently and safely, getting you back on the road quickly.',
      features: [
        'Professional service delivery',
        'Quality assurance checks',
        'Digital payment processing',
        'Service feedback collection'
      ]
    }
  ];

  aiFeatures = [
    {
      icon: 'pi pi-eye',
      title: 'Intelligent Diagnostics',
      description: 'AI analyzes your vehicle symptoms and location to predict the exact issue and required tools.',
      stat: '95%',
      statLabel: 'Accuracy Rate'
    },
    {
      icon: 'pi pi-clock',
      title: 'Optimal Dispatch',
      description: 'Smart routing algorithms ensure the fastest possible response by factoring in traffic and technician location.',
      stat: '40%',
      statLabel: 'Faster Response'
    },
    {
      icon: 'pi pi-chart-line',
      title: 'Predictive Analytics',
      description: 'Machine learning predicts service demand and pre-positions resources for maximum efficiency.',
      stat: '30%',
      statLabel: 'Improved Coverage'
    }
  ];

  appFeatures = [
    {
      icon: 'pi pi-map',
      title: 'Live Tracking',
      description: 'Track your technician in real-time with accurate GPS location and ETA updates.'
    },
    {
      icon: 'pi pi-comments',
      title: 'Direct Communication',
      description: 'Chat or call your technician directly through the app for seamless coordination.'
    },
    {
      icon: 'pi pi-camera',
      title: 'Photo Documentation',
      description: 'Take photos of your vehicle issue to help technicians prepare the right tools.'
    },
    {
      icon: 'pi pi-credit-card',
      title: 'Seamless Payment',
      description: 'Pay securely through the app with saved payment methods and digital receipts.'
    },
    {
      icon: 'pi pi-history',
      title: 'Service History',
      description: 'Access your complete service history and easily request repeat services.'
    }
  ];

  technologies = [
    {
      icon: 'pi pi-desktop',
      name: 'Machine Learning',
      description: 'Advanced ML algorithms for demand prediction and optimal resource allocation.'
    },
    {
      icon: 'pi pi-map',
      name: 'GPS & IoT',
      description: 'Real-time location tracking and vehicle diagnostics through IoT sensors.'
    },
    {
      icon: 'pi pi-cloud',
      name: 'Cloud Infrastructure',
      description: 'Scalable cloud platform ensuring 99.9% uptime and global accessibility.'
    },
    {
      icon: 'pi pi-mobile',
      name: 'Mobile Technology',
      description: 'Native iOS and Android apps with offline capabilities and push notifications.'
    },
    {
      icon: 'pi pi-shield',
      name: 'Security & Privacy',
      description: 'End-to-end encryption and GDPR compliance for maximum data protection.'
    },
    {
      icon: 'pi pi-chart-line',
      name: 'Data Analytics',
      description: 'Real-time analytics dashboard for performance monitoring and optimization.'
    }
  ];
}