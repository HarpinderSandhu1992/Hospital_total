import { Component } from '@angular/core';
import { TotalCountService } from '../total-count.service';

export interface Doctor {
  name: string;
  specialization: string;
}

export interface Patient {
  name: string;
  illness: string;
}

@Component({
  selector: 'hospital',
  templateUrl: './hospital.component.html',
  styleUrl: './hospital.component.css',
})

export class HospitalComponent {
  hospitalDoctor: Doctor[] = [
    { name: 'Dr John Doe', specialization: 'General Physician' },
    { name: 'Dr Haryy Long', specialization: 'Dermatologist' },
  ];
  hospitalPatient: Patient [] = [
    { name: 'Tom Page', illness: 'broken leg'},
    { name: 'Andy James', illness: 'broken arm'}
  ];

  total: number = 0;

  constructor(private totalService: TotalCountService) {
    this.total = this.totalService.Total(this.hospitalDoctor, this.hospitalPatient);
  }
}
