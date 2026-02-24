import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, Renderer2 } from '@angular/core';
import { ConstantsComponent } from '../utils/contants.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  constructor(private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    public Constants: ConstantsComponent) {

  }

  ngAfterViewInit(): void {
    const script = this.renderer.createElement('script');
    script.src = 'assets/js2/main.js'; // asegúrate que esta sea la ruta correcta
    script.onload = () => {
    };
    this.renderer.appendChild(this.document.body, script);
  }
}
