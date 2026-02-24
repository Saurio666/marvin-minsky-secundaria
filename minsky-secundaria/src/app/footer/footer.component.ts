import { Component, OnInit } from '@angular/core';
import { ConstantsComponent } from '../utils/contants.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  currentYear: any;

  constructor(public constants : ConstantsComponent) {}

  ngOnInit(): void {    
    this.currentYear = new Date().getFullYear();
  }
}
