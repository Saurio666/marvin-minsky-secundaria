import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, Renderer2 } from '@angular/core';
import { ConstantsComponent } from '../utils/contants.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  constructor(private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    public constants: ConstantsComponent) {

  }

  ngAfterViewInit(): void {
    const script = this.renderer.createElement('script');
    script.src = 'assets/js/main.js'; // asegúrate que esta sea la ruta correcta
    script.onload = () => {
    };
    this.renderer.appendChild(this.document.body, script);
  }
}
