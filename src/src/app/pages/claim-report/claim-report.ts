import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { StepsModule } from 'primeng/steps';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-claim-report',
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
    RadioButtonModule,
    CheckboxModule,
    StepsModule,
    DividerModule
  ],
  template: `
    <div class="claim-report-page">
      <div class="container">
        <!-- Header -->
        <div class="page-header">
          <h1>File a Roadside Assistance Claim</h1>
          <p>Please fill out this form to report your roadside assistance incident</p>
          <div class="emergency-notice">
            <i class="pi pi-exclamation-triangle"></i>
            <strong>Emergency?</strong> Call <strong>1-800-RESCUE-AI</strong> now
          </div>
        </div>

        <!-- Claim Form -->
        <div class="claim-form-container">
          <form [formGroup]="claimForm" (ngSubmit)="submitClaim()" class="claim-form">
            
            <!-- Incident Information -->
            <div class="form-section">
              <h2>Incident Information</h2>
              
              <div class="form-row">
                <div class="form-field">
                  <label for="incidentType">Type of Service Needed *</label>
                  <p-select 
                    id="incidentType"
                    formControlName="incidentType"
                    [options]="incidentTypes"
                    placeholder="Select service type"
                    class="w-full">
                  </p-select>
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-field">
                  <label for="incidentDescription">What happened? *</label>
                  <p-textarea 
                    id="incidentDescription"
                    formControlName="incidentDescription"
                    rows="3"
                    placeholder="Describe the incident and any relevant details"
                    class="w-full">
                  </p-textarea>
                </div>
              </div>

              <div class="form-row">
                <div class="form-field checkbox-field">
                  <p-checkbox inputId="isEmergency" formControlName="isEmergency" [binary]="true"></p-checkbox>
                  <label for="isEmergency">This is an emergency situation</label>
                </div>
              </div>
            </div>

            <!-- Vehicle Information -->
            <div class="form-section">
              <h2>Vehicle Information</h2>
              
              <div class="form-row">
                <div class="form-field">
                  <label for="vehicleYear">Year *</label>
                  <p-select 
                    id="vehicleYear"
                    formControlName="vehicleYear"
                    [options]="vehicleYears"
                    placeholder="Year"
                    class="w-full">
                  </p-select>
                </div>
                <div class="form-field">
                  <label for="vehicleMake">Make *</label>
                  <p-select 
                    id="vehicleMake"
                    formControlName="vehicleMake"
                    [options]="vehicleMakes"
                    placeholder="Make"
                    class="w-full">
                  </p-select>
                </div>
                <div class="form-field">
                  <label for="vehicleModel">Model *</label>
                  <input pInputText id="vehicleModel" formControlName="vehicleModel" placeholder="Model" class="w-full">
                </div>
              </div>

              <div class="form-row">
                <div class="form-field">
                  <label for="vehicleColor">Color *</label>
                  <input pInputText id="vehicleColor" formControlName="vehicleColor" placeholder="Color" class="w-full">
                </div>
                <div class="form-field">
                  <label for="licensePlate">License Plate *</label>
                  <input pInputText id="licensePlate" formControlName="licensePlate" placeholder="ABC-123" class="w-full">
                </div>
                <div class="form-field">
                  <label for="licensePlateState">State *</label>
                  <p-select 
                    id="licensePlateState"
                    formControlName="licensePlateState"
                    [options]="states"
                    placeholder="State"
                    class="w-full">
                  </p-select>
                </div>
              </div>
            </div>

            <!-- Location & Time -->
            <div class="form-section">
              <h2>When & Where</h2>
              
              <div class="form-row">
                <div class="form-field">
                  <label for="incidentDate">Date *</label>
                  <input pInputText id="incidentDate" formControlName="incidentDate" type="date" class="w-full">
                </div>
                <div class="form-field">
                  <label for="incidentTime">Time *</label>
                  <input pInputText id="incidentTime" formControlName="incidentTime" type="time" class="w-full">
                </div>
              </div>

              <div class="form-row">
                <div class="form-field full-width">
                  <label for="streetAddress">Street Address *</label>
                  <input pInputText id="streetAddress" formControlName="streetAddress" placeholder="123 Main St or nearest intersection" class="w-full">
                </div>
              </div>

              <div class="form-row">
                <div class="form-field">
                  <label for="city">City *</label>
                  <input pInputText id="city" formControlName="city" placeholder="City" class="w-full">
                </div>
                <div class="form-field">
                  <label for="state">State *</label>
                  <p-select 
                    id="state"
                    formControlName="state"
                    [options]="states"
                    placeholder="State"
                    class="w-full">
                  </p-select>
                </div>
                <div class="form-field">
                  <label for="zipCode">ZIP Code *</label>
                  <input pInputText id="zipCode" formControlName="zipCode" placeholder="12345" class="w-full">
                </div>
              </div>
            </div>

            <!-- Contact Information -->
            <div class="form-section">
              <h2>Contact Information</h2>
              
              <div class="form-row">
                <div class="form-field">
                  <label for="customerName">Full Name *</label>
                  <input pInputText id="customerName" formControlName="customerName" placeholder="John Smith" class="w-full">
                </div>
                <div class="form-field">
                  <label for="customerPhone">Phone Number *</label>
                  <input pInputText id="customerPhone" formControlName="customerPhone" type="tel" placeholder="(555) 123-4567" class="w-full">
                </div>
              </div>

              <div class="form-row">
                <div class="form-field">
                  <label for="customerEmail">Email Address *</label>
                  <input pInputText id="customerEmail" formControlName="customerEmail" type="email" placeholder="john@example.com" class="w-full">
                </div>
              </div>

              <div class="form-row">
                <div class="form-field">
                  <label for="specialInstructions">Special Instructions (Optional)</label>
                  <p-textarea 
                    id="specialInstructions"
                    formControlName="specialInstructions"
                    rows="2"
                    placeholder="Any special instructions for the technician"
                    class="w-full">
                  </p-textarea>
                </div>
              </div>
            </div>

            <!-- Agreement -->
            <div class="form-section">
              <div class="form-row">
                <div class="form-field checkbox-field">
                  <p-checkbox inputId="agreedToTerms" formControlName="agreedToTerms" [binary]="true"></p-checkbox>
                  <label for="agreedToTerms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a> *</label>
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="form-actions">
              <p-button 
                type="submit"
                label="Submit Claim" 
                icon="pi pi-send"
                size="large"
                [disabled]="!claimForm.valid"
                class="submit-btn">
              </p-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./claim-report.css']
})
export class ClaimReportComponent {
  claimForm: FormGroup;
  currentStep = 0;
  
  steps = [
    { label: 'Incident Details' },
    { label: 'Vehicle Information' },
    { label: 'Location & Time' },
    { label: 'Additional Details' },
    { label: 'Review & Submit' }
  ];

  incidentTypes = [
    { label: 'Battery Jump Start', value: 'battery' },
    { label: 'Tire Change/Flat Tire', value: 'tire' },
    { label: 'Lockout Service', value: 'lockout' },
    { label: 'Fuel Delivery', value: 'fuel' },
    { label: 'Towing Service', value: 'towing' },
    { label: 'Engine Trouble', value: 'engine' },
    { label: 'Accident', value: 'accident' },
    { label: 'Other', value: 'other' }
  ];

  vehicleYears = Array.from({ length: 30 }, (_, i) => ({
    label: (new Date().getFullYear() - i).toString(),
    value: new Date().getFullYear() - i
  }));

  vehicleMakes = [
    'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'BMW', 'Mercedes-Benz',
    'Audi', 'Volkswagen', 'Hyundai', 'Kia', 'Mazda', 'Subaru', 'Lexus',
    'Jeep', 'Ram', 'GMC', 'Cadillac', 'Infiniti', 'Acura', 'Other'
  ].map(make => ({ label: make, value: make.toLowerCase() }));

  states = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ].map(state => ({ label: state, value: state }));

  constructor(private fb: FormBuilder) {
    this.claimForm = this.fb.group({
      // Step 1: Incident Details
      incidentType: ['', Validators.required],
      incidentDescription: ['', Validators.required],
      isEmergency: [false],
      policeReportNumber: [''],
      
      // Step 2: Vehicle Information
      vehicleYear: ['', Validators.required],
      vehicleMake: ['', Validators.required],
      vehicleModel: ['', Validators.required],
      vehicleColor: ['', Validators.required],
      licensePlate: ['', Validators.required],
      licensePlateState: ['', Validators.required],
      vin: [''],
      
      // Step 3: Location & Time
      incidentDate: ['', Validators.required],
      incidentTime: ['', Validators.required],
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      nearbyLandmarks: [''],
      
      // Step 4: Additional Details
      customerName: ['', Validators.required],
      customerPhone: ['', Validators.required],
      customerEmail: ['', [Validators.required, Validators.email]],
      alternateContact: [''],
      specialInstructions: [''],
      hasPhotos: [false],
      agreedToTerms: [false, Validators.requiredTrue]
    });
  }

  nextStep() {
    if (this.isStepValid(this.currentStep)) {
      this.currentStep++;
      // Scroll to top of form
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.markStepFieldsAsTouched(this.currentStep);
    }
  }

  previousStep() {
    this.currentStep--;
    // Scroll to top of form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  isStepValid(step: number): boolean {
    switch (step) {
      case 0:
        return !!(this.claimForm.get('incidentType')?.valid && 
               this.claimForm.get('incidentDescription')?.valid);
      case 1:
        return !!(this.claimForm.get('vehicleYear')?.valid &&
               this.claimForm.get('vehicleMake')?.valid &&
               this.claimForm.get('vehicleModel')?.valid &&
               this.claimForm.get('vehicleColor')?.valid &&
               this.claimForm.get('licensePlate')?.valid &&
               this.claimForm.get('licensePlateState')?.valid);
      case 2:
        return !!(this.claimForm.get('incidentDate')?.valid &&
               this.claimForm.get('incidentTime')?.valid &&
               this.claimForm.get('streetAddress')?.valid &&
               this.claimForm.get('city')?.valid &&
               this.claimForm.get('state')?.valid &&
               this.claimForm.get('zipCode')?.valid);
      case 3:
        return !!(this.claimForm.get('customerName')?.valid &&
               this.claimForm.get('customerPhone')?.valid &&
               this.claimForm.get('customerEmail')?.valid &&
               this.claimForm.get('agreedToTerms')?.valid);
      default:
        return true;
    }
  }

  submitClaim() {
    if (this.claimForm.valid) {
      console.log('Claim submitted:', this.claimForm.value);
      // Handle claim submission here
      alert('Claim submitted successfully! You will receive a confirmation email shortly.');
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.claimForm.controls).forEach(key => {
        this.claimForm.get(key)?.markAsTouched();
      });
    }
  }

  get isLastStep(): boolean {
    return this.currentStep === this.steps.length - 1;
  }

  get isFirstStep(): boolean {
    return this.currentStep === 0;
  }

  markStepFieldsAsTouched(step: number) {
    const stepFields = this.getStepFields(step);
    stepFields.forEach(fieldName => {
      this.claimForm.get(fieldName)?.markAsTouched();
    });
  }

  getStepFields(step: number): string[] {
    switch (step) {
      case 0:
        return ['incidentType', 'incidentDescription'];
      case 1:
        return ['vehicleYear', 'vehicleMake', 'vehicleModel', 'vehicleColor', 'licensePlate', 'licensePlateState'];
      case 2:
        return ['incidentDate', 'incidentTime', 'streetAddress', 'city', 'state', 'zipCode'];
      case 3:
        return ['customerName', 'customerPhone', 'customerEmail', 'agreedToTerms'];
      default:
        return [];
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.claimForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getFieldError(fieldName: string): string {
    const field = this.claimForm.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors['required']) {
        return 'This field is required';
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
    }
    return '';
  }

  getStepValidationMessage(): string {
    if (this.isStepValid(this.currentStep)) {
      return '';
    }
    return 'Please fill in all required fields to continue';
  }
}
