import { Component, OnInit } from '@angular/core';
import { EndpointComponent } from '../utils/endpoint.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generic-content',
  standalone: true,
  imports: [],
  templateUrl: './generic-content.component.html',
  styleUrl: './generic-content.component.css'
})
export class GenericContentComponent implements OnInit{
  contentData: any;
  idContenido: any;

  constructor(private route: ActivatedRoute,
    private endpoint: EndpointComponent){}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => this.idContenido = params.get('id'));


    this.endpoint.obtenerContenido(this.idContenido).subscribe(r =>
      this.contentData = r
    );
  }

}
