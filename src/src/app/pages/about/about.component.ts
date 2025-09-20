import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, DividerModule],
  template: `
    <div class="about-page">
      <!-- Hero Section -->
      <section class="hero-section hero-background section-padding">
        <div class="container text-center">
          <h1 class="hero-title">
            About <span class="text-gradient">RoadRescueAI</span>
          </h1>
          <p class="hero-subtitle text-secondary">
            Revolutionizing roadside assistance through artificial intelligence and human expertise
          </p>
        </div>
      </section>

      <!-- Company Story -->
      <section class="story-section section-padding">
        <div class="container">
          <div class="story-content">
            <div class="story-text">
              <h2>Our Mission</h2>
              <p class="lead text-secondary">
                We're on a mission to eliminate the stress and uncertainty of roadside emergencies by combining cutting-edge AI technology with certified professional service.
              </p>
              <p class="text-secondary">
                Founded in 2020, RoadRescueAI was born from a simple observation: traditional roadside assistance was too slow, unreliable, and unpredictable. Our founders, having experienced countless frustrating breakdowns themselves, envisioned a world where help would arrive quickly, predictably, and with the exact expertise needed to solve your problem.
              </p>
              <p class="text-secondary">
                Today, we've served over 50,000 customers across major metropolitan areas, maintaining a 99.8% success rate and an average response time of under 15 minutes. Our AI-powered platform has revolutionized the industry, setting new standards for speed, reliability, and customer satisfaction.
              </p>
            </div>
            <div class="story-stats">
              <div class="stat-card">
                <h3 class="text-gradient">50,000+</h3>
                <p>Customers Served</p>
              </div>
              <div class="stat-card">
                <h3 class="text-gradient">99.8%</h3>
                <p>Success Rate</p>
              </div>
              <div class="stat-card">
                <h3 class="text-gradient">< 15min</h3>
                <p>Avg Response Time</p>
              </div>
              <div class="stat-card">
                <h3 class="text-gradient">24/7</h3>
                <p>Emergency Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="team-section section-padding">
        <div class="container">
          <div class="section-header text-center mb-5">
            <h2>Meet Our Leadership Team</h2>
            <p class="text-secondary">The visionaries behind RoadRescueAI's innovative platform</p>
          </div>
          
          <div class="team-grid">
            <p-card *ngFor="let member of teamMembers" class="team-card fade-in">
              <div class="team-member">
                <div class="member-photo">
                  <img [src]="member.photo" [alt]="member.name" />
                </div>
                <div class="member-info">
                  <h3>{{ member.name }}</h3>
                  <p class="member-title text-gradient">{{ member.title }}</p>
                  <p class="member-bio text-secondary">{{ member.bio }}</p>
                  <div class="member-social">
                    <p-button 
                      icon="pi pi-linkedin" 
                      [rounded]="true" 
                      [text]="true" 
                      size="small">
                    </p-button>
                    <p-button 
                      icon="pi pi-twitter" 
                      [rounded]="true" 
                      [text]="true" 
                      size="small">
                    </p-button>
                  </div>
                </div>
              </div>
            </p-card>
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="values-section section-padding">
        <div class="container">
          <div class="section-header text-center mb-5">
            <h2>Our Core Values</h2>
            <p class="text-secondary">The principles that guide everything we do</p>
          </div>
          
          <div class="values-grid">
            <div *ngFor="let value of values" class="value-card fade-in">
              <div class="value-icon">
                <i [class]="value.icon"></i>
              </div>
              <h3>{{ value.title }}</h3>
              <p class="text-secondary">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Technology Section -->
      <section class="technology-section section-padding">
        <div class="container">
          <div class="section-header text-center mb-5">
            <h2>Our <span class="text-gradient">Technology</span> Stack</h2>
            <p class="text-secondary">Built on industry-leading technologies and partnerships</p>
          </div>
          
          <div class="tech-showcase">
            <div class="tech-categories">
              <div *ngFor="let category of techStack" class="tech-category">
                <h3>{{ category.name }}</h3>
                <div class="tech-items">
                  <div *ngFor="let tech of category.technologies" class="tech-item">
                    <div class="tech-logo">
                      <i [class]="tech.icon"></i>
                    </div>
                    <div class="tech-info">
                      <h4>{{ tech.name }}</h4>
                      <p class="text-secondary">{{ tech.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Partnerships Section -->
      <section class="partnerships-section section-padding">
        <div class="container">
          <div class="section-header text-center mb-5">
            <h2>Strategic Partnerships</h2>
            <p class="text-secondary">Collaborating with industry leaders to deliver exceptional service</p>
          </div>
          
          <div class="partnerships-grid">
            <div *ngFor="let partner of partnerships" class="partner-card">
              <div class="partner-logo">
                <i [class]="partner.icon"></i>
              </div>
              <h4>{{ partner.name }}</h4>
              <p class="text-secondary">{{ partner.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Careers CTA -->
      <section class="careers-section section-padding">
        <div class="container">
          <div class="careers-content">
            <div class="careers-text">
              <h2>Join Our Team</h2>
              <p class="text-secondary">
                We're always looking for talented individuals who share our passion for innovation and customer service. 
                Join us in revolutionizing the roadside assistance industry.
              </p>
              <div class="careers-benefits">
                <div class="benefit">
                  <i class="pi pi-heart text-gradient mr-2"></i>
                  <span>Comprehensive health benefits</span>
                </div>
                <div class="benefit">
                  <i class="pi pi-home text-gradient mr-2"></i>
                  <span>Remote-first work culture</span>
                </div>
                <div class="benefit">
                  <i class="pi pi-star text-gradient mr-2"></i>
                  <span>Stock options and equity</span>
                </div>
                <div class="benefit">
                  <i class="pi pi-calendar text-gradient mr-2"></i>
                  <span>Flexible PTO policy</span>
                </div>
              </div>
            </div>
            <div class="careers-action">
              <p-button 
                label="View Open Positions" 
                icon="pi pi-external-link"
                size="large"
                class="careers-btn">
              </p-button>
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

    .story-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .story-text h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      color: white;
    }

    .lead {
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: 2rem;
      line-height: 1.7;
    }

    .story-text p {
      margin-bottom: 1.5rem;
      line-height: 1.7;
    }

    .story-stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .stat-card {
      background: var(--surface-a);
      padding: 2rem;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      text-align: center;
    }

    .stat-card h3 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    .stat-card p {
      color: var(--text-color-secondary);
      margin: 0;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .team-member {
      text-align: center;
    }

    .member-photo {
      margin-bottom: 1.5rem;
    }

    .member-photo img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid var(--primary-color);
    }

    .member-info h3 {
      color: white;
      margin-bottom: 0.5rem;
    }

    .member-title {
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .member-bio {
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .member-social {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .value-card {
      background: var(--surface-a);
      padding: 2.5rem;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      text-align: center;
    }

    .value-icon {
      font-size: 3.5rem;
      color: var(--secondary-color);
      margin-bottom: 1.5rem;
    }

    .value-card h3 {
      color: white;
      margin-bottom: 1rem;
    }

    .tech-categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 3rem;
    }

    .tech-category h3 {
      color: white;
      font-size: 1.5rem;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid var(--primary-color);
    }

    .tech-items {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .tech-item {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      background: var(--surface-a);
      padding: 1.5rem;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .tech-logo {
      font-size: 2.5rem;
      color: var(--primary-color);
      width: 4rem;
      text-align: center;
      flex-shrink: 0;
    }

    .tech-info h4 {
      color: white;
      margin-bottom: 0.5rem;
    }

    .partnerships-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .partner-card {
      background: var(--surface-a);
      padding: 2rem;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      text-align: center;
    }

    .partner-logo {
      font-size: 3rem;
      color: var(--primary-color);
      margin-bottom: 1.5rem;
    }

    .partner-card h4 {
      color: white;
      margin-bottom: 1rem;
    }

    .careers-content {
      background: var(--surface-a);
      padding: 4rem;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3rem;
      align-items: center;
    }

    .careers-text h2 {
      color: white;
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    .careers-text > p {
      font-size: 1.1rem;
      line-height: 1.7;
      margin-bottom: 2rem;
    }

    .careers-benefits {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .benefit {
      display: flex;
      align-items: center;
      color: var(--text-color-secondary);
    }

    .careers-action {
      text-align: center;
    }

    .careers-btn {
      width: 100%;
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }
      
      .story-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .story-stats {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }
      
      .tech-categories {
        grid-template-columns: 1fr;
      }
      
      .careers-content {
        grid-template-columns: 1fr;
        padding: 2rem;
      }
      
      .careers-benefits {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'Sarah Chen',
      title: 'CEO & Co-Founder',
      bio: 'Former Tesla executive with 15 years in automotive technology and AI. Led the development of autonomous vehicle dispatch systems.',
      photo: 'https://via.placeholder.com/150x150/1E1E1E/00D4FF?text=SC'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'CTO & Co-Founder',
      bio: 'Ex-Google AI researcher specializing in machine learning and predictive analytics. PhD in Computer Science from Stanford.',
      photo: 'https://via.placeholder.com/150x150/1E1E1E/FF6B35?text=MR'
    },
    {
      name: 'Jennifer Kim',
      title: 'VP of Operations',
      bio: 'Former Uber operations leader with expertise in scaling on-demand services. Masters in Operations Research from MIT.',
      photo: 'https://via.placeholder.com/150x150/1E1E1E/00D4FF?text=JK'
    },
    {
      name: 'David Thompson',
      title: 'Head of Customer Success',
      bio: '20+ years in automotive services and customer experience. Previously led customer operations at AAA nationwide.',
      photo: 'https://via.placeholder.com/150x150/1E1E1E/FF6B35?text=DT'
    }
  ];

  values = [
    {
      icon: 'pi pi-bolt',
      title: 'Speed & Efficiency',
      description: 'We believe time matters most in emergencies. Our AI-powered dispatch ensures the fastest possible response times.'
    },
    {
      icon: 'pi pi-shield',
      title: 'Safety First',
      description: 'Every decision we make prioritizes the safety of our customers and technicians above all else.'
    },
    {
      icon: 'pi pi-heart',
      title: 'Customer Obsession',
      description: 'We go above and beyond to exceed expectations and turn stressful situations into positive experiences.'
    },
    {
      icon: 'pi pi-cog',
      title: 'Innovation',
      description: 'We continuously push the boundaries of technology to create better solutions for roadside assistance.'
    },
    {
      icon: 'pi pi-users',
      title: 'Transparency',
      description: 'Honest communication, fair pricing, and clear expectations in every interaction with our customers.'
    },
    {
      icon: 'pi pi-globe',
      title: 'Accessibility',
      description: 'Quality roadside assistance should be available to everyone, everywhere, at any time.'
    }
  ];

  techStack = [
    {
      name: 'AI & Machine Learning',
      technologies: [
        { name: 'TensorFlow', icon: 'pi pi-chart-line', description: 'Deep learning for demand prediction' },
        { name: 'AWS SageMaker', icon: 'pi pi-cloud', description: 'ML model training and deployment' },
        { name: 'Apache Spark', icon: 'pi pi-database', description: 'Big data processing and analytics' }
      ]
    },
    {
      name: 'Backend & Infrastructure',
      technologies: [
        { name: 'Node.js', icon: 'pi pi-server', description: 'Scalable server-side applications' },
        { name: 'Docker & Kubernetes', icon: 'pi pi-box', description: 'Containerization and orchestration' },
        { name: 'Redis', icon: 'pi pi-database', description: 'In-memory data caching' }
      ]
    }
  ];

  partnerships = [
    {
      name: 'Insurance Partners',
      icon: 'pi pi-shield',
      description: 'Direct billing with major insurance providers for seamless claim processing'
    },
    {
      name: 'Automotive OEMs',
      icon: 'pi pi-car',
      description: 'Integrated partnerships with vehicle manufacturers for enhanced diagnostics'
    },
    {
      name: 'Fleet Management',
      icon: 'pi pi-truck',
      description: 'Enterprise solutions for commercial fleet operators and logistics companies'
    },
    {
      name: 'Technology Partners',
      icon: 'pi pi-desktop',
      description: 'Strategic alliances with leading technology companies and platform providers'
    }
  ];
}