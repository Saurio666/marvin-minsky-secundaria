import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EndpointComponent } from '../utils/endpoint.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  contentData: any;
  idContenido: any;

  constructor(private route: ActivatedRoute,
    private endpoint: EndpointComponent){}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => this.idContenido = params.get('id'));


    this.endpoint.obtenerPerfil(this.idContenido).subscribe(r =>
      this.contentData = r
    );
  }

}
