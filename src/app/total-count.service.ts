import { Injectable } from '@angular/core';
import { DoctorCountService } from './doctor-count.service';
import { PatientCountService } from './patient-count.service';
import { Doctor, Patient } from './hospital/hospital.component';

@Injectable({
  providedIn: 'root',
})
export class TotalCountService {
  constructor(
    private DoctorCountService: DoctorCountService,
    private PatientCountService: PatientCountService
  ) {}

  // COUNT NUMBER OF PATIENTS + DOCTORS IN THE HOSPITAL
  Total(doctorsArg: Doctor[], patientArg: Patient[]): number {
    const totalDoctors = this.DoctorCountService.countDoctors(doctorsArg);
    const totalPatients = this.PatientCountService.countPatients(patientArg);
    return totalDoctors + totalPatients;
  }
}
