import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    CardModule, 
    InputTextModule, 
    TextareaModule, 
    SelectModule,
    ButtonModule, 
    DividerModule
  ],
  template: `
    <div class="contact-page">
      <!-- Hero Section -->
      <section class="hero-section hero-background section-padding">
        <div class="container text-center">
          <h1 class="hero-title">
            Get in Touch
          </h1>
          <p class="hero-subtitle">
            Need help or have questions? We're here for you 24/7
          </p>
        </div>
      </section>

      <!-- Emergency Hotline -->
      <section class="emergency-section section-padding">
        <div class="container">
          <div class="emergency-card">
            <div class="emergency-content">
              <div class="emergency-icon">
                <i class="pi pi-phone"></i>
              </div>
              <div class="emergency-info">
                <h2>Emergency Hotline</h2>
                <p class="emergency-number">1-800-RESCUE-AI</p>
                <p class="emergency-subtitle">
                  Available 24/7 for immediate roadside assistance
                </p>
              </div>
              <div class="emergency-action">
                <p-button 
                  label="Call Now" 
                  icon="pi pi-phone"
                  size="large"
                  class="emergency-button">
                </p-button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Form & Info -->
      <section class="contact-section section-padding">
        <div class="container">
          <div class="contact-content">
            <!-- Contact Form -->
            <div class="contact-form-container">
              <p-card header="Send us a Message">
                <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
                  <div class="form-row">
                    <div class="form-field">
                      <label for="firstName">First Name *</label>
                      <input 
                        pInputText 
                        id="firstName" 
                        formControlName="firstName"
                        class="w-full">
                    </div>
                    <div class="form-field">
                      <label for="lastName">Last Name *</label>
                      <input 
                        pInputText 
                        id="lastName" 
                        formControlName="lastName"
                        class="w-full">
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-field">
                      <label for="email">Email Address *</label>
                      <input 
                        pInputText 
                        id="email" 
                        type="email"
                        formControlName="email"
                        class="w-full">
                    </div>
                    <div class="form-field">
                      <label for="phone">Phone Number</label>
                      <input 
                        pInputText 
                        id="phone" 
                        type="tel"
                        formControlName="phone"
                        class="w-full">
                    </div>
                  </div>

                  <div class="form-field">
                    <label for="subject">Subject *</label>
                    <p-select 
                      id="subject"
                      formControlName="subject"
                      [options]="subjectOptions"
                      optionLabel="label"
                      optionValue="value"
                      placeholder="Select a subject"
                      class="w-full">
                    </p-select>
                  </div>

                  <div class="form-field">
                    <label for="message">Message *</label>
                    <p-textarea 
                      id="message"
                      formControlName="message"
                      rows="5"
                      class="w-full"
                      placeholder="Tell us how we can help you...">
                    </p-textarea>
                  </div>

                  <div class="form-actions">
                    <p-button 
                      type="submit"
                      label="Send Message" 
                      icon="pi pi-send"
                      [disabled]="contactForm.invalid"
                      size="large"
                      class="submit-btn">
                    </p-button>
                  </div>
                </form>
              </p-card>
            </div>

            <!-- Contact Information -->
            <div class="contact-info">
              <div class="info-card">
                <h3>Contact Information</h3>
                <div class="contact-item">
                  <div class="contact-item-icon">
                    <i class="pi pi-phone"></i>
                  </div>
                  <div class="contact-item-content">
                    <h4>Emergency Hotline</h4>
                    <p>1-800-RESCUE-AI</p>
                    <small>24/7 Emergency Support</small>
                  </div>
                </div>

                <div class="contact-item">
                  <div class="contact-item-icon">
                    <i class="pi pi-envelope"></i>
                  </div>
                  <div class="contact-item-content">
                    <h4>Email Support</h4>
                    <p>support@roadrescueai.com</p>
                    <small>Response within 2 hours</small>
                  </div>
                </div>

                <div class="contact-item">
                  <div class="contact-item-icon">
                    <i class="pi pi-map-marker"></i>
                  </div>
                  <div class="contact-item-content">
                    <h4>Headquarters</h4>
                    <p>123 Innovation Drive<br>San Francisco, CA 94105</p>
                    <small>Mon-Fri 9AM-6PM PST</small>
                  </div>
                </div>

                <div class="contact-item">
                  <div class="contact-item-icon">
                    <i class="pi pi-comments"></i>
                  </div>
                  <div class="contact-item-content">
                    <h4>Live Chat</h4>
                    <p>Available on our website</p>
                    <small>Mon-Fri 8AM-8PM PST</small>
                  </div>
                </div>
              </div>

              <!-- FAQ Quick Links -->
              <div class="faq-links">
                <h4>Quick Help</h4>
                <div class="faq-list">
                  <a *ngFor="let faq of quickFaqs" href="#" class="faq-link">
                    <i class="pi pi-question-circle mr-2"></i>
                    {{ faq }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Service Areas -->
      <section class="service-areas-section section-padding">
        <div class="container">
          <div class="section-header text-center mb-5">
            <h2>Service Coverage Areas</h2>
            <p>We're rapidly expanding across major metropolitan areas</p>
          </div>
          
          <div class="service-areas-content">
            <div class="areas-map">
              <div class="map-container">
                <div class="map-placeholder">
                  <i class="pi pi-map map-icon"></i>
                  <p>Interactive Service Area Map</p>
                  <small>Currently serving 50+ cities nationwide</small>
                </div>
              </div>
            </div>
            
            <div class="areas-list">
              <h3>Current Service Areas</h3>
              <div class="areas-grid">
                <div *ngFor="let area of serviceAreas" class="area-item">
                  <div class="area-icon">
                    <i class="pi pi-map-marker"></i>
                  </div>
                  <div class="area-info">
                    <h4>{{ area.city }}</h4>
                    <p>{{ area.coverage }}</p>
                  </div>
                  <div class="area-status">
                    <span [class]="'status-badge status-' + area.status">{{ area.statusText }}</span>
                  </div>
                </div>
              </div>
              
              <div class="expansion-note">
                <p>
                  <i class="pi pi-info-circle mr-2"></i>
                  Don't see your area? We're expanding rapidly. 
                  <a href="#">Request service in your area</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Support Options -->
      <section class="support-section section-padding">
        <div class="container">
          <div class="section-header text-center mb-5">
            <h2>Multiple Ways to Get Help</h2>
            <p>Choose the support option that works best for you</p>
          </div>
          
          <div class="support-grid">
            <div *ngFor="let option of supportOptions" class="support-card">
              <div class="support-icon">
                <i [class]="option.icon"></i>
              </div>
              <h3>{{ option.title }}</h3>
              <p>{{ option.description }}</p>
              <div class="support-meta">
                <span class="availability">{{ option.availability }}</span>
                <span class="response-time">{{ option.responseTime }}</span>
              </div>
              <p-button 
                [label]="option.action" 
                [icon]="option.actionIcon"
                [severity]="option.primary ? 'primary' : 'secondary'"
                [outlined]="!option.primary"
                class="w-full">
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

    .emergency-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      padding: 3rem;
    }

    .emergency-content {
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 2rem;
      align-items: center;
    }

    .emergency-icon {
      font-size: 4rem;
      color: #ffffff;
    }

    .emergency-info h2 {
      color: #ffffff;
      margin-bottom: 0.5rem;
    }

    .emergency-number {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3rem;
    }

    .contact-form-container {
      max-width: none;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .form-field {
      display: flex;
      flex-direction: column;
      margin-bottom: 1.5rem;
    }

    .form-field label {
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: #ffffff;
    }

    .form-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 2rem;
    }

    .submit-btn {
      min-width: 200px;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .info-card {
      background: rgba(255, 255, 255, 0.05);
      padding: 2rem;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .info-card h3 {
      color: #ffffff;
      margin-bottom: 2rem;
      font-size: 1.5rem;
    }

    .contact-item {
      display: flex;
      align-items: flex-start;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .contact-item-icon {
      font-size: 1.5rem;
      color: #ffffff;
      width: 3rem;
      text-align: center;
      flex-shrink: 0;
    }

    .contact-item-content h4 {
      color: #ffffff;
      margin-bottom: 0.5rem;
    }

    .contact-item-content p {
      margin-bottom: 0.25rem;
    }

    .faq-links {
      background: rgba(255, 255, 255, 0.05);
      padding: 2rem;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .faq-links h4 {
      color: #ffffff;
      margin-bottom: 1.5rem;
    }

    .faq-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .faq-link {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      display: flex;
      align-items: center;
      padding: 0.5rem;
      border-radius: 6px;
    }

    .faq-link:hover {
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
    }

    .service-areas-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: start;
    }

    .map-container {
      position: sticky;
      top: 2rem;
    }

    .map-placeholder {
      background: rgba(255, 255, 255, 0.05);
      border: 1px dashed rgba(255, 255, 255, 0.3);
      border-radius: 12px;
      padding: 3rem 2rem;
      text-align: center;
      min-height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .map-icon {
      font-size: 4rem;
      color: #ffffff;
      margin-bottom: 1rem;
    }

    .areas-list h3 {
      color: #ffffff;
      margin-bottom: 2rem;
      font-size: 1.5rem;
    }

    .areas-grid {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .area-item {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      background: rgba(255, 255, 255, 0.05);
      padding: 1.5rem;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .area-icon {
      font-size: 1.5rem;
      color: #ffffff;
      width: 2.5rem;
      text-align: center;
      flex-shrink: 0;
    }

    .area-info {
      flex: 1;
    }

    .area-info h4 {
      color: #ffffff;
      margin-bottom: 0.25rem;
    }

    .status-badge {
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .status-active {
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
    }

    .status-expanding {
      background: rgba(255, 255, 255, 0.05);
      color: rgba(255, 255, 255, 0.8);
    }

    .expansion-note {
      background: rgba(255, 255, 255, 0.05);
      padding: 1.5rem;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .expansion-note a {
      text-decoration: none;
    }

    .support-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .support-card {
      background: rgba(255, 255, 255, 0.05);
      padding: 2.5rem;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .support-icon {
      font-size: 3.5rem;
      color: #ffffff;
      margin-bottom: 1rem;
    }

    .support-card h3 {
      color: #ffffff;
      margin-bottom: 0.5rem;
    }

    .support-meta {
      display: flex;
      justify-content: space-between;
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.7);
      padding: 1rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 6px;
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }
      
      .emergency-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 1.5rem;
      }
      
      .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .form-row {
        grid-template-columns: 1fr;
        gap: 0;
      }
      
      .service-areas-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .map-container {
        position: static;
      }
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;

  subjectOptions = [
    { label: 'General Inquiry', value: 'general' },
    { label: 'Technical Support', value: 'support' },
    { label: 'Billing Question', value: 'billing' },
    { label: 'Partnership Opportunity', value: 'partnership' },
    { label: 'Press Inquiry', value: 'press' },
    { label: 'Feedback/Suggestion', value: 'feedback' }
  ];

  quickFaqs = [
    'How quickly do you respond?',
    'What payment methods do you accept?',
    'Do you provide 24/7 service?',
    'How do I track my service request?',
    'What areas do you currently serve?'
  ];

  serviceAreas = [
    { city: 'San Francisco Bay Area', coverage: 'Full Coverage', status: 'active', statusText: 'Active' },
    { city: 'Los Angeles Metro', coverage: 'Full Coverage', status: 'active', statusText: 'Active' },
    { city: 'New York City Metro', coverage: 'Full Coverage', status: 'active', statusText: 'Active' },
    { city: 'Chicago Metro', coverage: 'Full Coverage', status: 'active', statusText: 'Active' },
    { city: 'Seattle Metro', coverage: 'Expanding', status: 'expanding', statusText: 'Expanding' },
    { city: 'Austin Metro', coverage: 'Expanding', status: 'expanding', statusText: 'Expanding' },
    { city: 'Denver Metro', coverage: 'Coming Soon', status: 'expanding', statusText: 'Coming Soon' },
    { city: 'Phoenix Metro', coverage: 'Coming Soon', status: 'expanding', statusText: 'Coming Soon' }
  ];

  supportOptions = [
    {
      icon: 'pi pi-phone',
      title: 'Emergency Hotline',
      description: 'Immediate assistance for roadside emergencies',
      availability: '24/7',
      responseTime: 'Immediate',
      action: 'Call Now',
      actionIcon: 'pi pi-phone',
      primary: true
    },
    {
      icon: 'pi pi-envelope',
      title: 'Email Support',
      description: 'Detailed support for non-emergency inquiries',
      availability: 'Mon-Fri',
      responseTime: '< 2 hours',
      action: 'Send Email',
      actionIcon: 'pi pi-send',
      primary: false
    },
    {
      icon: 'pi pi-comments',
      title: 'Live Chat',
      description: 'Real-time chat with our support team',
      availability: 'Daily 8AM-8PM',
      responseTime: '< 2 minutes',
      action: 'Start Chat',
      actionIcon: 'pi pi-comment',
      primary: false
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Handle form submission here
    }
  }
}