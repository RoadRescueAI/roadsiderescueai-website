import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-claim-report',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="claim-report-page">
      <div class="container">
        <div class="page-header">
          <h1 class="display-sm text-gray-900">File a Claim</h1>
          <p class="text-lg text-gray-600">start your claim below. All fields are required.</p>
          
          <div class="emergency-notice">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
            For emergency roadside assistance, call 098767678
          </div>
        </div>

        <div class="claim-form-container">
          <form [formGroup]="claimForm" class="claim-form" (ngSubmit)="onSubmit()">
            <div class="form-section">
              <h2 class="text-lg font-semibold text-gray-900">Claim Information</h2>
              
              <div class="form-row">
                <div class="form-field">
                  <label for="policyType" class="form-label">Policy Type *</label>
                  <select 
                    id="policyType" 
                    formControlName="policyType" 
                    class="form-input"
                    required>
                    <option value="">Select policy type</option>
                    <option *ngFor="let type of policyTypes" [value]="type.value">
                      {{ type.label }}
                    </option>
                  </select>
                  <div *ngIf="claimForm.get('policyType')?.invalid && claimForm.get('policyType')?.touched" 
                       class="form-error">
                    Please select a policy type.
                  </div>
                </div>
                
                <div class="form-field">
                  <label for="policyNumber" class="form-label">Policy Number *</label>
                  <input 
                    type="text" 
                    id="policyNumber" 
                    formControlName="policyNumber"
                    class="form-input"
                    placeholder="Enter your policy number"
                    required>
                  <div *ngIf="claimForm.get('policyNumber')?.invalid && claimForm.get('policyNumber')?.touched" 
                       class="form-error">
                    Policy number is required.
                  </div>
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-field">
                  <label for="firstName" class="form-label">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    formControlName="firstName"
                    class="form-input"
                    placeholder="Enter your first name"
                    required>
                  <div *ngIf="claimForm.get('firstName')?.invalid && claimForm.get('firstName')?.touched" 
                       class="form-error">
                    First name is required.
                  </div>
                </div>
                
                <div class="form-field">
                  <label for="lastName" class="form-label">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    formControlName="lastName"
                    class="form-input"
                    placeholder="Enter your last name"
                    required>
                  <div *ngIf="claimForm.get('lastName')?.invalid && claimForm.get('lastName')?.touched" 
                       class="form-error">
                    Last name is required.
                  </div>
                </div>
              </div>
            </div>

            <div class="form-actions">
              <button 
                type="submit" 
                class="btn btn-primary btn-lg"
                [disabled]="!claimForm.valid">
                Submit Claim
                <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>

        <div class="help-section">
          <h3 class="text-lg font-semibold text-gray-900">Need Help?</h3>
          <p class="text-md text-gray-600">If you need immediate assistance or have questions about filing your claim:</p>
          <ul class="help-list">
            <li>Call our 24/7 claims hotline: <strong>09678887655</strong></li>
            <li>Email us at <strong>claims@roadsiderescueai.com</strong></li>
            <li>Visit our help center for frequently asked questions</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./claim-report.css']
})
export class ClaimReportComponent {
  claimForm: FormGroup;
  
  policyTypes = [
    { label: 'Auto Insurance', value: 'auto' },
    { label: 'Motorcycle/ATV Insurance', value: 'cycle' }
  ];

  constructor(private fb: FormBuilder) {
    this.claimForm = this.fb.group({
      policyType: ['', Validators.required],
      policyNumber: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.claimForm.valid) {
      console.log('Claim form data:', this.claimForm.value);
      // Handle form submission here
      alert('Claim submitted successfully! We will contact you soon.');
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.claimForm.controls).forEach(key => {
        this.claimForm.get(key)?.markAsTouched();
      });
    }
  }
}
