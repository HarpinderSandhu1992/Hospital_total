import { Injectable } from '@angular/core';
import { Patient } from './hospital/hospital.component';

@Injectable({
  providedIn: 'root'
})
export class PatientCountService {

  constructor() { }

  
  // COUNT NUMBER OF PATIENTS IN THE HOSPITAL
  countPatients(Patient: Patient[]): number {
    return Patient.length;
  }
}
