import { Injectable } from '@angular/core';
import { Doctor } from './hospital/hospital.component';

@Injectable({
  providedIn: 'root'
})
export class DoctorCountService {

  constructor() { }

   // COUNT NUMBER OF DOCTORS IN THE HOSPITAL
   countDoctors(Doctor:Doctor[]): number {
    return Doctor.length;
  }
}
